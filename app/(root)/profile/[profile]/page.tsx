import dynamic from "next/dynamic";
 const Donate = dynamic(()=> import('@/components/profile/edit/Donate'));
 const Info = dynamic(()=> import('@/components/profile/edit/info'));
 const Add = dynamic(()=>import('@/components/profile/my/Add'));
 const Submissions = dynamic(()=>import('@/components/profile/my/Submissions'));
 const Donation = dynamic(()=>import('@/components/profile/my/Donation'));
 const Comment = dynamic(()=>import('@/components/profile/my/Comment'));
 const Vote = dynamic(()=>import('@/components/profile/my/vote'));
 
interface ProfileType{
    params:Promise<{profile:'donate' | 'info' | 'add'| 'comment' | 'donation' | 'submissions' | 'vote'}>
}

export default async function Profile({params}:ProfileType){
    const renderElement=(key:'donate' | 'info' | 'add'| 'comment' | 'donation' | 'submissions' | 'vote')=>{
        switch(key){
            case 'donate':
                return <Donate/>;
            case 'info':
                return <Info/>;
            case 'add':
                return <Add/>;
                case 'comment':
                return <Comment/>;
                case 'donation':
                return <Donation/>;
                case 'submissions':
                return <Submissions/>;
                case 'vote':
                return <Vote/>;
            default:
                return <Add/>
        }
    };

    return(
        <>
        {renderElement((await params).profile)}</>
    )
}