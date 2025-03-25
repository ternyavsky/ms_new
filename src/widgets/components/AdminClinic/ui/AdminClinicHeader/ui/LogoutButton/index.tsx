import { PropsWithClassName } from "@/shared/types";
import { Button } from "@/shared/ui";
import { FC } from "react";
import cn from "clsx";
import { LogoutIcon } from "@/icons";
import styles from "./styles.module.scss";

export const LogoutButton: FC<PropsWithClassName> = ({ className }) => {
  return (
    <Button
      className={cn(styles.logoutButton, className)}
      icon={<LogoutIcon width={24} height={24} />}
      styleType="outline"
    />
  );
};
