import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import { PropsWithClassName } from "@/shared/types";
import cn from "clsx";

export const TableButton: FC<PropsWithChildren<PropsWithClassName>> = ({
  children,
  className,
}) => {
  return <button className={cn(styles.button, className)}>{children}</button>;
};
