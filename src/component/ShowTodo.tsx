import React from 'react'
import { useAppDispatch,useAppSelector } from 'store'
import { IUser } from '../model'
import 'App.css';


const ShowTodo = () => {
  const { userlist } = useAppSelector((state) => state.userReducer);
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
            {userlist.map((user: IUser) => {
        return (
          // <div key={user.id}>
           <tbody key={user.id}>
              <tr>
                <th scope="row">1</th>
                <td> <span className='text'>{user.name}</span></td>
                <td><span className='text'>{user.phone}</span></td>
                <td><span className='text'>{user.email}</span></td>
                <td><button type="button" className="btn btn-warning">Update</button><button type="button" className="btn btn-danger">Delete</button></td>
                
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