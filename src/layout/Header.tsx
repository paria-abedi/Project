"use client";
import { Flex, Typography } from "@/primitives";
import { IconButton } from "@mui/material";
import SvgLng from "../../public/icon/Lng";
import Image from "next/image";
import { colorPalette } from "@/libs/theme";
import icon2 from "../../public/img/Frame 5.png";
import { useRouter } from "next/navigation";
import HomeIcon from '@mui/icons-material/Home';

const Header = () => {
  const router = useRouter();
  const handleProfile = () => {
    router.push("/profile");
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
        <Flex
          direction={"row"}
          padding={"4px"}
          gap={"10px"}
          onClick={handleProfile}
          sx={{ cursor: "pointer" }}
        >
          <Flex>
            <Image src={icon2} alt="icon2" />
          </Flex>
          <Flex>
            <Typography variant="body2" color={colorPalette.gray[1]}>
              Sara Rose
            </Typography>
            <Typography variant="caption" color={colorPalette.gray[4]}>
              Hongkong, China
            </Typography>
          </Flex>
        </Flex>
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
