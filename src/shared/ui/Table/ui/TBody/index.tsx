import cn from "clsx";
import styles from "./styles.module.scss";
import { FC, PropsWithChildren } from "react";
import { PropsWithClassName } from "@/shared/types";

export const TBody: FC<PropsWithChildren<PropsWithClassName>> = ({
  children,
  className,
}) => {
  return <tbody className={cn(styles.tbody, className)}>{children}</tbody>;
};
