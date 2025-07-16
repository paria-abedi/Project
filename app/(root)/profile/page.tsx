import Profile from "@/components/profile/Profile";
import { Flex } from "@/primitives";

const ProfilePage = () => {
    return (
        <Flex width={'100%'} sx={{backgroundColor:'#1C1C1C'}} paddingX={{mobile:'16px',tablet:'16px',laptop:'40px'}}>
        <Profile/>
        </Flex>
        );
}
 
export default ProfilePage;