"use client";
import { Button, Flex, Typography } from "@/primitives";
import { IconButton } from "@mui/material";
import SvgVector from "../../../public/icon/Vector";
import { colorPalette } from "@/libs/theme";
import Image from "next/image";
import img from "../../../public/img/Frame 18.png";
import icon from "../../../public/img/icon.png";
import SvgPlus from "../../../public/icon/Plus";
import SvgMore from "../../../public/icon/More";
import SvgSee from "../../../public/icon/See";
import SvgDisLike from "../../../public/icon/DisLike";
import SvgLike from "../../../public/icon/Like";
import SvgReply from "../../../public/icon/Reply";
import { useRouter } from "next/navigation";
import ModalBtn from "./edit/Modal";
import { useComments } from "@/libs/hooks/useComment";
import { useMemo } from "react";
const userId = "user-1234";
const Profile = () => {
   const { allComments, isFetchingNextPage } = useComments();
  const myComments = useMemo(
    () => allComments.filter((comment) => comment.userId === userId),
    [allComments]
  );
   const firstComment = myComments[0];
  const router = useRouter();
  const handleEdit = () => {
    router.push("/profile/info");
  };
  const handleVote = () => {
    router.push("/profile/vote");
  };
  const handleComment = () => {
    router.push("/profile/comment");
  };
  const handleSubmission = () => {
    router.push("/profile/submissions");
  };
  const handleDonation = () => {
    router.push("/profile/donation");
  };
  const handleDonate = () => {
    router.push("/profile/donate");
  };

  return (
    <Flex
      sx={{ backgroundColor: "#161616" }}
      gap={"24px"}
      padding={{
        mobile: "16px",
        tablet: "16px",
        laptop: "24px 40px 27px 24px",
      }}
      borderRadius={"24px"}
      position={"relative"}
    >
      <IconButton
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px",
          borderRadius: "full",
          backgroundColor: "#212121",
        }}
        onClick={handleEdit}
      >
        <SvgVector />
      </IconButton>
      {/* info Person */}
      <Flex gap={"24px"}>
        <Typography variant="h2" color={colorPalette.gray[3]}>
          Personal Info
        </Typography>
        <Flex
          width={"100%"}
          direction={{ mobile: "column", tablet: "column", laptop: "row" }}
        >
          <Flex
            width={{ mobile: "100%", tablet: "100%", laptop: "45%" }}
            direction={{ mobile: "column", tablet: "column", laptop: "row" }}
            gap={{ mobile: "24px", tablet: "24px", laptop: "32px" }}
          >
            <Flex
              margin={{ mobile: "auto", tablet: "auto", laptop: "0px" }}
              paddingTop={"12px"}
            >
              <Image src={img} alt="Icon" />
            </Flex>
            <Flex
              marginY={{ mobile: "0px", tablet: "0px", laptop: "15px" }}
              gap={{ mobile: "24px", tablet: "24px", laptop: "16px" }}
            >
              <Flex
                direction={"row"}
                gap={"4px"}
                justifyContent={{
                  mobile: "space-between",
                  tablet: "space-between",
                  laptop: "start",
                }}
              >
                <Typography variant="body2" color={colorPalette.gray[4]}>
                  Your name
                </Typography>
                <Typography variant="body2" color={colorPalette.gray[1]}>
                  Stive Margry
                </Typography>
              </Flex>
              <Flex
                direction={"row"}
                gap={"4px"}
                justifyContent={{
                  mobile: "space-between",
                  tablet: "space-between",
                  laptop: "start",
                }}
              >
                <Typography variant="body2" color={colorPalette.gray[4]}>
                  Gender
                </Typography>
                <Typography variant="body2" color={colorPalette.gray[1]}>
                  Male
                </Typography>
              </Flex>
            </Flex>
            <Flex
              marginY={{ mobile: "0px", tablet: "0px", laptop: "15px" }}
              gap={{ mobile: "24px", tablet: "24px", laptop: "16px" }}
            >
              <Flex
                direction={"row"}
                gap={"4px"}
                justifyContent={{
                  mobile: "space-between",
                  tablet: "space-between",
                  laptop: "start",
                }}
              >
                <Typography variant="body2" color={colorPalette.gray[4]}>
                  Date Of Birth
                </Typography>
                <Typography variant="body2" color={colorPalette.gray[1]}>
                  1996/25/02
                </Typography>
              </Flex>
              <Flex
                direction={"row"}
                gap={"4px"}
                justifyContent={{
                  mobile: "center",
                  tablet: "center",
                  laptop: "start",
                }}
              >
                <Typography
                  variant="body2"
                  color={colorPalette.gray[4]}
                  display={{ mobile: "none", tablet: "none", laptop: "flex" }}
                >
                  Email
                </Typography>
                <Typography variant="body2" color={colorPalette.gray[1]}>
                  Example@gmail.com
                </Typography>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            width={{ mobile: "100%", tablet: "100%", laptop: "55%" }}
            direction="row"
            justifyContent={"end"}
            paddingY={{ mobile: "24px", tablet: "24px", laptop: "32px" }}
          >
            <Flex
              width={{ mobile: "100%", tablet: "100%", laptop: "80%" }}
              direction="row"
              gap={{ mobile: "24px", tablet: "24px", laptop: "16px" }}
              justifyContent={{
                mobile: "center",
                tablet: "center",
                laptop: "end",
              }}
            >
              <ModalBtn />
              <Button
                variant="contained"
                sx={{
                  width: { mobile: "140px", tablet: "145px", laptop: "152px" },
                }}
                onClick={handleDonate}
              >
                Donate
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        width={"100%"}
        direction={{ mobile: "column", tablet: "column", laptop: "row" }}
        gap={"24px"}
      >
        {/* my submission */}
        <Flex
          sx={{ backgroundColor: "#212121" }}
          borderRadius={"24px"}
          width={{ mobile: "100%", tablet: "100%", laptop: "70%" }}
          padding={{ mobile: "16px", tablet: "16px", laptop: "24px" }}
          position={"relative"}
          gap={"24px"}
        >
          <IconButton sx={{ position: "absolute", top: "10px", right: "10px" }}>
            <SvgPlus />
          </IconButton>
          <Typography variant="h2" color={colorPalette.gray[3]}>
            My Submissions
          </Typography>
          <Flex
            justifyContent={"space-between"}
            padding={"16px"}
            sx={{ backgroundColor: "#161616" }}
            borderRadius={"24px"}
            direction={"row"}
          >
            <Flex direction={"row"} gap={"16px"}>
              <Flex>
                <Image src={icon} alt="icon" style={{ margin: "auto" }} />
              </Flex>
              <Flex gap={"8px"}>
                <Typography variant="body2" color={colorPalette.gray[1]}>
                  Nova Scope
                </Typography>
                <Flex direction={"row"} gap={"8px"}>
                  <Typography variant="body2" color={colorPalette.blue[1]}>
                    P
                  </Typography>
                  <Typography variant="body2" color={colorPalette.gray[1]}>
                    24
                  </Typography>
                  <Typography variant="body2" color={colorPalette.blue[1]}>
                    S
                  </Typography>
                  <Typography variant="body2" color={colorPalette.gray[1]}>
                    24
                  </Typography>
                </Flex>
              </Flex>
            </Flex>
            <IconButton
              sx={{
                borderRadius: "full",
                width: "32px",
                height: "32px",
                marginY: "auto",
                backgroundColor: "#212121",
              }}
            >
              <SvgMore />
            </IconButton>
          </Flex>
          <Flex
            justifyContent={"space-between"}
            padding={"16px"}
            sx={{ backgroundColor: "#161616" }}
            borderRadius={"24px"}
            direction={"row"}
          >
            <Flex direction={"row"} gap={"16px"}>
              <Flex>
                <Image src={icon} alt="icon" style={{ margin: "auto" }} />
              </Flex>
              <Flex gap={"8px"}>
                <Typography variant="body2" color={colorPalette.gray[1]}>
                  Nova Scope
                </Typography>
                <Flex direction={"row"} gap={"8px"}>
                  <Typography variant="body2" color={colorPalette.blue[1]}>
                    P
                  </Typography>
                  <Typography variant="body2" color={colorPalette.gray[1]}>
                    24
                  </Typography>
                  <Typography variant="body2" color={colorPalette.blue[1]}>
                    S
                  </Typography>
                  <Typography variant="body2" color={colorPalette.gray[1]}>
                    24
                  </Typography>
                </Flex>
              </Flex>
            </Flex>
            <IconButton
              sx={{
                borderRadius: "full",
                width: "32px",
                height: "32px",
                marginY: "auto",
                backgroundColor: "#212121",
              }}
            >
              <SvgMore />
            </IconButton>
          </Flex>
          <Flex width={"100%"} sx={{ direction: "rtl" }}>
            <Flex width={{ mobile: "50%", tablet: "50%", laptop: "15%" }}>
              <Button
                variant="text"
                sx={{ gap: "8px" }}
                onClick={handleSubmission}
              >
                <SvgSee />
                See All
              </Button>
            </Flex>
          </Flex>
        </Flex>
        {/* my Comment */}
        <Flex
          sx={{ backgroundColor: "#212121" }}
          borderRadius={"24px"}
          width={{ mobile: "100%", tablet: "100%", laptop: "30%" }}
          padding={"16px"}
          gap={"24px"}
          position={"relative"}
        >
          <Typography variant="h2" color={colorPalette.gray[3]}>
            My Comment
          </Typography>
          {!firstComment && !isFetchingNextPage ?(<Typography>No Comments added</Typography>):(
            <>
            <Flex
            sx={{ backgroundColor: "#161616" }}
            borderRadius={"16px"}
            padding={"16px"}
            gap={"10px"}
          >
            <Flex direction={"row"} padding={"4px"} gap={"10px"}>
              <Flex>
                <Image src={firstComment.avatar}
                alt="avatar"
                width={32}
                height={32}
                style={{ borderRadius: "100%" }} />
              </Flex>
              <Flex>
                <Typography variant="body2" color={colorPalette.gray[1]}>
                  {firstComment.name}
                </Typography>
                <Typography variant="caption" color={colorPalette.gray[4]}>
                 {firstComment.country}
                </Typography>
              </Flex>
            </Flex>
            <Typography variant="body2" color={colorPalette.gray[3]}>
             {firstComment.comment}
            </Typography>
            <Flex direction={"row"} justifyContent={"end"}>
              <IconButton
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
              <IconButton
                sx={{
                  backgroundColor: "#141414",
                  borderRadius: "32px",
                  gap: "10px",
                }}
              >
                <SvgLike />
                <Typography variant="body2" color={colorPalette.gray[1]}>
                  80
                </Typography>
              </IconButton>
              <IconButton
                sx={{
                  backgroundColor: "#141414",
                  borderRadius: "32px",
                  gap: "10px",
                }}
              >
                <SvgDisLike />
                <Typography variant="body2" color={colorPalette.gray[1]}>
                  80
                </Typography>
              </IconButton>
            </Flex>
          </Flex></>
          )}
          <Flex width={"100%"} sx={{ direction: "rtl" }}>
            <Flex width={{ mobile: "50%", tablet: "50%", laptop: "25%" }}>
              <Button
                variant="text"
                sx={{ gap: "8px" }}
                onClick={handleComment}
              >
                <SvgSee />
                See All
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap={"24px"}
        width={"100%"}
        direction={{ mobile: "column", tablet: "column", laptop: "row" }}
      >
        {/* my vote */}
        <Flex
          sx={{ backgroundColor: "#212121" }}
          borderRadius={"24px"}
          width={{ mobile: "100%", tablet: "100%", laptop: "70%" }}
          padding={{ mobile: "16px", tablet: "16px", laptop: "24px" }}
          position={"relative"}
          gap={"24px"}
        >
          <Typography variant="h2" color={colorPalette.gray[3]}>
            My Vote
          </Typography>
          <Flex
            justifyContent={"space-between"}
            padding={"16px"}
            sx={{ backgroundColor: "#161616" }}
            borderRadius={"24px"}
            direction={"row"}
          >
            <Flex direction={"row"} gap={"16px"}>
              <Flex>
                <Image src={icon} alt="icon" style={{ margin: "auto" }} />
              </Flex>
              <Flex gap={"8px"}>
                <Typography variant="body2" color={colorPalette.gray[1]}>
                  Nova Scope
                </Typography>
                <Flex direction={"row"} gap={"8px"}>
                  <Typography variant="body2" color={colorPalette.blue[1]}>
                    P
                  </Typography>
                  <Typography variant="body2" color={colorPalette.gray[1]}>
                    24
                  </Typography>
                  <Typography variant="body2" color={colorPalette.blue[1]}>
                    S
                  </Typography>
                  <Typography variant="body2" color={colorPalette.gray[1]}>
                    24
                  </Typography>
                </Flex>
              </Flex>
            </Flex>
            <IconButton
              sx={{
                borderRadius: "full",
                width: "32px",
                height: "32px",
                marginY: "auto",
                backgroundColor: "#212121",
              }}
            >
              <SvgMore />
            </IconButton>
          </Flex>
          <Flex
            justifyContent={"space-between"}
            padding={"16px"}
            sx={{ backgroundColor: "#161616" }}
            borderRadius={"24px"}
            direction={"row"}
          >
            <Flex direction={"row"} gap={"16px"}>
              <Flex>
                <Image src={icon} alt="icon" style={{ margin: "auto" }} />
              </Flex>
              <Flex gap={"8px"}>
                <Typography variant="body2" color={colorPalette.gray[1]}>
                  Nova Scope
                </Typography>
                <Flex direction={"row"} gap={"8px"}>
                  <Typography variant="body2" color={colorPalette.blue[1]}>
                    P
                  </Typography>
                  <Typography variant="body2" color={colorPalette.gray[1]}>
                    24
                  </Typography>
                  <Typography variant="body2" color={colorPalette.blue[1]}>
                    S
                  </Typography>
                  <Typography variant="body2" color={colorPalette.gray[1]}>
                    24
                  </Typography>
                </Flex>
              </Flex>
            </Flex>
            <IconButton
              sx={{
                borderRadius: "full",
                width: "32px",
                height: "32px",
                marginY: "auto",
                backgroundColor: "#212121",
              }}
            >
              <SvgMore />
            </IconButton>
          </Flex>
          <Flex width={"100%"} sx={{ direction: "rtl" }}>
            <Flex width={{ mobile: "50%", tablet: "50%", laptop: "15%" }}>
              <Button variant="text" sx={{ gap: "8px" }} onClick={handleVote}>
                <SvgSee />
                See All
              </Button>
            </Flex>
          </Flex>
        </Flex>
        {/* my donation */}
        <Flex
          sx={{ backgroundColor: "#212121" }}
          borderRadius={"24px"}
          width={{ mobile: "100%", tablet: "100%", laptop: "30%" }}
          padding={{ mobile: "16px", tablet: "16px", laptop: "24px" }}
          gap={"24px"}
          position={"relative"}
        >
          <IconButton sx={{ position: "absolute", top: "10px", right: "10px" }}>
            <SvgPlus />
          </IconButton>
          <Typography variant="h2" color={colorPalette.gray[3]}>
            My Donation
          </Typography>
          <Flex gap={"12px"}>
            <Flex
              direction={"row"}
              padding={"16px"}
              justifyContent={"space-between"}
              sx={{ backgroundColor: "#161616" }}
              borderRadius={"24px"}
            >
              <Typography variant="body2" color={colorPalette.gray[1]}>
                24 USDT
              </Typography>
              <Typography variant="h5" color={colorPalette.gray[1]}>
                24 May 2024
              </Typography>
            </Flex>
          </Flex>
          <Flex width={"100%"} sx={{ direction: "rtl" }}>
            <Flex width={{ mobile: "50%", tablet: "50%", laptop: "30%" }}>
              <Button
                variant="text"
                sx={{ gap: "8px" }}
                onClick={handleDonation}
              >
                <SvgSee />
                See All
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex display={{ mobile: "flex", tablet: "flex", laptop: "none" }}>
        <Button variant="contained">Log Out</Button>
      </Flex>
    </Flex>
  );
};

export default Profile;
