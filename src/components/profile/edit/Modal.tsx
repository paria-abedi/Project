import useDeviceType from "@/libs/hooks/useDeviceType";
import { Button, Flex } from "@/primitives";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Drawer, Fade, IconButton, Input, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { colorPalette } from "@/libs/theme";
import SvgClosee from "../../../../public/icon/Closee";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const schema = yup.object().shape({
  oldPassword: yup
    .string()
    .required("Password is required")
    .min(6, "Minimum 6 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Minimum 6 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),
});
const ModalBtn = () => {
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
 const [oldShow,setOldShow]=useState(false);
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
      oldPassword: "",
      password: "",
      confirmPassword: "",
    },
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(data);
    setOpenModal(false);
    setOpen(false);
  };
  const handleShowConfirm = () => {
    setShowConfirm(!showConfirm);
  };
  const handleShow = () => {
    setShow(!show);
  };
  const handleOldShow=()=>{
    setOldShow(!oldShow);
  }

  return (
    <Flex>
      {isMobile ? (
        <>
          <Button
            variant="outlined"
            sx={{
              width: { mobile: "140px", tablet: "145px", laptop: "152px" },
            }}
            onClick={() => setOpen(true)}
          >
            Change Password
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
                padding: "40px 16px",
              },
            }}
          >
            <Flex
              gap={"24px"}
              component="form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Controller
                name="oldPassword"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <>
                    <Input
                      {...field}
                      placeholder="Old Password"
                      type={oldShow ? "text" : "password"}
                  endAdornment={
                    <IconButton onClick={handleOldShow} sx={{ color: "#149DE1" }}>
                      {oldShow ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  }
                      disableUnderline
                      sx={{
                        padding: "11.5px 16px",
                        color: "#888888",
                        backgroundColor: "#212121",
                        borderRadius: "8px",
                      }}
                    />
                    {errors.oldPassword && (
                      <Typography
                        variant="caption"
                        color={colorPalette.red[3]}
                        textAlign={"start"}
                        marginLeft={"5px"}
                      >
                        {errors.oldPassword.message}
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
                      placeholder="New Password "
                      type={show ? "text" : "password"}
                  endAdornment={
                    <IconButton onClick={handleShow} sx={{ color: "#149DE1" }}>
                      {show ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  }
                      disableUnderline
                      sx={{
                        padding: "11.5px 16px",
                        color: "#888888",
                        backgroundColor: "#212121",
                        borderRadius: "8px",
                      }}
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
                      placeholder="Confirm New Password"
                     type={showConfirm ? "text" : "password"}
                  endAdornment={
                    <IconButton onClick={handleShowConfirm} sx={{ color: "#149DE1" }}>
                      {showConfirm ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  }
                      disableUnderline
                      sx={{
                        padding: "11.5px 16px",
                        color: "#888888",
                        backgroundColor: "#212121",
                        borderRadius: "8px",
                      }}
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
              <Flex direction={"row"} width={"100%"} gap={"16px"}>
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
          <Button
            variant="outlined"
            sx={{
              width: { mobile: "136px", tablet: "145px", laptop: "152px" },
            }}
            onClick={() => setOpenModal(true)}
          >
            Change Password
          </Button>
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
                <Typography variant="h2" color={colorPalette.gray[3]}>
                  Change Password
                </Typography>
                <Controller
                  name="oldPassword"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <>
                      <Input
                        {...field}
                        placeholder="Old Password"
                        type={oldShow ? "text" : "password"}
                  endAdornment={
                    <IconButton onClick={handleOldShow} sx={{ color: "#149DE1" }}>
                      {oldShow ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  }
                        disableUnderline
                        sx={{
                          padding: "11.5px 16px",
                          color: "#888888",
                          backgroundColor: "#212121",
                          borderRadius: "8px",
                        }}
                      />
                      {errors.oldPassword && (
                        <Typography
                          variant="caption"
                         color={colorPalette.red[3]}
                          textAlign={"start"}
                          marginLeft={"5px"}
                        >
                          {errors.oldPassword.message}
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
                        placeholder="New Password "
                         type={show ? "text" : "password"}
                  endAdornment={
                    <IconButton onClick={handleShow} sx={{ color: "#149DE1" }}>
                      {show ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  }
                        disableUnderline
                        sx={{
                          padding: "11.5px 16px",
                          color: "#888888",
                          backgroundColor: "#212121",
                          borderRadius: "8px",
                        }}
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
                        placeholder="Confirm New Password"
                         type={showConfirm ? "text" : "password"}
                  endAdornment={
                    <IconButton onClick={handleShowConfirm} sx={{ color: "#149DE1" }}>
                      {showConfirm ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  }
                        disableUnderline
                        sx={{
                          padding: "11.5px 16px",
                          color: "#888888",
                          backgroundColor: "#212121",
                          borderRadius: "8px",
                        }}
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

export default ModalBtn;
