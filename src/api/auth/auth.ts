/* eslint-disable @typescript-eslint/no-explicit-any */
import { clientApi } from "@/libs/utils/client.axios.config";
interface User{
  id:string;
  username:string;
  email:string;
  country:string;
  password:string;
  gender:string;
  birthday:any;
  avatar:any
}

interface SignUp{
    id:string;
  username:string;
  email:string;
  country:string;
  password:string;
}
export const authLogin = async () => {
  const res = await clientApi.get<any>("/users");
  return res.data;
};

export const LoginEmail=async({email,password}:{email:string;password:string})=>{
    const emails = await authLogin();
    const founderEmail = emails.find((e:any)=>e.email === email && e.password === password);
    if(!founderEmail){
        throw new Error("user not found")
    }
    return founderEmail;
}

export const updateUser= async(id: string, data: Partial<User>)=>{
  const res = await clientApi.put(`/users/${id}`, data);
  return res.data;
}


export const signUpUser=async(data:SignUp)=>{
  const res =await clientApi.post(`/users`,data);
  return res.data;
}

export const ChangePassword=async(id: string,password:string,)=>{
  const res =await clientApi.put(`/users/${id}`, {password});
  return res.data;
}