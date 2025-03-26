import { PropsWithClassName } from "@/shared/types";
import { FC } from "react";
import cn from "clsx";
import { AdminClinicFilters } from "./ui/AdminClinicFilters";
import { LogoutButton } from "./ui/LogoutButton";
import styles from "./styles.module.scss";
import { Search } from "@/shared/ui/Search";
import { Button } from "@/shared/ui";

export const AdminClinicHeader: FC<PropsWithClassName> = ({ className }) => {
  return (
    <header className={cn(styles.header, className)}>
      <AdminClinicFilters />

      <Button
        className={styles.addClinicButton}
        styleType="outline"
        title="Добавить клинику +"
      />
      <Search className={styles.search} />
      <LogoutButton className={styles.logoutButton} />
    </header>
  );
};
