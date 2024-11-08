import axios from 'axios';
import { IProfileBody, IUserBody } from '../models/userModels';
import { toast } from 'react-toastify';

const BASE_URL = 'http://localhost:4000/api';

export interface IProfile {
    _id: string
    name: string
    code: string
}

interface ProfileSchema {
    response: IProfile[]
    status: string
}


export interface IUser {
    _id: string
    name: string
    email: string
    age: string
    profileId: string
}

interface UsersSchema {
    response: IUser[]
    status: string
}

interface UserSchema {
    response: IUser
    status: string
}

interface UpdateUserSchema {
    response: IUser
    status: string
    error?: {
        response:{
            data:{
                message: string
            }
        }
    }
}

export const fetchUsers = async (search: string) => {
    try {
        const {data} = await axios.get<UsersSchema>(`${BASE_URL}/users`, {
            params: {
                search
            }
        });
        return data.response ?? [];
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

export const fetchProfiles = async () => {
    try {
        const {data} = await axios.get<ProfileSchema>(`${BASE_URL}/profiles`);
        return data.response ?? [];
    } catch (error) {
        console.error('Error fetching profiles:', error);
        throw error;
    }
};

export const createProfile = async (body: IProfileBody) => {
    try {
        const response = await axios.post(`${BASE_URL}/profiles`, body);
        toast.success('Perfil creado con éxito')
        return response.data;
    } catch (error:any) {
        toast.error(error?.response.data.message)
        console.error(`Error creating profile: `, error);
        throw error;
    }
};

export const fetchUserById = async (id: string) => {
    try {
        const { data } = await axios.get<UserSchema>(`${BASE_URL}/users/${id}`);
        return data.response ?? {};
    } catch (error) {
        console.error(`Error fetching user with id ${id}:`, error);
        throw error;
    }
};

export const updateUserById = async (id: string, body: IUser) => {
    try {
        const response = await axios.put<UpdateUserSchema>(`${BASE_URL}/users/${id}`, body);
        toast.success('Usuario actualizado con éxito')
        return response.data;
    } catch (error: any) {
        toast.error(error?.response.data.message)
        console.error(`Error updating user with id ${id}:`, error);
        throw error;
    }
};

export const createUser = async (body: IUserBody) => {
    try {
        const response = await axios.post(`${BASE_URL}/users`, body);
        toast.success('Usuario creado con éxito')
        return response.data;
    } catch (error:any) {
        toast.error(error?.response.data.message)
        console.error(`Error creating user: `, error);
        throw error;
    }
};

export const deleteUserById = async (id: string) => {
    try {
        const response = await axios.delete(`${BASE_URL}/users/${id}`);
        toast.success('Usuario eliminado con éxito')
        return response.data;
    } catch (error: any) {
        toast.error(error?.response.data.message)
        console.error(`Error deleting user with id ${id}:`, error);
        throw error;
    }
};