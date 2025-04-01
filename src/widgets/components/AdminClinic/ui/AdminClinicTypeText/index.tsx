import { PropsWithClassName } from "@/shared/types";
import { Text } from "@/shared/ui/Text";
import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import cn from "clsx";
import { IAdminClinicTypeTextProps } from "./types";

export const AdminClinicTypeText: FC<
  PropsWithChildren<PropsWithClassName<IAdminClinicTypeTextProps>>
> = ({ children, className, variant }) => {
  return (
    <Text
      className={cn(styles.typeText, className)}
      type="p"
      color={variant === "success" ? "#00CC5E" : "#D64657"}
    >
      {children}
    </Text>
  );
};
