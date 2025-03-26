import { PropsWithClassName } from "@/shared/types";
import {
  Popover,
  PopoverButton,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/ui";
import { FC, PropsWithChildren } from "react";
import cn from "clsx";
import styles from "./styles.module.scss";

export const AdminClinicPaymentPopover: FC<
  PropsWithChildren<PropsWithClassName>
> = ({ children, className }) => {
  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent className={cn(styles.content, className)}>
        <PopoverButton>Онлайн</PopoverButton>
        <PopoverButton>В кассу</PopoverButton>
        <PopoverButton>Врачу</PopoverButton>
        <PopoverButton>Оплата в рассрочку</PopoverButton>
        <PopoverButton>Оплата в кредит</PopoverButton>
      </PopoverContent>
    </Popover>
  );
};
