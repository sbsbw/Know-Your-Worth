import sys
import json
from joblib import load

# Load the model
model = load('random_forest_classifier_model.joblib')

# Parse the input data
input_data = json.loads(sys.argv[1])

# Assuming input_data is a dictionary with keys matching your model's feature names
# You may need to process this data to match the input format of your model

# Example: Convert input_data to DataFrame (Ensure order and column names match training data)
import pandas as pd
df = pd.DataFrame([input_data])

# Predict
prediction = model.predict(df)

# Output the prediction
print(prediction[0])


def make_prediction(input_data):
    # Assuming input_data is already formatted as required by your model
    prediction = model.predict([input_data])
    return prediction[0]


if __name__ == '__main__':
    # Convert the string argument to a Python dict
    input_data = json.loads(sys.argv[1])
    
    # Call your make_prediction function or directly use the model here
    prediction = make_prediction(input_data)
    
    print(prediction)


{
  "Age": 30,
  "Gender": "Male",
  "Education Level": "Master's Degree",
  "Job Title": "Software Engineer",
  "Years of Experience": 5
}