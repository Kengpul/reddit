import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import { Container, Row, Col } from 'reactstrap';

import CreatePost from "../../components/Post/CreatePost";
import PostCard from "../../components/Post/PostCard";
import Aside from "../../components/Aside/Aside";
import PostCardPending from "../../components/Post/PostCardPending";

export default function Home() {
    const { data: posts, pending } = useFetch('/post');

    return (
        <Container className='home'>
            <Row>
                <Col md='8'>
                    <CreatePost />
                    {pending && <PostCardPending />}
                    {posts && posts.map((post) => (
                        <Link to={`post/${post._id}`} key={post._id}>
                            <PostCard post={post} className='postCard' />
                        </Link>
                    ))}
                </Col>
                <Col md='4' className="d-none d-md-block">
                    <Aside />
                </Col>
            </Row>
        </Container >
    )
}
