import React,{useState} from 'react'
import Styles from './FormModal.module.css'
import {Form, Button, Modal} from 'react-bootstrap'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import axios from 'axios'
const FormModal = () => {
  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  const submitHandler = async(e) => {
    e.preventDefault();
    if(phone){
    console.log("Button Is Pressed")
    const {data} = await axios.get("https://geolocation-db.com/json/")
    
    const Userdata={
        "firstName":name,
        "lastName":name,
        "email":email,
        "prefix":'xyx',
        "phone":phone,
        "countryCode":data.country_code,
        "campId":"harsh",
        "trackingId":"622b7bf6f901ddaa2e2176b5",
        "userIp":data.IPv4
      }
      console.log(Userdata);

      const resdata = await axios.post("/api/v1/print", Userdata);
      console.log(resdata.data.message)

      if(resdata.data.message){
        handleShow()
      }
      else{
        alert("Not successfull")
      }

    }
    else{
      alert("Please Enter Number")
    }

  }
  return (
    <>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thank You</Modal.Title>
        </Modal.Header>
        <Modal.Body>Register Sucess</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    <Form onSubmit={submitHandler} className={Styles.form}>
  <Form.Group className="mb-3">
    <Form.Label className={Styles.label}>Nombre</Form.Label>
    <Form.Control onChange={(e)=>{setName(e.target.value)}} required={true} className={Styles.input} type="text" placeholder="p. ej. Jose" />
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label className={Styles.label}>Apellido</Form.Label>
    <Form.Control onChange={(e)=>{setCity(e.target.value)}} required={true} className={Styles.input} type="text" placeholder="p. ej. Garcia" />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label className={Styles.label}>Correo Electrónico</Form.Label>
    <Form.Control onChange={(e)=>{setEmail(e.target.value)}} required={true} className={Styles.input} type="email" placeholder="p. ej. name@gmail.com" />
  </Form.Group>


  <Form.Group className="mb-3">
    <Form.Label className={Styles.label}>Número de Teléfono</Form.Label>
    <PhoneInput inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: true
                      }}
                className='mb-3'
                country={'ie'}
                onChange={(value)=>{setPhone(value)}}
                inputClass={Styles.phoneinput}
                containerStyle={{width:"100%"}}
                />
    
  </Form.Group>


  <Button type='submit'  className={Styles.Button}> Solicitar información</Button>
</Form>

{/* <div className={Styles.FormHeader}>
    
</div> */}


  </>
  )
}

export default FormModal