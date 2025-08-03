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
import EditModal from "@/components/EditModal";
import SvgDelete from "../../../public/icon/Delete";
import SvgVector from "../../../public/icon/Vector";

type Comment = {
  name: string;
  country: string;
  comment: string;
  avatar: string;
  userId: string;
  id: string;
};
const userId = "user-1234";

const CommentGlobal = () => {
  const { allComments, isFetchingNextPage, deleteComment, editComment } =
    useComments();
  const [selectedComment, setSelectedComment] = useState<Comment | null>(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const myComments = useMemo(
    () => allComments.filter((comment) => comment.userId === userId),
    [allComments]
  );

  const [likesState, setLikesState] = useState<{
    [commentId: string]: {
      hasLike: boolean;
      hasDisLike: boolean;
      likeCount: number;
      disLikeCount: number;
    };
  }>({});
  const getCommentState = (
    id: string,
    initLike: number,
    initDisLike: number
  ) => {
    if (!likesState[id]) {
      return {
        hasLike: false,
        hasDisLike: false,
        likeCount: initLike,
        disLikeCount: initDisLike,
      };
    }
    return likesState[id];
  };

  const handleLike = (id: string) => {
    setLikesState((prev) => {
      const prevState = prev[id] || {
        hasLike: false,
        hasDisLike: false,
        likeCount: 0,
        disLikeCount: 0,
      };
      let { hasLike, hasDisLike, likeCount, disLikeCount } = prevState;
      if (hasLike) {
        likeCount -= 1;
        hasLike = false;
      } else {
        likeCount += 1;
        hasLike = true;
        if (hasDisLike) {
          disLikeCount -= 1;
          hasDisLike = false;
        }
      }
      return {
        ...prev,
        [id]: { hasLike, hasDisLike, likeCount, disLikeCount },
      };
    });
  };

  const handleDisLike = (id: string) => {
    setLikesState((prev) => {
      const prevState = prev[id] || {
        hasLike: false,
        hasDisLike: false,
        likeCount: 0,
        disLikeCount: 0,
      };
      let { hasLike, hasDisLike, likeCount, disLikeCount } = prevState;
      if (hasDisLike) {
        disLikeCount -= 1;
        hasDisLike = false;
      } else {
        disLikeCount += 1;
        hasDisLike = true;
        if (hasLike) {
          likeCount -= 1;
          hasLike = false;
        }
      }
      return {
        ...prev,
        [id]: { hasLike, hasDisLike, likeCount, disLikeCount },
      };
    });
  };

  return (
    <>
      <Flex gap={"24px"}>
        {myComments.length === 0 && !isFetchingNextPage ? (
          <Flex>
            <Typography>No Comments added</Typography>
          </Flex>
        ) : (
          myComments.map((comment, i) => {
            const { likeCount, disLikeCount } = getCommentState(
              comment.id,
              0,
              0
            );
            return (
              <Flex
                sx={{ backgroundColor: "#161616" }}
                borderRadius={"16px"}
                padding={"16px"}
                gap={"10px"}
                key={i}
                position={"relative"}
              >
                <Flex
                  position={"absolute"}
                  top={"2px"}
                  right={"4px"}
                  direction={"row"}
                >
                  <IconButton onClick={() => deleteComment(comment.id)}>
                    <SvgDelete />
                  </IconButton>

                  <IconButton
                    onClick={() => {
                      setSelectedComment(comment);
                      setEditModalOpen(true);
                    }}
                  >
                    <SvgVector />
                  </IconButton>
                </Flex>
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
                    onClick={() => handleDisLike(comment.id)}
                  >
                    <SvgDisLike />
                    <Typography variant="body2" color={colorPalette.gray[1]}>
                      {disLikeCount}
                    </Typography>
                  </IconButton>
                </Flex>
              </Flex>
            );
          })
        )}
      </Flex>
      {selectedComment && (
        <EditModal
          open={isEditModalOpen}
          onClose={() => setEditModalOpen(false)}
          comment={selectedComment}
          onEditComment={(id, updatedComment) => {
            console.log("onEditComment CALLED", id, updatedComment);
            editComment(id, updatedComment); // ← آیا این اجرا می‌شه؟
            setSelectedComment(null);
          }}
        />
      )}
    </>
  );
};

export default CommentGlobal;
