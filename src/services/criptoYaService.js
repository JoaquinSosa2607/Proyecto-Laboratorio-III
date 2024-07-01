import axios from "axios";

const BASE_URL = "https://criptoya.com/api/buenbit/";
export default {
    async getCryptoPrices(action) {
        try {
          const [btcResponse, ethResponse, ltcResponse] = await Promise.all([
            axios.get(`${BASE_URL}btc/ars/0.1`),
            axios.get(`${BASE_URL}eth/ars/0.1`),
            axios.get(`${BASE_URL}ltc/ars/0.1`),
          ]);
          return {
            btc: action === "purchase" ? btcResponse.data.totalAsk : btcResponse.data.totalBid,
            eth: action === "purchase" ? ethResponse.data.totalAsk : ethResponse.data.totalBid,
            ltc: action === "purchase" ? ltcResponse.data.totalAsk : ethResponse.data.totalBid,
          };
        } catch (error) {
          console.error('Error fetching crypto prices:', error);
          throw error;
        }
    },
    
};
