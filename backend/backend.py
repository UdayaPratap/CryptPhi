from flask import Flask, jsonify
from flask_cors import CORS
import yfinance as yf

app = Flask(__name__)
CORS(app)

def get_data(ticker):
    coin = yf.Ticker(ticker)
    data = coin.history(period='1d')
    if len(data) >= 1:
        last_price = data['Close'].iloc[-1]
        market_cap = last_price * coin.info['circulatingSupply']
        open_price = data['Open'].iloc[-1]
        percentage_change = ((last_price - open_price) / open_price) * 100
    else:
        last_price = None
        market_cap = None
        open_price = None
        percentage_change = None
    coin_data = {
        "lastPrice": last_price,
        "percentageChange": percentage_change,
        "marketCap": market_cap,
        "openPrice": open_price
    }
    return jsonify(coin_data)

@app.route('/api/bitcoin', methods=['GET'])
def btc():
    return get_data("BTC-USD")

@app.route('/api/eth', methods=['GET'])
def eth():
    return get_data("ETH-USD")

@app.route('/api/tether', methods=['GET'])
def usdt():
    return get_data("USDT-USD")

@app.route('/api/solana', methods=['GET'])
def sol():
    return get_data("SOL-USD")

@app.route('/api/cardano', methods=['GET'])
def ada():
    return get_data("ADA-USD")

@app.route('/api/avalanche', methods=['GET'])
def avax():
    return get_data("AVAX-USD")

if __name__ == '__main__':
    app.run(debug=True)