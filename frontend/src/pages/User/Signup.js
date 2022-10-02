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

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkEmail, setCheckEmail] = useState(false);
    const [checkPassword, setCheckPassword] = useState(false);
    const { authenticate, isPending, error } = useAuthenticate('signup');

    const handleSubmit = (e) => {
        e.preventDefault();
        setCheckEmail(false);
        setCheckPassword(false);
        if (!email) return setCheckEmail(true);
        if (!password) return setCheckPassword(true);

        authenticate(email, password);
    }

    return (
        <Container>
            <Row>
                <Col md={{ size: 6, offset: 3 }}>
                    <Form onSubmit={handleSubmit} className='my-5'>
                        <h2>Signup</h2>
                        <FormGroup floating>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder='email'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                invalid={checkEmail}
                            />
                            <FormFeedback invalid="true">
                                Email cannot be blank!
                            </FormFeedback>
                            <Label for="email">
                                Email
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
                            Signup
                        </Button>
                        {error && <div className='error'>{error}</div>}
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}