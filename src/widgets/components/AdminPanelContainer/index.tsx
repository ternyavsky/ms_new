import { HTMLAttributes } from "react";

import { cn } from "@/shared/lib/helpers/cn";

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const AdminPanelContainer = ({ children, className }: Props) => {
  return (
    <div className={cn("flex flex-col gap-2.5 lg:gap-2", className)}>
      {children}
    </div>
  );
};
