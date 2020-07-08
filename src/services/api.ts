import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:3333', // Ip máquina local
  baseURL: 'http://192.168.0.10:3333', // Ip máquina na rede
});

export default api;
