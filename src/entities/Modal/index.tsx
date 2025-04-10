import { FC, useEffect } from "react";
import { IModalProps } from "./types";

import styles from "./styles.module.scss";
import { Portal } from "@/shared/ui/Portal";
import { PropsWithClassName } from "@/shared/types";
import clsx from "clsx";

export const Modal: FC<PropsWithClassName<IModalProps>> = ({
  className,
  width,
  height,
  children,
  setIsOpenModal,
  isOpen,
}) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    isOpen && (
      <Portal>
        <div
          className={clsx(styles.modal)}
          onClick={() => setIsOpenModal(false)}
        >
          <div
            className={clsx(styles.content, className)}
            style={{ width, height }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      </Portal>
    )
  );
};
