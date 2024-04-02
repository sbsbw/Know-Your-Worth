import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, f1_score
from time import time
from sklearn.pipeline import Pipeline
from joblib import dump

url = "https://raw.githubusercontent.com/loganray48/Personal-Portfolio/main/SalaryData/salarydata.csv"

df = pd.read_csv(url)


#Cleaning Data

# Drop rows with NaN values
df.dropna(inplace=True)
# Data cleaning
df['Education Level'] = df['Education Level'].replace({
    "master's": "Master's Degree",
    "bachelor's": "Bachelor's Degree",
    "phd": "PhD"
}, regex=True).fillna("Unknown")



# Define X and y
y = df['Salary']
X = df.drop(['Salary'], axis=1)

# Define categorical and numerical features
categorical_features = ['Gender', 'Education Level', 'Job Title']
numerical_features = X.columns.drop(categorical_features)

# Create the preprocessing pipelines
numeric_transformer = Pipeline(steps=[('scaler', StandardScaler())])
categorical_transformer = Pipeline(steps=[('onehot', OneHotEncoder(handle_unknown='ignore'))])

# Combine preprocessing steps
preprocessor = ColumnTransformer(
    transformers=[
        ('num', numeric_transformer, numerical_features),
        ('cat', categorical_transformer, categorical_features)])


# Split the data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.34, random_state=76)

# Initialize the RandomForestClassifier
rf_classifier = RandomForestClassifier()

# Create a pipeline that combines the preprocessor with the RandomForestClassifier
clf_pipeline = Pipeline(steps=[('preprocessor', preprocessor),
                               ('classifier', rf_classifier)])

# Fit the complete pipeline
clf_pipeline.fit(X_train, y_train)

# Make predictions
y_pred = clf_pipeline.predict(X_test)

# Print the results
print("RandomForestClassifier")
print("Accuracy:", accuracy_score(y_test, y_pred))
print("F1 Score:", f1_score(y_test, y_pred, average='weighted'))  # Specify the averaging method

# Export the RandomForestClassifier model
# Exporting the model allows you to save the trained model to a file, making it 
# possible to load and use the model later without retraining. This is crucial for 
# deploying your model in production environments.
dump(clf_pipeline, 'random_forest_classifier_model.joblib')
print("Random Forest Classifier model exported successfully.")

