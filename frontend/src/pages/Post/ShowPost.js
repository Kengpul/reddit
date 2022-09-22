import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

import { Col, Container, Row } from "reactstrap";

import PostCard from "../../components/Post/PostCard"
import Aside from "../../components/Aside/Aside";
import Error from "../Error/Error";

export default function ShowPost() {
    const [post, setPost] = useState(null);
    const [error, setError] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`/post/${id}`);
            const post = await response.json();
            if (response.ok) {
                setPost(post);
                setError(false);
            }
            if (!post || !response.ok) {
                setError(true);
            }
        }
        fetchPost();
    }, [id])

    return (
        <Container>
            <Row>
                <Col md='8' className="my-2">
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
