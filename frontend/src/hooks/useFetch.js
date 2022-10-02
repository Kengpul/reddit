import { useEffect, useState } from "react";
import { useAuthContext } from '../hooks/useAuthContext';

export function useFetch(query) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [pending, setPending] = useState(false);
    const { user } = useAuthContext();

    useEffect(() => {
        const fetchData = async () => {
            setPending(true);
            const response = await fetch(query, {
                headers: { 'Authorization': `Bearers ${user.token}` }
            });
            const json = await response.json();
            if (!response.ok) {
                setError(true)
            }

            if (response.ok) {
                setData(json);
                setError(false)
            }
            setPending(false);
        }
        if (user) {
            fetchData();
        }
    }, [query, user])

    return { data, error, pending }
}
