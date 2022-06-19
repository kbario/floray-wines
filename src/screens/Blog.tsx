import sanityClient from "@sanity/client";
import { FC, useEffect, useState } from "react";
import useBlog from "../hooks/useBlog";

const Blog: FC = () => {
  const blog = useBlog('*[_type=="post"]');
  console.log(blog);
  return <div>blog</div>;
};

export default Blog;
