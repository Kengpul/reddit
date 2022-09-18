import CreatePost from "../../components/CreatePost/CreatePost"
import PostCard from "../../components/Post/PostCard"

import { Container } from 'reactstrap';

export default function Home() {
    return (
        <Container>
            Home
            <CreatePost />
            <PostCard />
        </Container>

    )
}
