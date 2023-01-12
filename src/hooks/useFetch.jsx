import {useEffect, useState} from 'react';
import axios from "axios";

function UseFetch({endpoint, keys}) {
  const [data, setData] = useState(null);
  const [reData, setReData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const url = 'https://v1.formula-1.api-sports.io/'
  const params = {
    headers: {
      "x-rapidapi-host": "v1.formula-1.api-sports.io",
      "x-apisports-key": process.env.REACT_APP_API_KEY,
    }
  }

  async function fetchData() {
    setLoading(true);
    try {
      setError(false);
      const response = await axios.get(url + endpoint + keys, params);
      console.log(response.data.response);
      setData(response.data.response);
    } catch (e) {
      console.error(e);
      setError(true);
    }
    setLoading(false);
  }

  useEffect(() => {
    void fetchData();
  }, [endpoint, keys])

  const reFetch = (reFetchEndpoint, reFetchKeys) => {
    async function reFetchData() {
      setLoading(true);
      try {
        setError(false);
        const response = await axios.get(url + reFetchEndpoint + reFetchKeys, params);
        console.log(response.data.response);
        setReData(response.data.response);
      } catch (e) {
        console.error(e);
        setError(true);
      }
      setLoading(false);
    }

    void reFetchData();

    return {reData, loading, error};
  }

  return {data, loading, error, reFetch};

}

export default UseFetch;