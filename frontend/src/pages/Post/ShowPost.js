import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import { Col, Container, Row } from "reactstrap";

import PostCard from "../../components/Post/PostCard"
import Aside from "../../components/Aside/Aside";
import Error from "../Error/Error";
import PostCardPending from "../../components/Post/PostCardPending";

export default function ShowPost() {
    const { id } = useParams();
    const { data: post, error, pending } = useFetch(`/post/${id}`);

    return (
        <Container>
            <Row>
                <Col md='8' className="my-2">
                    {pending && <PostCardPending />}
                    {post && <PostCard post={post} options={true} />}
                </Col>
                {error &&
                    <Col md='8' className="my-2">
                        {<Error />}
                    </Col>
                }
                <Col md='4' className='d-none d-md-block'>
                    <Aside />
                </Col>
            </Row>

        </Container>
    )
}
