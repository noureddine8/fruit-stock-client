import axios from 'axios';

const url = 'http://192.168.1.13:5000';

export const getStoreByCity = async city => {
  const data = await axios.get(`${url}/stock/${city}`, {
    headers: {'Content-Type': 'application/json'},
  });
  return data;
};
