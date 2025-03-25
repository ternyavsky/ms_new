import { PropsWithClassName } from "@/shared/types";
import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import cn from "clsx";

export const Row: FC<PropsWithChildren<PropsWithClassName>> = ({
  children,
  className,
}) => {
  return <tr className={cn(styles.row, className)}>{children}</tr>;
};
