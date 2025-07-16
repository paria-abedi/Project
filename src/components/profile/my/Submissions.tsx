import { colorPalette } from "@/libs/theme";
import { Flex, Typography } from "@/primitives";
import { IconButton } from "@mui/material";
import SvgPlus from "../../../../public/icon/Plus";
import SvgMore from "../../../../public/icon/More";
import Image from "next/image";
import icon from "../../../../public/img/icon.png";

const Submissions = () => {
    return ( <Flex padding={{mobile:'24px 16px',tablet:'24px 16px',laptop:'24px 40px'}} sx={{backgroundColor:'#1C1C1C'}}>
        <Flex padding={'16px'} sx={{backgroundColor:'#212121'}} borderRadius={'8px'} gap={'24px'} position={'relative'}>
            <IconButton sx={{ position: "absolute", top: "10px", right: "10px" }}>
                        <SvgPlus />
                      </IconButton>
            <Typography variant="h2" color={colorPalette.gray[3]}>My Submissions  </Typography>
             <Flex
                        justifyContent={"space-between"}
                        padding={"16px"}
                        sx={{ backgroundColor: "#161616" }}
                        borderRadius={"24px"}
                        direction={"row"}
                      >
                        <Flex direction={"row"} gap={"16px"}>
                          <Flex>
                            <Image src={icon} alt="icon" style={{ margin: "auto" }} />
                          </Flex>
                          <Flex gap={"8px"}>
                            <Typography variant="body2" color={colorPalette.gray[1]}>
                              Nova Scope
                            </Typography>
                            <Flex direction={"row"} gap={"8px"}>
                              <Typography variant="body2" color={colorPalette.blue[1]}>
                                P
                              </Typography>
                              <Typography variant="body2" color={colorPalette.gray[1]}>
                                24
                              </Typography>
                              <Typography variant="body2" color={colorPalette.blue[1]}>
                                S
                              </Typography>
                              <Typography variant="body2" color={colorPalette.gray[1]}>
                                24
                              </Typography>
                            </Flex>
                          </Flex>
                        </Flex>
                        <IconButton
                          sx={{
                            borderRadius: "full",
                            width: "32px",
                            height: "32px",
                            marginY: "auto",
                            backgroundColor: "#212121",
                          }}
                        >
                          <SvgMore />
                        </IconButton>
                      </Flex>
        </Flex>
    </Flex> );
}
 
export default Submissions;