
import dynamic from "next/dynamic";
 const Confirm = dynamic(()=> import('@/components/auth/changePassword/Confirm'));
 const Email = dynamic(()=> import('@/components/auth/changePassword/Email'));
 const Verify = dynamic(()=>import('@/components/auth/changePassword/Verify'));
 
interface ChangePasswordType{
    params:Promise<{password:'confirm' | 'email' | 'verify'}>
}

export default async function ChangePassword({params}:ChangePasswordType){
    const renderElement=(key:'confirm' | 'email' | 'verify')=>{
        switch(key){
            case 'confirm':
                return <Confirm/>;
            case 'email':
                return <Email/>;
            case 'verify':
                return <Verify/>;
            default:
                return <Email/>
        }
    };

    return(
        <>
        {renderElement((await params).password)}</>
    )
}