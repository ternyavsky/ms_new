import { useEffect } from "react";
import { useAuthMutation } from "@/shared/lib/hooks/useAuthMutation";
import { useCookie } from "@/shared/lib/hooks/useCookie";
import { useAuth } from "@/shared/model/store/auth";

import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { NotificationsLink } from "@/widgets/components";
import cn from "clsx";
import { useMainStore } from "@/shared/model/store/main";

export const Header = () => {
  const { getCookie } = useCookie();
  const { mutate: auth } = useAuthMutation(
    getCookie("refresh_token") as string
  );
  const { user } = useAuth();
  const { isOpenSidebar } = useMainStore();

  useEffect(() => {
    auth();
  }, [auth]);

  console.log(user);

  return (
    <header
      className={cn(styles.header, {
        [styles.isOpenSidebar]: isOpenSidebar,
        [styles.notOpenSidebar]: !isOpenSidebar,
      })}
    >
      <Link className={styles.headerMainLink} to="/">
        Главная
      </Link>

      <div className={styles.right}>
        <NotificationsLink />

        <Link className={styles.profile} to="/profile">
          <img src="/assets/avatar.png" alt="avatar" />
        </Link>
      </div>
    </header>
  );
};
