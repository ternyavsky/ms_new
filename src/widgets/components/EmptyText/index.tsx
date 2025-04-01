import { PropsWithClassName } from "@/shared/types";
import { FC, PropsWithChildren } from "react";
import cn from "clsx";
import styles from "./styles.module.scss";
import { Text } from "@/shared/ui/Text";

export const EmptyText: FC<PropsWithChildren<PropsWithClassName>> = ({
  children,
  className,
}) => {
  return (
    <Text className={cn(styles.emptyText, className)} type="p">
      {children}
    </Text>
  );
};
