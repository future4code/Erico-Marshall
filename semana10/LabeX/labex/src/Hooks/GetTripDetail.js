import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetTripDetail = (url) => {
    const [tripDetail, setTripDetail] = useState({});

    const getTripDetail = () => {
        const token = localStorage.getItem('token');
        axios
        .get(url,{
            headers: {
              auth: token
            }
        })
        .then((response) => {
            setTripDetail(response.data.trip);
        })
        .catch((error) => {
            console.log("Deu erro: ", error.response);
        });
    }
    useEffect(() => {
       getTripDetail();
    }, [url]);
    return [tripDetail, getTripDetail];
}

export default useGetTripDetail;