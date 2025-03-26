import { Table } from "@/shared/ui/Table";
import { Cell } from "@/shared/ui/Table/ui/Cell";
import { Row } from "@/shared/ui/Table/ui/Row";
import { TBody } from "@/shared/ui/Table/ui/TBody";
import { Thead } from "@/shared/ui/Table/ui/Thead";
import styles from "./styles.module.scss";
import { tableTitles } from "./data";
import { TableButton } from "@/shared/ui/Table/ui/TableButton";
import { AdminClinicPaymentPopover } from "@/widgets/components/AdminClinic/ui/AdminClinicPaymentPopover";

export const ClinicServicesTable = () => {
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
            <Cell>ЛОР</Cell>
            <Cell>Консультация</Cell>
            <Cell>Онлайн</Cell>
            <Cell>Покупаешь мозги и все дальше легче будет жить....</Cell>
            <Cell>от 18 000 до 22 0000</Cell>
            <Cell>
              <AdminClinicPaymentPopover>
                <TableButton>Выбрать</TableButton>
              </AdminClinicPaymentPopover>
            </Cell>
            <Cell>2 часа 30 минут</Cell>
            <Cell>все</Cell>
            <Cell>
              <TableButton>2</TableButton>
            </Cell>
            <Cell>
              <TableButton>Выбрать</TableButton>
            </Cell>
          </Row>
        ))}
      </TBody>
    </Table>
  );
};
