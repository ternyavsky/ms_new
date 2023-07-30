import { FC, useState, useId } from "react";
import { IMediaNav } from "./types";

import { Text } from "@/shared";
import { useUserCondition } from "@/shared/model/store";

import styles from "./ChatInfo.module.scss";

export const ChatInfo: FC = () => {
    const [isSelect, setIsSelect] = useState<string>();

    const { condition } = useUserCondition();

    const data: IMediaNav[] = [
        {
            label: "Медия",
            id: useId(),
        },
        {
            label: "Файлы",
            id: useId(),
        },
        {
            label: "Голос",
            id: useId(),
        },
        {
            label: "Ссылки",
            id: useId(),
        },
    ];

    const sick = condition === "Болен";
    const classesActive = `${styles.item} ${styles.itemActive}`;

    return (
        <div className={styles.info}>
            <div className={styles.box}>
                <Text type="p" color="#7D7F82">
                    Информация
                </Text>
                <div className={styles.block}>
                    <ul>
                        <li>
                            <Text type="p" color="#B1B2B4">
                                Специальность:
                            </Text>
                            <Text type="p">Хирург</Text>
                        </li>
                        <li>
                            <Text type="p" color="#B1B2B4">
                                Числится:
                            </Text>
                            <Text type="p">Лорем Ипсум</Text>
                        </li>
                        <li>
                            <Text type="p" color="#B1B2B4">
                                Опыт работы:
                            </Text>
                            <Text type="p">5 лет</Text>
                        </li>
                        <li>
                            <Text type="p" color="#B1B2B4">
                                Номер:
                            </Text>
                            <Text type="p">+7 (989) 678-78-98</Text>
                        </li>
                    </ul>
                </div>
                <div className={styles.media}>
                    <div className={styles.nav}>
                        {data.map((item) => (
                            <div
                                className={
                                    isSelect === item.id
                                        ? classesActive
                                        : styles.item
                                }
                                key={item.id}
                                onClick={() => setIsSelect(item.id)}
                            >
                                <Text type="p" color="#7D7F82">
                                    {item.label}
                                </Text>
                                <div
                                    className={styles.line}
                                    style={{
                                        backgroundColor: `${
                                            sick ? "#D64657" : ""
                                        }`,
                                    }}
                                ></div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.list}>
                        <div className={styles.square}></div>
                        <div className={styles.square}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};