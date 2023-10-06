import React from 'react'
import { useState } from 'react'
import { IUser } from 'model'
import { updateUserAction } from '../redux/user/User';
import { useAppDispatch } from 'store';

interface UpdateUserProps {
  updateSelectedId: string;
}

const UpadateUser:React.FC<UpdateUserProps> = ({updateSelectedId}) => {
  const dispatch = useAppDispatch();
  const [userUpdate,setUserUpadate] = useState<Partial<IUser>>({
    name:'',
    phone:'',
    email:''
  })
 
  const changeUserUpdate = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setUserUpadate({...userUpdate,[name]: value });

  }

  const updateUser =() =>{

    const updatedUser:Partial<IUser> = {
     name:userUpdate.name as string,
     phone:userUpdate.phone as string,
     email:userUpdate.email as string
    }
    dispatch(updateUserAction(updatedUser,updateSelectedId))
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
    <div>Update User</div>
    <div>Name</div>
    <input type="text" name='name' value={userUpdate.name} onChange={changeUserUpdate} />
    <div>Phone Number</div>
    <input type="text" name='phone' value={userUpdate.phone} onChange={changeUserUpdate} />
    <div>Email</div>
    <input type="text" name='email' value={userUpdate.email} onChange={changeUserUpdate} />
    <button onClick={validateUserInput}>Update</button>
    
    </>
  )
};

export default UpadateUser