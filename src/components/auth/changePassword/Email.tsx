"use client";
import { colorPalette } from "@/libs/theme";
import { Button, Flex, Typography } from "@/primitives";
import { useRouter } from "next/navigation";
import ShittyPetty from "../../../../public/icon/ShittyPetty";
import SvgEmail from "../../../../public/icon/Email";
import { Input } from "@mui/material";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Enter a valid email address"),
});
const Email = () => {
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<{ email: string }>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const handleLogin = () => {
    router.push("/auth/login/verifyEmail");
  };
  const handleVerify = () => {
    router.push("/auth/changePassword/verify");
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
        onSubmit={handleSubmit(handleVerify)}
        textAlign={"center"}
        gap={"40px"}
        width={"100%"}
        marginY={"auto"}
      >
        <ShittyPetty style={{ margin: "auto" }} />
        <Typography variant="body1" color={colorPalette.gray[1]}>
          Please enter your email and password.
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
          <Flex sx={{ direction: "rtl" }}>
            <Button
              onClick={handleLogin}
              variant="text"
              size="small"
              sx={{ maxWidth: "37px" }}
            >
              Login
            </Button>
          </Flex>
          <Button variant="contained" type="submit">
            Reset Password
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Email;
