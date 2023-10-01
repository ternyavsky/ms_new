import { FC } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { Layout } from "../Layout/Layout";
import {
    EmployeeData,
    EmployeeInfoCard,
    Fine,
    Rating,
    Search,
} from "@/widgets";
import { Btn, Text } from "@/shared";

import man from "/assets/man.jpg";
import arrow from "/assets/arrow-right.svg";
import controller from "/assets/controler.svg";
import money from "/assets/money.svg";
import styles from "./CenterPage.module.scss";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

const CenterPage: FC = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: "Chart.js Line Chart",
            },
        },
    };

    const labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
    ];

    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: "Dataset 2",
                data: [1, 2, 3],
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
        ],
    };

    return (
        <Layout>
            <div className={styles.center}>
                <div className={styles.info}>
                    <EmployeeInfoCard type="clinic" />
                    <EmployeeData type="clinic" />
                    <div className={styles.center}>
                        <div className={styles.block}>
                            <div className={styles.box}>
                                <div className={styles.nav}>
                                    <Text type="h2" fz="20px">
                                        Администратор
                                    </Text>
                                    <img src={arrow} alt="" />
                                </div>
                                <div className={styles.admin}>
                                    <img src={man} alt="" />
                                    <div className={styles.text}>
                                        <Text type="h2" fz="18px">
                                            Собственность Pre-Recover
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.box} style={{ height: "100%" }}>
                            <div
                                className={styles.colsX2}
                                style={{ gridGap: 20, height: "100%" }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Text type="h2" fz="18px">
                                        Баланс на счету
                                    </Text>
                                    <div className={styles.bal}>
                                        <div className={styles.sum}>
                                            <Text type="p">За день</Text>
                                            <div
                                                className={`${styles.sumBlock} ${styles.mt5}`}
                                            >
                                                <Text type="h2" fz="28px">
                                                    $
                                                </Text>
                                                <Text type="p" fz="20px">
                                                    1,567
                                                </Text>
                                            </div>
                                        </div>
                                        <div className={styles.sum}>
                                            <Text type="p">Вся сумма</Text>
                                            <div
                                                className={`${styles.sumBlock} ${styles.mt5}`}
                                            >
                                                <Text type="h2" fz="28px">
                                                    $
                                                </Text>
                                                <Text type="h2" fz="20px">
                                                    42,567
                                                </Text>
                                            </div>
                                        </div>
                                    </div>
                                    <Btn color="#0064FA">Подробнее</Btn>
                                </div>
                                <div className={styles.colsX2}>
                                    <div className={styles.col}>
                                        <Text type="h2" fz="18px">
                                            Последнии премии
                                        </Text>
                                        <div className={styles.list}>
                                            {[1, 2, 3, 4, 5].map((item) => (
                                                <div
                                                    className={styles.item}
                                                    key={item}
                                                >
                                                    <div
                                                        className={styles.icon}
                                                    >
                                                        <img
                                                            src={money}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <Text type="p" fz="14px">
                                                        13 апреля 2023
                                                    </Text>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className={styles.col}>
                                        <Text type="h2" fz="18px">
                                            Последнии штрафы
                                        </Text>
                                        <div className={styles.list}>
                                            {[1, 2, 3, 4, 5].map((item) => (
                                                <Fine key={item} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={styles.colsX2}
                    style={{ gridTemplateColumns: "770px 1fr" }}
                >
                    <div className={styles.box}>
                        <div className={styles.text}>
                            <div className={styles.nav}>
                                <Text type="h2" fz="18px">
                                    Премии и штрафы
                                </Text>
                            </div>
                            <div className={styles.chart}>
                                <Line
                                    width="100%"
                                    height="160px"
                                    data={data}
                                    options={options}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.box}>
                            <div className={styles.stats}>
                                <div className={styles.text}>
                                    <Text type="h2" fz="18px">
                                        Количество посещений за день
                                    </Text>
                                    <div className={styles.row}>
                                        <div className={styles.sumBlock}>
                                            <Text type="h2" fz="28px">
                                                86
                                            </Text>
                                            <Text type="h2" fz="16px">
                                                Онлайн
                                            </Text>
                                        </div>
                                        <div className={styles.sumBlock}>
                                            <Text type="h2" fz="28px">
                                                86
                                            </Text>
                                            <Text type="h2" fz="16px">
                                                Оффлайн
                                            </Text>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.text}>
                                <Text type="h2" fz="18px">
                                    Записи
                                </Text>
                                <div className={styles.colsX2}>
                                    <div className={styles.sumBlock}>
                                        <Text type="h2" fz="28px">
                                            86
                                        </Text>
                                        <div
                                            className={styles.text}
                                            style={{ gridGap: 0 }}
                                        >
                                            <Text type="h2" fz="16px">
                                                Всего
                                            </Text>
                                            <Text type="p" fz="14px">
                                                Записей
                                            </Text>
                                        </div>
                                    </div>
                                    <div className={styles.sumBlock}>
                                        <Text type="h2" fz="28px">
                                            86
                                        </Text>
                                        <div
                                            className={styles.text}
                                            style={{ gridGap: 0 }}
                                        >
                                            <Text type="h2" fz="16px">
                                                Подтвержено
                                            </Text>
                                            <Text type="p" fz="14px">
                                                Записей
                                            </Text>
                                        </div>
                                    </div>
                                    <div className={styles.sumBlock}>
                                        <Text type="h2" fz="28px">
                                            86
                                        </Text>
                                        <div
                                            className={styles.text}
                                            style={{ gridGap: 0 }}
                                        >
                                            <Text type="h2" fz="16px">
                                                Отменено
                                            </Text>
                                            <Text type="p" fz="14px">
                                                Записей
                                            </Text>
                                        </div>
                                    </div>
                                    <div className={styles.sumBlock}>
                                        <Text type="h2" fz="28px">
                                            86
                                        </Text>
                                        <div
                                            className={styles.text}
                                            style={{ gridGap: 0 }}
                                        >
                                            <Text type="h2" fz="16px">
                                                Перенесено
                                            </Text>
                                            <Text type="p" fz="14px">
                                                Записей
                                            </Text>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.searchContainer}>
                    <Search placeholder="Поиск специалиста или пациента" />
                    <Btn
                        color="#0064FA"
                        fz="14px"
                        width="133px"
                        height="48px"
                        padding="14px 18px"
                    >
                        <div className={styles.filter}>
                            <img src={controller} alt="" />
                            <Text type="p" fz="14px">
                                Фильтры
                            </Text>
                        </div>
                    </Btn>
                </div>
                <div className={styles.box}>
                    <div
                        className={styles.colsX4}
                        style={{
                            gridTemplateColumns: "repeat(4, 332px)",
                            justifyContent: "space-between",
                        }}
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
                            <div key={item} className={styles.comment}>
                                <div className={styles.rowText}>
                                    <img src={man} alt="" />
                                    <div
                                        className={styles.text}
                                        style={{ gridGap: 10 }}
                                    >
                                        <Text type="h2" fz="14px">
                                            Ковалева Елена Владимировна
                                        </Text>
                                        <div className={styles.bottom}>
                                            <Rating
                                                defaultValue={5}
                                                gap="5px"
                                                width="20px"
                                                height="20px"
                                            />
                                            <div className={styles.more}>
                                                <Text
                                                    type="p"
                                                    color="#0064FA"
                                                    fz="14px"
                                                >
                                                    Профиль
                                                </Text>
                                                <svg
                                                    width="17"
                                                    height="16"
                                                    viewBox="0 0 17 16"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M6.16484 13.5564C6.03817 13.5564 5.9115 13.5097 5.8115 13.4097C5.61817 13.2164 5.61817 12.8964 5.8115 12.703L10.1582 8.35638C10.4782 8.03638 10.4782 7.51638 10.1582 7.19638L5.8115 2.84971C5.61817 2.65638 5.61817 2.33638 5.8115 2.14305C6.00484 1.94971 6.32484 1.94971 6.51817 2.14305L10.8648 6.48971C11.2048 6.82971 11.3982 7.28971 11.3982 7.77638C11.3982 8.26305 11.2115 8.72305 10.8648 9.06305L6.51817 13.4097C6.41817 13.503 6.2915 13.5564 6.16484 13.5564Z"
                                                        fill="#0064FA"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.line}></div>
                    <div
                        className={styles.colsX4}
                        style={{
                            gridTemplateColumns: "repeat(4, 332px)",
                            justifyContent: "space-between",
                        }}
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
                            <div key={item} className={styles.comment}>
                                <div className={styles.rowText}>
                                    <img src={man} alt="" />
                                    <div
                                        className={styles.text}
                                        style={{ gridGap: 10 }}
                                    >
                                        <Text type="h2" fz="14px">
                                            Ковалева Елена Владимировна
                                        </Text>
                                        <div className={styles.bottom}>
                                            <Rating
                                                defaultValue={5}
                                                gap="5px"
                                                width="20px"
                                                height="20px"
                                            />
                                            <div className={styles.more}>
                                                <Text
                                                    type="p"
                                                    color="#0064FA"
                                                    fz="14px"
                                                >
                                                    Профиль
                                                </Text>
                                                <svg
                                                    width="17"
                                                    height="16"
                                                    viewBox="0 0 17 16"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M6.16484 13.5564C6.03817 13.5564 5.9115 13.5097 5.8115 13.4097C5.61817 13.2164 5.61817 12.8964 5.8115 12.703L10.1582 8.35638C10.4782 8.03638 10.4782 7.51638 10.1582 7.19638L5.8115 2.84971C5.61817 2.65638 5.61817 2.33638 5.8115 2.14305C6.00484 1.94971 6.32484 1.94971 6.51817 2.14305L10.8648 6.48971C11.2048 6.82971 11.3982 7.28971 11.3982 7.77638C11.3982 8.26305 11.2115 8.72305 10.8648 9.06305L6.51817 13.4097C6.41817 13.503 6.2915 13.5564 6.16484 13.5564Z"
                                                        fill="#0064FA"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.arrows}>
                        <div className={styles.arrow}>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    d="M12.9167 16.6654L6.25008 9.9987L12.9167 3.33203"
                                    stroke="#0064FA"
                                    stroke-opacity="0.5"
                                    stroke-width="1.25"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                        <div className={styles.arrow}>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    d="M7.9165 16.6654L14.5832 9.9987L7.9165 3.33203"
                                    stroke="#0064FA"
                                    stroke-width="1.25"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CenterPage;