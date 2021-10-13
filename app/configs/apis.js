import axios from 'axios';

const url = 'http://10.1.4.105:5000';

export const getStoreByCity = async city => {
  const data = await axios.get(`${url}/stock/${city}`, {
    headers: {'Content-Type': 'application/json'},
  });
  return data;
};
export const transferFruits = async ({
  senderCity,
  recieverCity,
  item,
  quantity,
}) => {
  await axios.put(
    `${url}/stock/${senderCity}/${recieverCity}/${item}`,
    {quantity},
    {
      headers: {'Content-Type': 'application/json'},
    },
  );
};
