import { Box, IconButton, Typography } from "@mui/material";
import { FC } from "react";
import Post from "../types/sanityPost";
import { PortableText } from "@portabletext/react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BlogPost: FC<{ post: Post; back: Function }> = ({ post, back }) => {
  return (
    <Box className="flex h-full w-full flex-col gap-4">
      <Box className="flex w-full items-center gap-4">
        <IconButton onClick={() => back()} size="large">
          <ArrowBackIcon fontSize="large" />
        </IconButton>
        <Typography variant="blogTitle">{post.title}</Typography>
      </Box>
      <PortableText value={post.body} />
    </Box>
  );
};

export default BlogPost;
