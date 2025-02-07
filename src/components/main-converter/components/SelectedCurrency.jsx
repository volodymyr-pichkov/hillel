const SelectedCurrency = ({ selectedCurrency, setSelectedCurrency }) => {
  const currencies = ["UAH", "EUR", "USD", "JPY", "GBP", "CAD", "AUD"];

  return (
    <div className="relative inline-block">
      <select
        value={selectedCurrency}
        onChange={(e) => setSelectedCurrency(e.target.value)}
        className="border border-calendar text-center w-[120px] h-[60px] pl-3 pr-8 select-no-arrow"
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <img src="/assets/icons/select-arrow.svg" alt="Select arrow" />
      </div>
    </div>
  );
};

export default SelectedCurrency;
