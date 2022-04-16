import { GET_COUNTRY } from "./actionTypes";

export const setCountry = (data)=>{
    return {
        type:GET_COUNTRY,
        payload:data
    };
}