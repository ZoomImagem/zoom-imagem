"use client";

import { MuralTag } from "./fragments/mural";
import { articles } from "./fragments/post/constants/posts";

const BlogComponent = () => {
  return <MuralTag articles={articles} />;
};

export default BlogComponent;
