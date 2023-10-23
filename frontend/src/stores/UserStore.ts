import axios, { AxiosError } from "axios";
import jwtDecode from "jwt-decode";
import { makeAutoObservable } from "mobx";
export const AUTH_STORAGE_KEY: string = '@pomple/auth/token'; /* Local storage key */


export enum Role {
  Customer = 'customer',
  Admin = 'admin',
  Disabled = 'disabled',
  Guest = 'guest'
}


export interface UserProfile {
  firstName: string;
  lastName: string;
  sub: string;
  role: Role;
}


export class AuthStore {
  private authenticated = false;

  constructor(){
    makeAutoObservable(this);
    this.authenticated = !!this.getAccessToken();
  }

  async login(email: string | undefined, password: string | undefined){
    try{
      /* Todo login logic */
      const tokenPayload = await axios.post('https://api.pomplemoose.online/auth/login', { username: email, password: password });
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(tokenPayload?.data?.accessToken))
      this.isAuthenticated = true;
    }catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        this.isAuthenticated = false;
        return error?.response?.status;
      }else{
        this.isAuthenticated = false;
        return 'Failed';
      }
    }
  }

  async register(data: object){
    try{
      const register = await axios.post('https://api.pomplemoose.online/auth/register', data);
      return 201;
    }catch (error: any | AxiosError){
      if(axios.isAxiosError(error)) {
        return error?.response?.status;
      }else{
        return 401;
      }
    }
  }

  get isAuthenticated(): boolean {
    return this.authenticated
  }

  set isAuthenticated(auth: boolean) {
    this.authenticated = auth;
  }

  getAccessToken() {
    try {
      const token =localStorage.getItem(AUTH_STORAGE_KEY);
      if(!token) return null;

      return JSON.parse(token) as string;      
    } catch (error) {
      console.log(error);

      return null;
    }
  }

  getProfile(): UserProfile {

    if(localStorage.getItem(AUTH_STORAGE_KEY) !== null){
      return jwtDecode(localStorage.getItem(AUTH_STORAGE_KEY) || '');
    }else{
      return { firstName: '', lastName: "", sub: "", role: Role.Guest };
    }
  }

  notAuthenticated() {
    this.isAuthenticated = false;
  }


}