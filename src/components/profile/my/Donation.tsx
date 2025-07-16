import { colorPalette } from "@/libs/theme";
import { Flex, Typography } from "@/primitives";
import { IconButton } from "@mui/material";
import SvgPlus from "../../../../public/icon/Plus";

const Donation = () => {
    return ( <Flex padding={{mobile:'24px 16px',tablet:'24px 16px',laptop:'24px 40px'}} sx={{backgroundColor:'#1C1C1C'}}>
        <Flex padding={'16px'} sx={{backgroundColor:'#212121'}} borderRadius={'8px'} gap={'24px'} position={'relative'}>
            <IconButton sx={{ position: "absolute", top: "10px", right: "10px" }}>
            <SvgPlus />
          </IconButton>
            <Typography variant="h2" color={colorPalette.gray[3]}>My Donation  </Typography>
            <Flex
              direction={"row"}
              padding={"16px"}
              justifyContent={"space-between"}
              sx={{ backgroundColor: "#161616" }}
              borderRadius={"24px"}
            >
              <Typography variant="body2" color={colorPalette.gray[1]}>
                24 USDT
              </Typography>
              <Typography variant="h5" color={colorPalette.gray[1]}>
                24 May 2024
              </Typography>
            </Flex>
        </Flex>
    </Flex> );
}
 
export default Donation;