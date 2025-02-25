import { FC } from "react";
import styles from "./styles.module.scss";
import { PropsWithClassName } from "@/shared/types";
import cn from "clsx";
import { LinksItem } from "./LinksItem/LinksItem";
import { CooperationIcon, HarwareIcon, NoWifiIcon, WifiIcon } from "@/icons";
import { ROUTES } from "@/shared/utils/PATHS";
import { useNavigate, useParams } from "react-router";

type Props = {
    onlineCount: number;
    offlineCount: number;
    cooperationCount: number;
    doctorsCount: number;
};

export const Links: FC<PropsWithClassName<Props>> = ({
    className,
    onlineCount,
    offlineCount,
    cooperationCount,
    doctorsCount,
}) => {
    const navigate = useNavigate();
    const { id } = useParams();
    return (
        <div className={cn(className, styles.wrapper)}>
            <LinksItem
                className={styles.item}
                onClick={() => navigate('/services', { state: { clinicId: id, online: true, count: onlineCount } })}
                title="Онлайн услуги"
                count={onlineCount}
                icon={<WifiIcon />}
            />
            <LinksItem
                className={styles.item}
                onClick={() => navigate('/services', { state: { clinicId: id, online: false, count: offlineCount } })}
                title="Офлайн услуги"
                count={offlineCount}
                icon={<NoWifiIcon />}
            />
            <LinksItem
                className={styles.item}
                onClick={() => navigate('/news', { state: { clinicId: id, count: doctorsCount } })}
                title={"Новости"}
                count={cooperationCount}
                icon={<CooperationIcon />}
            />
            <LinksItem
                className={styles.item}
                onClick={() => navigate('/doctors', { state: { clinicId: id, count: doctorsCount } })}
                title={"Врачи"}
                count={doctorsCount}
                icon={<HarwareIcon />}
            />
        </div>
    );
};
