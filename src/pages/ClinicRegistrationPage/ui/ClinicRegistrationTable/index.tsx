import { Table } from "@/shared/ui/Table";
import { Cell } from "@/shared/ui/Table/ui/Cell";
import { TBody } from "@/shared/ui/Table/ui/TBody";
import { Thead } from "@/shared/ui/Table/ui/Thead";
import { tableTitles } from "./data";
import { Row } from "@/shared/ui/Table/ui/Row";
import styles from "./styles.module.scss";
import { StatusBadge } from "@/widgets/components/StatusBadge";
import { TableButton } from "@/shared/ui/Table/ui/TableButton";
import { ClinicRegistrationActionsPopover } from "../ClinicRegistrationActionsPopover";
import { AdminClinicStatusPopover } from "@/widgets/components/AdminClinic/ui/AdminClinicStatusPopover";

export const ClinicRegistrationTable = () => {
  return (
    <Table>
      <Thead>
        <Row>
          {tableTitles.map((title) => (
            <Cell className={styles.numberTh} key={title} tag="th">
              {title}
            </Cell>
          ))}
        </Row>
      </Thead>
      <TBody>
        {new Array(10).fill(1).map((_, index) => (
          <Row key={index}>
            <Cell className={styles.numberTd}>1</Cell>
            <Cell>Хелликс</Cell>
            <Cell>Клиника</Cell>
            <Cell>Август 2012 г</Cell>
            <Cell>36 км²</Cell>
            <Cell>+ 7 (999) 03-20-911</Cell>
            <Cell>+ 7 (999) 03-20-911</Cell>
            <Cell>Палестина</Cell>
            <Cell>Абу-Даби</Cell>
            <Cell>ул: Чурки 12</Cell>
            <Cell>12</Cell>
            <Cell>
              <AdminClinicStatusPopover>
                <StatusBadge className={styles.statusBadge} type="success" />
              </AdminClinicStatusPopover>
            </Cell>
            <Cell>
              <AdminClinicStatusPopover>
                <StatusBadge className={styles.statusBadge} type="success" />
              </AdminClinicStatusPopover>
            </Cell>
            <Cell>
              пн 8:00 -17:00 <br />
              сб-вс 8:00 -14:00
            </Cell>
            <Cell>3</Cell>
            <Cell>24</Cell>
            <Cell>
              <TableButton>4</TableButton>
            </Cell>
            <Cell>Английский Русский</Cell>
            <Cell>
              <AdminClinicStatusPopover>
                <StatusBadge className={styles.statusBadge} type="success" />
              </AdminClinicStatusPopover>
            </Cell>
            <Cell>5 / 130</Cell>
            <Cell>12 / 130</Cell>
            <Cell>
              <TableButton>3</TableButton>
            </Cell>
            <Cell>
              <ClinicRegistrationActionsPopover>
                <TableButton>Выбрать</TableButton>
              </ClinicRegistrationActionsPopover>
            </Cell>
          </Row>
        ))}
      </TBody>
    </Table>
  );
};
