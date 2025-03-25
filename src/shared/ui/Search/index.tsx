import { PropsWithClassName } from "@/shared/types";
import { FC } from "react";
import cn from "clsx";
import { SearchIcon } from "@/icons";
import styles from "./styles.module.scss";
import { ISearchProps } from "./types";

export const Search: FC<PropsWithClassName<ISearchProps>> = ({
  className,
  value,
  onChange,
  size = "lg",
  placeholder = "Поиск",
}) => {
  return (
    <div
      className={cn(styles.search, className, {
        [styles[`search-${size}`]]: size,
      })}
    >
      <SearchIcon className={styles.searchIcon} width={24} height={24} />

      <input
        className={styles.searchInput}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};
