import { BoxProps } from "@mui/material";
import { FC } from "react";
import { Post } from "../screens/OurWine";

const DynamicEl: FC<{
  type: string;
  childs: Post["body"][0]["children"];
  key: BoxProps["key"];
}> = ({ type, childs, key }) => {
  const children = childs.map((child, idx, arr) => {
    return <span key={child._key}>{child.text}</span>;
  });
  switch (type) {
    case "h1":
      return <h1 key={key}>{children && children}</h1>;
    case "h2":
      return <h2 key={key}>{children && children}</h2>;
    case "h3":
      return <h3 key={key}>{children && children}</h3>;
    case "h4":
      return <h4 key={key}>{children && children}</h4>;
    default:
      return <p key={key}>{children && children}</p>;
  }
};

export default DynamicEl;

function renderMarks(child) {
  switch (child.marks) {
    case value:
      break;

    default:
      break;
  }
}
