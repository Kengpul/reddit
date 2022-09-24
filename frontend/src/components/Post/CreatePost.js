import { useNavigate } from 'react-router-dom';

import {
    Container,
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
            <Card className="my-4" inverse>
                <CardBody>
                    <Input onClick={handleCreatePost} placeholder='Create Post' />
                </CardBody>
            </Card>
        </Container>
    )
}
