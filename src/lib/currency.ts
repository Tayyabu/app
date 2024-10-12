const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "PKR",
});

export function formatCurrency(price: number) {
  return "Rs." + CURRENCY_FORMATTER.format(price);
}

export function sellingPrice(price: number, discount: number) {
  return formatCurrency(( price * ((100 - discount)/100)));
}
