import { useFetch } from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

import CreatePost from '../../components/Post/CreatePost';
import PostCardPending from '../../components/Post/PostCardPending';
import PostCard from '../../components/Post/PostCard';
import CommunityAside from '../../components/Aside/CommunityAside';

import {
    Container,
    Row,
    Col
} from 'reactstrap';
import './Community.css'

export const Community = () => {
    const { data: posts, pending } = useFetch('/post');

    return (
        <>
            <Container fluid='true' className='community overflow-hidden'>
                <Row>
                    <Col>
                        <header>
                            <div className='header-bg p-5'></div>
                            <div className="header-title ps-5 pt-2">
                                <Container className='d-flex'>
                                    <div>
                                        <h1 className='fw-bold'>Community title</h1>
                                        <p className="text-muted">r/community</p>
                                    </div>
                                    <div>
                                        <button className="btn btn-secondary pt-1 px-4 ms-4 mt-2">Join</button>
                                    </div>
                                </Container>
                            </div>
                        </header>
                    </Col>
                </Row>
            </Container>

            <Container>
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
                    <Col md='4' className='d-none d-md-block'>
                        <CommunityAside />
                    </Col>
                </Row>
            </Container>
        </>
    )
}