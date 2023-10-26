import { FC, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { IPostLayoutProps } from "../types";
import { PaginationOptions } from "swiper/types";

import { getFullUsernameWithInitials } from "@/entities/User/lib/helpers/getFullUsernameWithInitials";
import { Text } from "@/shared/ui/Text";
import { Row } from "@/shared/ui/Row";
import { Rows } from "@/shared/ui/Rows";
import { Avatar } from "@/shared/ui/Avatar";
import { Username } from "@/shared/ui/Username";
import { useUserCondition } from "@/shared/model/store"; // убрать
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { UserGroup } from "@/shared/ui/UserGroup";

import post from "/assets/post.jpg";
import woman from "/assets/woman.jpg";
import styles from "./styles.module.scss";

import "swiper/css/pagination";

export const PostLayout: FC<IPostLayoutProps> = ({ actionsGUI, postInfo }) => {
    const [paginationKey, setPaginationKey] = useState<number>(0);
    const { condition } = useUserCondition();

    const sick = condition === "Болен";
    const pagination: PaginationOptions = {
        clickable: true,
        bulletClass: styles.pagination,
        bulletActiveClass: sick ? styles.paginationRed : styles.paginationBlue,
        renderBullet: (_, className: string) => {
            return `<span class="${`${className}`}"></span>`;
        },
    };

    useEffect(() => {
        if (condition === "Болен") {
            setPaginationKey(1);
        } else {
            setPaginationKey(0);
        }
    }, [condition]);

    return (
        <WhiteContentBlock className={styles.post}>
            <Row gap={10}>
                <Avatar type="user" img={woman} size={60} />
                <Rows gap={5} rows={["auto", "auto"]}>
                    <Username
                        name={getFullUsernameWithInitials(
                            "Яковенко",
                            "Александра",
                            "Сергеевна"
                        )}
                        fz="18px"
                    />
                    <UserGroup group="Пользователи" fz="14px" />
                </Rows>
            </Row>
            <div className={styles.descr}>
                <Text type="p" fz="14px" color="#3C3D3E">
                    Lorem Ipsum является текст-заполнитель обычно используется в
                    графических, печать и издательской индустрии для
                    предварительного просмотра макета
                </Text>
            </div>
            <div className={styles.images}>
                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    className={styles.slider}
                    key={paginationKey}
                >
                    <SwiperSlide>
                        <img src={post} alt="" className={styles.img} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={post} alt="" className={styles.img} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={post} alt="" className={styles.img} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={post} alt="" className={styles.img} />
                    </SwiperSlide>
                </Swiper>
            </div>
            <Row gap={0} style={{ justifyContent: "space-between" }}>
                <Row gap={15}>{actionsGUI}</Row>
                {postInfo}
            </Row>
        </WhiteContentBlock>
    );
};
