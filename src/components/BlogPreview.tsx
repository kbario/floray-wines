import { Box, Chip, Grid, Typography } from "@mui/material";
import { FC } from "react";
import Post from "../types/sanityPost";

const BlogPreview: FC<{ post: Post }> = ({ post }) => {
  console.log(post);
  const d = new Date(post._updatedAt);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">{post.title}</Typography>
        <Typography variant="h6">
          {`
        ${d.getDate()} /
        ${d.getMonth() + 1} /
        ${d.getFullYear()}`}
        </Typography>
      </Box>
      <Typography variant="body1">{post.summary}</Typography>
      {/* {post.categories.length > 0 &&
        post.categories.map((cat, idx) => {
          return <Chip label={cat} key={cat._key} />;
        })} */}
    </>
  );
};

export default BlogPreview;
