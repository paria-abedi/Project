/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button, Flex, Typography } from "@/primitives";
import Image from "next/image";
import img from "../../../../public/img/uploder.png";
import { colorPalette } from "@/libs/theme";
import {
  Drawer,
  FormControl,
  Input,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useEffect, useState } from "react";
import useDeviceType from "@/libs/hooks/useDeviceType";
import { useRouter } from "next/navigation";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useDropzone } from "react-dropzone";
import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";
import { updateUser } from "@/api/auth/auth";

type User={
  id:string;
  username:string;
  email:string;
  // country:string;
  // password:string;
  gender:string;
  birthday:any;
  avatar:any
}


const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  gender: yup.string().required("Origin is required"),
  date: yup.string().required("Date is required")
});

const Info = () => {
    const [user,setUser]=useState<User | null>(null);
const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  }); 
   useEffect(()=>{
    const cookieUser=Cookies.get("user");
    if(cookieUser){
      try{
        const parsed = JSON.parse(cookieUser);
        setUser(parsed);
        reset({
          name: parsed.username,
          email: parsed.email,
          gender: parsed.gender,
          date: parsed.birthday,
        });
        setPreviewUrl(parsed.avatar);
      }catch(e){
        console.log(e,"Error parsing user cookie")
      }
    }
  },[reset])
  const [open, setOpen] = useState(false);
  const { isMobile } = useDeviceType();
  const router = useRouter();
