import { PASSWORD } from "../Constants/Constants";

const passWordState={
    passWord: '1234'
}

export default passWordReducer = (state=passWordState , action )=>{
    switch( action.type ){
        case PASSWORD :
            return {
                ...state ,
                passWord : action.passWord
            }
        default :
            return state ;
    }
}