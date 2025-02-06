const SelectedCurrency = ({ selectedCurrency, setSelectedCurrency }) => {
  const currencies = ["UAH", "EUR", "USD", "JPY", "GBP", "CAD", "AUD"];

  return (
    <div>
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
    </div>
  );
};

export default SelectedCurrency;
