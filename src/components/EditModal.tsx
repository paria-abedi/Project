"use client";
import { useEffect } from "react";
import useDeviceType from "@/libs/hooks/useDeviceType";
import { Flex } from "@/primitives";
import Image from "next/image";
import icon2 from "../../public/img/Frame 5.png";
import {
  Button,
  Drawer,
  Fade,
  IconButton,
  Modal,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SvgClosee from "../../public/icon/Closee";
import { colorPalette } from "@/libs/theme";

const schema = yup.object().shape({
  comment: yup
    .string()
    .required("comment is required")
    .min(10, "Minimum 10 characters"),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EditModal = ({
  comment,
  open,
  onClose,
  onEditComment,
}: {
  comment: { id: string; comment: string };
  open: boolean;
  onClose: () => void;
  onEditComment: (id: string, updatedComment: { comment: string }) => void;
}) => {
  // const [open, setOpen] = useState(false);
  // const [openModal, setOpenModal] = useState(false);
  const { isMobile } = useDeviceType();

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: { comment: comment.comment },
  });

  useEffect(() => {
    if (comment) {
      reset({ comment: comment.comment });
    }
  }, [comment, reset]);

  const onSubmit = (data: { comment: string }) => {
    console.log("SUBMIT CALLED", data.comment);
    onEditComment(comment.id, { comment: data.comment });
    onClose();
  };

  return (
    <Flex>
      {isMobile ? (
        <>
          <Drawer
            anchor="bottom"
            open={open}
            onClose={onClose}
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
                name="comment"
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
              <Flex direction={"row"} gap={"16px"}>
                <Button variant="outlined" fullWidth onClick={onClose}>
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
          <Modal closeAfterTransition open={open} onClose={onClose}>
            <Fade in={open}>
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
                  onClick={onClose}
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
                  name="comment"
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
                <Flex direction={"row"} gap={"16px"} width={"50%"}>
                  <Button variant="outlined" fullWidth onClick={onClose}>
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

export default EditModal;
