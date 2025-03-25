import { PropsWithClassName } from "@/shared/types";
import { FC, PropsWithChildren } from "react";
import cn from "clsx";
import styles from "./styles.module.scss";

export const Thead: FC<PropsWithChildren<PropsWithClassName>> = ({
  children,
  className,
}) => {
  return <thead className={cn(styles.thead, className)}>{children}</thead>;
};
