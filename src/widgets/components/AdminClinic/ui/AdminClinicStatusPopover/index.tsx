import { PropsWithClassName } from "@/shared/types";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui";
import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import cn from "clsx";
import { StatusBadge } from "@/widgets/components/StatusBadge";

export const AdminClinicStatusPopover: FC<
  PropsWithChildren<PropsWithClassName>
> = ({ children, className }) => {
  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent className={cn(styles.content, className)}>
        <StatusBadge className={styles.statusBadge} type="success" />
        <div className={styles.line}></div>
        <StatusBadge className={styles.statusBadge} type="error" />
      </PopoverContent>
    </Popover>
  );
};
