import { FC } from "react";
import { IProps } from "./types";
import cn from "clsx";
import styles from "./styles.module.scss";
import { PlusIcon } from "@/icons";

export const AddFileBlock: FC<IProps> = ({
  className,
  placeholder = "Добавить файл",
  ...props
}) => {
  return (
    <label
      className={cn(styles.label, className)}
      {...props}
      htmlFor={props.id}
    >
      <input className={styles.input} type="file" id={props.id} />

      <div className={styles.content}>
        <PlusIcon width={60} height={60} />

        <h5 className={styles.title}>{placeholder}</h5>
      </div>
    </label>
  );
};
