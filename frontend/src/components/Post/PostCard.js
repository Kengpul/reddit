import { formatDistanceToNow } from 'date-fns';

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
            <Card>
                <CardBody>
                    <CardTitle tag="h5">
                        {post.title}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {formatDistanceToNow(new Date(post.updatedAt), { addSuffix: true })}
                    </CardSubtitle>
                    <CardText>
                        {post.text}
                    </CardText>
                </CardBody>
            </Card>
        </Container>
    )
}
