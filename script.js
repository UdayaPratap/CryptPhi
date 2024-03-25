// Function to update Bitcoin data dynamically
function updateBitcoinData() {
    // Make a GET request to your Flask backend endpoint
    fetch('http://127.0.0.1:5000/api/bitcoin')

        .then(response => response.json())
        .then(data => {
            // Update HTML elements with live data from the backend
            document.getElementById('bitcoin-price').textContent = '$' + data.lastPrice.toFixed(2);
            document.getElementById('bitcoin-change').textContent = data.percentageChange + '%';
            document.getElementById('bitcoin-market-cap').textContent = '$' + data.marketCap.toFixed(2);
        })
        .catch(error => console.error('Error fetching Bitcoin data:', error));
}
function updateEthereumData() {
    // Make a GET request to your Flask backend endpoint
    fetch('http://127.0.0.1:5000/api/eth')

        .then(response => response.json())
        .then(data => {
            // Update HTML elements with live data from the backend
            document.getElementById('eth-price').textContent = '$' + data.lastPrice.toFixed(2);
            document.getElementById('eth-change').textContent = data.percentageChange + '%';
            document.getElementById('eth-market-cap').textContent = '$' + data.marketCap.toFixed(2);
        })
        .catch(error => console.error('Error fetching ETH data:', error));
}
// Call the updateBitcoinData function to initially populate the data
updateBitcoinData();
updateEthereumData();
// Example of updating data every 30 seconds (adjust as needed)
setInterval(updateBitcoinData, 30000);  // Update data every 30 seconds
setInterval(updateEthereumData, 30000); 