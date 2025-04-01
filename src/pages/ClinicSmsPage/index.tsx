import { AdminClinicHeader } from "@/widgets/components/AdminClinic/ui/AdminClinicHeader";
import { AdminClinicLayout } from "@/widgets/components/AdminClinic/ui/AdminClinicLayout";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import { ClinicSmsTable } from "./ui/ClinicSmsTable";

const ClinicSmsPage = () => {
  const [search, setSearch] = useState("");
  const [searchDebounce] = useDebounce(search, 1000);

  const onChangeSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <AdminClinicLayout>
      <AdminClinicHeader search={search} onChangeSearch={onChangeSearch} />

      <ClinicSmsTable />
    </AdminClinicLayout>
  );
};

export default ClinicSmsPage;
