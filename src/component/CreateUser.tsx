import React from 'react'
import { useState } from 'react'
import { IUser } from '../model'
import { nanoid } from 'nanoid';
import { useAppDispatch } from '../store';
import { createUserAction } from '../redux/user/User';
import { useNavigate, Link } from 'react-router-dom'
import 'App.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'



const CreateUser = () => {
const dispatch = useAppDispatch();

const [userInfo,setUserInfo] = useState<Partial<IUser>> ({
  
  name: "",
  phone: "",
  email:""
})

const changeUserInfo =(e:React.ChangeEvent<HTMLInputElement>) => {
  const {name,value} = e.target;
  setUserInfo({...userInfo,[name]:value })
}

const navigate = useNavigate();
const navigatetoMain = ()=>{
  navigate('/')
}

const createUser = async () =>{


 const newUser:IUser = {
  id: nanoid(),
  name:userInfo.name as string,
  phone:userInfo.phone as string,
  email:userInfo.email as string
 };
 const res :Response = await fetch("http://localhost:8080/user",{
      method:'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await res.json();
    console.log(result);

//  dispatch(createUserAction(newUser))
}

const validateUserInput =() => {
  const {name,phone,email} = userInfo;
  if(!name || !phone ||! email) {
    return alert('Please Type User Info')
  }
  createUser()
  // dispatch(createUserAction(userInfo))

  navigatetoMain()
}

  return (
    <>
    
        
        <h4>
            <button onClick={navigatetoMain} className='btn'><FontAwesomeIcon className='icon' icon={faArrowLeft} /></button>
            <span>Create a New User</span>
        </h4>
        
        <div>
          <div>Name</div>
          <input type="text"  name="name" value={userInfo.name} onChange={changeUserInfo} />
          <div>Phone</div>
          <input type="text" name="phone" value={userInfo.phone} onChange={changeUserInfo} />
          <div>Email</div>
          <input type="text" name="email" value={userInfo.email} onChange={changeUserInfo} />
          <div className='modal-btn'>
           <Button onClick={()=> {validateUserInput()}} className="btn-color" variant="primary" size="sm" active>Create</Button>
          </div>
          
        </div>
        
      
     
    </>
  )
}

export default CreateUser

