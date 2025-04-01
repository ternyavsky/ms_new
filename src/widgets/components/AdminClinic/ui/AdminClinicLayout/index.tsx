import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import { PropsWithClassName } from "@/shared/types";
import cn from "clsx";

export const AdminClinicLayout: FC<PropsWithChildren<PropsWithClassName>> = ({
  children,
  className,
}) => {
  return (
    <div className={cn(styles.adminClinicLayout, className)}>{children}</div>
  );
};
