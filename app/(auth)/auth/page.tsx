"use client";
import { colorPalette } from "@/libs/theme";
import ShittyPetty from "./../../../public/icon/ShittyPetty";
import { Button, Flex, Typography } from "@/primitives";
import { useRouter } from "next/navigation";

const Auth = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/auth/login/verifyEmail");
  };
  const handleSingUp = () => {
    router.push("/auth/singUp/Register");
  };
  return (
    <Flex
      height={"100vh"}
      paddingX={{
        mobile: "16px",
        tablet: "16px",
        laptop: "448px",
      }}
      gap={"24px"}
      sx={{ backgroundColor: colorPalette.gray[6] }}
    >
      <Flex textAlign={"center"} gap={"24px"} width={"100%"} marginY={"auto"}>
        <ShittyPetty style={{ margin: "auto" }} />
        <Typography variant="h1" color={colorPalette.gray[1]}>
          Welcome
        </Typography>
        <Typography variant="body1" color={colorPalette.gray[1]}>
          Got an ex, fake friend, toxic boss, or annoying
          <br /> classmate? Post what’s bothering you, stay anonymous, and let
          others vote: Is it really shitty or just petty?
        </Typography>
        <Flex direction={"row"} margin={"auto"} width={"100%"} gap={"16px"}>
          <Button
            variant="outlined"
            onClick={handleSingUp}
            fullWidth
            size="medium"
          >
            SingUp
          </Button>
          <Button
            variant="contained"
            onClick={handleLogin}
            fullWidth
            size="medium"
          >
            Login
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Auth;
