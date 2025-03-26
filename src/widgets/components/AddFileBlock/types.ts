import { HTMLAttributes } from "react";

export interface IProps extends HTMLAttributes<HTMLLabelElement> {
  className?: string;
  placeholder?: string;
}
