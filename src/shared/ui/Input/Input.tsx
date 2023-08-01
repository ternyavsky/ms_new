import { FC, InputHTMLAttributes } from "react";
import { IInput } from "@/shared/types";

import styles from "./Input.module.scss";

export const Input: FC<IInput & InputHTMLAttributes<HTMLInputElement>> = ({
    type = "text",
    placeholder,
    width = "100%",
    borderColor,
    bt,
    br,
    bb,
    bl,
    btr,
    bbr,
    btl,
    bbl,
    bgcolor,
    disabled,
    onChange,
    onBlur,
    value,
    height,
    borderRadius,
    padding,
    name,
}) => {
    return (
        <input
            className={styles.input}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            style={{
                width: width,
                borderRadius,
                height,
                borderColor: borderColor,
                borderTop: bt,
                borderRight: br,
                borderBottom: bb,
                borderLeft: bl,
                borderTopRightRadius: btr,
                borderBottomRightRadius: bbr,
                borderTopLeftRadius: btl,
                borderBottomLeftRadius: bbl,
                backgroundColor: bgcolor,
                padding,
            }}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            name={name}
        />
    );
};
