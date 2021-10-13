export const reduceMethod = (prev, current) => prev + current.quantity;
export const formatTransferBody = (
  senderCity,
  recieverCity,
  item,
  quantity,
) => ({
  senderCity,
  recieverCity,
  item,
  quantity: Number(quantity),
});
