import { backendAxios } from "../axios";

export const registerUser = async (
    name,
    password,
    email,
) => {
    return await backendAxios.post('/users', {
        name,
        password,
        email,       
    });
};

export const logInUser = async (
    password,
    email,
) => {
    return await backendAxios.post('/users/aunthenticate', {
        password,
        email,       
    });
};