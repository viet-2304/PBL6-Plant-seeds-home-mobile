import api from "./api";

export const user_login = async data => {
    try {
        const res = await api('v1/auth/login',{
            method: 'POST',
            data: data,
        });
        return res;
    } catch (error) {
        return error.response.data;
    }
};

export const user_register = async data =>{
    console.log(data);
    try {
        const res = await api('v1/users/createUser',{
            method: 'POST',
            data: data,
        });
        return res;
    } catch (error) {
        return error.response.data;
    }
}