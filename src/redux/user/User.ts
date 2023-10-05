import { ICreateUserAction } from './User.interface'
import { USER_ACTION } from '../../const/action'
import { IUser } from '../../model'

const {CREATE_USER} = USER_ACTION

export const createUserAction =(input:IUser):ICreateUserAction => {
  return {
    type:CREATE_USER,
    payload:input
  }
}