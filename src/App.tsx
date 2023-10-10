import React from 'react'
import CreateUser from './component/CreateUser'
import ShowTodo from 'component/ShowTodo'
import Header from 'layout/header/Header'
import UpadateUser from 'component/UpadateUser'
import { useState } from 'react'
import 'App.css'
// `import TempComp from 'component/TempComp'`

const App = () => {

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
      <ShowTodo setUpdateUSerModal={setUpdateUSerModal} setUpdateSelectedId={setUpdateSelectedId} />
      {newUserModal &&  <CreateUser setNewUserModalFunc={setNewUserModalFunc}  />}
      {updateUserModal &&  <UpadateUser updateSelectedId={updateSelectedId}/>}
     
      <button type="button" onClick={() => setModalToggle(!modalToggle)} className="btn btn-primary" data-bs-toggle={modalToggle} data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      {modalToggle && <div>Modal</div>}
      {modalToggle && <div>Modal</div>}
      {/* <TempComp /> */}
    </div>
  )
}

export default App
