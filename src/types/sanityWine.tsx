import { PortableTextProps } from "@portabletext/react";

export default interface WineRes {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  description: PortableTextProps["value"];
  name: string;
  tasting: PortableTextProps["value"];
  type: string;
  year: number;
}
