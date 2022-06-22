import { Box, Typography } from "@mui/material";
import { FC } from "react";
import Post from "../types/sanityPost";
import { PortableText } from "@portabletext/react";

const BlogPost: FC<{ post: Post }> = ({ post }) => {
  return (
    <Box width={"100%"}>
      <Typography variant="h1">{post.title}</Typography>
      <PortableText value={post.body} />
    </Box>
  );
};

export default BlogPost;
