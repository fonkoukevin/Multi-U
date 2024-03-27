const exchangeRates = {
  EUR: 1,
  USD: 1.22,
  XOF: 755.96,
  GBP: 0.87
};

const convertCurrency = () => {
  const amount = document.querySelector("#amount").value;
  const from = document.querySelector("#from").value;
  const to = document.querySelector("#to").value;
  const convertedAmount = (amount * exchangeRates[to]) / exchangeRates[from];
  document.querySelector("#convertedAmount").value = convertedAmount.toFixed(2);
};

document.querySelector("#convert").addEventListener("click", convertCurrency);
