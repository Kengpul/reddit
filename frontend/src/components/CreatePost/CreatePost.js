import { useNavigate } from 'react-router-dom';

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Input
} from 'reactstrap';
import './CreatePost.css'

export default function CreatePost() {
    const navigate = useNavigate();

    const handleCreatePost = () => {
        navigate('/submit')
    }

    return (
        <Container className='createPost'>
            <Row>
                <Col md='8'>
                    <Card className="my-2" inverse>
                        <CardBody>
                            <Input onClick={handleCreatePost} placeholder='Create Post' />
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}
