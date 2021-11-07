import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGetAllTrips = (url) => {
    const [trips, setTrips] = useState([]);
  
    const getAllTrips = () => {
      axios
      .get(url)
      .then((res) => {
        setTrips(res.data.trips);
      })
      .catch((err) => {
        console.log(err.message);
      });
    };
    useEffect(() => {
      getAllTrips();
    }, [url]);
    return [trips, getAllTrips];
};