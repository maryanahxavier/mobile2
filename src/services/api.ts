import axios from "axios";

export const api= axios.create({
    baseURL: "https://mary-ztt7.onrender.com",
    headers:{
        Accept:"application/json"
    }
})