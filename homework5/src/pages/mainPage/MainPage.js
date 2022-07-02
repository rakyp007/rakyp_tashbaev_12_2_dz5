import React from "react";
import { Form ,button, Alert} from "react-bootstrap";
import "./MainPage.css"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createuserAction } from "../../redux/actions/Action";

function MainPage(props) {

    const dispatch = useDispatch()

    const message = useSelector(state => state.message.status)
    const text = useSelector(state => state.message.text)
    const button = useSelector(state => state.message.button)


    const [data, setData] = useState({
        name: "",
        lastName: "",
        age: 0,
        email: "",
    })


    const onChangeInput = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault()
        dispatch(createuserAction(data)) 
        dispatch(Form)      
    }


           


    return (
         <div  className="container pt-5 pb-5">
            <h1>
        <div className="row d-f">  
       <div className="col-3">
        <Form.Group className="md-3" >
            <Form.Label>имя
                  <Form.Control id="name" type="text" placeholder="Введите имя" name="name"
                   onChange={onChangeInput} value={data.name}/>
            </Form.Label>
        </Form.Group>
       </div>
        </div>

        <div className="col-3">
        <Form.Group className="md-3" >
            <Form.Label>Фамилия
                  <Form.Control id="lastName" type="text" placeholder="Введите Фамилия" name="lastName"
                    onChange={onChangeInput} value={data.lastaName}/>
            </Form.Label>
        </Form.Group>
       </div>

       <div className="col-3">
        <Form.Group className="md-3 " >
            <Form.Label>Возраст
                  <Form.Control id="age" type="number" placeholder="Введите возраст" name="age"
                    onChange={onChangeInput} value={data.age}/>
            </Form.Label>
        </Form.Group>
       </div>

       <div className="col-3">
        <Form.Group className="md-3 w-100" >
            <Form.Label>Email
                  <Form.Control  id="email" type="email" placeholder="Введите email" name="email"
                    onChange={onChangeInput} value={data.email}/>
            </Form.Label>
        </Form.Group>
       </div>

       <div className="col-3 offset-9">
       <button variant="primany" className="W-100" onClick={submit}>Создать</button>
       </div>
       
       {
        message 
        &&
        <Alert variant={button}>
       {text}
       </Alert>
       }
       
        </h1>
         </div>

    )
}


export default MainPage;