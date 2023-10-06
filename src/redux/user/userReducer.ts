import { UserActionTypes } from "redux/user/User.interface";
import { IUserState } from "./userReducer.interface";
import { USER_ACTION } from "const/action";
import { Reducer } from "@reduxjs/toolkit";

const {CREATE_USER,DELETE_USER,UPDATE_USER}= USER_ACTION;

const INITIAL_STATE: IUserState = {
  userlist: []
};

const userReducer: Reducer<IUserState, UserActionTypes> = (
  state = INITIAL_STATE,
  action: UserActionTypes,
): IUserState => {
  const { type, payload } = action;
  switch(type) {
    case CREATE_USER: {
      return {
        ...state,
        userlist: [
          ...state.userlist,
          {
            id:payload.id,
            name:payload.name,
            phone:payload.phone,
            email:payload.email
          }
        ]
      }
    }
  case DELETE_USER: {
    return {
      ...state,
      userlist:state.userlist.filter((user) => user.id !==payload ),
    }
  }

  case UPDATE_USER: {
    return {
      ...state,
      userlist: state.userlist.map((user) =>
        user.id === payload.id
          ? {
              ...user,
              name:payload.name,
              phone:payload.phone,
              email:payload.email
            }
          : user,
      ),
    };
  }
     
   
      default:
        return state
    }
};

export default userReducer;