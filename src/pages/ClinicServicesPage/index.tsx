import { AdminClinicHeader } from "@/widgets/components/AdminClinic/ui/AdminClinicHeader";
import { ClinicServicesTable } from "./ui/ClinicServicesTable";
import styles from "./styles.module.scss";

const ClinicServicesPage = () => {
  return (
    <div>
      <AdminClinicHeader />

      <h2 className={styles.title}>Хелликс</h2>
      <ClinicServicesTable />
    </div>
  );
};

export default ClinicServicesPage;
