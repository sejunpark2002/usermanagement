import { UserActionTypes } from "redux/user/User.interface";
import { IUserState } from "./userReducer.interface";
import { USER_ACTION } from "const/action";
import { Reducer } from "@reduxjs/toolkit";
import { IUser } from "model";

const {CREATE_USER,DELETE_USER,UPDATE_USER,SET_DEFAULT_USER}= USER_ACTION;

const INITIAL_STATE: IUserState = {
  userlist: [],
  
};


const userReducer: Reducer<IUserState, UserActionTypes> = (
  state = INITIAL_STATE,
  action: UserActionTypes,
): IUserState => {
  const { type, payload } = action;
  switch(type) {

    case SET_DEFAULT_USER : {
      return {
        ...state,
        userlist:payload,
      }
    }
    case CREATE_USER: {
      const tempUserList: IUser[] = { ...state.userlist };
      tempUserList.push( {
        id:payload.id,
        name:payload.name,
        phone:payload.phone,
        email:payload.email
      });
      return {
        ...state,
        userlist: tempUserList
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

// const person = {a:10,b:20}

// person.b = 50;

// const person2 = {...person};

// console.log(person);


// const person2 = {...person, a:15}

