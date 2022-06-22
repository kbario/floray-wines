import sanityClient from "@sanity/client";
import { useEffect, useState } from "react";

const useSanity = (query: string, params = {}) => {
  const [sanity, setSanity] = useState();

  const client = sanityClient({
    projectId: "bycnl4yq",
    dataset: "blog",
    apiVersion: "2022-06-19", // use current UTC date - see "specifying API version"!
    token:
      "skIyjzxXElToGhvzw7AK72qV3nZc3hWwh5fxxDZH1pGOv3wf4rWHDKrwi4PYEae1OUGkF2NduB7WZgEmSliOAyKOcaz1oWW81RiFfmI10kuodTcr84fCmyT9BNThherL6BPNbw2VNlWVABTsYY7dhJcn0tJtrFf9ECQmokSz1r2eW9EKBUhk", // or leave blank for unauthenticated usage
    useCdn: true, // `false` if you want to ensure fresh data
  });
  useEffect(() => {
    async function getSanity() {
      const blog = await client.fetch(query, params);
      setSanity(blog);
    }
    getSanity();
  }, []);

  return sanity;
};

export default useSanity;
