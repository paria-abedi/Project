"use client";
import { Button, Flex, Typography } from "@/primitives";
import { useRouter } from "next/navigation";
import ShittyPetty from "../../../../public/icon/ShittyPetty";
import { colorPalette } from "@/libs/theme";
import { Checkbox, FormControlLabel, IconButton, Input } from "@mui/material";
import SvgEmail from "../../../../public/icon/Email";
import SvgPassword from "../../../../public/icon/Password";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Enter a valid email address"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Password must be at least 4 characters"),
});

const VerifyEmail = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<{ email: string; password: string }>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLogin = (data: any) => {
    router.push("/auth/login/verifyCode");
    console.log("Form submitted:", data);
  };
  const handlePassword = () => {
    router.push("/auth/changePassword/email");
  };
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <Flex
      height={"100vh"}
      paddingX={{
        mobile: "16px",
        tablet: "16px",
        laptop: "448px",
      }}
      sx={{ backgroundColor: colorPalette.gray[6] }}
    >
      <Flex
        component="form"
        onSubmit={handleSubmit(handleLogin)}
        textAlign={"center"}
        gap={"40px"}
        width={"100%"}
        marginY={"auto"}
      >
        <ShittyPetty style={{ margin: "auto" }} />
        <Typography variant="body1" color={colorPalette.gray[1]}>
          Please enter your email and passwiord.
        </Typography>
        <Flex gap={"16px"}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <>
                <Input
                  {...field}
                  sx={{
                    padding: "8px 16px",
                    gap: "10px",
                    color: "#888888",
                    backgroundColor: "#212121",
                    borderRadius: "8px",
                  }}
                  type="email"
                  placeholder="Enter your email"
                  startAdornment={<SvgEmail />}
                  disableUnderline
                />
                {errors.email && (
                  <Typography
                    variant="caption"
                    color={colorPalette.red[3]}
                    textAlign={"start"}
                    marginLeft={"5px"}
                  >
                    {errors.email.message}
                  </Typography>
                )}
              </>
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <>
                <Input
                  {...field}
                  sx={{
                    padding: "8px 16px",
                    gap: "10px",
                    color: "#888888",
                    backgroundColor: "#212121",
                    borderRadius: "8px",
                  }}
                  placeholder="Enter your password"
                  startAdornment={<SvgPassword />}
                  type={show ? "text" : "password"}
                  endAdornment={
                    <IconButton onClick={handleShow} sx={{ color: "#149DE1" }}>
                      {show ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  }
                  disableUnderline
                />
                {errors.password && (
                  <Typography
                    variant="caption"
                    color={colorPalette.red[3]}
                    textAlign={"start"}
                    marginLeft={"5px"}
                  >
                    {errors.password.message}
                  </Typography>
                )}
              </>
            )}
          />

          <Flex direction={"row"} justifyContent={"space-between"}>
            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography variant="body1" color={colorPalette.gray[4]}>
                  Remember Me
                </Typography>
              }
              sx={{ margin: "0", color: "#fff" }}
            />
            <Button variant="text" size="small" onClick={handlePassword}>
              Forget password
            </Button>
          </Flex>
          <Button variant="contained" size="medium" type="submit">
            Login
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default VerifyEmail;
