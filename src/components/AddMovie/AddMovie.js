import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import './AddMovie.css';



const AddMovie = ({handelAdd}) => {
    const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const [name,setName] = useState("")

const [rate,setRate] = useState("")

const [description,setDescription] = useState("")

const [img,setImg] = useState("")

const handleName = (e) => {
    setName(e.target.value)
}
const handleRate = (e) => {
    setRate(e.target.value)
}
const handleDescription = (e) => {
    setDescription(e.target.value)
}
const handleImage = (e) => {
    setImg(e.target.value)
}
const Add =() =>{
    let newTask = {name,rate,description,img}
    handelAdd(newTask)
    setShow(false)
}


return (
    <div>
    <Button variant="primary" onClick={handleShow} style={{marginLeft : "750px"}}> Add Movie </Button>

<Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
>
    <Modal.Header closeButton>
    <Modal.Title>Add Movie</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter the Name" onChange={(e)=>handleName(e) }/>

    <Form.Label>Rate</Form.Label>
    <Form.Control type="number" max={5} placeholder="Enter email" onChange={(e)=>handleRate(e) } />

    <Form.Label>Description</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>handleDescription(e) } />

    <Form.Label>Image</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>handleImage(e) } />
    </Modal.Body>
    <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
        Close
    </Button>
    <Button variant="primary" onClick={()=>Add()}>Add</Button>
    </Modal.Footer>
</Modal>
    </div>
);
}

export default AddMovie;
