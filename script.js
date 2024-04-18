function updateBitcoinData() {
    // Make a GET request to your Flask backend endpoint
    fetch('http://127.0.0.1:5000/api/btc')

        .then(response => response.json())
        .then(data => {
            // Update HTML elements with live data from the backend
            document.getElementById('btc-price').textContent = '$' + data.lastPrice.toFixed(2);
            var btcChangeElement = document.getElementById('btc-change');
            btcChangeElement.textContent = data.percentageChange.toFixed(2) + '%';
            // Change color to red if the change is negative
            if (data.percentageChange < 0) {
                btcChangeElement.style.color = 'red';
            }
            document.getElementById('btc-market-cap').textContent = '$' + Number(data.marketCap.toFixed(2)).toLocaleString('en-US');
            document.getElementById('btcmain').textContent = '$' + data.lastPrice.toFixed(2);
            document.getElementById('btcopen').textContent = '$' + data.openPrice.toFixed(2);
            var btcDelta = document.getElementById('btcdelta');
            btcDelta.textContent = data.percentageChange.toFixed(2) + '%';
            if (data.percentageChange < 0) {
                btcDelta.style.color = 'red';
            }else{
                btcDelta.style.color='green';
            }
        })
        .catch(error => console.error('Error fetching btc data:', error));
}

function updateEthereumData() {
    // Make a GET request to your Flask backend endpoint
    fetch('http://127.0.0.1:5000/api/eth')

        .then(response => response.json())
        .then(data => {
            // Update HTML elements with live data from the backend
            document.getElementById('eth-price').textContent = '$' + data.lastPrice.toFixed(2);
            var ethChangeElement = document.getElementById('eth-change');
            ethChangeElement.textContent = data.percentageChange.toFixed(2) + '%';
            // Change color to red if the change is negative
            if (data.percentageChange < 0) {
                ethChangeElement.style.color = 'red';
            }
            document.getElementById('eth-market-cap').textContent = '$' + Number(data.marketCap.toFixed(2)).toLocaleString('en-US');
            document.getElementById('ethmain').textContent = '$' + data.lastPrice.toFixed(2);
            document.getElementById('ethopen').textContent = '$' + data.openPrice.toFixed(2);
            var ethDelta = document.getElementById('ethdelta');
            ethDelta.textContent = data.percentageChange.toFixed(2) + '%';
            if (data.percentageChange < 0) {
                ethDelta.style.color = 'red';
            }else{
                ethDelta.style.color='green';
            }
        })
        .catch(error => console.error('Error fetching ETH data:', error));
}

function updateTetherData() {
    // Make a GET request to your Flask backend endpoint
    fetch('http://127.0.0.1:5000/api/teth')

        .then(response => response.json())
        .then(data => {
            // Update HTML elements with live data from the backend
            document.getElementById('teth-price').textContent = '$' + data.lastPrice.toFixed(2);
            var tethChangeElement = document.getElementById('teth-change');
            tethChangeElement.textContent = data.percentageChange.toFixed(2) + '%';
            // Change color to red if the change is negative
            if (data.percentageChange < 0) {
                tethChangeElement.style.color = 'red';
            }
            document.getElementById('teth-market-cap').textContent = '$' + Number(data.marketCap.toFixed(2)).toLocaleString('en-US');
            document.getElementById('tethmain').textContent = '$' + data.lastPrice.toFixed(2);
            document.getElementById('tethopen').textContent = '$' + data.openPrice.toFixed(2);
            var tethDelta = document.getElementById('tethdelta');
            tethDelta.textContent = data.percentageChange.toFixed(2) + '%';
            if (data.percentageChange < 0) {
                tethDelta.style.color = 'red';
            }else{
                tethDelta.style.color='green';
            }
        })
        .catch(error => console.error('Error fetching TETH data:', error));
}


function updateBNBData() {
    // Make a GET request to your Flask backend endpoint
    fetch('http://127.0.0.1:5000/api/bnb')

        .then(response => response.json())
        .then(data => {
            // Update HTML elements with live data from the backend
            document.getElementById('bnb-price').textContent = '$' + data.lastPrice.toFixed(2);
            var bnbChangeElement = document.getElementById('bnb-change');
            bnbChangeElement.textContent = data.percentageChange.toFixed(2) + '%';
            // Change color to red if the change is negative
            if (data.percentageChange < 0) {
                bnbChangeElement.style.color = 'red';
            }
            document.getElementById('bnb-market-cap').textContent = '$' + Number(data.marketCap.toFixed(2)).toLocaleString('en-US');
            document.getElementById('bnbmain').textContent = '$' + data.lastPrice.toFixed(2);
            document.getElementById('bnbopen').textContent = '$' + data.openPrice.toFixed(2);
            var bnbDelta = document.getElementById('bnbdelta');
            bnbDelta.textContent = data.percentageChange.toFixed(2) + '%';
            if (data.percentageChange < 0) {
                bnbDelta.style.color = 'red';
            }else{
                bnbDelta.style.color='green';
            }
        })
        .catch(error => console.error('Error fetching BNB data:', error));
}

