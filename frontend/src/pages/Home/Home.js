import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col } from 'reactstrap';
import './Home.css';

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
        <Container className='home'>
            <Row>
                <Col md='8'>
                    <CreatePost />
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
