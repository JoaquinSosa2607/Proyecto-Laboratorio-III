<template>
    <div class="background-container">
      <div class="crypto-card">
        <h1 style="color: white;font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"> CRYPTO PRICES </h1>
        <div class="row">
          <div class="col">
            <div class="crypto-section crypto-box">
              <h5>Bitcoin</h5>
              <div v-if="exchangesBtc">
                <div v-for="exchangeBtc in exchangesBtc" :key="exchangeBtc.exchangeBtc">
                  <p>Purchase price: ARS$ {{ Number(exchangeBtc.ask).toLocaleString() }}</p>
                  <p>Sell price: ARS$ {{ Number(exchangeBtc.bid).toLocaleString() }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="crypto-section crypto-box">
              <h5>Ethereum</h5>
              <div v-if="exchangesEth">
                <div v-for="exchangeEth in exchangesEth" :key="exchangeEth.exchangeEth">
                  <p>Purchase price: ARS$ {{ Number(exchangeEth.ask).toLocaleString() }}</p>
                  <p>Sell price: ARS$ {{ Number(exchangeEth.bid).toLocaleString() }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="crypto-section crypto-box">
              <h5>Litecoin</h5>
              <div v-if="exchangesLtc">
                <div v-for="exchangeLtc in exchangesLtc" :key="exchangeLtc.exchangeLtc">
                  <p>Purchase price: ARS$ {{ Number(exchangeLtc.ask).toLocaleString() }}</p>
                  <p>Sell price: ARS$ {{ Number(exchangeLtc.bid).toLocaleString() }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "InfoComponent",
    data() {
      return {
        exchangesBtc: null,
        exchangesEth: null,
        exchangesLtc: null,
      };
    },
    async mounted() {
      try {
        const btcResponse = await axios.get("https://criptoya.com/api/btc/ars/0.1");
        const ethResponse = await axios.get("https://criptoya.com/api/eth/ars/0.1");
        const ltcResponse = await axios.get("https://criptoya.com/api/ltc/ars/0.1");
  
        this.exchangesBtc = this.formatResponse(btcResponse.data);
        this.exchangesEth = this.formatResponse(ethResponse.data);
        this.exchangesLtc = this.formatResponse(ltcResponse.data);
      } catch (error) {
        console.error('Error fetching crypto prices:', error);
      }
    },
    methods: {
      formatResponse(data) {
        const firstExchange = Object.keys(data)[1];
        return firstExchange ? [{ exchange: firstExchange, bid: data[firstExchange].totalBid, ask: data[firstExchange].totalAsk }] : [];
      }
    }
  };
  </script>
  
  <style>
  .background-container {
    background-image: url("../assets/bitcoin-background.jpg");
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  
  .crypto-card {
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    padding: 20px;
    max-width: 1000px;
    width: 100%;
  }

  .crypto-section {
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
  }

  .crypto-box {
    background-color: white;
    color: #333;
    border: 1px solid #ddd;
  }

  .row {
    display: flex;
    justify-content: space-around;
  }

  .col {
    flex: 1;
    margin: 10px;
  }
  </style>
  