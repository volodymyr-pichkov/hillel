import { useState, useEffect } from "react";
import { useStore } from "../../store/store";
import BannerContent from "../main-home/components/BannerContent";
import SelectedCurrency from "./components/SelectedCurrency";
import DateInput from "./components/DateInput";
import { z } from "zod";

const API_URL = "https://api.exchangerate-api.com/v4/latest/";

const amountSchema = z.number().positive("Amount must be a positive number").optional();
const currencySchema = z.enum(["USD", "EUR", "GBP", "CNY"]);

const MainConverter = () => {
  const { date, setDate, calendarOpen, toggleCalendar, selectedCurrency } = useStore();

  const [amountFrom, setAmountFrom] = useState("");
  const [amountTo, setAmountTo] = useState("");
  const [currencyFrom, setCurrencyFrom] = useState(selectedCurrency);
  const [currencyTo, setCurrencyTo] = useState("EUR");
  const [conversionRates, setConversionRates] = useState({});

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(`${API_URL}${currencyFrom}`);
        if (!response.ok) throw new Error("Failed to fetch exchange rates");
        const data = await response.json();
        setConversionRates(data.rates || {});
      } catch (error) {
        console.error("Ошибка загрузки курсов валют:", error);
      }
    };

    if (currencyFrom) fetchRates();
  }, [currencyFrom]);

  const convertAmount = (amount, toCurrency) => {
    if (!conversionRates[toCurrency] || isNaN(amount)) return "0.00";
    return (amount * conversionRates[toCurrency]).toFixed(2);
  };

  const handleAmountFromChange = (e) => {
    const value = parseFloat(e.target.value);
    const validation = amountSchema.safeParse(value);

    if (!validation.success) {
      setAmountFrom("");
      setAmountTo("");
    } else {
      setAmountFrom(value);
      setAmountTo(convertAmount(value, currencyTo));
    }
  };

  const handleAmountToChange = (e) => {
    const value = parseFloat(e.target.value);
    if (isNaN(value) || !conversionRates[currencyTo]) {
      setAmountTo("");
      setAmountFrom("");
    } else {
      setAmountTo(value);
      setAmountFrom((value / conversionRates[currencyTo]).toFixed(2));
    }
  };

  useEffect(() => {
    setAmountTo(convertAmount(amountFrom, currencyTo));
  }, [currencyFrom, currencyTo, conversionRates, amountFrom]);

  return (
    <main className="w-full mx-auto">
      <div className="flex flex-col md:flex-row justify-center items-center min-h-[400px] bg-banner bg-cover bg-center bg-no-repeat h-fit px-6 md:px-[250px] gap-y-6 md:gap-x-[290px]">
        <BannerContent />
      </div>
      <div className="bg-background py-20 px-52 sm:px-10 md:px-20 lg:px-32 rounded flex justify-center items-center">
        <div className="bg-white flex items-center justify-center px-[48px] py-[48px]">
          <div>
            <h3 className="text-title text-4xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">Конвертер валют</h3>
            <p className="mt-[70px] mb-[30px] text-navigation font-roboto text-xl font-medium sm:text-lg md:text-xl">В мене є</p>
            <form className="flex items-center gap-4 sm:flex-col sm:gap-2 md:flex-row">
              <input
                type="number"
                value={amountFrom}
                onChange={handleAmountFromChange}
                className="border border-calendar w-[220px] h-[60px] py-4 text-center"
              />
              <SelectedCurrency selectedCurrency={currencyFrom} setSelectedCurrency={setCurrencyFrom} />
            </form>
            <DateInput date={date} setDate={setDate} calendarOpen={calendarOpen} toggleCalendar={toggleCalendar} />
          </div>
          <div className="mt-[236px] mb-[158px] mx-[48px]">
            <img src="/assets/icons/convertation-arrow.svg" alt="Conversion arrow" />
          </div>
          <div>
            <p className="mt-[70px] mb-[30px] text-navigation font-roboto text-xl font-medium sm:text-lg md:text-xl">Хочу придбати:</p>
            <form className="mb-[50px] flex items-center gap-4 sm:flex-col sm:gap-2 md:flex-row">
              <input
                type="number"
                value={amountTo}
                onChange={handleAmountToChange}
                className="border border-calendar w-[220px] h-[60px] py-4 text-center"
              />
              <SelectedCurrency selectedCurrency={currencyTo} setSelectedCurrency={setCurrencyTo} />
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainConverter;