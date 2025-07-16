"use client";
import { colorPalette } from "@/libs/theme";
import { Button, Flex, Typography } from "@/primitives";
import ShittyPetty from "../../../../public/icon/ShittyPetty";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton, Input } from "@mui/material";
import SvgPassword from "../../../../public/icon/Password";
import { useState } from "react";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

const schema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

const Confirm = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<{ password: string; confirmPassword: string }>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const handleShowConfirm = () => {
    setShowConfirm(!showConfirm);
  };
  const handleShow = () => {
    setShow(!show);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    router.push("/auth/login/verifyEmail");
    console.log("Form submitted:", data);
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
        onSubmit={handleSubmit(onSubmit)}
        textAlign={"center"}
        gap={"40px"}
        width={"100%"}
        marginY={"auto"}
      >
        <ShittyPetty style={{ margin: "auto" }} />
        <Typography variant="body1" color={colorPalette.gray[1]}>
          Please enter the code receive by email.
        </Typography>
        <Flex gap={"16px"}>
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
                  placeholder="Enter new password"
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

          <Controller
            name="confirmPassword"
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
                    <IconButton
                      onClick={handleShowConfirm}
                      sx={{ color: "#149DE1" }}
                    >
                      {show ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  }
                  disableUnderline
                />
                {errors.confirmPassword && (
                  <Typography
                    variant="caption"
                    color={colorPalette.red[3]}
                    textAlign={"start"}
                    marginLeft={"5px"}
                  >
                    {errors.confirmPassword.message}
                  </Typography>
                )}
              </>
            )}
          />

          <Button variant="contained" type="submit">
            Reset Password
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Confirm;
