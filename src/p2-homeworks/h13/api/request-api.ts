import axios from "axios";

export const ignatApi = {
    postQuery(success: boolean) {
        return axios.post(`https://neko-cafe-back.herokuapp.com/auth/test`, {success})
    }
}