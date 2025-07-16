"use client";
import { Flex, Typography } from "@/primitives";
import Image from "next/image";
import img1 from "../../public/img/desktop.png";
import { colorPalette } from "@/libs/theme";
import { IconButton } from "@mui/material";
import SvgDisLike from "../../public/icon/DisLike";
import SvgLike from "../../public/icon/Like";
import SvgLeftIcon from "../../public/icon/LeftIcon";
import SvgRightIcon from "../../public/icon/RightIcon";
import MainModal from "./MainModal";
import { useEffect, useRef, useState } from "react";

import ReplyModal from "./ReplyModal";

import { useComments } from "@/libs/hooks/useComment";

const MainPage = () => {
  const {
    allComments,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    addComment,
  } = useComments();
  const [shetty, setShetty] = useState(10);
  const [petty, setPetty] = useState(10);
  const [like, setLike] = useState(false);
  const [disLike, setDisLike] = useState(false);
  const handleShetty = () => {
    if (disLike) {
      setShetty(shetty - 1);
    } else {
      setShetty(shetty + 1);
    }
    setDisLike(!disLike);
  };
  const handlePetty = () => {
    if (like) {
      setPetty(petty - 1);
    } else {
      setPetty(petty + 1);
    }
    setLike(!like);
  };

  const loadMoreRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });
    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
    return () => {
      if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
    };
  }, [hasNextPage, fetchNextPage]);

  return (
    <Flex
      width={"100%"}
      direction={{ mobile: "column", table: "column", laptop: "row" }}
      position={"relative"}
      padding={{
        mobile: "24px 16px",
        tablet: "24px 16px",
        laptop: "24px 40px",
      }}
      sx={{ backgroundColor: "#1C1C1C" }}
    >
      {/* left Section */}
      <Flex
        width={{ tablet: "100%", laptop: "52%" }}
        zIndex={1}
        position={"relative"}
        borderRadius={"24px"}
      >
        <Image
          src={img1}
          alt="img1"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: "24px",
            borderBottomLeftRadius: "24px",
            borderTopRightRadius: "24px",
          }}
        />
        <Flex
          width={"100%"}
          position={"absolute"}
          bottom={"0px"}
          zIndex={2}
          height={"33%"}
          sx={{
            background: `linear-gradient(to top, rgba(20,157,225,1) 0%,
            rgba(20,157,225,0.35) 50%,
            rgba(20,157,225,0) 100%)`,
          }}
        />
        <Flex
          zIndex={3}
          position={"absolute"}
          top={"24px"}
          left={"24px"}
          gap={"6px"}
        >
          <Typography variant="h2" color={colorPalette.gray[1]}>
            Nova Scope
          </Typography>
          <Typography variant="body2" color={colorPalette.gray[1]}>
            240 year old
          </Typography>
        </Flex>

        <Flex
          direction={"row"}
          gap={"10px"}
          marginY={"auto"}
          zIndex={3}
          position={"absolute"}
          borderRadius={"32px"}
          sx={{ backgroundColor: "#141414" }}
          bottom={"24px"}
          right={"40px"}
        >
          <Typography
            variant="body2"
            padding={"2px 0px 2px 8px"}
            color={colorPalette.blue[1]}
          >
            S
          </Typography>
          <Typography
            variant="body2"
            color={colorPalette.gray[1]}
            paddingY={"2px"}
          >
            {shetty}
          </Typography>
          <IconButton onClick={handleShetty}>
            <SvgRightIcon />
          </IconButton>
        </Flex>

        <Flex
          direction={"row"}
          gap={"10px"}
          marginY={"auto"}
          zIndex={2}
          position={"absolute"}
          borderRadius={"32px"}
          sx={{ backgroundColor: "#141414" }}
          bottom={"24px"}
          left={"40px"}
        >
          <IconButton onClick={handlePetty}>
            <SvgLeftIcon />
          </IconButton>
          <Typography
            variant="body2"
            color={colorPalette.gray[1]}
            paddingY={"2px"}
          >
            {petty}
          </Typography>
          <Typography
            variant="body2"
            padding={"2px 8px 2px 0px"}
            color={colorPalette.blue[1]}
          >
            P
          </Typography>
        </Flex>
      </Flex>

      {/* right Section */}
      <Flex
        width={{ mobile: "100%", tablet: "100%", laptop: "50%" }}
        zIndex={2}
        position={"relative"}
        marginTop={{ mobile: "-16px", laptop: "0px" }}
        marginLeft={{ mobile: "0px", laptop: "-20px" }}
        borderRadius={"24px"}
        sx={{
          backgroundColor: "#161616",
        }}
      >
        <Flex
          minHeight={"200px"}
          sx={{
            backgroundColor: "#161616",
            borderTopLeftRadius: "24px",
            borderTopRightRadius: "24px",
          }}
          padding={{ mobile: "16px", laptop: "24px" }}
          gap={"24px"}
        >
          <Typography variant="h2" color={colorPalette.gray[3]}>
            Anonymous Complaine
          </Typography>
          <Typography variant="body2" color={colorPalette.gray[3]}>
            Let me spill the beans: my girlfriend, lets call her Nova, shes not
            from around here, you know? Shes an alien, and not the subtle kind.
            Novas got more eyes than I can keep track of, and its unnerving.
            Sometimes I feel like Im dating a walking surveillance system.
            Trying to share a tender moment with Nova feels like being
            scrutinized by a hundred gazes. But hey, shes still my girl, even if
            her alien features sometimes give me the heebie-jeebies. Anyone else
            out there grappling with a relationship as, uh, otherworldly as mine
            with Nova?
          </Typography>
          <MainModal onAddComment={addComment} />
        </Flex>
        <Flex
          padding={{ mobile: "16px", laptop: "24px" }}
          minHeight={"200px"}
          position={"relative"}
          borderRadius={"24px"}
          marginTop={"-10Px"}
          sx={{
            backgroundColor: "#212121",
            maxHeight: "433px",
            overflowY: "auto",
            gap: "24px",
          }}
        >
          <Typography variant="h2" color={colorPalette.gray[3]}>
            Comments
          </Typography>

          {allComments?.map((comment) => (
            <Flex
              key={comment.id}
              sx={{ backgroundColor: "#161616" }}
              borderRadius={"16px"}
              padding={"16px"}
              gap={"10px"}
            >
              <Flex direction={"row"} padding={"4px"} gap={"10px"}>
                <Flex>
                  <Image
                    src={comment.avatar}
                    alt="icon2"
                    width={32}
                    height={32}
                    style={{ borderRadius: "100%" }}
                  />
                </Flex>
                <Flex>
                  <Typography variant="body2" color={colorPalette.gray[1]}>
                    {comment.name}
                  </Typography>
                  <Typography variant="caption" color={colorPalette.gray[4]}>
                    {comment.country}
                  </Typography>
                </Flex>
              </Flex>
              <Typography variant="body2" color={colorPalette.gray[3]}>
                {comment.comment}
              </Typography>
              <Flex direction={"row"} justifyContent={"end"}>
                <ReplyModal />
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
            </Flex>
          ))}

          <Flex
            ref={loadMoreRef}
            style={{ textAlign: "center", padding: "16px" }}
          >
            {isFetchingNextPage
              ? "Is Loading ..."
              : hasNextPage
                ? "More Loading..."
                : "All comment loaded "}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MainPage;
