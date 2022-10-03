import { useState } from "react"
import { useAuthContext } from "./useAuthContext";

export const useAuthenticate = (auth) => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const authenticate = async (username, email, password) => {
        setError(null);
        setIsPending(true);

        const response = await fetch(`/${auth}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        })

        const user = await response.json();

        if (!response.ok) {
            setError(user.error.message);
            setIsPending(false);
        } else {
            dispatch({ type: 'LOGIN', payload: user });
            localStorage.setItem('user', JSON.stringify(user))
            setIsPending(false);
        }
    }

    return { authenticate, error, isPending };
}