// 1. ИМПОРТЫ

import { useState, useEffect } from "react";
import { z } from "zod";
import { useStore } from "../../store/store";
import BannerContent from "../main-home/components/BannerContent";
import SelectedCurrency from "./components/SelectedCurrency";
import DateInput from "./components/DateInput";

const API_URL = "https://api.exchangerate-api.com/v4/latest/";

// 2. СХЕМА ВАЛИДАЦИИ

const amountSchema = z
  .number()
  .positive("Число должно быть положительным")
  .optional();
const currencySchema = z.enum(["USD", "EUR", "GBP", "CNY"]);

// 3. ОСНОВНОЙ КОМПОНЕНТ

const MainConverter = () => {
  const { date, setDate, calendarOpen, toggleCalendar, selectedCurrency } =
    useStore();

  const [amountFrom, setAmountFrom] = useState(0);
  const [amountTo, setAmountTo] = useState(0);

  const [currencyFrom, setCurrencyFrom] = useState(selectedCurrency);
  const [currencyTo, setCurrencyTo] = useState("EUR");

  const [conversionRates, setConversionRates] = useState({ rates: {} });

  // 4. ЛОГИКА КОНВЕРТАЦИИ

  useEffect(() => {
    const fetchRates = () => {
      fetch(`${API_URL}${currencyFrom}`)
        .then((response) => {
          if (!response.ok) {
            return Promise.reject("Ошибка загрузки курсов валют");
          }
          return response.json();
        })
        .then((data) => {
          setConversionRates(data.rates || {});
        })
        .catch((error) => {
          console.error(error);
        });
    };

    if (currencyFrom !== currencyTo) fetchRates();
  }, [currencyFrom]);

  const convertAmount = (amount, toCurrency) => {
    const rate = conversionRates[toCurrency];
    if (!rate || isNaN(amount)) {
      return "Ошибка конвертации";
    }
    return (amount * rate).toFixed(2);
  };

  // 5. ОБРАБОТЧИКИ

  const handleAmountFromChange = (e) => {
    let value = e.target.value;

    value = value.replace(/^0+/, "");

    if (value === "") {
      setAmountFrom(0);
      setAmountTo(0);
    } else {
      const parsedValue = parseFloat(value);

      if (!isNaN(parsedValue)) {
        const result = amountSchema.safeParse(parsedValue);

        if (result.success) {
          setAmountFrom(parsedValue.toFixed(2));
          setAmountTo(convertAmount(parsedValue, currencyTo));
        } else {
          setAmountFrom(0);
          setAmountTo(0);
        }
      } else {
        setAmountFrom(0);
        setAmountTo(0);
      }
    }
  };

  const handleAmountToChange = (e) => {
    let value = e.target.value;

    value = value.replace(/^0+/, "");

    if (value === "") {
      setAmountTo(0);
      setAmountFrom(0);
    } else {
      const parsedValue = parseFloat(value);

      if (!isNaN(parsedValue)) {
        const result = amountSchema.safeParse(parsedValue);

        if (result.success && conversionRates[currencyTo]) {
          setAmountTo(parsedValue.toFixed(2));
          setAmountFrom((parsedValue / conversionRates[currencyTo]).toFixed(2));
        } else {
          setAmountTo(0);
          setAmountFrom(0);
        }
      } else {
        setAmountTo(0);
        setAmountFrom(0);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Backspace" || e.key === "Delete") {
      if (e.target.name === "amountFrom") {
        setAmountFrom(0);
      } else if (e.target.name === "amountTo") {
        setAmountTo(0);
      }
    }
  };

  // 6. ВАЛИДАЦИЯ ВАЛЮТЫ

  const handleCurrencyFromChange = (newCurrency) => {
    const result = currencySchema.safeParse(newCurrency);
    if (result.success) {
      setCurrencyFrom(newCurrency);
    } else {
      console.error("Invalid currency selection for 'From':", newCurrency);
    }
  };

  const handleCurrencyToChange = (newCurrency) => {
    const result = currencySchema.safeParse(newCurrency);
    if (result.success) {
      setCurrencyTo(newCurrency);
    } else {
      console.error("Invalid currency selection for 'To':", newCurrency);
    }
  };

  // 7. АВТООБНОВЛЕНИЕ

  useEffect(() => {
    if (amountFrom) {
      setAmountTo(convertAmount(amountFrom, currencyTo));
    }
  }, [currencyFrom, currencyTo, conversionRates, amountFrom]);

  // 8. ОСНОВНАЯ СТРУКТУРА

  return (
    <main className="w-full mx-auto">
      <div className="flex flex-col md:flex-row justify-center items-center min-h-[400px] bg-banner bg-cover bg-center bg-no-repeat h-fit px-6 md:px-[250px] gap-y-6 md:gap-x-[290px]">
        <BannerContent />
      </div>
      <div className="bg-background py-20 px-52 sm:px-10 md:px-20 lg:px-32 rounded flex justify-center items-center">
        <div className="bg-white flex items-center justify-center px-[48px] py-[48px]">
          <div>
            <h3 className="text-title text-4xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
              Конвертер валют
            </h3>
            <p className="mt-[70px] mb-[30px] text-navigation font-roboto text-xl font-medium sm:text-lg md:text-xl">
              В мене є
            </p>
            <form className="flex items-center gap-4 sm:flex-col sm:gap-2 md:flex-row">
              <input
                type="number"
                value={amountFrom}
                onChange={handleAmountFromChange}
                onKeyDown={handleKeyDown}
                name="amountFrom"
                className="border border-calendar w-[220px] h-[60px] py-4 text-center"
              />
              <SelectedCurrency
                selectedCurrency={currencyFrom}
                setSelectedCurrency={handleCurrencyFromChange}
              />
            </form>
            <DateInput
              date={date}
              setDate={setDate}
              calendarOpen={calendarOpen}
              toggleCalendar={toggleCalendar}
            />
          </div>
          <div className="mt-[236px] mb-[158px] mx-[48px]">
            <img
              src="/assets/icons/convertation-arrow.svg"
              alt="Conversion arrow"
            />
          </div>
          <div>
            <p className="mt-[108px] mb-[30px] text-navigation font-roboto text-xl font-medium sm:text-lg md:text-xl">
              Хочу придбати:
            </p>
            <form className="flex items-center gap-4 sm:flex-col sm:gap-2 md:flex-row">
              <input
                type="number"
                value={amountTo}
                onChange={handleAmountToChange}
                onKeyDown={handleKeyDown}
                name="amountTo"
                className="border border-calendar w-[220px] h-[60px] py-4 text-center"
              />
              <SelectedCurrency
                selectedCurrency={currencyTo}
                setSelectedCurrency={handleCurrencyToChange}
              />
            </form>
            <button className="flex items-center justify-center rounded bg-link w-[220px] h-[60px] mt-[24px] ml-[135px] text-background font-roboto font-medium text-lg leading-[1.4]">
            Зберегти результат
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainConverter;
