import React from 'react'
import Styles from './Card.module.css'
import {Container, Row, Col} from 'react-bootstrap'
import FormModal from './FormModal'

const Card = () => {
  return (
    <>
        <Container className={Styles.bigContainer}>
            <Row className={Styles.Container}>
                <Col sm={12} lg={6} className={Styles.col}>
                <div className={Styles.VideoContainer}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/3Ty19wn_M3Q" 
                title="YouTube video player" frameborder="0" allow="accelerometer; 
                autoplay; clipboard-write; encrypted-media;
                 gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                </Col>
                <Col sm={12} lg={6}>
                <div className={Styles.FormContainer}>
                <FormModal/>
                </div>
                </Col>

            </Row>
        </Container>
    </>
  )
}

export default Card