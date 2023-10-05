import React from 'react'
import CreateUser from './component/CreateUser'
import ShowTodo from 'component/ShowTodo'
import Header from 'layout/header/Header'
// `import TempComp from 'component/TempComp'`

const App = () => {
  return (
    <>
      <Header/>
      <ShowTodo />
      <CreateUser/>

      {/* <TempComp /> */}
    </>
  )
}

export default App
