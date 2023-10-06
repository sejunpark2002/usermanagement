import React from 'react'
import { useAppDispatch,useAppSelector } from 'store'
import { IUser } from '../model'
import 'App.css';
import { deleteUserAction } from 'redux/user/User';

export interface IUpdateUserModalProps {
  setUpdateUSerModal: (value: boolean) => void;
  setUpdateSelectedId: (value: string) => void;  // Assuming it's a function that takes a boolean argument
}

export interface IUpdateUserIdProps {
  setUpdateSelectedId: (value: string) => void; 
}


// React.FC<IUpdateUserModalProps>
const ShowTodo:React.FC<IUpdateUserModalProps> = ({setUpdateUSerModal,setUpdateSelectedId}) => {
  const { userlist } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();

  const deleteUserFunc =(id:string) =>{
    // const index = userlist.findIndex((arr)=>arr.id === id)
    dispatch(deleteUserAction(id))
  }


  return (
    <>
    
      {/* <button onClick={createTodoActionFunc}>Click</button> */}

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
            {userlist.map((user: IUser, index) => {
        return (
          // <div key={user.id}>
           <tbody key={user.id}>
              <tr>
                <th scope="row">{index+1}</th>
                <td> <span className='text'>{user.name}</span></td>
                <td><span className='text'>{user.phone}</span></td>
                <td><span className='text'>{user.email}</span></td>
                <td>
                  <button onClick={()=>{setUpdateUSerModal(true);setUpdateSelectedId(user.id)}} type="button" className="btn btn-warning">Update</button>
                  <button onClick={() => deleteUserFunc(user.id)} type="button" className="btn btn-danger">Delete</button>
                </td>
                
              </tr>
             
            </tbody>
          
          // </div>
        );
      })}
    </table>

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