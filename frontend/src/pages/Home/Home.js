import { useEffect, useState } from "react";

import { Container, Row, Col } from 'reactstrap';

import CreatePost from "../../components/CreatePost/CreatePost";
import PostCard from "../../components/Post/PostCard";
import Aside from "../../components/Aside/Aside";

export default function Home() {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/post');
            const json = await response.json();

            if (response.ok) {
                setPosts(json);
            }
        }
        fetchPosts()
    }, [])

    return (
        <Container>
            <Row>
                <Col md='8'>
                    <CreatePost />
                    {posts && posts.map((post) => (
                        <PostCard post={post} key={post._id} />
                    ))}
                </Col>
                <Col md='4' className="d-none d-md-block">
                    <Aside />
                </Col>
            </Row>
        </Container>
    )
}
