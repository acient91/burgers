export const formatCurrency = (value) =>
  value.toLocaleString("ru-RU", {
    style: "currency",
    currency: "RUB",
  });

export const totalPriceItems = (order) => {
  return order.price * order.count;
};
