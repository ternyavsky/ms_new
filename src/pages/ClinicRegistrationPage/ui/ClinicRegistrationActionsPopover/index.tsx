import { PropsWithClassName } from "@/shared/types";
import {
  Popover,
  PopoverButton,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/ui";
import { FC, PropsWithChildren } from "react";
import cn from "clsx";

export const ClinicRegistrationActionsPopover: FC<
  PropsWithChildren<PropsWithClassName>
> = ({ children, className }) => {
  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent className={cn(className)}>
        <PopoverButton>Изменить</PopoverButton>
        <PopoverButton>Отменить</PopoverButton>
      </PopoverContent>
    </Popover>
  );
};
