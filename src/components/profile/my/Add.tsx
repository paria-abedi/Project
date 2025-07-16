"use client";
import { colorPalette } from "@/libs/theme";
import { Button, Flex, Typography } from "@/primitives";
import { Input, TextareaAutosize, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import Image from "next/image";
import img from "../../../../public/img/uploder.png";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCallback, useState } from "react";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useDropzone } from "react-dropzone";

const schema = yup.object().shape({
  title: yup
    .string()
    .required("Title is required")
    .max(24, "Maximum 24 characters"),
  date: yup
    .string()
    .required("Date is require")
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Date is require"),
  comment: yup
    .string()
    .required("comment is required")
    .min(10, "Minimum 10 characters"),
});
const Add = () => {
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

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      title: "",
      comment: "",
      date: "05/16/2025",
    },
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(data);
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
                name="title"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Flex
                    width={{ mobile: "100%", tablet: "100%", laptop: "50%" }}
                  >
                    <Input
                      {...field}
                      type="text"
                      placeholder="title"
                      disableUnderline
                      sx={{
                        backgroundColor: "#212121",
                        padding: "11.5px 10px 11.5px 16px",
                        borderRadius: "8px",
                        color: "#888888",
                      }}
                    />
                    {errors.title && (
                      <Typography
                        variant="caption"
                       color={colorPalette.red[3]}
                        textAlign={"start"}
                        marginLeft={"5px"}
                      >
                        {errors.title.message}
                      </Typography>
                    )}
                  </Flex>
                )}
              />
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
            </Flex>
            <Flex
              direction={{ mobile: "column", tablet: "column", laptop: "row" }}
              gap={"24px"}
            >
              <Controller
                name="comment"
                defaultValue=""
                control={control}
                render={({ field }) => (
                  <Flex width={"100%"}>
                    <>
                      <TextareaAutosize
                        {...field}
                        aria-label="minimum height"
                        minRows={5}
                        placeholder="Tell us about something that bothers you"
                        style={{
                          width: "100%",
                          backgroundColor: "#212121",
                          color: "#888888",
                          border: "none",
                          fontFamily: "sans-serif",
                          borderRadius: "8px",
                          padding: "16px",
                          outline: "none",
                        }}
                      />

                      {errors.comment && (
                        <Typography
                          variant="caption"
                          color={colorPalette.red[3]}
                          textAlign={"start"}
                          marginLeft={"5px"}
                        >
                          {errors.comment.message}
                        </Typography>
                      )}
                    </>
                  </Flex>
                )}
              />
            </Flex>
            <Flex
              direction={"row"}
              gap={"16px"}
              width={{ mobile: "100%", tablet: "100%", laptop: "10%" }}
            >
              <Button variant="contained" fullWidth type="submit">
                Post
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Add;
{
  /* <Input
                      {...field}
                      type=""
                      placeholder="Tell Us About Something That Bothers You"
                      disableUnderline
                      sx={{
                        backgroundColor: "#212121",
                        padding: "11.5px 10px 11.5px 16px",
                        borderRadius: "8px",
                        color: "#888888",
                      }}
                    /> */
}
