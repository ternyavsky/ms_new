import { PropsWithClassName } from "@/shared/types";
import { FC } from "react";
import ReactSelect, { components } from "react-select";
import cn from "clsx";
import { ISelectProps, ISingleValueProps } from "./types";
import styles from "./styles.module.scss";

export const Select: FC<PropsWithClassName<ISelectProps>> = ({
  className,
  options,
  placeholder,
}) => {
  return (
    <ReactSelect
      className={cn(styles.select, className)}
      options={options}
      components={{ SingleValue }}
      placeholder={placeholder}
    />
  );
};

const SingleValue: FC<PropsWithClassName<ISingleValueProps>> = (props) => {
  return (
    <components.SingleValue
      className={cn(styles.singleValue, props.className)}
      {...props}
    >
      {props.data.icon}
      {props.data.label}
    </components.SingleValue>
  );
};
