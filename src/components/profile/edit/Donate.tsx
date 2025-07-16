"use client";
import { Button, Flex, Typography } from "@/primitives";
import Image from "next/image";
import img from "../../../../public/img/tether-usdt-logo 1.png";
import code from "../../../../public/img/image 3.png";
import { colorPalette } from "@/libs/theme";
import Link from "next/link";
import { Input } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import SvgUploder from "../../../../public/icon/Uploder";

const Donate = () => {
  const [fileName, setFileName] = useState(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onDrop = useCallback((acceptedFiles: any) => {
    if (acceptedFiles.length > 0) {
      setFileName(acceptedFiles[0].name);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
      "application/pdf": [],
    },
    maxFiles: 2,
  });
  return (
    <Flex padding={"24px 40px"} sx={{ backgroundColor: "#1C1C1C" }}>
      <Flex
        padding={{ mobile: "0px", tablet: "0px", laptop: "16px" }}
        sx={{ backgroundColor: "#161616" }}
        borderRadius={"24px"}
      >
        <Flex
          padding={"16px 16px 32px 16px"}
          sx={{ backgroundColor: "#212121" }}
          gap={"16px"}
          borderRadius={"24px"}
          marginBottom={"50px"}
        >
          <Typography variant="h2" color={colorPalette.gray[3]}>
            Donate via Cryptocurrency
          </Typography>
          <Typography variant="body2" color={colorPalette.gray[3]}>
            Your donation helps us register and support individuals in need.
            Every contribution makes a difference.
          </Typography>
          <Flex direction={"row"} gap={"10px"} width={"100%"}>
            <Image src={img} alt="img" />
            <Typography variant="h2" color={colorPalette.gray[3]}>
              Tether TRC20
            </Typography>
          </Flex>
          <Flex direction={"row"} gap={"10px"}>
            <Image src={code} alt="img"/>

            <Flex marginY={"auto"}>
              <Link href={"/profile"}>
                <Typography
                  display={{ mobile: "none", tablet: "none", laptop: "flex" }}
                  variant="body2"
                  color={colorPalette.blue[1]}
                  marginY={"auto"}
                >
                  as8vasv1a68sv4a6s5v1a6s8v4a6s5v1a6sv41a69s8v4a6s5v1as658va
                </Typography>
              </Link>
            </Flex>
            <Flex marginY={"auto"}>
              <Link href={"/profile"}>
                <Typography
                  display={{ mobile: "flex", tablet: "flex", laptop: "none" }}
                  variant="body2"
                  color={colorPalette.blue[1]}
                  marginY={"auto"}
                >
                  as8vasv1a68sv4a6s5
                  <br />
                  v1a6s8v4a6s5v1a6sv
                  <br />
                  41a69s8v4a6s5v1as6
                  <br />
                  58va
                </Typography>
              </Link>
            </Flex>
          </Flex>
          <Input
            disableUnderline
            placeholder="Amount"
            sx={{
              display: { mobile: "flex", tablet: "flex", laptop: "none" },
              borderRadius: "8px",
              padding: "11.5px 16px",
              backgroundColor: "#161616",
              color: "#888888",
            }}
          />
          <Typography variant="body1" color={colorPalette.gray[3]}>
            Receipt
          </Typography>
          <Flex
            {...getRootProps()}
            width={{ mobile: "100%", tablet: "100%", laptop: "25%" }}
            border={"2px dashed #888888"}
            borderRadius={"16px"}
            padding={"30.5px 22px"}
            textAlign={"center"}
            justifyContent={"center"}
            color={"#888888"}
            sx={{
              cursor: "pointer",
            }}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <Typography>Upload here</Typography>
            ) : (
              <Flex gap={"10px"}>
                <SvgUploder style={{ margin: "auto" }} />
                <Typography>Upload your transaction receipt here</Typography>
              </Flex>
            )}
            {fileName && (
              <Typography style={{ marginTop: 20, fontWeight: "bold" }}>
                selected File: {fileName}
              </Typography>
            )}
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
  );
};

export default Donate;
