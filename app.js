document.getElementById("prediction-form").addEventListener("submit", async function(event) {
  event.preventDefault();

  const temperature = document.getElementById("temperature").value;
  const humidity = document.getElementById("humidity").value;

  document.getElementById("prediction-value").textContent = "Predicting...";

  try {
    const response = await fetch("/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ temperature, humidity })
    });

    const data = await response.json();

    if (data && data.prediction !== undefined) {
      document.getElementById("prediction-value").textContent = `${data.prediction.toFixed(2)} kWh`;
    } else {
      document.getElementById("prediction-value").textContent = "Prediction failed.";
    }
  } catch (error) {
    console.error("Error fetching prediction:", error);
    document.getElementById("prediction-value").textContent = "Server error.";
  }
});
