import {
    Card,
    CardSubtitle,
    CardText,
    CardTitle,
} from 'reactstrap';

export default function CommunityAside() {
    return (
        <Card color='dark' className='p-3 my-4'>
            <CardTitle className='text-muted fw-bold'>
                About community
            </CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quas totam repellat reiciendis .
            </CardText>
            <span className='border-top my-2'></span>
            <div className='d-flex justify-content-around'>
                <div className='d-flex flex-column text-center'>
                    <span className='lead'>500</span>
                    <small className='text-muted'>Members</small>
                </div>
                <div className='d-flex flex-column text-center'>
                    <span className='lead'>250</span>
                    <small className='text-muted'>Online</small>
                </div>
            </div>
            <span className='border-top my-2'></span>
            <CardSubtitle className='text-muted mt-2'>
                Created October 10, 2022
            </CardSubtitle>
        </Card>
    )
}
