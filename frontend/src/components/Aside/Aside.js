import {
    Card,
    CardHeader,
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import './Aside.css';

export default function Aside() {
    return (
        <Card color='dark' className='aside my-2'>
            <CardHeader>
                Your subreddits
            </CardHeader>
            <ListGroup className='list'>
                <ListGroupItem>
                    An item
                </ListGroupItem>
                <ListGroupItem>
                    A second item
                </ListGroupItem>
                <ListGroupItem>
                    And a third item
                </ListGroupItem>
            </ListGroup>
        </Card>
    )
}
