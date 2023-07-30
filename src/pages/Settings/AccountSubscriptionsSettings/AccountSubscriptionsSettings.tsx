import { FC } from "react";

import {
    CustomMobileHeader,
    MobileCard,
    MobileContainer,
    Slider,
} from "@/widgets";
import { BackArrow, MobileSearch, Text } from "@/shared";

import poster from "/assets/center-icon.jpg";
import styles from "./AccountSubscriptionsSettings.module.scss";

const AccountSubscriptionsSettingsPage: FC = () => {
    return (
        <div className={styles.subs}>
            <CustomMobileHeader>
                <div className={styles.header}>
                    <BackArrow path="/m/settings/account" />
                    <Text type="h2" fz="19px">
                        Подписки
                    </Text>
                </div>
            </CustomMobileHeader>
            <MobileContainer>
                <MobileSearch placeholder="Введите запрос" filterBtn={false} />
                <div className={styles.container}>
                    <div className={styles.block}>
                        <Text type="p" fz="14px" color="#7D7F82">
                            Центры
                        </Text>
                        <Slider navigate={false} container="100%">
                            <div className={styles.card}>
                                <img src={poster} alt="" />
                                <div className={styles.text}>
                                    <Text type="h2" fz="15px">
                                        Центр 259
                                    </Text>
                                    <Text type="p" fz="10px">
                                        Constraints автоматом выставляется у
                                        элементов, которые ручками добавляются,
                                        а...
                                    </Text>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <img src={poster} alt="" />
                                <div className={styles.text}>
                                    <Text type="h2" fz="15px">
                                        Центр 259
                                    </Text>
                                    <Text type="p" fz="10px">
                                        Constraints автоматом выставляется у
                                        элементов, которые ручками добавляются,
                                        а...
                                    </Text>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className={styles.block}>
                        <Text type="p" fz="14px" color="#7D7F82">
                            Клиники
                        </Text>
                        <Slider navigate={false} container="100%">
                            <div className={styles.clinic}>
                                <img src={poster} alt="" />
                                <div className={styles.text}>
                                    <Text type="h2" fz="15px">
                                        Центр 259
                                    </Text>
                                    <Text type="p" fz="12px">
                                        Constraints автоматом выставляется у
                                        элемент
                                    </Text>
                                </div>
                            </div>
                            <div className={styles.clinic}>
                                <img src={poster} alt="" />
                                <div className={styles.text}>
                                    <Text type="h2" fz="15px">
                                        Центр 259
                                    </Text>
                                    <Text type="p" fz="12px">
                                        Constraints автоматом выставляется у
                                        элемент
                                    </Text>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className={styles.block}>
                        <Text type="p" fz="14px" color="#7D7F82">
                            Специалисты
                        </Text>
                        <Slider navigate={false} container="100%">
                            <MobileCard />
                        </Slider>
                    </div>
                </div>
            </MobileContainer>
        </div>
    );
};

export default AccountSubscriptionsSettingsPage;