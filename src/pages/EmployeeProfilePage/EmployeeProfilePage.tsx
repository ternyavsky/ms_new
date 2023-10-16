import { FC } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler,
    // ChartOptions,
    // ChartData,
} from "chart.js";
// import { Line } from "react-chartjs-2";

import { Layout } from "../Layout/Layout";
import {
    AdminPanelContainer,
    BlueBox,
    // Circle,
    Cols,
    EmployeeData,
    EmployeeInfoCard,
    DiseaseInfo,
    InfoText,
    WhiteContentBlock,
} from "@/widgets";
import { Btn, Text } from "@/shared";

import man from "/assets/man.jpg";
import notfound from "/assets/404-page-img.svg";
import search from "/assets/search-gray.svg";
import styles from "./EmployeeProfilePage.module.scss";
import { SMALL_LAPTOP } from "@/shared/utils";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler
);

const EmployeeProfilePage: FC = () => {
    // const options: ChartOptions<"line"> = {
    //     responsive: true,
    //     maintainAspectRatio: false,
    //     scales: {
    //         x: {
    //             border: {
    //                 display: false,
    //             },
    //             grid: {
    //                 display: false,
    //             },
    //             ticks: {
    //                 color: "#B1B2B4",
    //                 font: {
    //                     size: 12,
    //                     weight: "medium",
    //                 },
    //             },
    //         },
    //         y: {
    //             beginAtZero: true,
    //             min: 0,
    //             max: 100,
    //             ticks: {
    //                 stepSize: 50,
    //                 color: "#B1B2B4",
    //                 callback: (val) => val + "%",
    //                 font: {
    //                     size: 12,
    //                     weight: "medium",
    //                 },
    //             },
    //             border: {
    //                 display: false,
    //             },
    //             grid: {
    //                 display: false,
    //             },
    //         },
    //     },
    //     plugins: {
    //         legend: {
    //             display: false,
    //         },
    //         title: {
    //             display: false,
    //         },
    //     },
    // };

    // const labels = [1, 15, 30];

    // const data: ChartData<"line"> = {
    //     labels,
    //     datasets: [
    //         {
    //             fill: false,
    //             label: "Dataset 2",
    //             data: [0, 10, 50, 10, 90, 60],
    //             borderColor: "#0064FA",
    //             backgroundColor: "rgba(53, 162, 235, 0.5)",
    //             pointStyle: false,
    //             tension: 0.5,
    //         },
    //     ],
    // };

    const myPlugin = {
        id: "customShadow",
        beforeDraw: (chart: ChartJS) => {
            const ctx = chart.ctx;
            ctx.save();

            const originalLineDraw = ctx.stroke;
            ctx.stroke = function () {
                ctx.save();
                ctx.shadowColor = "rgba(0, 100, 250, 0.25)";
                ctx.shadowBlur = 5;
                ctx.shadowOffsetX = 4;
                ctx.shadowOffsetY = 4;
                // eslint-disable-next-line prefer-rest-params
                originalLineDraw.apply(this, arguments as any);
                ctx.restore();
            };
        },
    };

    ChartJS.register(myPlugin);

    return (
        <Layout>
            <AdminPanelContainer>
                <Cols
                    type="custom"
                    gap={10}
                    cols={
                        SMALL_LAPTOP
                            ? ["256px", "1fr", "307px"]
                            : ["312px", "550px", "1fr"]
                    }
                >
                    <EmployeeInfoCard type="employee" />
                    <EmployeeData type="employee" />
                    <WhiteContentBlock
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text type="h4">
                            {SMALL_LAPTOP
                                ? "История болезней"
                                : "История болезней / 15 раз за 13/10/2023 по 13/12/2023"}
                        </Text>
                        <Cols type="auto" gap={12} count={SMALL_LAPTOP ? 1 : 2}>
                            {[1, 2, 3].map((item) => (
                                <DiseaseInfo key={item} />
                            ))}
                        </Cols>
                        <Btn
                            color="#0064FA"
                            height={SMALL_LAPTOP ? "35px" : ""}
                            padding={SMALL_LAPTOP ? "10px 16px" : ""}
                            br={SMALL_LAPTOP ? "9px" : ""}
                            fz={SMALL_LAPTOP ? "12px" : ""}
                        >
                            Вся история болезней
                        </Btn>
                    </WhiteContentBlock>
                </Cols>
                <WhiteContentBlock>
                    <div className={styles.nav}>
                        <Text type="h4" fz={SMALL_LAPTOP ? "15px" : ""}>
                            Записи
                        </Text>
                        <InfoText text="Все записи" />
                    </div>
                    <Cols type="auto" gap={10} count={3}>
                        <BlueBox>
                            <Text type="h4" fz={SMALL_LAPTOP ? "15px" : ""}>
                                Пропущенные
                            </Text>
                            <div className={styles.notes}>
                                {[1, 2, 3].map((item) => (
                                    <div className={styles.note} key={item}>
                                        <div className={styles.data}>
                                            <img
                                                src={man}
                                                alt=""
                                                className={styles.avatar}
                                            />
                                            <div className={styles.text}>
                                                <Text
                                                    type="h2"
                                                    fz={
                                                        SMALL_LAPTOP
                                                            ? "14px"
                                                            : "15px"
                                                    }
                                                >
                                                    Гастроэнтеролог
                                                </Text>
                                                <Text
                                                    type="p"
                                                    fz={
                                                        SMALL_LAPTOP
                                                            ? "12px"
                                                            : "15px"
                                                    }
                                                    color="#3C3D3E"
                                                >
                                                    Ковалева Елена Владимировна
                                                </Text>
                                            </div>
                                        </div>
                                        <div className={styles.bottom}>
                                            <Text
                                                type="p"
                                                fz="14px"
                                                color="#7D7F82"
                                            >
                                                23.07.23
                                            </Text>
                                            <InfoText text="Перейти к записи" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </BlueBox>
                        <BlueBox>
                            <Text type="h4" fz={SMALL_LAPTOP ? "15px" : ""}>
                                Текущие
                            </Text>
                            <div className={styles.notes}>
                                {[1, 2, 3].map((item) => (
                                    <div className={styles.note} key={item}>
                                        <div className={styles.data}>
                                            <img
                                                src={man}
                                                alt=""
                                                className={styles.avatar}
                                            />
                                            <div className={styles.text}>
                                                <Text
                                                    type="h2"
                                                    fz={
                                                        SMALL_LAPTOP
                                                            ? "14px"
                                                            : "15px"
                                                    }
                                                >
                                                    Гастроэнтеролог
                                                </Text>
                                                <Text
                                                    type="p"
                                                    fz={
                                                        SMALL_LAPTOP
                                                            ? "12px"
                                                            : "15px"
                                                    }
                                                    color="#3C3D3E"
                                                >
                                                    Ковалева Елена Владимировна
                                                </Text>
                                            </div>
                                        </div>
                                        <div className={styles.bottom}>
                                            <Text
                                                type="p"
                                                fz="14px"
                                                color="#7D7F82"
                                            >
                                                23.07.23
                                            </Text>
                                            <InfoText text="Перейти к записи" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </BlueBox>
                        <BlueBox>
                            <Text type="h4" fz={SMALL_LAPTOP ? "15px" : ""}>
                                Не установленные
                            </Text>
                            <div className={styles.notes}>
                                {[1, 2, 3].map((item) => (
                                    <div className={styles.note} key={item}>
                                        <div className={styles.data}>
                                            <img
                                                src={man}
                                                alt=""
                                                className={styles.avatar}
                                            />
                                            <div className={styles.text}>
                                                <Text
                                                    type="h2"
                                                    fz={
                                                        SMALL_LAPTOP
                                                            ? "14px"
                                                            : "15px"
                                                    }
                                                >
                                                    Гастроэнтеролог
                                                </Text>
                                                <Text
                                                    type="p"
                                                    fz={
                                                        SMALL_LAPTOP
                                                            ? "12px"
                                                            : "15px"
                                                    }
                                                    color="#3C3D3E"
                                                >
                                                    Ковалева Елена Владимировна
                                                </Text>
                                            </div>
                                        </div>
                                        <div className={styles.bottom}>
                                            <Text
                                                type="p"
                                                fz="14px"
                                                color="#7D7F82"
                                            >
                                                23.07.23
                                            </Text>
                                            <InfoText text="Перейти к записи" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </BlueBox>
                    </Cols>
                </WhiteContentBlock>
                <Cols gap={10} type="custom" cols={["460px", "1fr"]}>
                    <WhiteContentBlock>
                        <div className={styles.condition}>
                            <Text type="h4" fz={SMALL_LAPTOP ? "15px" : ""}>
                                Сколько раз перемещал кнопку на
                            </Text>
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <g clip-path="url(#clip0_1162_17654)">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M10.3415 6.69767C9.15607 6.69767 8.19512 7.61393 8.19512 8.74419C8.19512 9.87444 9.15607 10.7907 10.3415 10.7907C11.5269 10.7907 12.4878 9.87444 12.4878 8.74419C12.4878 7.61393 11.5269 6.69767 10.3415 6.69767ZM9.36585 8.74419C9.36585 8.23043 9.80265 7.81395 10.3415 7.81395C10.8803 7.81395 11.3171 8.23043 11.3171 8.74419C11.3171 9.25794 10.8803 9.67442 10.3415 9.67442C9.80265 9.67442 9.36585 9.25794 9.36585 8.74419Z"
                                        fill="#262626"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M5.46341 5.76744C5.46341 5.04819 6.07493 4.46512 6.82927 4.46512C7.58361 4.46512 8.19512 5.04819 8.19512 5.76744C8.19512 6.4867 7.58361 7.06977 6.82927 7.06977C6.07493 7.06977 5.46341 6.4867 5.46341 5.76744ZM6.82927 5.5814C6.72151 5.5814 6.63415 5.66469 6.63415 5.76744C6.63415 5.87019 6.72151 5.95349 6.82927 5.95349C6.93703 5.95349 7.02439 5.87019 7.02439 5.76744C7.02439 5.66469 6.93703 5.5814 6.82927 5.5814Z"
                                        fill="#262626"
                                    />
                                    <path
                                        d="M6.04878 9.48837C6.47983 9.48837 6.82927 9.15519 6.82927 8.74419C6.82927 8.33318 6.47983 8 6.04878 8C5.61773 8 5.26829 8.33318 5.26829 8.74419C5.26829 9.15519 5.61773 9.48837 6.04878 9.48837Z"
                                        fill="#262626"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M1.7561 0C2.72596 0 3.5122 0.749663 3.5122 1.67442C3.5122 1.93292 3.45076 2.17774 3.34105 2.39632L4.51638 3.51698C5.17673 3.00058 5.95663 2.61742 6.81199 2.40953C6.69809 2.18762 6.63415 1.93814 6.63415 1.67442C6.63415 0.749663 7.42038 0 8.39024 0C9.36011 0 10.1463 0.749663 10.1463 1.67442C10.1463 1.95345 10.0748 2.21653 9.94815 2.4479C10.7843 2.67146 11.5498 3.06066 12.2026 3.5756L12.6589 3.14051C12.5492 2.92192 12.4878 2.6771 12.4878 2.4186C12.4878 1.49385 13.274 0.744186 14.2439 0.744186C15.2138 0.744186 16 1.49385 16 2.4186C16 3.34336 15.2138 4.09302 14.2439 4.09302C13.9728 4.09302 13.716 4.03445 13.4868 3.92984L13.0305 4.36493C13.5281 4.93848 13.9137 5.60314 14.1547 6.32772C14.1842 6.3263 14.214 6.32558 14.2439 6.32558C15.2138 6.32558 16 7.07524 16 8C16 8.92476 15.2138 9.67442 14.2439 9.67442C14.231 9.67442 14.2181 9.67428 14.2053 9.67402C13.9262 10.5972 13.4097 11.4221 12.722 12.0852L12.7452 12.1072C12.9744 12.0026 13.2312 11.944 13.5023 11.944C14.4722 11.944 15.2584 12.6937 15.2584 13.6185C15.2584 14.5432 14.4722 15.2929 13.5023 15.2929C12.5324 15.2929 11.7462 14.5432 11.7462 13.6185C11.7462 13.36 11.8076 13.1151 11.9173 12.8966L11.8167 12.8006C11.2579 13.1598 10.6309 13.4308 9.95736 13.5932C9.66797 14.1376 9.07548 14.5117 8.39015 14.5117C7.68381 14.5117 7.07609 14.1143 6.79719 13.5426C6.16059 13.3684 5.56554 13.0982 5.03061 12.7495C5.00616 12.7888 4.97621 12.8258 4.94077 12.8596L4.13394 13.6289C4.23587 13.841 4.29268 14.077 4.29268 14.3256C4.29268 15.2503 3.50645 16 2.53659 16C1.56672 16 0.780488 15.2503 0.780488 14.3256C0.780488 13.4008 1.56672 12.6512 2.53659 12.6512C2.81804 12.6512 3.08402 12.7143 3.31982 12.8265L4.11294 12.0703C4.12209 12.0616 4.13147 12.0532 4.14106 12.0452C3.4059 11.3431 2.85544 10.4652 2.56731 9.48545C2.32466 9.60617 2.04874 9.67442 1.7561 9.67442C0.786232 9.67442 0 8.92476 0 8C0 7.07524 0.786232 6.32558 1.7561 6.32558C2.03268 6.32558 2.29433 6.38655 2.52707 6.49516C2.7451 5.67957 3.14695 4.93595 3.68854 4.30631L2.51322 3.18565C2.28397 3.29026 2.02721 3.34884 1.7561 3.34884C0.786232 3.34884 0 2.59917 0 1.67442C0 0.749663 0.786232 0 1.7561 0ZM2.34146 1.67442C2.34146 1.36617 2.07939 1.11628 1.7561 1.11628C1.43281 1.11628 1.17073 1.36617 1.17073 1.67442C1.17073 1.98267 1.43281 2.23256 1.7561 2.23256C2.07939 2.23256 2.34146 1.98267 2.34146 1.67442ZM8.47923 12.6512C11.1374 12.6512 13.2683 10.6194 13.2683 8.08485L13.2681 8.04654C13.2464 5.47435 11.0391 3.36975 8.34143 3.34899C5.65115 3.32829 3.49065 5.3883 3.51236 7.95346C3.53413 10.5257 5.74139 12.6303 8.43905 12.651C8.45246 12.6511 8.46585 12.6512 8.47923 12.6512ZM14.439 7.47362C14.6664 7.55024 14.8293 7.75698 14.8293 8C14.8293 8.24302 14.6664 8.44976 14.439 8.52638V7.47362ZM14.2439 1.86047C13.9206 1.86047 13.6585 2.11035 13.6585 2.4186C13.6585 2.72686 13.9206 2.97674 14.2439 2.97674C14.5672 2.97674 14.8293 2.72686 14.8293 2.4186C14.8293 2.11035 14.5672 1.86047 14.2439 1.86047ZM1.7561 7.44186C2.07939 7.44186 2.34146 7.69175 2.34146 8C2.34146 8.30825 2.07939 8.55814 1.7561 8.55814C1.43281 8.55814 1.17073 8.30825 1.17073 8C1.17073 7.69175 1.43281 7.44186 1.7561 7.44186ZM12.9169 13.6185C12.9169 13.9267 13.179 14.1766 13.5023 14.1766C13.8256 14.1766 14.0877 13.9267 14.0877 13.6185C14.0877 13.3102 13.8256 13.0603 13.5023 13.0603C13.179 13.0603 12.9169 13.3102 12.9169 13.6185ZM2.53659 14.8837C2.85987 14.8837 3.12195 14.6338 3.12195 14.3256C3.12195 14.0173 2.85987 13.7674 2.53659 13.7674C2.2133 13.7674 1.95122 14.0173 1.95122 14.3256C1.95122 14.6338 2.2133 14.8837 2.53659 14.8837ZM7.80488 1.67442C7.80488 1.36617 8.06696 1.11628 8.39024 1.11628C8.71353 1.11628 8.97561 1.36617 8.97561 1.67442C8.97561 1.98267 8.71353 2.23256 8.39024 2.23256C8.06696 2.23256 7.80488 1.98267 7.80488 1.67442Z"
                                        fill="#262626"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1162_17654">
                                        <rect
                                            width="16"
                                            height="16"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className={styles.stats}>
                            <div className={styles.item}>
                                <Text
                                    type="h4"
                                    fz={SMALL_LAPTOP ? "13px" : "15px"}
                                >
                                    Боль в горле
                                </Text>
                                <Text
                                    type="p"
                                    fz={SMALL_LAPTOP ? "11px" : "13px"}
                                >
                                    17:50 17 февраля 2023
                                </Text>
                            </div>
                            <div className={styles.item}>
                                <Text
                                    type="h4"
                                    fz={SMALL_LAPTOP ? "13px" : "15px"}
                                >
                                    Боль в горле
                                </Text>
                                <Text
                                    type="p"
                                    fz={SMALL_LAPTOP ? "11px" : "13px"}
                                >
                                    17:50 17 февраля 2023
                                </Text>
                            </div>
                            <div className={styles.item}>
                                <Text
                                    type="h4"
                                    fz={SMALL_LAPTOP ? "13px" : "15px"}
                                >
                                    Боль в горле
                                </Text>
                                <Text
                                    type="p"
                                    fz={SMALL_LAPTOP ? "11px" : "13px"}
                                >
                                    17:50 17 февраля 2023
                                </Text>
                            </div>
                            <div className={styles.item}>
                                <Text
                                    type="h4"
                                    fz={SMALL_LAPTOP ? "13px" : "15px"}
                                >
                                    Боль в горле
                                </Text>
                                <Text
                                    type="p"
                                    fz={SMALL_LAPTOP ? "11px" : "13px"}
                                >
                                    17:50 17 февраля 2023
                                </Text>
                            </div>
                        </div>
                    </WhiteContentBlock>
                    <WhiteContentBlock>
                        <Text type="h4" fz={SMALL_LAPTOP ? "15px" : ""}>
                            Хронология болезней
                        </Text>
                    </WhiteContentBlock>
                </Cols>
                <Cols
                    type="custom"
                    gap={10}
                    cols={
                        SMALL_LAPTOP
                            ? ["1fr", "1fr"]
                            : ["362px", "362px", "400px", "1fr"]
                    }
                >
                    <WhiteContentBlock>
                        <Text type="h4" fz={SMALL_LAPTOP ? "15px" : ""}>
                            Предоставлен:
                        </Text>
                        <div className={styles.container}>
                            <Cols type="auto" gap={10} count={1}>
                                {[1, 2, 3].map((item) => (
                                    <div className={styles.data} key={item}>
                                        <img src={man} alt="" />
                                        <div
                                            className={styles.text}
                                            style={{ gridGap: 10 }}
                                        >
                                            <Text type="h4" fz="14px">
                                                Ковалева Елена Владимировна
                                            </Text>
                                            <div className={styles.bottom}>
                                                <InfoText text="Профиль" />
                                                <div className={styles.cancel}>
                                                    <Text
                                                        type="p"
                                                        fz="12px"
                                                        color="#FFFFFF"
                                                    >
                                                        Запретить
                                                    </Text>
                                                    <svg
                                                        width="12"
                                                        height="13"
                                                        viewBox="0 0 12 13"
                                                        fill="none"
                                                    >
                                                        <path
                                                            d="M9.29922 3.20312L2.69922 9.80313M2.69922 3.20312L9.29922 9.80313"
                                                            stroke="white"
                                                            strokeWidth="0.9375"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Cols>
                        </div>
                    </WhiteContentBlock>
                    <WhiteContentBlock>
                        <Text type="h4" fz={SMALL_LAPTOP ? "15px" : ""}>
                            Запрошен:
                        </Text>
                        <div className={styles.container}>
                            <Cols type="auto" gap={10} count={1}>
                                {[1, 2, 3].map((item) => (
                                    <div className={styles.data} key={item}>
                                        <img src={man} alt="" />
                                        <div
                                            className={styles.text}
                                            style={{ gridGap: 10 }}
                                        >
                                            <Text type="h4" fz="14px">
                                                Ковалева Елена Владимировна
                                            </Text>
                                            <div className={styles.bottom}>
                                                <InfoText text="Профиль" />
                                                <div className={styles.cancel}>
                                                    <Text
                                                        type="p"
                                                        fz="12px"
                                                        color="#FFFFFF"
                                                    >
                                                        Отменить
                                                    </Text>
                                                    <svg
                                                        width="12"
                                                        height="13"
                                                        viewBox="0 0 12 13"
                                                        fill="none"
                                                    >
                                                        <path
                                                            d="M9.29922 3.20312L2.69922 9.80313M2.69922 3.20312L9.29922 9.80313"
                                                            stroke="white"
                                                            strokeWidth="0.9375"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Cols>
                        </div>
                    </WhiteContentBlock>
                    <WhiteContentBlock>
                        <div className={styles.resultsInner}>
                            <Text type="h4" fz={SMALL_LAPTOP ? "15px" : ""}>
                                Поисковые запросы
                            </Text>
                            <div className={styles.results}>
                                <div className={styles.result}>
                                    <img src={search} alt="" />
                                    <Text
                                        type="p"
                                        fz={SMALL_LAPTOP ? "13px" : ""}
                                        fw={400}
                                        color="#3C3D3E"
                                    >
                                        Что делать при ангине?
                                    </Text>
                                </div>
                                <div className={styles.result}>
                                    <img src={search} alt="" />
                                    <Text
                                        type="p"
                                        fz={SMALL_LAPTOP ? "13px" : ""}
                                        fw={400}
                                        color="#3C3D3E"
                                    >
                                        Что делать при ангине?
                                    </Text>
                                </div>
                                <div className={styles.result}>
                                    <img src={search} alt="" />
                                    <Text
                                        type="p"
                                        fz={SMALL_LAPTOP ? "13px" : ""}
                                        fw={400}
                                        color="#3C3D3E"
                                    >
                                        Что делать при ангине?
                                    </Text>
                                </div>
                            </div>
                            <Btn
                                color="#0064FA"
                                height={SMALL_LAPTOP ? "35px" : ""}
                                br={SMALL_LAPTOP ? "9px" : ""}
                                padding={SMALL_LAPTOP ? "10px 16px" : ""}
                                fz={SMALL_LAPTOP ? "12px" : ""}
                            >
                                Все поисковые запросы
                            </Btn>
                        </div>
                    </WhiteContentBlock>
                    <WhiteContentBlock>
                        <Text type="h4" fz={SMALL_LAPTOP ? "15px" : ""}>
                            Платные услуги
                        </Text>
                        <div className={styles.container}>
                            <div className={styles.notfound}>
                                <img src={notfound} alt="" />
                                <Text
                                    type="p"
                                    fz="14px"
                                    position="center"
                                    color="#7D7F82"
                                >
                                    Недоступно на данный момент
                                </Text>
                            </div>
                        </div>
                    </WhiteContentBlock>
                </Cols>
            </AdminPanelContainer>
        </Layout>
    );
};

export default EmployeeProfilePage;
