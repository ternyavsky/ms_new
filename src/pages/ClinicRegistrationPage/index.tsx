import { AdminClinicHeader } from "@/widgets/components/AdminClinic/ui/AdminClinicHeader";
import { ClinicRegistrationTable } from "./ui/ClinicRegistrationTable";
import styles from "./styles.module.scss";
import { useQuery } from "react-query";
import { getClinics } from "@/shared/api";
import { useState } from "react";
import { EmptyText } from "@/widgets/components";
import { AdminClinicLayout } from "@/widgets/components/AdminClinic/ui/AdminClinicLayout";
import { useDebounce } from "use-debounce";

const limit = 50;

const ClinicRegistrationPage = () => {
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState("");
  const [searchDebounce] = useDebounce(search, 1000);

  const { data: clinicsData } = useQuery({
    queryKey: ["clinics"],
    queryFn: () => getClinics(limit, offset),
  });

  const filteredClinics =
    clinicsData?.data.clinics.filter((clinic) =>
      clinic.name.toLowerCase().includes(searchDebounce.toLowerCase())
    ) || [];

  const onChangeSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <AdminClinicLayout>
      <AdminClinicHeader search={search} onChangeSearch={onChangeSearch} />

      <h2 className={styles.title}>
        Всего клиник: {clinicsData?.data.clinics.length || 0}
      </h2>
      {clinicsData && clinicsData.data.clinics.length > 0 ? (
        <ClinicRegistrationTable list={filteredClinics} />
      ) : (
        <EmptyText>Список пуст</EmptyText>
      )}
    </AdminClinicLayout>
  );
};

export default ClinicRegistrationPage;
