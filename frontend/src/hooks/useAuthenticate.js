import { useState } from "react"

export const useAuthenticate = (auth) => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const authenticate = async (email, password) => {
        setError(null);
        setIsPending(true);

        const response = await fetch(`/${auth}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })

        const user = await response.json();

        if (!response.ok) {
            setError(user.error.message);
            setIsPending(false);
        } else {
            localStorage.setItem('user', JSON.stringify(user))
            setIsPending(false);
        }
    }

    return { authenticate, error, isPending };
}