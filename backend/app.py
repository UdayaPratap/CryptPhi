from flask import Flask, jsonify
from flask_cors import CORS
import yfinance as yf

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

@app.route('/api/bitcoin', methods=['GET'])
def get_bitcoin_data():
    # Fetch live data for Bitcoin from Yahoo Finance
    btc = yf.Ticker("BTC-USD")
    btc_data = btc.history(period='1m')  # Fetch data for the last minute

    # Check if btc_data has at least one row
    if len(btc_data) >= 1:
        # Extract the required data (e.g., last price, market cap)
        last_price = btc_data['Close'].iloc[-1]
        market_cap = last_price * btc.info['circulatingSupply']
    else:
        last_price = None
        market_cap = None

    bitcoin_data = {
        "lastPrice": last_price,
        "percentageChange": None,  # Can't calculate percentage change as there's no previous data point
        "marketCap": market_cap
    }

    return jsonify(bitcoin_data)

@app.route('/api/eth', methods=['GET'])
def get_eth_data():
    # Fetch live data for Bitcoin from Yahoo Finance
    eth = yf.Ticker("ETH-USD")
    eth_data = eth.history(period='1m')  # Fetch data for the last minute

    # Check if btc_data has at least one row
    if len(eth_data) >= 1:
        # Extract the required data (e.g., last price, market cap)
        last_price = eth_data['Close'].iloc[-1]
        market_cap = last_price * eth.info['circulatingSupply']
    else:
        last_price = None
        market_cap = None

    eth_data = {
        "lastPrice": last_price,
        "percentageChange": None,  # Can't calculate percentage change as there's no previous data point
        "marketCap": market_cap
    }

    return jsonify(eth_data)

if __name__ == '__main__':
    app.run(debug=True)
