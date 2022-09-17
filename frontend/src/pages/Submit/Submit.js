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
    const [checkTitle, setCheckTitle] = useState(false);
    const [checkText, setCheckText] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setCheckTitle(false);
        setCheckText(false);
        if (!title) return setCheckTitle(true);
        if (!text) return setCheckText(true);
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
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
