import React from 'react'
import CreateUser from './component/CreateUser'
import ShowTodo from 'component/ShowTodo'
import Header from 'layout/header/Header'
import UpadateUser from 'component/UpadateUser'
import { useState } from 'react'
// `import TempComp from 'component/TempComp'`

const App = () => {

const [newUserModal, setNewUSerModal] = useState(false);
const [updateUserModal, setUpdateUSerModal] = useState(false);
const [updateSelectedId, setUpdateSelectedId ] = useState('');

  return (
    <>
      <Header setNewUSerModal={setNewUSerModal}/>
      <ShowTodo setUpdateUSerModal={setUpdateUSerModal} setUpdateSelectedId={setUpdateSelectedId} />
      {newUserModal &&  <CreateUser setNewUSerModal={setNewUSerModal}  />}
      {updateUserModal &&  <UpadateUser updateSelectedId={updateSelectedId}/>}
     


      {/* <TempComp /> */}
    </>
  )
}

export default App