function updateSolanaData() {
    // Make a GET request to your Flask backend endpoint
    fetch('http://127.0.0.1:5000/api/sol')

        .then(response => response.json())
        .then(data => {
            // Update HTML elements with live data from the backend
            document.getElementById('sol-price').textContent = '$' + data.lastPrice.toFixed(2);
            var solChangeElement = document.getElementById('sol-change');
            solChangeElement.textContent = data.percentageChange.toFixed(2) + '%';
            // Change color to red if the change is negative
            if (data.percentageChange < 0) {
                solChangeElement.style.color = 'red';
            }
            document.getElementById('sol-market-cap').textContent = '$' + Number(data.marketCap.toFixed(2)).toLocaleString('en-US');
            // document.getElementById('solmain').textContent = '$' + data.lastPrice.toFixed(2);
            // document.getElementById('solopen').textContent = '$' + data.openPrice.toFixed(2);
            // var solDelta = document.getElementById('soldelta');
            // solDelta.textContent = data.percentageChange.toFixed(2) + '%';
            // if (data.percentageChange < 0) {
            //     solDelta.style.color = 'red';
            // }else{
            //     solDelta.style.color='green';
            // }
        })
        .catch(error => console.error('Error fetching SOL data:', error));
}

function updateLitecoinData() {
    // Make a GET request to your Flask backend endpoint
    fetch('http://127.0.0.1:5000/api/ltc')

        .then(response => response.json())
        .then(data => {
            // Update HTML elements with live data from the backend
            document.getElementById('ltc-price').textContent = '$' + data.lastPrice.toFixed(2);
            var ltcChangeElement = document.getElementById('ltc-change');
            ltcChangeElement.textContent = data.percentageChange.toFixed(2) + '%';
            // Change color to red if the change is negative
            if (data.percentageChange < 0) {
                ltcChangeElement.style.color = 'red';
            }
            document.getElementById('ltc-market-cap').textContent = '$' + Number(data.marketCap.toFixed(2)).toLocaleString('en-US');
            // document.getElementById('ltcmain').textContent = '$' + data.lastPrice.toFixed(2);
            // document.getElementById('ltcopen').textContent = '$' + data.openPrice.toFixed(2);
            // var ltcDelta = document.getElementById('ltcdelta');
            // ltcDelta.textContent = data.percentageChange.toFixed(2) + '%';
            // if (data.percentageChange < 0) {
            //     ltcDelta.style.color = 'red';
            // }else{
            //     ltcDelta.style.color='green';
            // }
        })
        .catch(error => console.error('Error fetching LTC data:', error));
}

function updateCardanoData() {
    // Make a GET request to your Flask backend endpoint
    fetch('http://127.0.0.1:5000/api/ada')

        .then(response => response.json())
        .then(data => {
            // Update HTML elements with live data from the backend
            document.getElementById('ada-price').textContent = '$' + data.lastPrice.toFixed(2);
            var adaChangeElement = document.getElementById('ada-change');
            adaChangeElement.textContent = data.percentageChange.toFixed(2) + '%';
            // Change color to red if the change is negative
            if (data.percentageChange < 0) {
                adaChangeElement.style.color = 'red';
            }
            document.getElementById('ada-market-cap').textContent = '$' + Number(data.marketCap.toFixed(2)).toLocaleString('en-US');
            // document.getElementById('adamain').textContent = '$' + data.lastPrice.toFixed(2);
            // document.getElementById('adaopen').textContent = '$' + data.openPrice.toFixed(2);
            // var adaDelta = document.getElementById('adadelta');
            // adaDelta.textContent = data.percentageChange.toFixed(2) + '%';
            // if (data.percentageChange < 0) {
            //     adaDelta.style.color = 'red';
            // }else{
            //     adaDelta.style.color='green';
            // }
        })
        .catch(error => console.error('Error fetching ADA data:', error));
}

function updateAvalancheData() {
    // Make a GET request to your Flask backend endpoint
    fetch('http://127.0.0.1:5000/api/avax')

        .then(response => response.json())
        .then(data => {
            // Update HTML elements with live data from the backend
            document.getElementById('avax-price').textContent = '$' + data.lastPrice.toFixed(2);
            var avaxChangeElement = document.getElementById('avax-change');
            avaxChangeElement.textContent = data.percentageChange.toFixed(2) + '%';
            // Change color to red if the change is negative
            if (data.percentageChange < 0) {
                avaxChangeElement.style.color = 'red';
            }
            document.getElementById('avax-market-cap').textContent = '$' + Number(data.marketCap.toFixed(2)).toLocaleString('en-US');
            // document.getElementById('avaxmain').textContent = '$' + data.lastPrice.toFixed(2);
            // document.getElementById('avaxopen').textContent = '$' + data.openPrice.toFixed(2);
            // var avaxDelta = document.getElementById('avaxdelta');
            // avaxDelta.textContent = data.percentageChange.toFixed(2) + '%';
            // if (data.percentageChange < 0) {
            //     avaxDelta.style.color = 'red';
            // }else{
            //     avaxDelta.style.color='green';
            // }
        })
        .catch(error => console.error('Error fetching AVAX data:', error));
}


// Call the updateBitcoinData function to initially populate the data
updateBitcoinData();
updateEthereumData();
updateTetherData();
updateBNBData();
updateSolanaData();
updateLitecoinData();
updateCardanoData();
updateAvalancheData();
// Example of updating data every 30 seconds (adjust as needed)
setInterval(updateBitcoinData, 30000);  // Update data every 30 seconds
setInterval(updateEthereumData, 30000); 
setInterval(updateTetherData, 30000); 
setInterval(updateBNBData(), 30000); 
setInterval(updateSolanaData(), 30000);
setInterval(updateLitecoinData(), 30000);
setInterval(updateCardanoData(), 30000);
setInterval(updateAvalancheData() , 30000);
