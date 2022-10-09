import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

import { Container } from "reactstrap";

export default function Error() {
    const [error, setError] = useState(null);
    const location = useLocation();
    const { user } = useAuthContext();

    useEffect(() => {
        const fetchMessage = async () => {
            const config = user ? {
                headers: {
                    'Authorization': `Bearers ${user.token}`
                }
            } : null

            const response = await fetch(process.env.REACT_APP_API_URI + location.pathname, config);
            const json = await response.json();
            if (json) {
                setError(json.error);
            } else {
                setError({
                    message: 'Soemthing went wrong!',
                    statusCode: 500
                })
            }
        }

        fetchMessage();
    }, [location.pathname, user])

    return (
        <Container className="d-flex justify-content-center text-center my-5">
            {error &&
                <div>
                    <h1>{error.statusCode}</h1>
                    <p>Error {error.message}</p>
                    <Link to='/' className="btn btn-secondary">Go back to Home</Link>
                </div>
            }
        </Container>
    )
}
