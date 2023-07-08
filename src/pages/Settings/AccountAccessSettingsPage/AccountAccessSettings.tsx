import { FC, useState, MouseEvent } from "react";

import { CustomMobileHeader, MobileContainer } from "@/widgets";
import { BackArrow, MobilePopUp, Text } from "@/shared";

import woman from "/assets/woman.jpg";
import more from "/assets/dots-more.svg";
import styles from "./AccountAccessSettings.module.scss";

export const AccountAccessSettings: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>();
    const [y, setY] = useState<number>(0);

    return (
        <div className={styles.access}>
            <CustomMobileHeader>
                <div className={styles.header}>
                    <div className={styles.box}>
                        <BackArrow path="/m/settings/account" />
                        <Text type="h2" fz="19px">
                            Доступ
                        </Text>
                    </div>
                    <Text type="h3" color="#0064FA" fz="13px">
                        Добавить +
                    </Text>
                </div>
            </CustomMobileHeader>
            <MobileContainer>
                <div className={styles.container}>
                    <div className={styles.block}>
                        <Text type="p" fz="14px" color="#7D7F82">
                            Имеется
                        </Text>
                        <div className={styles.item}>
                            <div className={styles.data}>
                                <img src={woman} alt="" />
                                <div className={styles.text}>
                                    <Text type="h2" fz="16px">
                                        Михайлова Т. А.
                                    </Text>
                                    <Text type="p" color="#7D7F82" fz="13px">
                                        Хирург
                                    </Text>
                                </div>
                            </div>
                            <img
                                src={more}
                                alt=""
                                onClick={(e: MouseEvent<HTMLImageElement>) => {
                                    setIsOpen((prev) => !prev);
                                    setY(e.clientY);
                                }}
                            />
                        </div>
                        <div className={styles.item}>
                            <div className={styles.data}>
                                <img src={woman} alt="" />
                                <div className={styles.text}>
                                    <Text type="h2" fz="16px">
                                        Михайлова Т. А.
                                    </Text>
                                    <Text type="p" color="#7D7F82" fz="13px">
                                        Хирург
                                    </Text>
                                </div>
                            </div>
                            <img
                                src={more}
                                alt=""
                                onClick={(e: MouseEvent<HTMLImageElement>) => {
                                    setIsOpen((prev) => !prev);
                                    setY(e.clientY);
                                }}
                            />
                        </div>
                    </div>
                    <div className={styles.block}>
                        <Text type="p" fz="14px" color="#7D7F82">
                            Отправлен
                        </Text>
                        <div className={styles.item}>
                            <div className={styles.data}>
                                <img src={woman} alt="" />
                                <div className={styles.text}>
                                    <Text type="h2" fz="16px">
                                        Михайлова Т. А.
                                    </Text>
                                    <Text type="p" color="#7D7F82" fz="13px">
                                        Хирург
                                    </Text>
                                </div>
                            </div>
                            <img
                                src={more}
                                alt=""
                                onClick={(e: MouseEvent<HTMLImageElement>) => {
                                    setIsOpen((prev) => !prev);
                                    setY(e.clientY);
                                }}
                            />
                        </div>
                        <div className={styles.item}>
                            <div className={styles.data}>
                                <img src={woman} alt="" />
                                <div className={styles.text}>
                                    <Text type="h2" fz="16px">
                                        Михайлова Т. А.
                                    </Text>
                                    <Text type="p" color="#7D7F82" fz="13px">
                                        Хирург
                                    </Text>
                                </div>
                            </div>
                            <img
                                src={more}
                                alt=""
                                onClick={(e: MouseEvent<HTMLImageElement>) => {
                                    setIsOpen((prev) => !prev);
                                    setY(e.clientY);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </MobileContainer>
            {isOpen && (
                <MobilePopUp right="40px" top={`${y}px`}>
                    <li>
                        <Text type="p">Изменить</Text>
                    </li>
                    <li>
                        <Text type="p" color="#D64657">
                            Удалить
                        </Text>
                    </li>
                </MobilePopUp>
            )}
        </div>
    );
};
