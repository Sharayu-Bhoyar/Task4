import axios from "axios";

export const fetchGoldPrice = async () => {
  const response = await axios.get(
    "https://metals-api.com/api/latest?access_key=YOUR_API_KEY&base=USD&symbols=XAU,XAG"
  );
  return response.data.rates;
};