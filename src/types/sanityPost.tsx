export default interface Post {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  author: {
    _ref: string;
    _type: string;
  };
  body: [
    {
      _key: string;
      _type: string;
      children: [
        {
          _key: string;
          _type: string;
          marks: string[];
          text: string;
        }
      ];
      markDefs: [];
      style: "h1" | "h2" | "h3" | "h4" | "normal";
    }
  ];
  categories: string[];
  publishedAt: string;
  slug: {
    _type: string;
    current: string;
  };
  title: string;
}