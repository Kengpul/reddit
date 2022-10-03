import { useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';

import {
    Container,
    Card,
    CardBody,
    CardTitle,
    CardText,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import './PostCard.css';


export default function PostCard({ post, options }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const navigate = useNavigate();
    const { user } = useAuthContext();

    const handleDelete = async (id) => {
        if (!user) return;
        const response = await fetch(`/post/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        if (response.ok) {
            navigate('/');
        }
    }

    return (
        <Container className='postCard my-3'>
            <Card>
                <CardBody>
                    <CardTitle className='d-flex justify-content-between'>
                        <div>
                            <small className='text-muted'>
                                Posted by {post.author.username} {formatDistanceToNow(new Date(post.updatedAt), { addSuffix: true })}
                            </small>
                            <h4 className='mt-1'>{post.title}</h4>
                        </div>
                        {options && user.username === post.author.username &&
                            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                <DropdownToggle data-toggle="dropdown"
                                    tag="button" className='btn text-white'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                    </svg>
                                </DropdownToggle>
                                <DropdownMenu >
                                    <Link to='edit'>
                                        <DropdownItem>Edit</DropdownItem>
                                    </Link>
                                    <DropdownItem onClick={() => handleDelete(post._id)}>Delete</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        }
                    </CardTitle>
                    <CardText>
                        {post.text}
                    </CardText>
                </CardBody>
            </Card>
        </Container>
    )
}
