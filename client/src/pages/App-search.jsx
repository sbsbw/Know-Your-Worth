import React, { useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import '../styles/App.css';
import '../styles/App1.css';

const SearchResultsPage = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [analysisResult, setAnalysisResult] = useState('');
  let chartInstance = null;

  const searchByJobTitle = () => {
    if (!jobTitle) {
      setAnalysisResult('Please enter a job title.');
      return;
    }

    axios.get('http://localhost:3000/api/jobs/')
      .then(response => {
        const searchJobTitle = jobTitle.toLowerCase();
        const individuals = response.data.filter(individual => individual['Job Title'] && individual['Job Title'].toLowerCase() === searchJobTitle);

        if (individuals.length > 0) {
          const salaries = individuals.map(individual => parseInt(individual.Salary));
          salaries.sort((a, b) => a - b);
          const percentilesData = calculatePercentiles(salaries);
          displayAnalysisResults(jobTitle, salaries, percentilesData);
          drawOrUpdateChart(percentilesData);
        } else {
          setAnalysisResult(`No individuals found with job title "${jobTitle}"`);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const calculatePercentiles = (salaries) => {
    const percentiles = [10, 25, 50, 75, 90].map(percentile => {
      const index = Math.ceil((percentile / 100) * salaries.length) - 1;
      return salaries[index];
    });
    return percentiles;
  };

  const displayAnalysisResults = (jobTitle, salaries, percentilesData) => {
    const analysisContainer = document.getElementById('analysisContainer');
    const minSalary = Math.min(...salaries);
    const maxSalary = Math.max(...salaries);
    const meanSalary = salaries.reduce((sum, salary) => sum + salary, 0) / salaries.length;

    analysisContainer.innerHTML = `
      <p><strong>Minimum Salary:</strong> $${minSalary}</p>
      <p><strong>Maximum Salary:</strong> $${maxSalary}</p>
      <p><strong>Mean Salary:</strong> $${meanSalary.toFixed(2)}</p>
      <p><strong>Percentiles:</strong></p>
      <ul>
        ${percentilesData.map((percentile, index) => `<li>${[10, 25, 50, 75, 90][index]}th percentile: $${percentile}</li>`).join('')}
      </ul>
    `;
  };

  const drawOrUpdateChart = (percentilesData) => {
    const percentilesChartCanvas = document.getElementById('percentilesChart').getContext('2d');
    if (!chartInstance) {
      chartInstance = new Chart(percentilesChartCanvas, {
        type: 'bar',
        data: {
          labels: ['10th', '25th', '50th', '75th', '90th'],
          datasets: [{
            label: 'Percentiles',
            data: percentilesData,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true // Ensure y-axis starts at zero
            }
          }
        }
      });
    } else {
      chartInstance.data.datasets[0].data = percentilesData;
      chartInstance.update();
    }
  };

  return (
    <div>
      <h2>Data Analysis</h2>
      <label htmlFor="jobTitleInput">Enter Job Title:</label>
      <input type="text" id="jobTitleInput" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
      <button onClick={searchByJobTitle}>Search</button>
      <div id="analysisContainer">{analysisResult}</div>
      <canvas id="percentilesChart" width="200" height="100"></canvas>
    </div>
  );
};

export default SearchResultsPage;