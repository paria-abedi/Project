/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Flex, Typography } from "@/primitives";
import { Button, IconButton } from "@mui/material";
import SvgLng from "../../public/icon/Lng";
import Image from "next/image";
import { colorPalette } from "@/libs/theme";
import icon2 from "../../public/img/Frame 5.png";
import { useRouter } from "next/navigation";
import HomeIcon from '@mui/icons-material/Home';
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

type UserType={
  email:string;
  username:string;
  avatar:any;
  country:string;
  
}
const Header = () => {
  const router = useRouter();
  const [user,setUser]=useState<UserType | null>(null);


  useEffect(()=>{
    const cookieUser=Cookies.get("user");
    if(cookieUser){
      try{
        setUser(JSON.parse(cookieUser));
      }catch(e){
        console.log(e,"Error parsing user cookie")
      }
    }
  },[])
  const handleProfile = () => {
    router.push("/profile");
  };
   const handleLogin = () => {
    router.push("/auth/login/verifyEmail");
  };
  const handleHome=()=>{
    router.push("/");
  }
  return (
    <Flex
      minWidth={"100%"}
      minHeight={"50px"}
      textAlign={"center"}
      sx={{ backgroundColor: "#1C1C1C" }}
      padding={{ mobile: "16px", tablet: "16px", laptop: "24px 40px" }}
      position={"sticky"}
      top={"0px"}
      zIndex={10}
    >
      <Flex justifyContent={"space-between"} direction={"row"}>
        {user ?( 
          <Flex
          direction={"row"}
          padding={"4px"}
          gap={"10px"}
          onClick={handleProfile}
          sx={{ cursor: "pointer" }}
        >
          <Flex borderRadius={"100%"}>
            <Image style={{borderRadius:'100%'}} src={user.avatar || icon2} alt="icon2" width={50} height={50}  />
          </Flex>
          <Flex>
            <Typography variant="body2" color={colorPalette.gray[1]}>
              {user.username}
            </Typography>
            <Typography variant="caption" color={colorPalette.gray[4]} justifyItems={'start'}>
              {user.country}
            </Typography>
          </Flex>
        </Flex>):(
         <Button
            variant="contained"
            onClick={handleLogin}
            sx={{ backgroundColor: "#149DE1", color: "#fff" }}
          >
            Login
          </Button>
        )}
       
<Flex direction={"row"}>
  <IconButton onClick={handleHome} ><HomeIcon sx={{color:'#149DE1'}}/></IconButton>
        <IconButton
          sx={{ direction: "row", gap: "10px", backgroundColor: "#212121" }}
        >
          <SvgLng />
          <Typography variant="body2" color={colorPalette.gray[1]}>
            England
          </Typography>
        </IconButton>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
