import React, {
  FC,
  PropsWithChildren,
  useState,
  useRef,
  useEffect,
} from "react";
import { PropsWithClassName } from "@/shared/types";
import styles from "./styles.module.scss";
import cn from "clsx";

const PopoverContext = React.createContext<{
  isOpen: boolean;
  toggle: () => void;
} | null>(null);

export const Popover: FC<PropsWithChildren<PropsWithClassName>> = ({
  children,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const togglePopover = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <PopoverContext.Provider value={{ isOpen, toggle: togglePopover }}>
      <div ref={popoverRef} className={cn(styles.popover, className)}>
        {children}
      </div>
    </PopoverContext.Provider>
  );
};

export const PopoverTrigger: FC<PropsWithChildren<PropsWithClassName>> = ({
  children,
  className,
}) => {
  const context = React.useContext(PopoverContext);
  if (!context) throw new Error("PopoverTrigger must be used within a Popover");

  return (
    <div
      className={cn(styles.popoverTrigger, className)}
      onClick={context.toggle}
    >
      {children}
    </div>
  );
};

export const PopoverContent: FC<PropsWithChildren<PropsWithClassName>> = ({
  children,
  className,
}) => {
  const context = React.useContext(PopoverContext);
  if (!context) throw new Error("PopoverContent must be used within a Popover");

  if (!context.isOpen) return null;

  return <div className={cn(styles.popoverContent, className)}>{children}</div>;
};

export const PopoverButton: FC<PropsWithChildren<PropsWithClassName>> = ({
  children,
  className,
}) => {
  return (
    <button className={cn(styles.popoverButton, className)}>{children}</button>
  );
};
