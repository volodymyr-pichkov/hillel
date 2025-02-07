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
      <img
        src="/assets/icons/select-arrow.svg"
        alt="Select arrow"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 mx-[26px] mr-[17px] pointer-events-none"
      />
    </div>
  );
};

export default SelectedCurrency;
