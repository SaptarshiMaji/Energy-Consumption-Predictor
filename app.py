from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import pandas as pd
from sklearn.linear_model import LinearRegression

app = Flask(__name__)
CORS(app)

data = pd.read_csv("Energy_consumption.csv")
X = data[['Temperature', 'Humidity']]
y = data['Energy_Consumption']
model = LinearRegression()
model.fit(X, y)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    content = request.get_json()
    temp = float(content['temperature'])
    humidity = float(content['humidity'])
    prediction = model.predict([[temp, humidity]])[0]
    return jsonify({'prediction': prediction})

if __name__ == '__main__':
    app.run(debug=True, port=5000)