import { useState, useEffect } from "react";

const UseRefetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [toggle, setToggle] = useState(false);

  const fetchData = async (http) => {
    setLoading(true);
    try {
      const response = await fetch(http);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData)
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() =>{
    fetchData(url)
  }, [toggle, url])
  const refetch = () =>{
    return setToggle(!toggle)
  }
  return { data, loading, error, refetch };
};

export default UseRefetch;
