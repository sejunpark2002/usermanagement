import { AnyAction } from "@reduxjs/toolkit";
import { USER_ACTION } from "../../const/action";
import { IUser } from "../../model";

const {CREATE_USER,DELETE_USER,UPDATE_USER,SET_DEFAULT_USER} = USER_ACTION;


export interface ISetDefaultUserAction {
  type: typeof SET_DEFAULT_USER;
  payload: IUser[];
}

export interface ICreateUserAction {
  type: typeof CREATE_USER;
  payload: IUser;
}

export interface IDeleteUserAction {
  type: typeof DELETE_USER;
  payload: string;
}

export interface IUpdateUserAction {
  type: typeof UPDATE_USER;
  payload: Partial<IUser>;
}

export type UserActionTypes =
| AnyAction
| ICreateUserAction
| IDeleteUserAction
| ISetDefaultUserAction;