import { useState } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import './CreateCommunity.css';

export default function CreateCommunity() {
    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [require, setRequire] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setRequire(null);

        if (!name || !description) {
            return setRequire('name and description required!');
        }

        console.log({ name, tagline, description });
    }

    return (
        <Container className='create-community mt-3'>
            <Row>
                <Col md='6' className='m-auto'>
                    <Card>
                        <CardBody>
                            <CardTitle tag='h3'>Create a community</CardTitle>
                            <div className='border-top my-2'></div>
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Label for='name'>Name</Label>
                                    <Input
                                        name='name'
                                        placeholder='name of the community'
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for='tagline'>Tagline</Label>
                                    <Input
                                        name='tagline'
                                        placeholder='tagline from the name of community'
                                        onChange={(e) => setTagline(e.target.value)}
                                        value={tagline}
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for='description'>Description</Label>
                                    <Input
                                        type='textarea'
                                        name='description'
                                        placeholder='Description of the community'
                                        onChange={(e) => setDescription(e.target.value)}
                                        value={description}
                                    ></Input>
                                </FormGroup>
                                {require && <p className='text-danger'>{require}</p>}
                                <Button className='w-100 mt-3'>Create</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}