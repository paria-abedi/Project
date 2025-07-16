import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const setClientCookie=(name:string,value:string)=>{
    cookies.set(name,value,{
        path:'/',
        maxAge:365 * 50,
        secure:true,
        partitioned:true,
        expires:new Date(new Date().getTime()+ 60 * 60 * 24 * 1000),
        sameSite:'strict',
    });
};

export const getClientCookie = (name:string):string | undefined =>{
    return cookies.get(name);
};

export const removeClientCookie = (name:string)=>{
    cookies.remove(name,{
        path:'/',
        maxAge:365 * 50,
        secure:true,
        partitioned:true,
        expires: new Date(new Date().getTime() + 60 * 60 * 24 * 1000),
        sameSite:'strict',
    });
};