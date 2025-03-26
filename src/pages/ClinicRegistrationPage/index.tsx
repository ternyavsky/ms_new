import { AdminClinicHeader } from "@/widgets/components/AdminClinic/ui/AdminClinicHeader";
import { ClinicRegistrationTable } from "./ui/ClinicRegistrationTable";
import styles from "./styles.module.scss";

const ClinicRegistrationPage = () => {
  return (
    <div>
      <AdminClinicHeader />

      <h2 className={styles.title}>Всего клиник: 52</h2>
      <ClinicRegistrationTable />
    </div>
  );
};

export default ClinicRegistrationPage;
