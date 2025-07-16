'use client'
import MainPage from "@/components/MainPage";
//import { cleanObject } from "@/libs/utils/cleanObject";
//import { toPersianDate } from "@/libs/utils/timeUtils";
//import { updateSearchParams } from "@/libs/utils/updateSearchParams";
import { Flex } from "@/primitives";


{/*interface User {
  name: string;
  age?: number;
  email: string | null;
  hobbies: string[];
  object: object | null;
}
const user: User = {
  name: 'paria',
  age: 33,
  email: '',
  hobbies: [],
  object: { },
};*/}


const LandingPage = () => {

  {/*//timestamp
  console.log(toPersianDate(new Date()));
  //updateSearchParams
  const testUrl='https://example.com?page=1&province=2';
  const params={
    page:'2',
    province:'tehran',
    category:'iran'
  };
  const updateUrl=updateSearchParams(testUrl,params);
  console.log ('Update URL:',updateUrl);
  //cleanObject

  const cleanedUser = cleanObject(user);

console.log(cleanedUser);*/}
  return (
    <Flex
     width={"100%"}
    >
      <MainPage/>

    
    </Flex>
  );
};

export default LandingPage;
