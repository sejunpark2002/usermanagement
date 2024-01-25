import React from 'react'
import { useAppDispatch,useAppSelector } from 'store'
import { IUser } from '../model'
import 'App.css';
import { deleteUserAction } from 'redux/user/User';
import { useState } from 'react';
import { deleteUserAPI } from 'api/user';
import deleteUser from './DeleteUser';
import NewUser from './NewUser';
import { useNavigate, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare,faTrashCan } from '@fortawesome/free-solid-svg-icons'




export interface IUpdateUserModalProps {
  setUpdateSelectedId: (value: string) => void;
  userlist:IUser[];  // Assuming it's a function that takes a boolean argument
}

export interface IUpdateUserIdProps {
  setUpdateSelectedId: (value: string) => void; 
}


// React.FC<IUpdateUserModalProps>
const ShowTodo = ({userlist,setUpdateSelectedId}: IUpdateUserModalProps) => {

  const navigate = useNavigate();
  const navigatetoUpdate = ()=>{
    navigate('/update')
  }
  const [firstIndex,setFirstIndex] =  useState<number>(0); 
  const [page,setPage] =  useState<number>(1); 
  // const [lastIndex,setLastIndex] =  useState(0); 

  const increaseIndex =() =>{
    if(firstIndex+3 < userlist.length-1) {
      setFirstIndex(firstIndex+3)
      setPage(page+1)
    }
    console.log(userlist.length)
  
  }

  const decreaseIndex =() =>{
    if(firstIndex > 0 ) {
      setFirstIndex(firstIndex-3)
      setPage(page-1)
    } 

  }
  // const { userlist } = useAppSelector((state) => state.userReducer);
  // const dispatch = useAppDispatch();

  // const deleteUserFunc =(id:string) =>{
  //   // const index = userlist.findIndex((arr)=>arr.id === id)
  //   dispatch(deleteUserAction(id))
  // }

  // const deleteUser = async (id:string) => {
  //   const res: Response = await deleteUserAPI(id);
  //   console.log(res);
  // }


  return (
    <>
    
      {/* <button onClick={createTodoActionFunc}>Click</button> */}

      <div className='crm-header'>
        <h2>Your CRM</h2>
        <NewUser/>
      </div>
      
      <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {userlist.slice(firstIndex,firstIndex+3).map((user: IUser, index) => {
        return (
          // index < 5 &&
          // <div key={user.id}>
           <tbody key={user.id}>
              <tr>
                <th scope="row">{index+1}</th>
                <td> <span className='text'>{user.name}</span></td>
                <td><span className='text'>{user.phone}</span></td>
                <td><span className='text'>{user.email}</span></td>
                <td>
                  <button onClick={()=>{setUpdateSelectedId(user.id);navigatetoUpdate()}} type="button" className='btn'  ><FontAwesomeIcon className='icon' icon={faPenToSquare} /></button>
                  <button onClick={() => deleteUser(user.id)} type="button" className='btn' ><FontAwesomeIcon className='icon' icon={faTrashCan} /></button>
                
                </td>
                
              </tr>
             
            </tbody>
          
          // </div>
        );
      })}
    </table>
    <button onClick={decreaseIndex} disabled={(firstIndex === 0) && true}>Previous</button>
    <span>{page}</span>
    <button onClick={increaseIndex} disabled={(firstIndex+3 > userlist.length-1) && true}>Next</button>

      {/* {userlist.map((user: IUser) => {
        return (
          <div key={user.id}>

           
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td> <span className='text'>{user.name}</span></td>
                <td><span className='text'>{user.phone}</span></td>
                <td><span className='text'>{user.email}</span></td>
              </tr>
             
            </tbody>
          
          </div>
        );
      })} */}
    
    </>
  )
}

export default ShowTodo


// <table className="table">
// <thead>
//   <tr>
//     <th scope="col">#</th>
//     <th scope="col">Name</th>
//     <th scope="col">Phone Number</th>
//     <th scope="col">Email</th>
//   </tr>
// </thead>
// <tbody>
//   <tr>
//     <th scope="row">1</th>
//     <td> <span className='text'>{user.name}</span></td>
//     <td><span className='text'>{user.phone}</span></td>
//     <td><span className='text'>{user.email}</span></td>
//   </tr>
 
// </tbody>
// </table>