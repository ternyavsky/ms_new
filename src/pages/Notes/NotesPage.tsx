import { FC, useState } from "react";
// import { useNavigate } from "react-router";

import { Layout } from "../Layout";
// import { BackArrow} from "@/shared";
import { CustomMobileHeader } from "@/widgets";
import { Text } from "@/shared/ui/Text";
import { Modal } from "@/shared/ui/Modal";
import { Btn } from "@/shared/ui/Btn";
import { MOBILE } from "@/shared/utils";
import { AddBtn } from "@/shared/ui/AddBtn";
import { Filter } from "@/shared/ui/Filter";
import { Row } from "@/shared/ui/Row";
import { Container } from "@/shared/ui/Container";
import { Search } from "@/shared/ui/Search";
import { NoteBlock } from "@/entities/Note/ui/NoteBlock";

import ghost from "/assets/ghost.svg";
import styles from "./NotesPage.module.scss";

const NotesPage: FC = () => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(true);

    const data = [1, 2, 3, 4];
    // const navigate = useNavigate();

    return (
        <Layout>
            {MOBILE && (
                <CustomMobileHeader back>
                    {/* <BackArrow /> */}
                </CustomMobileHeader>
            )}
            <Container>
                <Row gap={10}>
                    <Search placeholder="Введите запрос" height="48px" />
                    <AddBtn onClick={() => ({})} />
                </Row>
                <Filter data={["Текущие", "Доп.проверка"]} />
                <div
                    className={styles.items}
                    style={
                        data.length === 0
                            ? { display: "block" }
                            : { display: "grid" }
                    }
                >
                    {data.length === 0 ? (
                        <div className={styles.empty}>
                            <div className={styles.inner}>
                                <img src={ghost} alt="" />
                                <Text type="h2" color="#262626" fz="32px">
                                    Ничего нет
                                </Text>
                                <div className={styles.text}>
                                    <Text
                                        type="p"
                                        fz="24px"
                                        position="center"
                                        color="#26262680"
                                    >
                                        Список пуст, создайте запись нажав на
                                        кнопку “Плюс”
                                    </Text>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            {data.map((item) => (
                                <NoteBlock key={item} />
                            ))}
                        </>
                    )}
                </div>
            </Container>
            {isOpenModal && (
                <Modal setIsOpenModal={setIsOpenModal}>
                    <div className={styles.modalContent}>
                        <Text type="h4" fz="17px" position="center">
                            Подтверждено
                        </Text>
                        <Text
                            type="p"
                            fw={400}
                            position="center"
                            fz="14px"
                            color="#7D7F82"
                        >
                            Данная запись успешно прошла дополнительную проверку
                            и была перенесена в раздел текущие
                        </Text>
                    </div>
                    <Btn color="#0064FA" height="44px" fz="13px">
                        Перенести в текущие
                    </Btn>
                </Modal>
            )}
        </Layout>
    );
};

export default NotesPage;
