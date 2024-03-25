import BoxWrapper from "@/entities/BoxWrapper";
import styles from "./styles.module.scss";
import { FC, ReactNode, useState } from "react";
import cn from "clsx";

type Props = {
  icon: JSX.Element;
  title: string;

  children: ReactNode;
};

export const ProfileItem: FC<Props> = ({ icon, title, children }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <BoxWrapper className={styles.profileItem} color="white">
      <div className={styles.profileItemHeader} onClick={toggleOpen}>
        <div className={styles.profileItemLeft}>
          {icon}

          <span>{title}</span>
        </div>

        <svg
          className={cn(styles.arrow, {
            [styles.arrowActive]: isOpen,
          })}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M8.7475 20.3375C8.5575 20.3375 8.3675 20.2675 8.2175 20.1175C7.9275 19.8275 7.9275 19.3475 8.2175 19.0575L14.7375 12.5375C15.2175 12.0575 15.2175 11.2775 14.7375 10.7975L8.2175 4.2775C7.9275 3.9875 7.9275 3.5075 8.2175 3.2175C8.5075 2.9275 8.9875 2.9275 9.2775 3.2175L15.7975 9.7375C16.3075 10.2475 16.5975 10.9375 16.5975 11.6675C16.5975 12.3975 16.3175 13.0875 15.7975 13.5975L9.2775 20.1175C9.1275 20.2575 8.9375 20.3375 8.7475 20.3375Z"
            fill="#262626"
          />
        </svg>
      </div>

      {isOpen && <div className={styles.content}>{children}</div>}
    </BoxWrapper>
  );
};
