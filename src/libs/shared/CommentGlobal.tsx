"use client";
import { Flex, Typography } from "@/primitives";
import { colorPalette } from "../theme/colorPalette";
import { IconButton } from "@mui/material";
import SvgReply from "../../../public/icon/Reply";
import SvgLike from "../../../public/icon/Like";
import SvgDisLike from "../../../public/icon/DisLike";
import Image from "next/image";
import { useMemo, useState } from "react";
import { useComments } from "../hooks/useComment";

const userId = "user-1234";

const CommentGlobal = () => {
  const { allComments, isFetchingNextPage } = useComments();
  const myComments = useMemo(
    () => allComments.filter((comment) => comment.userId === userId),
    [allComments]
  );
  //  const [like,setLike]=useState(80);
  //   const [disLike,setDisLike]=useState(80);
  //   const [hasLike,setHasLike]=useState(false);
  //   const[hasDisLike,setHasDisLike]=useState(false);

  //   const handleLike=()=>{
  //     if(hasLike){
  //       setLike(like - 1)
  //     }else{
  //       setLike(like + 1)
  //     }
  //     setHasLike(!hasLike)
  //   };

  //   const handleDisLike=()=>{
  //     if(hasDisLike){
  //       setDisLike(disLike - 1)
  //     }else{
  //       setDisLike(disLike + 1)
  //     }
  //     setHasDisLike(!hasDisLike)
  //   }

  const [likesState, setLikesState] = useState<{
    [commentId: string]: {
      hasLike: boolean;
      hasDisLike: boolean;
      likeCount: number;
      disLikeCount: number;
    };
  }>({});
  const getCommentState=(id:string,initLike:number,initDisLike:number)=>{
    if(!likesState[id]){
      return{hasLike:false,hasDisLike:false,likeCount:initLike,disLikeCount:initDisLike};
    }
    return likesState[id];
  };

  const handleLike=(id:string)=>{
    setLikesState((prev)=>{
      const prevState = prev[id] || {hasLike:false,hasDisLike:false,likeCount: 0, disLikeCount: 0 };
      let {hasLike,hasDisLike,likeCount,disLikeCount}=prevState;
      if(hasLike){
        likeCount -= 1;
        hasLike=false;
      }else{
         likeCount += 1;
        hasLike = true;
        if(hasDisLike){
          disLikeCount -= 1;
          hasDisLike=false;
        }
      }
      return{...prev,[id]:{hasLike,hasDisLike,likeCount,disLikeCount}}
    });
  };

  const handleDisLike=(id:string)=>{
    setLikesState((prev)=>{
      const prevState = prev[id] || {hasLike:false,hasDisLike:false,likeCount: 0, disLikeCount: 0 };
      let { hasLike, hasDisLike, likeCount,disLikeCount } = prevState;
      if(hasDisLike){
        disLikeCount -= 1;
        hasDisLike=false;
      }else{
        disLikeCount += 1;
        hasDisLike=true;
        if(hasLike){
          likeCount -= 1;
          hasLike = false;
        }
      }
      return{...prev,[id]:{hasLike,hasDisLike,likeCount,disLikeCount}}
    })
  }


  return (
    <Flex gap={"24px"}>
      {myComments.length === 0 && !isFetchingNextPage ? (
        <Flex>
          <Typography>No Comments added</Typography>
        </Flex>
      ) : (
        myComments.map((comment, i) => {
 const {  likeCount, disLikeCount } = getCommentState(comment.id,0,0); // فرض کردم ۸۰ لایک و دیس لایک پیشفرضه

          return (
          <Flex
            sx={{ backgroundColor: "#161616" }}
            borderRadius={"16px"}
            padding={"16px"}
            gap={"10px"}
            key={i}
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
                <Flex direction={"row"} gap={"8px"}>
                  <Typography variant="body2" color={colorPalette.blue[1]}>
                    P
                  </Typography>
                  <Typography variant="body2" color={colorPalette.gray[1]}>
                    24
                  </Typography>
                </Flex>
              </Flex>
            </Flex>
            <Typography variant="body2" color={colorPalette.gray[3]}>
              {comment.comment}
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
               onClick={() => handleLike(comment.id)}
              >
                <SvgLike />
                <Typography variant="body2" color={colorPalette.gray[1]}>
                  {likeCount}
                </Typography>
              </IconButton>
              <IconButton
                sx={{
                  backgroundColor: "#141414",
                  borderRadius: "32px",
                  gap: "10px",
                }}
                onClick={()=>handleDisLike(comment.id)}
              >
                <SvgDisLike />
                <Typography variant="body2" color={colorPalette.gray[1]}>
                  {disLikeCount}
                </Typography>
              </IconButton>
            </Flex>
          </Flex>
        );}
     ) )}
    </Flex>
  );
};

export default CommentGlobal;
