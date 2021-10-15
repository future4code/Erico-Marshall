import { useEffect } from 'react';
import axios from 'axios';

export const useDeleteTrips = (id) => {
    useEffect(() => {
        const token = localStorage.getItem('token');
        axios
        .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips/${id}`, {
            headers: {
                auth: token
            }
        })
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err.message);
        });
    }, [id]);
};