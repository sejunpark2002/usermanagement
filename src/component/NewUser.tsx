import React from 'react'
import 'App.css';
import Button from 'react-bootstrap/Button';
import { useNavigate, Link } from 'react-router-dom'

export interface IHeaderProps {
  setNewUserModalFunc: () => void; // Assuming it's a function that takes a boolean argument
}


const NewUser = ({setNewUserModalFunc}: IHeaderProps) => {

  const navigate = useNavigate();
  const navigatetoCreate = ()=>{
    navigate('/create')
  }
  
  return (
    <>
    
    <Button onClick={()=> {setNewUserModalFunc();navigatetoCreate()}} className="btn-color" variant="primary" size="lg" active>Add New User</Button>
      {/* <button onClick={setNewUserModalFunc}type="button" className="btn-color">Add New User</button> */}
    
    
    </>
  )
}

export default NewUser