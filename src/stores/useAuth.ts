"use client"
import { create } from "zustand";
import axios from 'axios'
import { API_URL } from "../contants/API_URL";
import { AsyncStorageGetItem } from "../helper/localstore";
import Toast from "react-native-toast-message";


let authToken: any = AsyncStorageGetItem("authentication")

const headers: any = {
    authorization: `Bearer ${authToken}`,
};

export const useAuth = create((set: any) => ({
    isLoading: false,
    isLogged: false,
    userDetail: null,
    startFetching: false,

    fetchUser: async () => {
        try {
            set({
                startFetching: true,
            })
            let res: any = await axios.post(`${API_URL}/user/fetchuser`, {}, { headers })
           
        } catch (e) {
            console.log("fetch user profile error ", e)
        }
        finally {
            set({
                startFetching: false,
            })
        }
    },

    login: async (data: any) => {
        set({
            isLoading: true,
        })
        try {
          
        } catch (e: any) {
            Toast.show({
                type: 'error',
                text1: 'login failed',
            });
            console.log("login error res", e.response)
        }
        finally {
            set({
                isLoading: false
            })
        }
    },

    signup: async (data: any) => {
        set({
            isLoading: true,
        })
        try {
         
        } catch (e: any) {
        }
        finally {
            set({
                isLoading: false
            })
        }
    },

    logout: async () => {
        try {
            console.log("logging out . . . ")
        }
        catch (error) {

            console.log("error in logout : ", error)
        }
    }

}))