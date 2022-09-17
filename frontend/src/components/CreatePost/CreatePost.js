import { useNavigate } from 'react-router-dom';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Input
} from 'reactstrap';

export default function CreatePost() {
    const navigate = useNavigate();

    const handleCreatePost = () => {
        navigate('/submit')
    }

    return (
        <Container>
            <Row>
                <Col md='8'>
                    <Card
                        className="my-2 "
                        inverse
                        style={{
                            width: '100%',
                            backgroundColor: '#1A1A1B'
                        }}
                    >
                        <CardBody>
                            <Input onClick={handleCreatePost} placeholder='Create Post' style={{
                                backgroundColor: '#272729',
                                border: '1px solid grey'
                            }} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}
