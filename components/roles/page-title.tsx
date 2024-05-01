"use client";

import { cn } from "@/lib/utils";

interface PageTitleProps {
  title: string;
  className: string;
}

export const PageTitle = ({ title, className }: PageTitleProps) => {
  return <h1 className={cn("text-2xl font-semibold", className)}>{title}</h1>;
};
