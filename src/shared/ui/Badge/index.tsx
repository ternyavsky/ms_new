import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import { PropsWithClassName } from "@/shared/types";
import cn from "clsx";
import { IBadgeProps } from "./types";

export const Badge: FC<PropsWithChildren<PropsWithClassName<IBadgeProps>>> = ({
  children,
  className,
  variant = "default",
  size = "lg",
}) => {
  return (
    <div
      className={cn(
        styles.badge,
        {
          [styles[`badge-${variant}`]]: variant,
          [styles[`badge-${size}`]]: size,
        },
        className
      )}
    >
      {children}
    </div>
  );
};
