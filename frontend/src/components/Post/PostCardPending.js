import {
    Container,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText
} from "reactstrap";
import './PostCard.css'

export default function PostCardPending() {
    return (
        <Container className="postCard">
            <Card>
                <CardBody aria-hidden='true'>
                    <CardTitle tag="h5" className='d-flex justify-content-between placeholder-wave text-muted'>
                        <span className='placeholder col-3'></span>
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 "
                        tag="h6"
                    >
                        <span className='placeholder col-4'></span>
                    </CardSubtitle>
                    <CardText>
                        <span className='placeholder col-12'></span>
                    </CardText>
                </CardBody>
            </Card>
        </Container>

    )
}
