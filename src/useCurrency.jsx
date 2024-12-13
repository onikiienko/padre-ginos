const intl = new Intl.DateTimeFormat("en-US", {
  style: "currency",
  currency: "USD",
});
export const priceConverter = (price) => intl.format(price);
export default function useCurrency(price) {
  return intl.format(price);
}
