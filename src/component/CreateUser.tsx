import React from 'react'
import { useState } from 'react'
import { IUser } from '../model'
import { nanoid } from 'nanoid';
import { useAppDispatch } from '../store';
import { createUserAction } from '../redux/user/User';

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

const createUser =() =>{

 const newUser:IUser = {
  id: nanoid(),
  name:userInfo.name as string,
  phone:userInfo.phone as string,
  email:userInfo.email as string
 }
 dispatch(createUserAction(newUser))
}

  return (
    <div>
      <div>Name</div>
      <input type="text"  name="name" value={userInfo.name} onChange={changeUserInfo} />
      <div>Phone</div>
      <input type="text" name="phone" value={userInfo.phone} onChange={changeUserInfo} />
      <div>Email</div>
      <input type="text" name="email" value={userInfo.email} onChange={changeUserInfo} />
      <button onClick={createUser}>Submit</button>
    </div>
  )
}

export default CreateUser