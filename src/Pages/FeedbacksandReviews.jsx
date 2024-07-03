import React from 'react';
import { Container, Carousel, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import premImage from '../Logos/FeedbacksandReviews/review image.png';


const reviews = [
    {
        name: 'Prem Kumar',
        review: '“As a senior engineer I have specially reviewed the System Design content and live classes of My Tutor and I found it more on the implementation side instead of theoretical concepts which helps to work in real-time environment in the organization.”',
        rating: 4,
        image: premImage,
    },
    {
        name: 'Adish',
        review: '“As a senior engineer I have specially reviewed the System Design content and live classes of My Tutor and I found it more on the implementation side instead of theoretical concepts which helps to work in real-time environment in the organization.”',
        rating: 4,
        image: premImage,
    },
    {
        name: 'Abhiraj',
        review: '“As a senior engineer I have specially reviewed the System Design content and live classes of My Tutor and I found it more on the implementation side instead of theoretical concepts which helps to work in real-time environment in the organization.”',
        rating: 4,
        image: premImage,
    },
    {
        name: 'Aryan',
        review: '“As a senior engineer I have specially reviewed the System Design content and live classes of My Tutor and I found it more on the implementation side instead of theoretical concepts which helps to work in real-time environment in the organization.”',
        rating: 4,
        image: premImage,
    },
    {
        name: 'Dhanashree',
        review: '“As a senior engineer I have specially reviewed the System Design content and live classes of My Tutor and I found it more on the implementation side instead of theoretical concepts which helps to work in real-time environment in the organization.”',
        rating: 4,
        image: premImage,
    },
    {
        name: 'Aditi',
        review: '“As a senior engineer I have specially reviewed the System Design content and live classes of My Tutor and I found it more on the implementation side instead of theoretical concepts which helps to work in real-time environment in the organization.”',
        rating: 4,
        image: premImage,
    },
];

const FeedbackAndReviews = () => {
    return (
        <Container fluid className="feedback-section text-center">
            <h2 className="section-title">Feedback And Reviews</h2>
            <Carousel indicators={false} controls={true}>
                {reviews.map((review, index) => (
                    <Carousel.Item key={index}>
                        <Row className="justify-content-center">
                            {Array(3).fill().map((_, idx) => (
                                <Col key={idx} md={4}>
                                    <Card className="feedback-card">
                                        <Card.Body>
                                            <blockquote className="blockquote mb-0">
                                                <p>{review.review}</p>
                                                <footer className="blockquote-footer">
                                                    <img src={review.image} alt={review.name} className="review-image" />
                                                    <cite className="review-name">{review.name}</cite>
                                                    <div className="review-rating">{'★'.repeat(review.rating)}</div>
                                                </footer>
                                            </blockquote>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
};

export default FeedbackAndReviews;
