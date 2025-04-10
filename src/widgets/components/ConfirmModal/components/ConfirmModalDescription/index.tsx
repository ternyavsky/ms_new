import clsx from "clsx";
import styles from "./styles.module.scss";
import { FC, PropsWithChildren } from "react";
import { PropsWithClassName } from "@/shared/types";
import { Text } from "@/shared/ui/Text";

export const ConfirmModalDescription: FC<
  PropsWithChildren<PropsWithClassName>
> = ({ children, className }) => {
  return (
    <Text className={clsx(styles.confirmModalDescription, className)} type="p">
      {children}
    </Text>
  );
};
