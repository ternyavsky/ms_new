import { Table } from "@/shared/ui/Table";
import { Cell } from "@/shared/ui/Table/ui/Cell";
import { TBody } from "@/shared/ui/Table/ui/TBody";
import { Thead } from "@/shared/ui/Table/ui/Thead";
import { tableTitles } from "./data";
import { Row } from "@/shared/ui/Table/ui/Row";
import styles from "./styles.module.scss";

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
            <Cell>Клиника</Cell>
            <Cell>Клиника</Cell>
            <Cell>Клиника</Cell>
            <Cell>Клиника</Cell>
            <Cell>Клиника</Cell>
            <Cell>Клиника</Cell>
            <Cell>Клиника</Cell>
            <Cell>Клиника</Cell>
            <Cell>Клиника</Cell>
            <Cell>Клиника</Cell>
            <Cell>Клиника</Cell>
            <Cell>Клиника</Cell>
            <Cell>Клиника</Cell>
            <Cell>Клиника</Cell>
            <Cell>Клиника</Cell>
            <Cell>Клиника</Cell>
            <Cell>Клиника</Cell>
            <Cell>Клиника</Cell>
            <Cell>Клиника</Cell>
            <Cell>Клиника</Cell>
          </Row>
        ))}
      </TBody>
    </Table>
  );
};
