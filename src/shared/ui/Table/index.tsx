import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import { PropsWithClassName } from "@/shared/types";
import cn from "clsx";

export const Table: FC<PropsWithChildren<PropsWithClassName>> = ({
  children,
  className,
}) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={cn(className)}>{children}</table>
    </div>
  );
};
