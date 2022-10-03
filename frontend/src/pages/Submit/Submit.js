import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';

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
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);
    const [checkTitle, setCheckTitle] = useState(false);
    const [checkText, setCheckText] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useAuthContext();

    useEffect(() => {
        if (id) {
            const fetchPost = async () => {
                const response = await fetch(`/post/${id}`, {
                    headers: { 'Authorization': `Bearer ${user.token}` }
                });
                const post = await response.json();
                if (response.ok) {
                    setTitle(post.title);
                    setText(post.text);
                }
            }
            if (user) fetchPost();
        }
    }, [id, user])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCheckTitle(false);
        setCheckText(false);
        setPending(true);
        if (!title) return setCheckTitle(true);
        if (!text) return setCheckText(true);
        if (!user) return setError('Unauthorized');

        const query = id ? `/post/${id}` : '/post';
        const response = await fetch(query, {
            method: id ? 'PATCH' : 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify({ title, text })
        })
        const json = await response.json();

        if (response.ok) {
            setError(null);
        } else {
            setError(json.error);
        }

        setTitle('');
        setText('');
        setPending(false);
        navigate(`/post/${json._id}`);
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
                        <Button disabled={pending} className='w-100'>
                            {pending ? 'Loading...' : 'Submit'}
                        </Button>
                        {error && <p className='text-danger'>{error}</p>}
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
