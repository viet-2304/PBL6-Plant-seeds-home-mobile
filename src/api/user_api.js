import api from "./api";

export const user_login = async (data) => {
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

export const user_register = async (data) =>{
    // console.log(data);
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

export const category = async () => {
    try {
        const res = await api('v1/product/getAllProductType',{
            method: 'GET',
        });
        return res;
    } catch (error) {
        return error.response.data;
    }
}

export const getplants = async ()=> {
    try {
        const res = await api('v1/product/getAllProduct',{
            method: 'GET',
        });
        return res;
    } catch (error) {
        return error.response.data;
    }
}

export const getCurrentUser = async (token)=>{
    try {
        const res = await api('v1/users/getCurrentUser',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
        });
        return res;
    } catch (error) {
        return error.response.data;
    }
}

export const editUser = async(token,data) =>{
    // console.log(token);
    // console.log(data);
    try {
        const res = await api('v1/users/editUser',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
            data: data,
        });
        return res;
    } catch (error) {
        return error.response.data;
    }
}

export const addtoCart = async(token,data) =>{

    try {
        const res = await api('v1/cart/addToCart',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
            data: data,
        });
        return res;
    } catch (error) {
        return error.response.data;
    }
}

export const getCartDetail = async (userid,token) =>{

    try {
        const res = await api(`v1/cart/getCartDetail?userId=${userid}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
        });
        return res;
    } catch (error) {
        return error.response.data;
    }
}

export const deleteItemInCart = async (itemId,token) =>{
    try {
        const res = await api(`v1/cart/deleteProductInCart?id=${itemId}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
        });
        return res;
    } catch (error) {
        return error.response.data;
    }
}

export const getAllOrder = async(token,userid) =>{
    
    try {
        const res = await api(`v1/order/getOrderByUserId?userId=${userid}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
        });
        return res;
    } catch (error) {
        return error.response.data;
    }
}