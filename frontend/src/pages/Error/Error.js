import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import { Container } from "reactstrap";

export default function Error() {
    const [error, setError] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const fetchMessage = async () => {
            const response = await fetch(location.pathname);
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
    }, [location.pathname])

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
