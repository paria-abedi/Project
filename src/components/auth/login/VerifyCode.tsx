"use client";
import { colorPalette } from "@/libs/theme";
import { Button, Flex, Typography } from "@/primitives";
import ShittyPetty from "../../../../public/icon/ShittyPetty";
import OTPInput from "react-otp-input";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

const schema = yup.object().shape({
  code: yup
    .string()
    .required("Code is required")
    .matches(/^\d{4}$/, "Code must be exactly 4 digits and only numbers"),
});

const VerifyCode = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { code: "" },
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: { code: string }) => {
    console.log(` ${data.code}`);
    router.push("/");
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
            name="code"
            control={control}
            render={({ field }) => (
              <Flex padding={"32px"}>
                <OTPInput
                  value={field.value}
                  onChange={field.onChange}
                  numInputs={4}
                  renderInput={(props) => (
                    <input
                      {...props}
                      style={{
                        width: "68px",
                        height: "54px",
                        borderRadius: "8px",
                        backgroundColor: "#212121",
                        textAlign: "center",
                        boxShadow: "none",
                        outline: "none",
                        margin: "auto",
                        color: "#888888",
                      }}
                    />
                  )}
                />
                {errors.code && (
                  <Typography
                    variant="caption"
                  color={colorPalette.red[3]}
                    textAlign={"start"}
                    marginLeft={"5px"}
                    marginTop={"12px"}
                  >
                    {errors.code.message}
                  </Typography>
                )}
              </Flex>
            )}
          />

          <Button variant="contained" type="submit">
            Verify
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default VerifyCode;
