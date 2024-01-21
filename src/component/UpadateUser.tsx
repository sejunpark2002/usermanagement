import React from 'react'
import { useState } from 'react'
import { IUser } from 'model'
import { updateUserAction } from '../redux/user/User';
import { useAppDispatch } from 'store';
import 'App.css';
import { getAllUsersAPI } from 'api/user';
import { IResponseTypeWithResult } from 'App';
import { useNavigate, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

interface IUpdateUserProps {
  updateSelectedId: string;
  setUserListFunc: (userlist:IUser[]) => void;
}

const UpadateUser = ({setUserListFunc, updateSelectedId}: IUpdateUserProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
      const navigatetoMain = ()=>{
              navigate('/')
        }
  const [userUpdate,setUserUpadate] = useState<Partial<IUser>>({
    name:'',
    phone:'',
    email:''
  })
 
  const changeUserUpdate = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setUserUpadate({...userUpdate,[name]: value });

  }

  const updateUser = async () =>{

    

    const updatedUser:Partial<IUser> = {
     id:updateSelectedId ,
     name:userUpdate.name as string,
     phone:userUpdate.phone as string,
     email:userUpdate.email as string
    }
    // dispatch(updateUserAction(updatedUser,updateSelectedId))
    await fetch("http://localhost:8080/user",{
      method:'PUT',
      body:JSON.stringify( updatedUser),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const getAllUsersResult: IResponseTypeWithResult = await getAllUsersAPI();
    
    setUserListFunc(getAllUsersResult.result)

   }

   const validateUserInput =() => {
    const {name,phone,email} = userUpdate;
    if(!name || !phone ||! email) {
      return alert('Please Type User Info')
    }
    updateUser()
    
  }


  return (
   

    <>
     <div><Button onClick={navigatetoMain} size="sm" active>Return to main</Button></div>
        
      <h4>Update User</h4>
      <div>Name</div>
      <input autoComplete='off' type="text" name='name' value={userUpdate.name} onChange={changeUserUpdate} />
      <div>Phone Number</div>
      <input type="text" name='phone' value={userUpdate.phone} onChange={changeUserUpdate} />
      <div>Email</div>
      <input type="text" name='email' value={userUpdate.email} onChange={changeUserUpdate} />
      <button onClick={validateUserInput}>Update</button>
    
    
   
    </>
  )
};

export default UpadateUser