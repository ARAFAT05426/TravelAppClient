import { useState, useEffect } from 'react';
import axios from 'axios';

const useRefetchData = (url, initialData = []) => {
  const [data, setData] = useState(initialData);
  const [status, setStatus] = useState('idle'); // idle, fetching, fetched, error

  const fetchData = async () => {
    setStatus('fetching');
    try {
      const response = await axios.get(url);
      setData(response.data);
      setStatus('fetched');
    } catch (error) {
      console.error('Error fetching data:', error);
      setStatus('error');
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]); // refetch on url change

  const refetch = async () => {
    await fetchData();
  };

  return { data, status, refetch };
};

export default useRefetchData;
