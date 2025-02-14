const apiKey = "iMtR0csGltCxENghPlFxUD3NX918oongG2YHS2PD";
const startDate = "2025-02-01";
const endDate = "2025-02-07";
const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${apiKey}`;

fetch(url)
  .then(response => {
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
