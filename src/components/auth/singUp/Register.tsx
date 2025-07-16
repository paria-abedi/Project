"use client";
import { colorPalette } from "@/libs/theme";
import { Button, Flex, Typography } from "@/primitives";
import { useRouter } from "next/navigation";
import ShittyPetty from "../../../../public/icon/ShittyPetty";
import {
 
  IconButton,
  Input,

} from "@mui/material";
import SvgEmail from "../../../../public/icon/Email";
import SvgUser from "../../../../public/icon/User";
import SvgGloby from "../../../../public/icon/globy";
import { useState } from "react";
import SvgPassword from "../../../../public/icon/Password";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SvgValidate from "../../../../public/icon/Validate";
import SvgUnValidate from "../../../../public/icon/UnValidate";
import ModalOrigin from "./ModalOrigin";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  origin: yup.string().required("Origin is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/\d/, "Must include at least one number")
    .matches(/[a-z]/, "Must include lowercase letter")
    .matches(/[A-Z]/, "Must include uppercase letter"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),
});

const Register = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [open, setOpen] = useState(false);

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      origin: "",
      password: "",
      confirmPassword: "",
    },
  });
  const password = watch("password") || "";

  const passwordConditions = {
    length: password.length >= 8,
    number: /\d/.test(password),
    lower: /[a-z]/.test(password),
    upper: /[A-Z]/.test(password),
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderCheck = (condition:any) => (
   <Flex marginTop={'10px'}>
    {condition ? <SvgUnValidate/> : <SvgValidate/>}
   </Flex>
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(data);
    router.push("/auth/singUp/VerifySingUp");
  };
  const handleShowConfirm = () => {
    setShowConfirm(!showConfirm);
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
      marginY={'40px'}
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
          Please fill the below form for registration.
        </Typography>
        <Flex gap={"16px"}>
          <Controller
            name="name"
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
                  type="text"
                  placeholder="Your name"
                  startAdornment={<SvgUser />}
                  disableUnderline
                />
                {errors.name && (
                  <Typography
                    variant="caption"
                    color={colorPalette.red[3]}
                    textAlign={"start"}
                    marginLeft={"5px"}
                  >
                    {errors.name.message}
                  </Typography>
                )}
              </>
            )}
          />
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
            name="origin"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <>
              <Button  onClick={() => setOpen(true)} sx={{
          width: "100%",
          minHeight:'50px',
          backgroundColor: "#212121",
          color: "#888888",
          justifyContent: "start",
          padding: "45px 16px",
          borderRadius: "12px",
        }} startIcon={<SvgGloby />}>
                 {field.value || "Select your origin"}
              </Button>
              <ModalOrigin open={open} onClose={()=>setOpen(false)} onSelect={(country) => field.onChange(country)}/>
                {errors.origin && (
        <Typography
          variant="caption"
          color={colorPalette.red[3]}
          textAlign={"start"}
          marginLeft={"5px"}
        >
          {errors.origin.message}
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
                    marginTop:'-12px'
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
                  placeholder="Confirm new password"
                  startAdornment={<SvgPassword />}
                  type={showConfirm ? "text" : "password"}
                  endAdornment={
                    <IconButton
                      onClick={handleShowConfirm}
                      sx={{ color: "#149DE1" }}
                    >
                      {showConfirm ? <VisibilityIcon /> : <VisibilityOffIcon />}
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

          <Flex>
            <Flex direction={"row"} gap={'8px'}>
            {renderCheck(passwordConditions.length)}
              <Typography
                variant="body1"
                color={colorPalette.gray[4]}
                margin={"8px 0px"}
              >
                At least 8 characters
              </Typography>
            </Flex>
            <Flex direction={"row"} gap={'8px'}>
             {renderCheck(passwordConditions.number)} 
              <Typography
                variant="body1"
                color={colorPalette.gray[4]}
                margin={"8px 0px"}
              >
                At least 1 number
              </Typography>
            </Flex>
            <Flex direction={"row"} gap={'8px'}>
             {renderCheck(passwordConditions.lower && passwordConditions.upper)}
              <Typography
                variant="body1"
                color={colorPalette.gray[4]}
                margin={"8px 0px"}
              >
                Both upper and lower case letters
              </Typography>
            </Flex>
          </Flex>
          <Button variant="contained" type="submit">
            Sing Up
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Register;
