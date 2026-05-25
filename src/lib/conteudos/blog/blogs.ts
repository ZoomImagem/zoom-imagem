import { BlogTag } from "@/presentation/contents/fragments/blog";
import { ComponentType } from "react";

type Page = {
  slug: string;
  component: ComponentType;
};

export const posts: Page[] = [{ slug: "post", component: BlogTag }];
