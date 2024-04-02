import tensorflow as tf
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer

print(tf.__version__)

# Load the dataset
url = "https://raw.githubusercontent.com/loganray48/Personal-Portfolio/main/SalaryData/salarydata.csv"
df = pd.read_csv(url)

# Data cleaning
df.dropna(inplace=True)
df['Education Level'] = df['Education Level'].replace({
    "master's": "Master's Degree",
    "bachelor's": "Bachelor's Degree",
    "phd": "PhD"
}, regex=True).fillna("Unknown")

# Define features and target
y = df['Salary'].values
X = df.drop(['Salary'], axis=1)

# Define categorical and numerical features
categorical_features = ['Gender', 'Education Level', 'Job Title']
numerical_features = X.columns.drop(categorical_features)

# Preprocessing for numerical data: normalization
numeric_transformer = StandardScaler()

# Preprocessing for categorical data: one-hot encoding
categorical_transformer = OneHotEncoder(sparse=False, handle_unknown='ignore')

# Combine preprocessing
preprocessor = ColumnTransformer(
    transformers=[
        ('num', numeric_transformer, numerical_features),
        ('cat', categorical_transformer, categorical_features)])

X_processed = preprocessor.fit_transform(X)

# Split the data
X_train, X_test, y_train, y_test = train_test_split(X_processed, y, test_size=0.2, random_state=42)

# Build the TensorFlow model
model = tf.keras.Sequential([
    tf.keras.layers.Dense(64, activation='relu', input_shape=[X_train.shape[1]]),
    tf.keras.layers.Dense(32, activation='relu'),
    tf.keras.layers.Dense(1)
])

# Compile the model
model.compile(optimizer='adam', loss='mean_squared_error', metrics=['mae', 'mse'])

# Train the model
model.fit(X_train, y_train, epochs=100, validation_split=0.2, verbose=0)

# Save the model
tf.saved_model.save(model, './salary_prediction_model')

# Use the model to make predictions
predictions = model.predict(X_test)
print(predictions[:10])  # Print the first 10 predictions
