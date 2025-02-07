const SelectedCurrency = ({ selectedCurrency, setSelectedCurrency }) => {
  const currencies = ["UAH", "EUR", "USD", "JPY", "GBP", "CAD", "AUD"];

  return (
    <select
      value={selectedCurrency}
      onChange={(e) => setSelectedCurrency(e.target.value)}
      className="border border-calendar w-[120px] h-[60px]"
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
