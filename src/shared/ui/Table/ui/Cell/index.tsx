import cn from "clsx";
import styles from "./styles.module.scss";
import { FC, PropsWithChildren } from "react";
import { PropsWithClassName } from "@/shared/types";
import { ICellProps } from "./types";

export const Cell: FC<PropsWithChildren<PropsWithClassName<ICellProps>>> = ({
  children,
  className,
  tag = "td",
}) => {
  const Tag = tag;

  return (
    <Tag
      className={cn(
        styles.cell,
        {
          [styles[`cell-${tag}`]]: tag,
        },
        className
      )}
    >
      {children}
    </Tag>
  );
};
