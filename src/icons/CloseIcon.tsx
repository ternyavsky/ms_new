import { IconProps } from "@/shared/types";
import clsx from "clsx";
import { FC } from "react";

export const CloseIcon: FC<IconProps> = ({
  className,
  width = 60,
  height = 60,
  color = "#D64657",
}) => {
  return (
    <svg
      className={clsx(className)}
      width={width}
      height={height}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M48.75 11.25L11.25 48.75M11.25 11.25L48.75 48.75"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
