import { FC } from "react";

import { Input } from "../../../shared";
import { Icons } from "../../../shared/ui/Icons/Icons";

import styles from "./Search.module.scss";

export const Search: FC = () => {
    return (
        <div className={styles.box}>
            <button className={styles.btn}>
                <Icons icon="search" />
            </button>
            <Input
                width="100%"
                bcolor="#E9EAEB"
                bl="none"
                btl="unset"
                bbl="unset"
                bgcolor="#fff"
                type="text"
                placeholder="Поиск чатов"
            />
        </div>
    );
};
