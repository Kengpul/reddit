import { useState } from 'react';
import { useAuthenticate } from '../../hooks/useAuthenticate';

import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    FormFeedback,
    Button,
    Input,
    Label
} from 'reactstrap';
import './User.css';

export default function Login() {
    const [email] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [checkUsername, setChechUsername] = useState(false);
    const [checkPassword, setCheckPassword] = useState(false);
    const { authenticate, isPending, error } = useAuthenticate('login');

    const handleSubmit = (e) => {
        e.preventDefault();
        setChechUsername(false);
        setCheckPassword(false);
        if (!username) return setChechUsername(true);
        if (!password) return setCheckPassword(true);

        authenticate(username, email, password);
    }

    return (
        <Container>
            <Row>
                <Col md={{ size: 6, offset: 3 }}>
                    <Form onSubmit={handleSubmit} className='my-5'>
                        <h2>Login</h2>
                        <FormGroup floating>
                            <Input
                                id="username"
                                name="username"
                                type="text"
                                placeholder='username'
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                                invalid={checkUsername}
                            />
                            <FormFeedback invalid="true">
                                Username cannot be blank!
                            </FormFeedback>
                            <Label for="username">
                                Username
                            </Label>
                        </FormGroup>
                        <FormGroup floating>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder='pasword'
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                invalid={checkPassword}
                            />
                            <FormFeedback invalid="true">
                                Password cannot be blank!
                            </FormFeedback>
                            <Label for="password">
                                Password
                            </Label>
                        </FormGroup>
                        <Button disabled={isPending} className='w-100'>
                            {isPending ? 'Login...' : 'Login'}
                        </Button>
                        {error && <div className='error'>{error}</div>}
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}