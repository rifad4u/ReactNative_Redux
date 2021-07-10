import { USERNAME } from "../Constants/Constants";

const userNameState={
    name : 'Rifad Hussain'
}

export default userNameReducer=( state=userNameState , action)=>{
    switch( action.type){
        case USERNAME : 
            return {
                ...state ,
                name : action.userName
            }
        default :
            return state ;    
    }
}