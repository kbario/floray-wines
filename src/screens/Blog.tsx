import { FC, useEffect, useState } from "react";
import BlogPost from "../components/BlogPost";
import Page from "../layouts/Page";
import useSanity from "../hooks/useBlog";
import { Box, Grid } from "@mui/material";
import Post from "../types/sanityPost";
import Category from "../types/sanityCategory";
import BlogPreview from "../components/BlogPreview";
import { useSearchParams } from "react-router-dom";

const Blog: FC = () => {
  const blog: Post[] = useSanity('*[_type=="post"]')!;
  const categories: Category[] = useSanity('*[_type=="category"]')!;

  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState<string>(searchParams.get("id") ?? "preview");

  const setId = (id: string): void => {
    setSearchParams({ id });
    setPage(id);
  };

  const back = (): void => {
    setSearchParams("");
    setPage("preview");
  };

  if (page === "preview") {
    return (
      <Box className="h-full w-full">
        {blog?.length === 0 && <div>Loading</div>}
        {blog !== undefined && (
          <Box className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {blog.map((post, idx, arr) => {
              return (
                <BlogPreview
                  key={idx}
                  post={post}
                  categories={categories}
                  setId={setId}
                />
              );
            })}
          </Box>
        )}
      </Box>
    );
  } else {
    return (
      <Box className="h-full w-full">
        {blog !== undefined && (
          <BlogPost
            post={
              blog.find((obj) => {
                return obj._id === page;
              })!
            }
            back={back}
          />
        )}
      </Box>
    );
  }
};

export default Blog;
