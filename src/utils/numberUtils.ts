export const formatToCurrency = (value: number, currency = "EUR") => {
  const formatter = new Intl.NumberFormat(navigator.language || "en-US", {
    style: "currency",
    currency,
  });

  return formatter.format(value);
};
