import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const useGetAllTrips = (url) => {
    const [trips, setTrips] = useState([]);
  
    useEffect(() => {
      axios
        .get(url)
        .then((res) => {
          setTrips(res.data.trips);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, [url]);
    return [trips];
};