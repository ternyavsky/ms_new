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
import { FC } from "react";
import { PropsWithClassName } from "@/shared/types";
import { IClinicRegistrationTableProps } from "./types";
import cn from "clsx";
import { formatDate } from "@/shared/utils";

export const ClinicRegistrationTable: FC<
  PropsWithClassName<IClinicRegistrationTableProps>
> = ({ className, list }) => {
  return (
    <Table className={cn(className)}>
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
        {list.map((clinic, index) => (
          <Row key={index}>
            <Cell className={styles.numberTd}>{clinic.id}</Cell>
            <Cell>{clinic.title}</Cell>
            <Cell>{clinic.typeTitle}</Cell>
            <Cell>{formatDate(new Date(clinic.createdAt))}</Cell>
            <Cell>{clinic.detail.square || "-"} км²</Cell>
            <Cell>{clinic.detail.registryNumber}</Cell>
            <Cell>{clinic.detail.registryNumber}</Cell>
            <Cell>{clinic.country.name}</Cell>
            <Cell>{clinic.city as unknown as string}</Cell>
            <Cell>{clinic.address}</Cell>
            <Cell>{clinic.detail.numberOfFloors || 0}</Cell>
            <Cell>
              <AdminClinicStatusPopover>
                <StatusBadge
                  className={styles.statusBadge}
                  type={clinic.detail.computerHave ? "success" : "error"}
                />
              </AdminClinicStatusPopover>
            </Cell>
            <Cell>
              <AdminClinicStatusPopover>
                <StatusBadge
                  className={styles.statusBadge}
                  type={clinic.detail.internetHave ? "success" : "error"}
                />
              </AdminClinicStatusPopover>
            </Cell>
            <Cell>
              пн {clinic.detail.mondayTime || " - "} <br />
              вт {clinic.detail.tuesdayTime || " - "} <br />
              ср {clinic.detail.wednesdayTime || " - "} <br />
              чт {clinic.detail.thursdayTime || " - "} <br />
              пт {clinic.detail.fridayTime || " - "} <br />
              сб {clinic.detail.saturdayTime || " - "} <br />
              вс {clinic.detail.sundayTime || " - "}
            </Cell>
            <Cell> - </Cell>
            <Cell> - </Cell>
            <Cell>
              <TableButton> - </TableButton>
            </Cell>
            <Cell>{clinic.detail.language}</Cell>
            <Cell>
              <AdminClinicStatusPopover>
                <StatusBadge
                  className={styles.statusBadge}
                  type={clinic.detail.elevatorHave ? "success" : "error"}
                />
              </AdminClinicStatusPopover>
            </Cell>
            <Cell>{clinic.detail.totalServices}</Cell>
            <Cell>{clinic.detail.totalDoctors}</Cell>
            <Cell>
              <TableButton> - </TableButton>
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
