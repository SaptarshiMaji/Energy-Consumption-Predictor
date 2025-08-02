# ⚡ Energy Consumption Predictor

A machine learning web app to predict energy consumption (in kWh) based on environmental features using **Python**, **Flask**, and **scikit-learn**.

## 🚀 Features

- Predicts energy usage based on:
  - 🌡️ Temperature (°C)
  - 💧 Humidity (%)
  - 🌬️ Wind Speed (km/h)
  - 👁️ Visibility (km)
  - ❄️ Dew Point (°C)
  - ☀️ Solar Radiation (W/m²)
- Linear Regression model
- Simple and clean web interface
- Lightweight Flask backend


## 🧠 Tech Stack

- **Backend**: Python, Flask
- **ML Model**: scikit-learn
- **Frontend**: HTML5, CSS3
- **Data Handling**: pandas, numpy


## 🗂️ Project Structure

energy-consumption-predictor/
├── app.py                # Flask application
├── train\_model.py        # ML training script
├── model.pkl             # Trained model
├── requirements.txt      # Python dependencies
├── templates/
│   └── index.html        # Frontend HTML
└── static/
└── style.css         # Web styling

````


## 🛠️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/energy-consumption-predictor.git
cd energy-consumption-predictor
````

### 2. Install required packages

```bash
pip install -r requirements.txt
```

### 3. Train the machine learning model

```bash
python train_model.py
```

### 4. Run the Flask web app

```bash
python app.py
```

Visit [http://127.0.0.1:5000](http://127.0.0.1:5000) in your browser to use the app.


## 📷 Screenshot


<img width="767" height="716" alt="image" src="https://github.com/user-attachments/assets/efa6213a-92f1-4ef2-9842-466e74fc029e" />







