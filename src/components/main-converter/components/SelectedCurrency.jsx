const SelectedCurrency = ({ selectedCurrency, setSelectedCurrency }) => {
  const currencies = ["UAH", "EUR", "USD", "JPY", "GBP", "CAD", "AUD"];

  return (
    <div className="relative w-[120px] sm:w-[100px] md:w-[110px] lg:w-[120px]">
      <select
        value={selectedCurrency}
        onChange={(e) => setSelectedCurrency(e.target.value)}
        className="border border-calendar text-center w-full h-[60px] pl-3 pr-10 select-no-arrow appearance-none"
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
        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
      />
    </div>
  );
};

export default SelectedCurrency;
