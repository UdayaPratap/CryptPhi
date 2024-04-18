from flask import Flask, jsonify
from flask_cors import CORS
import yfinance as yf

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

@app.route('/api/bitcoin', methods=['GET'])
def get_bitcoin_data():
    # Fetch live data for Bitcoin from Yahoo Finance
    btc = yf.Ticker("BTC-USD")
    btc_data = btc.history(period='1d')  # Fetch data 

    # Check if btc_data has at least one row
    if len(btc_data) >= 1:
        # Extract the required data (e.g., last price, market cap)
        last_price = btc_data['Close'].iloc[-1]
        market_cap = last_price * btc.info['circulatingSupply']
        open_price = btc_data['Open'].iloc[-1]
        percentage_change = ((last_price - open_price) / open_price) * 100
    else:
        last_price = None
        market_cap = None
        open_price = None

    bitcoin_data = {
        "lastPrice": last_price,
        "percentageChange": percentage_change,  # Can't calculate percentage change as there's no previous data point
        "marketCap": market_cap,
        "openPrice": open_price
    }

    return jsonify(bitcoin_data)

@app.route('/api/eth', methods=['GET'])
def get_eth_data():
    # Fetch live data for Bitcoin from Yahoo Finance
    eth = yf.Ticker("ETH-USD")
    eth_data = eth.history(period='1d')  # Fetch data for the last minute
    # Check if btc_data has at least one row
    if len(eth_data) >= 1:
        # Extract the required data (e.g., last price, market cap)
        last_price = eth_data['Close'].iloc[-1]
        market_cap = last_price * eth.info['circulatingSupply']
        open_price = eth_data['Open'].iloc[-1]
        percentage_change = ((last_price - open_price) / open_price) * 100
    else:
        last_price = 1
        market_cap = 1
        percentage_change = 1

    eth_data = {
        "lastPrice": last_price,
        "percentageChange": percentage_change, 
        "marketCap": market_cap,
        "openPrice": open_price
    }
    return jsonify(eth_data)

@app.route('/api/tether', methods=['GET'])
def get_tether_data():
    # Fetch live data for Tether from Yahoo Finance
    usdt = yf.Ticker("USDT-USD")
    usdt_data = usdt.history(period='1m')  # Fetch data for the last minute

    # Check if usdt_data has at least one row
    if len(usdt_data) >= 1:
        # Extract the required data (e.g., last price, market cap)
        last_price = usdt_data['Close'].iloc[-1]
        market_cap = last_price * usdt.info['circulatingSupply']
        open_price = tether_data['Open'].iloc[-1]
        percentage_change = ((last_price - open_price) / open_price) * 100
    else:
        last_price = None
        market_cap = None
        percentage_change = None

    tether_data = {
        "lastPrice": last_price,
        "percentageChange": percentage_change, 
        "marketCap": market_cap
    }

    return jsonify(tether_data)

@app.route('/api/bnb', methods=['GET'])
def get_bnb_data():
    # Fetch live data for Binance Coin from Yahoo Finance
    bnb = yf.Ticker("BNB-USD")
    bnb_data = bnb.history(period='1d')  # Fetch data for the last minute

    # Check if bnb_data has at least one row
    if len(bnb_data) >= 1:
        # Extract the required data (e.g., last price, market cap)
        last_price = bnb_data['Close'].iloc[-1]
        market_cap = last_price * bnb.info['circulatingSupply']
        open_price = bnb_data['Open'].iloc[-1]
        percentage_change = ((last_price - open_price) / open_price) * 100
    else:
        last_price = None
        market_cap = None
        percentage_change = None

    bnb_data = {
        "lastPrice": last_price,
        "percentageChange": percentage_change,  
        "marketCap": market_cap
    }

    return jsonify(bnb_data)

@app.route('/api/solana', methods=['GET'])
def get_solana_data():
    # Fetch live data for Solana from Yahoo Finance
    sol = yf.Ticker("SOL-USD")
    sol_data = sol.history(period='1d')  # Fetch data for the last minute

    # Check if sol_data has at least one row
    if len(sol_data) >= 1:
        # Extract the required data (e.g., last price, market cap)
        last_price = sol_data['Close'].iloc[-1]
        market_cap = last_price * sol.info['circulatingSupply']
        open_price = sol_data['Open'].iloc[-1]
        percentage_change = ((last_price - open_price) / open_price) * 100
    else:
        last_price = None
        market_cap = None

    solana_data = {
        "lastPrice": last_price,
        "percentageChange": percentage_change, 
        "marketCap": market_cap
    }
    return jsonify(solana_data)

@app.route('/api/litecoin', methods=['GET'])
def get_litecoin_data():
    # Fetch live data for Litecoin from Yahoo Finance
    ltc = yf.Ticker("LTC-USD")
    ltc_data = ltc.history(period='1d')  # Fetch data for the last minute

    # Check if ltc_data has at least one row
    if len(ltc_data) >= 1:
        # Extract the required data (e.g., last price, market cap)
        last_price = ltc_data['Close'].iloc[-1]
        market_cap = last_price * ltc.info['circulatingSupply']
        open_price = ltc_data['Open'].iloc[-1]
        percentage_change = ((last_price - open_price) / open_price) * 100
    else:
        last_price = None
        market_cap = None

    litecoin_data = {
        "lastPrice": last_price,
        "percentageChange": percentage_change,
        "marketCap": market_cap
    }
    return jsonify(litecoin_data)

@app.route('/api/cardano', methods=['GET'])
def get_cardano_data():
    # Fetch live data for Cardano from Yahoo Finance
    ada = yf.Ticker("ADA-USD")
    ada_data = ada.history(period='1d')  # Fetch data for the last minute

    # Check if ada_data has at least one row
    if len(ada_data) >= 1:
        # Extract the required data (e.g., last price, market cap)
        last_price = ada_data['Close'].iloc[-1]
        market_cap = last_price * ada.info['circulatingSupply']
        percentage_change = ((last_price - open_price) / open_price) * 100
    else:
        last_price = None
        market_cap = None

    cardano_data = {
        "lastPrice": last_price,
        "percentageChange": percentage_change,  
        "marketCap": market_cap
    }
    print(cardano_data)
    return jsonify(cardano_data)

@app.route('/api/avalanche', methods=['GET'])
def get_avalanche_data():
    # Fetch live data for Avalanche from Yahoo Finance
    avax = yf.Ticker("AVAX-USD")
    avax_data = avax.history(period='1d')  # Fetch data for the last minute
    

    # Check if avax_data has at least one row
    if len(avax_data) >= 1:
        # Extract the required data (e.g., last price, market cap)
        last_price = avax_data['Close'].iloc[-1]
        market_cap = last_price * avax.info['circulatingSupply']
        open_price = btc_data['Open'].iloc[-1]
        percentage_change = ((last_price - open_price) / open_price) * 100
    else:
        last_price = None
        market_cap = None

    avalanche_data = {
        "lastPrice": last_price,
        "percentageChange": percentage_change,  
        "marketCap": market_cap
    }
    print(avalanche_data)
    return jsonify(avalanche_data)



if __name__ == '__main__':
    app.run(debug=True)
