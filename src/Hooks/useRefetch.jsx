import { useEffect, useState } from "react";

const useRefetch = (url) => {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);

  const fetchData = async (http) => {
    setLoading(true);
    try {
      const res = await fetch(http);
      if (!res.ok) {
        throw new Error("Failed To Fetch-Data");
      }
      const jsonData = await res.json();
      return setData(jsonData);
    } catch (error) {
      setErr(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [toggle, url]);

  const refetch = () => {
    return setToggle(!toggle);
  };
  return { data, err, loading, refetch };
};

export default useRefetch;
