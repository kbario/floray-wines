import { Box, Chip, Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import theme from "../theme";
import Category from "../types/sanityCategory";
import Post from "../types/sanityPost";

const BlogPreview: FC<{
  post: Post;
  categories: Category[];
  setId: Function;
}> = ({ post, categories, setId }) => {
  const catsArray: string[] = [];
  const cats =
    post?.categories.length > 0 && categories !== undefined
      ? categories.reduce((acc, idv, idx, arr) => {
          for (let i = 0; i < categories.length; i++) {
            if (post.categories[i]._ref === idv._id) {
              acc.push(idv.title);
            }
          }
          return acc;
        }, catsArray)
      : null;

  const d = new Date(post._updatedAt);
  return (
    <Box
      className="flex cursor-pointer flex-col gap-3 rounded-md p-4 shadow-md transition-all hover:shadow-lg"
      onClick={() => setId(post._id)}
    >
      <Box className="flex items-center justify-between">
        <Typography variant="h4">{post.title}</Typography>
        <Typography variant="h6">
          {`${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`}
        </Typography>
      </Box>
      <Box className="flex gap-2">
        {cats !== null &&
          cats.map((cat, idx) => {
            return <Chip label={cat} key={cat} />;
          })}
      </Box>
      <Typography variant="body1">{post.summary}</Typography>
    </Box>
  );
};

export default BlogPreview;
