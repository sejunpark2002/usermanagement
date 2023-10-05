import { AnyAction } from "@reduxjs/toolkit";
import { USER_ACTION } from "../../const/action";
import { IUser } from "../../model";

const {CREATE_USER} = USER_ACTION;

export interface ICreateUserAction {
  type: typeof CREATE_USER;
  payload: IUser;
}

export type UserActionTypes =
| AnyAction
| ICreateUserAction;