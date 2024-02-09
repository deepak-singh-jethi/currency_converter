import { useEffect, useState } from "react";

export function useCurrencyInfo(currency1, currency2) {
  const [data, setData] = useState({});
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    console.log(true);
    async function fecthData() {
      setIsFetching(true);
      const response = await fetch(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency1}.json`
      );
      const data = await response.json();
      setData(data[currency1][currency2]);

      try {
      } catch (error) {
        setError({ message: error.message || "Failed to fetch the data" });
      }
      setIsFetching(false);
    }

    fecthData();
  }, [currency1, currency2]);

  return { data, isFetching, error };
}
