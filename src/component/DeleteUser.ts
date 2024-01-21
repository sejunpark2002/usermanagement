import React from 'react'
import { deleteUserAPI } from 'api/user';



const deleteUser = async (id:string) => {
  const res: Response = await deleteUserAPI(id);
  console.log(res);
}

export default deleteUser