import { useState } from 'react';

import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    FormFeedback,
    Button
} from 'reactstrap';
import './Submit.css'

export default function Submit() {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [error, setError] = useState(null);
    const [checkTitle, setCheckTitle] = useState(false);
    const [checkText, setCheckText] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCheckTitle(false);
        setCheckText(false);
        if (!title) return setCheckTitle(true);
        if (!text) return setCheckText(true);

        const response = await fetch('/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, text })
        })

        const json = await response.json();

        if (response.ok) {
            setError(null);
            console.log('New post added', json);
        } else {
            setError(json.error);
        }

        setTitle('');
        setText('');
    }

    return (
        <Container>
            <Row>
                <Col md={{ size: 6, offset: 3 }}>
                    <Form onSubmit={handleSubmit} className='my-5' >
                        <FormGroup floating>
                            <Input
                                id="title"
                                name="title"
                                type="text"
                                placeholder='title'
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                                invalid={checkTitle}
                            />
                            <FormFeedback invalid="true">
                                Title cannot be blank!
                            </FormFeedback>
                            <Label for="title">
                                Title
                            </Label>
                        </FormGroup>
                        <FormGroup floating>
                            <Input
                                id="text"
                                name="text"
                                type="textarea"
                                placeholder='textarea'
                                onChange={(e) => setText(e.target.value)}
                                value={text}
                                invalid={checkText}
                            />
                            <FormFeedback invalid="true">
                                Text cannot be blank!
                            </FormFeedback>
                            <Label for="text">
                                Text
                            </Label>
                        </FormGroup>
                        <Button className='w-100'>
                            Submit
                        </Button>
                        {error && <p className='text-danger'>{error}</p>}
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
