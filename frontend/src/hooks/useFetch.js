import { useEffect, useState } from "react";

export function useFetch(query) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [pending, setPending] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setPending(true);
            const response = await fetch(query);
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
        fetchData();
    }, [query,])

    return { data, error, pending }
}
