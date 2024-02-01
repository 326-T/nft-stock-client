import axios from 'axios'

export const fetchStockholdings = () => axios.get('http://localhost:3000/api/stock/holding-rate')

export const fetchStockPriceChanges = () =>
  axios.get('http://localhost:3000/api/stock/price-change')
