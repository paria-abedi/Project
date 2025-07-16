import { colorPalette } from "@/libs/theme";
import { Flex, Typography } from "@/primitives";
import CommentGlobal from "@/libs/shared/CommentGlobal";

const Comment = () => {
  return (
    <Flex
      padding={{
        mobile: "24px 16px",
        tablet: "24px 16px",
        laptop: "24px 40px",
      }}
      sx={{ backgroundColor: "#1C1C1C" }}
    >
      <Flex
        padding={"16px"}
        sx={{ backgroundColor: "#212121" }}
        borderRadius={"8px"}
        gap={"24px"}
        position={"relative"}
      >
        <Typography variant="h2" color={colorPalette.gray[3]}>
          My Comment
        </Typography>
<CommentGlobal/>
      
      </Flex>
    </Flex>
  );
};

export default Comment;
