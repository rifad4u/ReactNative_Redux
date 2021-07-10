import { USERNAME } from "../Constants/Constants";

export const storeUsername=(username)=>{
    return{
        type : USERNAME ,
        userName : username
    }
}