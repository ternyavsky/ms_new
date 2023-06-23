import { FC, useState } from "react";

import { Layout } from "../Layout/Layout";
import { Btn, Text, Modal } from "../../shared";
import { Card, Comment } from "../../widgets";

import virus from "/assets/virus-icon.jpg";
import arrowRight from "/assets/arrow-right.svg";
import arrowLeft from "/assets/arrow-left.svg";
import photo from "/assets/photo.jpg";
import styles from "./NotesInfoPage.module.scss";

export const NotesInfoPage: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.box}>
                    <Text type="p" color="#7D7F82">
                        Информация о центре
                    </Text>
                    <div className={styles.info}>
                        <div className={styles.box}>
                            <div className={styles.header}>
                                <div className={styles.data}>
                                    <img src={virus} alt="" />
                                    <div className={styles.text}>
                                        <Text type="h2" fz="24px">
                                            GGTD
                                        </Text>
                                        <Text
                                            type="p"
                                            color="#7D7F82"
                                            fz="18px"
                                        >
                                            Изучено заболеваний: <span>50</span>
                                        </Text>
                                    </div>
                                </div>
                                <Btn color="#0064FA" width="140px">
                                    Написать
                                </Btn>
                            </div>
                            <div className={styles.address}>
                                <div className={styles.box}>
                                    <Text type="p" color="#7D7F82" fz="14px">
                                        Адрес:
                                    </Text>
                                    <Text type="p">
                                        Россия, Москва, Ленина 47
                                    </Text>
                                </div>
                                <div className={styles.box}>
                                    <Text type="p" color="#7D7F82" fz="14px">
                                        Телефон:
                                    </Text>
                                    <Text type="p">+8 (988) 789-87-89</Text>
                                </div>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.text}>
                                <Text type="p" color="#7D7F82" fz="14px">
                                    Информация о процедуре:
                                </Text>
                                <Text type="p">
                                    Lorem Ipsum является текст-заполнитель
                                    обычно используется в графических, печать и
                                    издательской индустрии для... Lorem Ipsum
                                    является текст-заполнитель обычно
                                    используется в графических, печать и
                                    издательской индустрии для...
                                </Text>
                            </div>
                            <div className={styles.btn}>
                                <Btn color="#0064FA" width="160px">
                                    Записаться
                                </Btn>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.nav}>
                        <Text type="p" color="#7D7F82">
                            Специалисты
                        </Text>
                        <div className={styles.arrows}>
                            <img src={arrowLeft} alt="" />
                            <img src={arrowRight} alt="" />
                        </div>
                    </div>
                    <div className={styles.items}>
                        {[1, 2, 3, 4, 5, 6, 7].map(() => (
                            <Card checkbox={false} />
                        ))}
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.wrapper}>
                        <div className={styles.left}></div>
                    </div>
                </div>
                <div className={styles.box}>
                    <Text type="p" color="#7D7F82">
                        Публикации
                    </Text>
                    <div className={styles.gallery}>
                        <div
                            className={styles.photo}
                            onClick={() => setIsOpen(true)}
                        >
                            <img src={photo} alt="" />
                        </div>
                        <div className={styles.photo}>
                            <img src={photo} alt="" />
                        </div>
                        <div className={styles.photo}>
                            <img src={photo} alt="" />
                        </div>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.comments}>
                        <div className={styles.header}>
                            <Text type="p" color="#7D7F82">
                                Отзывы пользователей
                            </Text>
                            <Text type="p" color="#7D7F82">
                                Посмотреть все
                            </Text>
                        </div>
                        <div className={styles.items}>
                            <Comment
                                name="Александр Петров"
                                title="Классные специалисты!"
                            >
                                Lorem Ipsum является текст-заполнитель обычно
                                используется в графических, печать и
                                издательской индустрии для...
                            </Comment>
                            <Comment
                                name="Александр Петров"
                                title="Классные специалисты!"
                            >
                                Lorem Ipsum является текст-заполнитель обычно
                                используется в графических, печать и
                                издательской индустрии для...
                            </Comment>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <Modal width="1100px" height="640px" setIsOpen={setIsOpen}>
                        <img src={photo} alt="" />
                    </Modal>
                )}
            </div>
        </Layout>
    );
};
