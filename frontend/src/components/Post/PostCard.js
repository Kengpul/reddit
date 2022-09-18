import { Link } from 'react-router-dom';

import {
    Container,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
} from 'reactstrap';
import './PostCard.css';

export default function PostCard({ post }) {
    return (
        <Container className='postCard my-3'>
            <Link to={`/post/${post._id}`}>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">
                            {post.title}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            {post.updatedAt}
                        </CardSubtitle>
                        <CardText>
                            {post.text}
                        </CardText>
                    </CardBody>
                </Card>
            </Link>
        </Container>
    )
}
