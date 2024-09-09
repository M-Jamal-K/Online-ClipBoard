import { useState, useEffect } from "react";

export const useFetch = (url, val, option) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (val) {
      const fetchData = async () => {
        setIsPending(true);

        try {
          const res = await fetch(url, option);
          if (!res.ok) {
            throw new Error(res.statusText);
          }
          const data = await res.json();
          setIsPending(false);
          setData(data);
          setError(null);
        } catch (err) {
          setIsPending(false);
          setError("Something Went Wrong :(");
        }
      }; // end of fetchData function

      fetchData();
      return () => {};
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, val]);

  return { data, isPending, error };
};
