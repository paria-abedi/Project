"use client";
import useDeviceType from "@/libs/hooks/useDeviceType";
import { Flex } from "@/primitives";
import Image from "next/image";
import icon2 from "../../public/img/Frame 5.png";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Drawer,
  Fade,
  IconButton,
  Modal,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import SvgClosee from "../../public/icon/Closee";
import { colorPalette } from "@/libs/theme";
import SvgReply from "../../public/icon/Reply";
const schema = yup.object().shape({
  Reply: yup
    .string()
    .required("Reply is required")
    .min(10, "Minimum 10 characters"),
});
const ReplyModal = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { isMobile } = useDeviceType();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      Reply: "",
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(data);
    setOpen(false);
    setOpenModal(false);
  };
  return (
    <Flex>
      {isMobile ? (
        <>
          <IconButton
            onClick={() => setOpen(true)}
            sx={{
              backgroundColor: "#141414",
              borderRadius: "32px",
              gap: "10px",
            }}
          >
            <SvgReply />
            <Typography variant="body2" color={colorPalette.gray[1]}>
              80
            </Typography>
          </IconButton>
          <Drawer
            anchor="bottom"
            open={open}
            onClose={() => setOpen(false)}
            PaperProps={{
              sx: {
                borderTopLeftRadius: "24px",
                borderTopRightRadius: "24px",
                backgroundColor: "#161616",
                padding: "40px 16px",
              },
            }}
          >
            <Flex
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              gap={"24px"}
            >
              <Flex direction={"row"} padding={"4px"} gap={"10px"}>
                <Flex>
                  <Image src={icon2} alt="icon2" />
                </Flex>
                <Flex>
                  <Typography variant="body2" color={colorPalette.gray[1]}>
                    Sara Rose
                  </Typography>
                  <Typography variant="caption" color={colorPalette.gray[4]}>
                    Hongkong, China
                  </Typography>
                </Flex>
              </Flex>
              <Controller
                name="Reply"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Flex>
                    <>
                      <TextareaAutosize
                        {...field}
                        aria-label="minimum height"
                        minRows={5}
                        placeholder="Type Reply for this Comment"
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
                      {errors.Reply && (
                        <Typography
                          variant="caption"
                          color={colorPalette.red[3]}
                          textAlign={"start"}
                          marginLeft={"5px"}
                        >
                          {errors.Reply.message}
                        </Typography>
                      )}
                    </>
                  </Flex>
                )}
              />
              <Flex direction={"row"} gap={"16px"}>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
                <Button variant="contained" fullWidth type="submit">
                  submit
                </Button>
              </Flex>
            </Flex>
          </Drawer>
        </>
      ) : (
        <>
          <IconButton
            sx={{
              backgroundColor: "#141414",
              borderRadius: "32px",
              gap: "10px",
            }}
            onClick={() => setOpenModal(true)}
          >
            <SvgReply />
            <Typography variant="body2" color={colorPalette.gray[1]}>
              80
            </Typography>
          </IconButton>
          <Modal
            closeAfterTransition
            open={openModal}
            onClose={() => setOpenModal(false)}
          >
            <Fade in={openModal}>
              <Flex
                component="form"
                borderRadius={"24px"}
                gap={"24px"}
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 590,
                  backgroundColor: "#161616",
                  boxShadow: 24,
                  padding: "16px 24px 24px 24px",
                }}
              >
                <IconButton
                  onClick={() => setOpenModal(false)}
                  sx={{ position: "absolute", top: "4px", right: "4px" }}
                >
                  <SvgClosee />
                </IconButton>
                <Flex direction={"row"} padding={"4px"} gap={"10px"}>
                  <Flex>
                    <Image src={icon2} alt="icon2" />
                  </Flex>
                  <Flex>
                    <Typography variant="body2" color={colorPalette.gray[1]}>
                      Sara Rose
                    </Typography>
                    <Typography variant="caption" color={colorPalette.gray[4]}>
                      Hongkong, China
                    </Typography>
                  </Flex>
                </Flex>
                <Controller
                  name="Reply"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Flex>
                      <>
                        <TextareaAutosize
                          {...field}
                          aria-label="minimum height"
                          minRows={5}
                          placeholder="Your opinion as Sara Rose?"
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
                        {errors.Reply && (
                          <Typography
                            variant="caption"
                            color={colorPalette.red[3]}
                            textAlign={"start"}
                            marginLeft={"5px"}
                          >
                            {errors.Reply.message}
                          </Typography>
                        )}
                      </>
                    </Flex>
                  )}
                />
                <Flex direction={"row"} gap={"16px"} width={"50%"}>
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => setOpenModal(false)}
                  >
                    Cancel
                  </Button>
                  <Button variant="contained" fullWidth type="submit">
                    submit
                  </Button>
                </Flex>
              </Flex>
            </Fade>
          </Modal>
        </>
      )}
    </Flex>
  );
};

export default ReplyModal;
