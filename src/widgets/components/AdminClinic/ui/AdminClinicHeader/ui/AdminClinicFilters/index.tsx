import { PropsWithClassName } from "@/shared/types";
import cn from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import { Select } from "@/shared/ui";

export const AdminClinicFilters: FC<PropsWithChildren<PropsWithClassName>> = ({
  className,
}) => {
  return (
    <div className={cn(styles.filters, className)}>
      <Select className={styles.select} placeholder="Клиники" options={[]} />

      <Select
        className={styles.select}
        placeholder="Записи"
        options={[
          { value: "process", label: "В процессе" },
          { value: "confirmed", label: "Подтвержденные" },
          {
            value: "сancelled",
            label: "Отменённые",
          },
        ]}
      />

      <Select
        className={styles.select}
        placeholder="СМС"
        options={[
          {
            value: "sent",
            label: "Отправлено",
          },
          {
            value: "Not sent",
            label: "Не отправлено",
          },
        ]}
      />
    </div>
  );
};
