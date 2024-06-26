import { FC } from "react";

import { Layout } from "../Layout";
import { Container } from "@/shared/ui/Container";
import { MainCenter } from "./ui/MainCenter";
// import { AdditionalCentersList } from "./ui/AdditionalCentersList";
import { LAPTOP, MOBILE, PC, SMALL_LAPTOP, TABLET } from "@/shared/utils";
import { CustomMobileHeader } from "@/widgets";
import { EmployeesList } from "./ui/EmployeesList";
import { Image } from "@/shared/ui/Image";
import { AddCenter } from "./ui/AddCenter";

import more from "./assets/more.svg";
import User from "@/entities/User";
// import { AddBtn } from "./ui/AddBtn";

const MedicalCenter: FC = () => {
  return (
    <Layout>
      {(MOBILE || TABLET) && (
        <CustomMobileHeader
          back
          text="Все врачи"
          btn={<Image src={more} alt="" />}
        />
      )}
      <Container>
        {(PC || SMALL_LAPTOP || LAPTOP) && (
          <User
            data={{ image: "", first_name: "", last_name: "", surname: "" }}
          />
        )}
        <MainCenter />
        {(MOBILE || TABLET) && <EmployeesList />}
        {/* <AdditionalCentersList /> */}
        <AddCenter />
        {/* <AddBtn /> */}
      </Container>
    </Layout>
  );
};

export default MedicalCenter;
