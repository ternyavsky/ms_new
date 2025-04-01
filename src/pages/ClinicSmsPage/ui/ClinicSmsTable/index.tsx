import { Table } from "@/shared/ui/Table";
import { Cell } from "@/shared/ui/Table/ui/Cell";
import { Row } from "@/shared/ui/Table/ui/Row";
import { Thead } from "@/shared/ui/Table/ui/Thead";
import styles from "./styles.module.scss";
import { TBody } from "@/shared/ui/Table/ui/TBody";
import { Badge } from "@/shared/ui";
import { AdminClinicTypeText } from "@/widgets/components/AdminClinic/ui/AdminClinicTypeText";

export const ClinicSmsTable = () => {
  return (
    <Table>
      <Thead>
        <Row>
          <Cell className={styles.numberTh} tag="th">
            №
          </Cell>
          <Cell tag="th">Номер</Cell>
          <Cell tag="th">Страна</Cell>
          <Cell tag="th">Город</Cell>
          <Cell tag="th">Когда был запрос</Cell>
          <Cell tag="th">Действие</Cell>
          <Cell tag="th">Время отправки</Cell>
          <Cell tag="th">Вид</Cell>
        </Row>
      </Thead>
      <TBody>
        <Row>
          <Cell className={styles.numberTd} tag="td">
            1
          </Cell>
          <Cell tag="td">+777777777777</Cell>
          <Cell tag="td">Россия</Cell>
          <Cell tag="td">Воронеж</Cell>
          <Cell tag="td">03.07 12:21</Cell>
          <Cell tag="td">
            <AdminClinicTypeText variant="error">
              Не отправлено
            </AdminClinicTypeText>
          </Cell>
          <Cell tag="td">03.07 12:22</Cell>
          <Cell tag="td">
            <Badge className={styles.badge}>Регистрация</Badge>
          </Cell>
        </Row>
        <Row>
          <Cell className={styles.numberTd} tag="td">
            1
          </Cell>
          <Cell tag="td">+777777777777</Cell>
          <Cell tag="td">Россия</Cell>
          <Cell tag="td">Воронеж</Cell>
          <Cell tag="td">03.07 12:21</Cell>
          <Cell tag="td">
            <AdminClinicTypeText variant="error">
              Не отправлено
            </AdminClinicTypeText>
          </Cell>
          <Cell tag="td">03.07 12:22</Cell>
          <Cell tag="td">
            <Badge className={styles.badge}>Регистрация</Badge>
          </Cell>
        </Row>
        <Row>
          <Cell className={styles.numberTd} tag="td">
            1
          </Cell>
          <Cell tag="td">+777777777777</Cell>
          <Cell tag="td">Россия</Cell>
          <Cell tag="td">Воронеж</Cell>
          <Cell tag="td">03.07 12:21</Cell>
          <Cell tag="td">
            <AdminClinicTypeText variant="error">
              Не отправлено
            </AdminClinicTypeText>
          </Cell>
          <Cell tag="td">03.07 12:22</Cell>
          <Cell tag="td">
            <Badge className={styles.badge}>Регистрация</Badge>
          </Cell>
        </Row>
      </TBody>
    </Table>
  );
};
