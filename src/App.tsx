import React from 'react'
import CreateUser from './component/CreateUser'
import ShowTodo from 'component/ShowTodo'
import Header from 'layout/header/Header'
import UpadateUser from 'component/UpadateUser'
import { useState,useEffect } from 'react'
import 'App.css'
import { IUser } from 'model'
import { getAllUsersAPI } from 'api/user'

// `import TempComp from 'component/TempComp'`

export interface IResponseType {
  message: string;
  statusCode:string;
}

export interface IResponseTypeWithResult extends IResponseType {
  result:IUser[]
}


const App = () => {

  const [userlist,setUserList] =  useState <IUser[]>
([]);

// const getAllUsers = async () => {
//   console.log('Get All Todo - Frontend')
//   const result: IResponseTypeWithResult = await getAllUsersAPI();
//   setUserList(result.result)
// };

const setUserListFunc = (userlist:IUser[]) => {
  setUserList(userlist)
};


useEffect(() => {
  console.log('called');
  
  const getAllUsers = async () => {
    console.log('Get All Todo - Frontend')
    const result: IResponseTypeWithResult = await getAllUsersAPI();
    setUserList(result.result);
  }

  getAllUsers();
}, []);

console.log('1')

// [] => Component가 Mount 됬을 때 단 한번만 실행
// [state] => Component가 Mount 됬을 때 한번 실행 + state가 바꼈을 때 실행
// [state, state]

const [newUserModal, setNewUserModal] = useState(false);
const [updateUserModal, setUpdateUSerModal] = useState(false);
const [updateSelectedId, setUpdateSelectedId ] = useState('');

  const [modalToggle, setModalToggle] = useState(false);

  const setNewUserModalFunc = () => {
    setNewUserModal(!newUserModal);
  }

  return (
    <div className="App">
      <Header setNewUserModalFunc={setNewUserModalFunc}/>
      <ShowTodo userlist={userlist} setUpdateUSerModal={setUpdateUSerModal} setUpdateSelectedId={setUpdateSelectedId} />
      {newUserModal &&  <CreateUser setNewUserModalFunc={setNewUserModalFunc}  />}
      {updateUserModal &&  <UpadateUser setUserListFunc={setUserListFunc} updateSelectedId={updateSelectedId}/>}
     
     

   

      {modalToggle && <div>Modal</div>}
      {modalToggle && <div>Modal</div>}
      {/* <TempComp /> */}
    </div>
  )
}

export default App
