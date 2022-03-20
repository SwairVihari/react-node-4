import React from 'react'
import Styles from './Header.module.css'
import logo from '../Images/logo.PNG'
import {Container, Col, Row} from 'react-bootstrap'

const Header = () => {
  return (
    <>

    <div className={Styles.header}>
        {/* <div className={Styles.imgContainer}>
            <img className={Styles.img} src={bg}/>
        </div> */}
        <Container>
          <Row className={Styles.row}>
            <Col className={Styles.imgContainer}  sm={12} xs={12} lg={2}>
            
            <img className={Styles.img} src={logo}></img>
            </Col>

            <Col className={Styles.ColHeaderText} sm={12} xs={12} lg={8}>
            <h1 className={Styles.headerText}>
        Trade bitcoin and other cryptocurrencies and earn real profits in the following 24 hours
        </h1>
            </Col>
          </Row>
        </Container>
 
    </div>
    
    </>
  )
}

export default Header