import "./App.css";
import { useCurrencyInfo } from "./hooks/useCurrencyInfo";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  const [currency1, setCurrency1] = useState({ value: 0, name: "usd" });
  const [currency2, setCurrency2] = useState({ value: 0, name: "inr" });

  const { data, isFetching, error } = useCurrencyInfo(
    currency1.name,
    currency2.name
  );

  const handleCalculate = () => {
    setCurrency2({ ...currency2, value: (data * currency1.value).toFixed(4) });
  };

  const handleSwap = () => {
    setCurrency1({
      value: currency2.value,
      name: currency2.name,
    });

    setCurrency2({
      value: currency1.value,
      name: currency1.name,
    });
  };

  return (
    <div className="App flex flex-col gap-5 justify-center items-center">
      <div className="w-full flex flex-col gap-8 items-center">
        <Input currency={currency1} title="From" setCurrency={setCurrency1} />

        <button
          className="bg-blue-500  py-3 rounded-lg w-[25%] text-center text-2xl hover:bg-yellow-300"
          onClick={handleSwap}>
          ⬆️⬇️
        </button>

        <Input currency={currency2} title="To" setCurrency={setCurrency2} />
      </div>

      <button
        className="bg-blue-500 text-stone-50 px-4 py-3 w-full hover:text-stone-700  hover:bg-yellow-300 rounded-lg"
        onClick={handleCalculate}>
        Convert from {currency1.name.toUpperCase()} to{" "}
        {currency2.name.toUpperCase()}
      </button>

      {error && <p className="text-red-600 text-2xl">{error}</p>}
    </div>
  );
}

export default App;
