const SelectedCurrency = ({ selectedCurrency, setSelectedCurrency }) => {
  const currencies = ["UAH", "EUR", "USD", "JPY", "GBP", "CAD", "AUD"];

  return (
    <select
      value={selectedCurrency}
      onChange={(e) => setSelectedCurrency(e.target.value)}
    >
      {currencies.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
};

export default SelectedCurrency;
