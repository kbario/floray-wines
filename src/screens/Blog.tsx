import { FC, useEffect, useState } from "react";
import BlogPost from "../components/BlogPost";
import Page from "../layouts/Page";
import useSanity from "../hooks/useBlog";
import { Box, Grid } from "@mui/material";
import Post from "../types/sanityPost";
import BlogPreview from "../components/BlogPreview";

const Blog: FC = () => {
  const blog: Post[] = useSanity('*[_type=="post"]')!;
  return (
    <Box>
      {blog?.length === 0 && <div>Loading</div>}
      {blog !== undefined && (
        <Grid container spacing={"16px"} sx={{ width: "100%" }}>
          {blog.map((post, idx, arr) => {
            return <BlogPreview key={idx} post={post} />;
          })}
        </Grid>
      )}
    </Box>
  );
};

export default Blog;
