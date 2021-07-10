import { createStore , combineReducers } from "redux";
import UserNameReducer from "../Reducers/UserNameReducer";
import PasswordReducer from "../Reducers/PasswordReducer";

const rootreducers = combineReducers({
    userNameStore : UserNameReducer ,
    passWordStore : PasswordReducer
})

export default createStore(rootreducers);