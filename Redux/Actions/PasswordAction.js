import { PASSWORD } from "../Constants/Constants";

export const storePassword=(password)=>{
    return{
        type : PASSWORD ,
        passWord : password
    }
}