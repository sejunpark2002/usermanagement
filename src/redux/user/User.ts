import { ICreateUserAction, IDeleteUserAction, ISetDefaultUserAction, } from './User.interface'
import { USER_ACTION } from '../../const/action'
import { IUser } from '../../model'

const {CREATE_USER,DELETE_USER,UPDATE_USER,SET_DEFAULT_USER} = USER_ACTION


// export const setDefaultUserAction =(userlist:IUser[]):ISetDefaultUserAction => {
//  return {
//   type:SET_DEFAULT_USER,
//   payload:userlist
//  }
// }

export const createUserAction =(userinfo:IUser):ICreateUserAction => {
  return {
    type:CREATE_USER,
    payload:userinfo
  }
}

export const deleteUserAction =(id:string):IDeleteUserAction => {
  return {
    type:DELETE_USER,
    payload:id,
  }
}

export const updateUserAction = (userinfo:Partial<IUser>, id:string) => {
  return {
    type:UPDATE_USER,
    payload: {...userinfo, id}
  }
}