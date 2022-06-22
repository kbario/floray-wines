import { FC, useEffect, useState } from "react";
import BlogPost from "../components/BlogPost";
import Page from "../layouts/Page";
import useSanity from "../hooks/useBlog";
import { Box } from "@mui/material";
import Post from "../types/sanityPost";

const Blog: FC = () => {
  const blog: Post[] = useSanity('*[_type=="post"]')!;
  return (
    <Box>
      {blog?.length === 0 && <div>Loading</div>}
      {blog !== undefined &&
        blog.map((post, idx, arr) => {
          return <BlogPost key={idx} post={post} />;
        })}
    </Box>
  );
};

export default Blog;
