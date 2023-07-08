import { FC } from "react";

import { CustomMobileHeader, MobileContainer } from "@/widgets";
import { BackArrow, Input, Text } from "@/shared";

import man from "/assets/man.jpg";
import pencilBlue from "/assets/pencil-blue.svg";
import styles from "./ProfileSettingsPage.module.scss";

export const ProfileSettingsPage: FC = () => {
    const inputs = [
        { id: 1, placeholder: "Имя" },
        { id: 2, placeholder: "Фамилия" },
        { id: 3, placeholder: "Страна" },
        { id: 4, placeholder: "Город" },
        { id: 5, placeholder: "Адрес" },
        { id: 6, placeholder: "Логин" },
        { id: 7, placeholder: "Интерес" },
    ];

    return (
        <div className={styles.profile}>
            <CustomMobileHeader>
                <div className={styles.header}>
                    <BackArrow path="/m/settings/account" />
                    <Text type="h2" fz="19px">
                        Профиль
                    </Text>
                </div>
            </CustomMobileHeader>
            <MobileContainer>
                <div className={styles.avatar}>
                    <img src={man} alt="" className={styles.img} />
                    <div className={styles.edit}>
                        <img src={pencilBlue} alt="" />
                    </div>
                </div>
                <div className={styles.inputs}>
                    {inputs.map((input) => (
                        <Input
                            key={input.id}
                            type="text"
                            placeholder={`${input.placeholder}`}
                            height="50px"
                            borderRadius="15px"
                        />
                    ))}
                </div>
            </MobileContainer>
        </div>
    );
};