const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
  const preview = URL.createObjectURL(file);
  setPreviewUrl(preview);
}, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    maxFiles: 1,
  });

  
  const mutation=useMutation({
    mutationFn:(data:User)=>{
       if (!user) throw new Error("User not found");
      return updateUser(user.id, data);
    },
    onSuccess:()=>{
      alert("User updated successfully!");
      router.push("/profile");
    },
    onError: (error: any) => {
      alert("Update failed: " + error.message);
    },
  })
  const onSubmit = (data: any) => {
  const updatedData:User={
    id: user?.id || "",
     username: data.name,
      email: data.email,
      gender: data.gender,
      birthday: data.date,
      avatar: previewUrl,
  };
  console.log(data,"hellooo");
    mutation.mutate(updatedData,{
      onSuccess:()=>{
        Cookies.set("user",JSON.stringify(updatedData));  
      }
    });
    
    
  };

  return (
    <Flex paddingX={"40px"} sx={{ backgroundColor: "#1C1C1C" }}>
      <Flex
        sx={{ backgroundColor: "#161616" }}
        padding={"16px"}
        borderRadius={"24px"}
      >
        <Flex gap={"24px"}>
          <Typography variant="h2" color={colorPalette.gray[3]}>
            Person Info
          </Typography>
          <Flex
  justifyContent={"center"}
  {...getRootProps()}
  width={"15%"}
  margin={"auto"}
  sx={{ cursor: "pointer", flexDirection: "column", alignItems: "center" }}
>
  {previewUrl ? (
    <Image src={previewUrl} alt="uploaded" width={120} height={120} style={{borderRadius:'100%'}}/>
  ) : (
    <Image src={img} alt="placeholder" style={{ margin: "auto" }} />
  )}

  <input {...getInputProps()} />
</Flex>
          <Flex
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            width={"100%"}
            gap={"24px"}
          >
            <Flex
              direction={{ mobile: "column", tablet: "column", laptop: "row" }}
              gap={"24px"}
              width={"100%"}
            >
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Flex
                    width={{ mobile: "100%", tablet: "100%", laptop: "50%" }}
                  >
                    <Input
                      {...field}
                      type="text"
                      placeholder="Stive Margry"
                      disableUnderline
                      sx={{
                        backgroundColor: "#212121",
                        padding: "11.5px 10px 11.5px 16px",
                        borderRadius: "8px",
                        color: "#888888",
                      }}
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
                  </Flex>
                )}
              />

              <Controller
                name="gender"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <>
                    {isMobile ? (
                      <>
                        <Button
                          onClick={() => setOpen(true)}
                          sx={{
                            width: "100%",
                            backgroundColor: "#212121",
                            color: "#888888",
                            justifyContent: "flex-start",
                            padding: "12px 16px",
                            borderRadius: "12px",
                          }}
                        >
                          {field.value || "select your gender"}
                        </Button>
                        <Drawer
                          anchor="bottom"
                          open={open}
                          onClose={() => setOpen(false)}
                          PaperProps={{
                            sx: {
                              borderTopLeftRadius: "24px",
                              borderTopRightRadius: "24px",
                              backgroundColor: "#161616",
                              padding: "16px",
                            },
                          }}
                        >
                          <Flex>
                            {["Male", "Female", "Other "].map((option) => (
                              <MenuItem
                                key={option}
                                onClick={() => {
                                  field.onChange(option);
                                  setOpen(false);
                                }}
                                sx={{
                                  backgroundColor: "#212121",
                                  margin: "12px 0",
                                  borderRadius: "24px",
                                  color: "#FFFFFF",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 1,
                                }}
                              >
                                <span>{option}</span>
                              </MenuItem>
                            ))}
                          </Flex>
                        </Drawer>
                      </>
                    ) : (
                      <FormControl
                        sx={{
                          backgroundColor: "#212121",
                          borderRadius: "8px",
                          width: {
                            laptop: "50%",
                            tablet: "100%",
                            mobile: "100%",
                          },
                        }}
                      >
                        <Select
                          {...field}
                          displayEmpty
                          sx={{
                            backgroundColor: "#212121",
                            color: "#FFFFFF",
                            "& .MuiSelect-icon": { color: "#FFFFFF" },
                            position: "relative",
                          }}
                          MenuProps={{
                            PaperProps: {
                              sx: {
                                backgroundColor: "#161616",
                                color: "#FFFFFF",
                                "& .MuiMenuItem-root": {
                                  backgroundColor: "#212121",
                                  borderRadius: "24px",
                                  margin: "18px 16px",
                                  "&.Mui-selected": {
                                    backgroundColor: "#212121",
                                    borderRadius: "24px",
                                    "&:hover": {
                                      backgroundColor: "#212121",
                                    },
                                  },
                                  "&:hover": {
                                    backgroundColor: "#333333",
                                  },
                                },
                              },
                            },
                          }}
                          renderValue={(selected) => (
                            <Flex direction={"row"} gap={"6px"}>
                              <span style={{ padding: "2px 0px" }}>
                                {selected || <em>Select your origin</em>}
                              </span>
                            </Flex>
                          )}
                        >
                          <MenuItem
                            value=""
                            disabled
                            sx={{ backgroundColor: "#212121" }}
                          >
                            <em>Select your origin</em>
                          </MenuItem>
                          <MenuItem value="Male">Male</MenuItem>
                          <MenuItem value="Female">Female</MenuItem>
                          <MenuItem value="Other"> Other</MenuItem>
                        </Select>
                      </FormControl>
                    )}
                  </>
                )}
              />
            </Flex>
            <Flex
              direction={{ mobile: "column", tablet: "column", laptop: "row" }}
              gap={"24px"}
            >
              {/* date fild */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Controller
                  name="date"
                  control={control}
                  render={({ field }) => (
                    <DesktopDatePicker
                      value={field.value ? dayjs(field.value) : null}
                      onChange={(newDate) =>
                        field.onChange(newDate?.format("YYYYMMDD"))
                      }
                      enableAccessibleFieldDOMStructure={false}
                      slots={{
                        textField: TextField,
                      }}
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          variant: "standard",
                          InputProps: {
                            disableUnderline: true,
                            sx: {
                              backgroundColor: "#212121",
                              borderRadius: "12px",
                              color: "#FFFFFF",
                            },
                          },
                          inputProps: {
                            style: {
                              color: "#888888",
                            },
                          },
                          sx: {
                            width: {
                              mobile: "100%",
                              tablet: "100%",
                              laptop: "50%",
                              borderRadius: "12px",
                              color: "#888888",
                            },
                          },
                        },
                        popper: {
                          sx: {
                            "& .MuiPaper-root": {
                              backgroundColor: "#161616",
                              color: "#FFFFFF",
                              borderRadius: "12px",
                              padding: "8px",
                            },
                            "& .MuiPickersDay-root": {
                              borderRadius: "50%",
                              color: "#FFFFFF",
                              "&.Mui-selected": {
                                color: "#161616",
                                backgroundColor: "#149DE1",
                              },
                            },
                            "& .MuiPickersCalendarHeader-root": {
                              color: "#888888",
                            },
                            "& .MuiPickersCalendarHeader-switchViewButton": {
                              color: "#888888",
                            },
                            "& .MuiDayCalendar-weekDayLabel": {
                              color: "#FFFFFF",
                            },
                            "& .MuiPickersDay-root.MuiPickersDay-today": {
                              border: "1px solid #149DE1",
                            },
                            "& .MuiPickersArrowSwitcher-button": {
                              color: "#888888",
                            },
                          },
                        },
                      }}
                    />
                  )}
                />
              </LocalizationProvider>
              <Controller
                name="email"
                defaultValue=""
                control={control}
                render={({ field }) => (
                  <Flex
                    width={{ mobile: "100%", tablet: "100%", laptop: "50%" }}
                  >
                    <Input
                      {...field}
                      type="email"
                      placeholder="1996/25/02"
                      disableUnderline
                      sx={{
                        backgroundColor: "#212121",
                        padding: "11.5px 10px 11.5px 16px",
                        borderRadius: "8px",
                        color: "#888888",
                      }}
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
                  </Flex>
                )}
              />
            </Flex>
            <Flex
              direction={"row"}
              gap={"16px"}
              width={{ mobile: "100%", tablet: "100%", laptop: "30%" }}
            >
              <Button variant="outlined" fullWidth>
                Cancel
              </Button>
              <Button variant="contained" fullWidth type="submit">
                Submit
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Info;
