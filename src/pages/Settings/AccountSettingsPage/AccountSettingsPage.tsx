import { FC } from "react";
import { useNavigate } from "react-router";

import { MobileContainer, CustomMobileHeader } from "@/widgets";
import { BackArrow, Text } from "@/shared";
// import { useUserCondition } from "@/shared/model/store";

import styles from "./AccountSettingsPage.module.scss";

export const AccountSettingsPage: FC = () => {
    const navigate = useNavigate();
    // const { condition } = useUserCondition();

    const arrowRight = (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.92893 2.92893L15 10L7.92893 17.0711"
                stroke="#B1B2B4"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );

    return (
        <div className={styles.account}>
            <CustomMobileHeader>
                <div className={styles.header}>
                    <BackArrow path="/m/account" />
                    <Text type="h2" fz="19px">
                        Аккаунт
                    </Text>
                </div>
            </CustomMobileHeader>
            <MobileContainer>
                <div className={styles.container}>
                    <div className={styles.box}>
                        <Text type="p" color="#7D7F82" fz="14px">
                            Основные
                        </Text>
                        <div className={styles.items}>
                            <div
                                className={styles.item}
                                onClick={() =>
                                    navigate("/m/settings/account/profile")
                                }
                            >
                                <div className={styles.inner}>
                                    <div className={styles.icon}>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.50033 12.9167H6.25033C5.08736 12.9167 4.50587 12.9167 4.03271 13.0602C2.96737 13.3834 2.13369 14.217 1.81053 15.2824C1.66699 15.7555 1.66699 16.337 1.66699 17.5M12.0837 6.25C12.0837 8.32107 10.4047 10 8.33366 10C6.26259 10 4.58366 8.32107 4.58366 6.25C4.58366 4.17893 6.26259 2.5 8.33366 2.5C10.4047 2.5 12.0837 4.17893 12.0837 6.25ZM9.16699 17.5L11.7515 16.7616C11.8752 16.7262 11.9371 16.7085 11.9948 16.682C12.0461 16.6585 12.0948 16.6298 12.1402 16.5965C12.1914 16.5589 12.2369 16.5134 12.328 16.4224L17.7087 11.0417C18.284 10.4664 18.284 9.53362 17.7087 8.95831C17.1334 8.38302 16.2006 8.38303 15.6253 8.95833L10.2446 14.339C10.1536 14.43 10.1081 14.4756 10.0705 14.5267C10.0372 14.5722 10.0085 14.6209 9.98495 14.6722C9.95845 14.7299 9.94077 14.7918 9.90541 14.9155L9.16699 17.5Z"
                                                stroke="#0064FA"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <Text type="p" fz="15px">
                                        Профиль
                                    </Text>
                                </div>
                                {arrowRight}
                            </div>
                            <div
                                className={styles.item}
                                onClick={() =>
                                    navigate("/m/settings/account/medical-card")
                                }
                            >
                                <div className={styles.inner}>
                                    <div className={styles.icon}>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M3.75047 7.08292C5.27358 0.586295 14.7351 0.586293 16.2505 7.08292C17.0953 10.7041 13.3338 17.0829 10.0005 17.0829C6.66715 17.0829 2.90492 10.7071 3.75047 7.08292Z"
                                                stroke="#0064FA"
                                                stroke-width="1.25"
                                            />
                                            <path
                                                d="M13.75 8.3335C13.75 10.4046 12.0711 12.0835 10 12.0835C7.92893 12.0835 6.25 10.4046 6.25 8.3335C6.25 6.26243 7.92893 4.5835 10 4.5835C12.0711 4.5835 13.75 6.26243 13.75 8.3335Z"
                                                stroke="#0064FA"
                                                stroke-width="1.25"
                                            />
                                            <path
                                                d="M9.25872 6.57152C9.21908 6.66723 9.21908 6.78857 9.21908 7.03125V7.52708C9.21908 7.53887 9.21908 7.54476 9.21541 7.54842C9.21175 7.55208 9.20586 7.55208 9.19408 7.55208H8.69824C8.45556 7.55208 8.33423 7.55208 8.23851 7.59173C8.11089 7.64459 8.0095 7.74598 7.95664 7.8736C7.91699 7.96932 7.91699 8.09066 7.91699 8.33333C7.91699 8.57601 7.91699 8.69735 7.95664 8.79306C8.0095 8.92068 8.11089 9.02208 8.23851 9.07494C8.33423 9.11458 8.45556 9.11458 8.69824 9.11458H9.19408C9.20586 9.11458 9.21175 9.11458 9.21541 9.11824C9.21908 9.12191 9.21908 9.1278 9.21908 9.13958V9.63542C9.21908 9.87809 9.21908 9.99943 9.25872 10.0951C9.31158 10.2228 9.41298 10.3242 9.54059 10.377C9.63631 10.4167 9.75765 10.4167 10.0003 10.4167C10.243 10.4167 10.3643 10.4167 10.4601 10.377C10.5877 10.3242 10.6891 10.2228 10.7419 10.0951C10.7816 9.99943 10.7816 9.87809 10.7816 9.63542V9.13958C10.7816 9.1278 10.7816 9.12191 10.7852 9.11824C10.7889 9.11458 10.7948 9.11458 10.8066 9.11458H11.3024C11.5451 9.11458 11.6664 9.11458 11.7621 9.07494C11.8898 9.02208 11.9912 8.92068 12.044 8.79306C12.0837 8.69735 12.0837 8.57601 12.0837 8.33333C12.0837 8.09066 12.0837 7.96932 12.044 7.8736C11.9912 7.74598 11.8898 7.64459 11.7621 7.59173C11.6664 7.55208 11.5451 7.55208 11.3024 7.55208H10.8066C10.7948 7.55208 10.7889 7.55208 10.7852 7.54842C10.7816 7.54476 10.7816 7.53887 10.7816 7.52708V7.03125C10.7816 6.78857 10.7816 6.66723 10.7419 6.57152C10.6891 6.4439 10.5877 6.34251 10.4601 6.28965C10.3643 6.25 10.243 6.25 10.0003 6.25C9.75765 6.25 9.63631 6.25 9.54059 6.28965C9.41298 6.34251 9.31158 6.4439 9.25872 6.57152Z"
                                                fill="#0064FA"
                                            />
                                            <path
                                                d="M13.333 15.2788C15.3257 15.639 16.6663 16.3123 16.6663 17.0834C16.6663 18.234 13.6816 19.1668 9.99967 19.1668C6.31778 19.1668 3.33301 18.234 3.33301 17.0834C3.33301 16.7871 3.53094 16.5053 3.88773 16.2501"
                                                stroke="#0064FA"
                                                stroke-width="1.25"
                                                stroke-linecap="round"
                                            />
                                        </svg>
                                    </div>
                                    <Text type="p" fz="15px">
                                        Медицинский центр
                                    </Text>
                                </div>
                                {arrowRight}
                            </div>
                            <div
                                className={styles.item}
                                onClick={() =>
                                    navigate("/m/settings/account/access")
                                }
                            >
                                <div className={styles.inner}>
                                    <div className={styles.icon}>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M14.9999 6.59148C14.9749 6.59148 14.9583 6.59148 14.9333 6.59148H14.8916C13.3166 6.54148 12.1416 5.32481 12.1416 3.82481C12.1416 2.29147 13.3916 1.0498 14.9166 1.0498C16.4416 1.0498 17.6916 2.29981 17.6916 3.82481C17.6833 5.33314 16.5083 6.54981 15.0083 6.59981C15.0083 6.59147 15.0083 6.59148 14.9999 6.59148ZM14.9166 2.29148C14.0749 2.29148 13.3916 2.97481 13.3916 3.81648C13.3916 4.64148 14.0333 5.30815 14.8583 5.34148C14.8666 5.33315 14.9333 5.33315 15.0083 5.34148C15.8166 5.29981 16.4416 4.63314 16.4499 3.81648C16.4499 2.97481 15.7666 2.29148 14.9166 2.29148Z"
                                                fill="#0064FA"
                                            />
                                            <path
                                                d="M15.0087 12.7334C14.6837 12.7334 14.3587 12.7084 14.0337 12.65C13.6921 12.5917 13.4671 12.2667 13.5254 11.925C13.5837 11.5834 13.9087 11.3584 14.2504 11.4167C15.2754 11.5917 16.3587 11.4 17.0837 10.9167C17.4754 10.6584 17.6837 10.3334 17.6837 10.0084C17.6837 9.68337 17.4671 9.3667 17.0837 9.10837C16.3587 8.62504 15.2587 8.43337 14.2254 8.61671C13.8837 8.68337 13.5587 8.45004 13.5004 8.10837C13.4421 7.76671 13.6671 7.44171 14.0087 7.38338C15.3671 7.14171 16.7754 7.40004 17.7754 8.0667C18.5087 8.55837 18.9337 9.25837 18.9337 10.0084C18.9337 10.75 18.5171 11.4584 17.7754 11.9584C17.0171 12.4584 16.0337 12.7334 15.0087 12.7334Z"
                                                fill="#0064FA"
                                            />
                                            <path
                                                d="M4.97539 6.59151C4.96706 6.59151 4.95873 6.59151 4.95873 6.59151C3.45873 6.54151 2.28372 5.32483 2.27539 3.82483C2.27539 2.2915 3.52539 1.0415 5.05039 1.0415C6.57539 1.0415 7.82539 2.29151 7.82539 3.81651C7.82539 5.32484 6.65039 6.54151 5.15039 6.59151L4.97539 5.96651L5.03373 6.59151C5.01706 6.59151 4.99206 6.59151 4.97539 6.59151ZM5.05872 5.34151C5.10872 5.34151 5.15039 5.3415 5.20039 5.34984C5.94206 5.3165 6.59206 4.64983 6.59206 3.82483C6.59206 2.98317 5.90873 2.29983 5.06706 2.29983C4.22539 2.29983 3.54206 2.98317 3.54206 3.82483C3.54206 4.6415 4.17539 5.29984 4.98372 5.34984C4.99206 5.3415 5.02539 5.34151 5.05872 5.34151Z"
                                                fill="#0064FA"
                                            />
                                            <path
                                                d="M4.96699 12.7334C3.94199 12.7334 2.95866 12.4584 2.20033 11.9584C1.46699 11.4667 1.04199 10.7584 1.04199 10.0084C1.04199 9.26671 1.46699 8.55837 2.20033 8.0667C3.20033 7.40004 4.60866 7.14171 5.96699 7.38338C6.30866 7.44171 6.53366 7.76671 6.47533 8.10837C6.41699 8.45004 6.09199 8.68337 5.75033 8.61671C4.71699 8.43337 3.62533 8.62504 2.89199 9.10837C2.50033 9.3667 2.29199 9.68337 2.29199 10.0084C2.29199 10.3334 2.50866 10.6584 2.89199 10.9167C3.61699 11.4 4.70032 11.5917 5.72532 11.4167C6.06699 11.3584 6.39199 11.5917 6.45033 11.925C6.50866 12.2667 6.28366 12.5917 5.94199 12.65C5.61699 12.7084 5.29199 12.7334 4.96699 12.7334Z"
                                                fill="#0064FA"
                                            />
                                            <path
                                                d="M9.99994 12.8166C9.97494 12.8166 9.95827 12.8166 9.93327 12.8166H9.8916C8.3166 12.7666 7.1416 11.5499 7.1416 10.0499C7.1416 8.51657 8.3916 7.2749 9.9166 7.2749C11.4416 7.2749 12.6916 8.5249 12.6916 10.0499C12.6833 11.5582 11.5083 12.7749 10.0083 12.8249C10.0083 12.8166 10.0083 12.8166 9.99994 12.8166ZM9.9166 8.51657C9.07494 8.51657 8.3916 9.19991 8.3916 10.0416C8.3916 10.8666 9.03327 11.5332 9.85827 11.5666C9.8666 11.5582 9.93327 11.5582 10.0083 11.5666C10.8166 11.5249 11.4416 10.8582 11.4499 10.0416C11.4499 9.20824 10.7666 8.51657 9.9166 8.51657Z"
                                                fill="#0064FA"
                                            />
                                            <path
                                                d="M9.99974 18.9666C8.99974 18.9666 7.99974 18.7083 7.22474 18.1833C6.49141 17.6916 6.06641 16.9916 6.06641 16.2416C6.06641 15.4999 6.48307 14.7833 7.22474 14.2916C8.78307 13.2583 11.2247 13.2583 12.7747 14.2916C13.5081 14.7833 13.9331 15.4833 13.9331 16.2333C13.9331 16.9749 13.5164 17.6916 12.7747 18.1833C11.9997 18.6999 10.9997 18.9666 9.99974 18.9666ZM7.91641 15.3416C7.52474 15.5999 7.31641 15.9249 7.31641 16.2499C7.31641 16.5749 7.53307 16.8916 7.91641 17.1499C9.04141 17.9083 10.9497 17.9083 12.0747 17.1499C12.4664 16.8916 12.6747 16.5666 12.6747 16.2416C12.6747 15.9166 12.4581 15.5999 12.0747 15.3416C10.9581 14.5833 9.04974 14.5916 7.91641 15.3416Z"
                                                fill="#0064FA"
                                            />
                                        </svg>
                                    </div>
                                    <Text type="p" fz="15px">
                                        Доступ
                                    </Text>
                                </div>
                                {arrowRight}
                            </div>
                            <div
                                className={styles.item}
                                onClick={() =>
                                    navigate("/m/settings/account/protection")
                                }
                            >
                                <div className={styles.inner}>
                                    <div className={styles.icon}>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9.99967 18.9669C9.09134 18.9669 8.19134 18.7002 7.48301 18.1752L3.89967 15.5002C2.94967 14.7919 2.20801 13.3085 2.20801 12.1335V5.93353C2.20801 4.6502 3.14967 3.28353 4.35801 2.83353L8.51634 1.2752C9.34134 0.966862 10.6413 0.966862 11.4663 1.2752L15.6247 2.83353C16.833 3.28353 17.7747 4.6502 17.7747 5.93353V12.1252C17.7747 13.3085 17.033 14.7835 16.083 15.4919L12.4997 18.1669C11.808 18.7002 10.908 18.9669 9.99967 18.9669ZM8.95801 2.4502L4.79967 4.00853C4.09134 4.2752 3.46634 5.1752 3.46634 5.94186V12.1335C3.46634 12.9252 4.02467 14.0335 4.64967 14.5002L8.23301 17.1752C9.19134 17.8919 10.808 17.8919 11.7747 17.1752L15.358 14.5002C15.9913 14.0252 16.5413 12.9252 16.5413 12.1335V5.93353C16.5413 5.1752 15.9163 4.2752 15.208 4.0002L11.0497 2.44186C10.483 2.24186 9.51634 2.24186 8.95801 2.4502Z"
                                                fill="#0064FA"
                                            />
                                            <path
                                                d="M8.88353 11.8581C8.72519 11.8581 8.56686 11.7998 8.44186 11.6748L7.1002 10.3331C6.85853 10.0914 6.85853 9.69144 7.1002 9.44977C7.34186 9.20811 7.74186 9.20811 7.98353 9.44977L8.88353 10.3498L12.0252 7.20811C12.2669 6.96644 12.6669 6.96644 12.9085 7.20811C13.1502 7.44977 13.1502 7.84977 12.9085 8.09144L9.32519 11.6748C9.20019 11.7998 9.04186 11.8581 8.88353 11.8581Z"
                                                fill="#0064FA"
                                            />
                                        </svg>
                                    </div>
                                    <Text type="p" fz="15px">
                                        Защита профиля
                                    </Text>
                                </div>
                                {arrowRight}
                            </div>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <Text type="p" color="#7D7F82" fz="14px">
                            Другое
                        </Text>
                        <div className={styles.items}>
                            <div
                                className={styles.item}
                                onClick={() =>
                                    navigate(
                                        "/m/settings/account/subscriptions"
                                    )
                                }
                            >
                                <div className={styles.inner}>
                                    <div className={styles.icon}>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10.0003 18.0418C9.74199 18.0418 9.49199 18.0085 9.28366 17.9335C6.10033 16.8418 1.04199 12.9668 1.04199 7.24183C1.04199 4.32516 3.40033 1.9585 6.30033 1.9585C7.70866 1.9585 9.02533 2.5085 10.0003 3.49183C10.9753 2.5085 12.292 1.9585 13.7003 1.9585C16.6003 1.9585 18.9587 4.3335 18.9587 7.24183C18.9587 12.9752 13.9003 16.8418 10.717 17.9335C10.5087 18.0085 10.2587 18.0418 10.0003 18.0418ZM6.30033 3.2085C4.09199 3.2085 2.29199 5.01683 2.29199 7.24183C2.29199 12.9335 7.76699 16.1002 9.69199 16.7585C9.84199 16.8085 10.167 16.8085 10.317 16.7585C12.2337 16.1002 17.717 12.9418 17.717 7.24183C17.717 5.01683 15.917 3.2085 13.7087 3.2085C12.442 3.2085 11.267 3.80016 10.5087 4.82516C10.2753 5.14183 9.74199 5.14183 9.50866 4.82516C8.73366 3.79183 7.56699 3.2085 6.30033 3.2085Z"
                                                fill="#0064FA"
                                            />
                                        </svg>
                                    </div>
                                    <Text type="p" fz="15px">
                                        Подписки
                                    </Text>
                                </div>
                                {arrowRight}
                            </div>
                            <div
                                className={styles.item}
                                onClick={() =>
                                    navigate("/m/settings/account/saved")
                                }
                            >
                                <div className={styles.inner}>
                                    <div className={styles.icon}>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M4.10879 18.9582C3.75879 18.9582 3.43379 18.8748 3.14212 18.7082C2.50046 18.3332 2.13379 17.5748 2.13379 16.6332V4.88317C2.13379 2.7665 3.85879 1.0415 5.97546 1.0415H14.0171C16.1338 1.0415 17.8588 2.7665 17.8588 4.88317V16.6248C17.8588 17.5665 17.4921 18.3248 16.8505 18.6998C16.2088 19.0748 15.3671 19.0332 14.5421 18.5748L10.4755 16.3165C10.2338 16.1832 9.75879 16.1832 9.51712 16.3165L5.45046 18.5748C5.00046 18.8248 4.54212 18.9582 4.10879 18.9582ZM5.98379 2.2915C4.55879 2.2915 3.39212 3.45817 3.39212 4.88317V16.6248C3.39212 17.1165 3.53379 17.4832 3.78379 17.6248C4.03379 17.7665 4.42546 17.7248 4.85046 17.4832L8.91712 15.2248C9.53379 14.8832 10.4671 14.8832 11.0838 15.2248L15.1505 17.4832C15.5755 17.7248 15.9671 17.7748 16.2171 17.6248C16.4671 17.4748 16.6088 17.1082 16.6088 16.6248V4.88317C16.6088 3.45817 15.4421 2.2915 14.0171 2.2915H5.98379Z"
                                                fill="#0064FA"
                                            />
                                            <path
                                                d="M9.24206 11.0417C9.08372 11.0417 8.92539 10.9834 8.80039 10.8584L7.55039 9.60837C7.30872 9.3667 7.30872 8.9667 7.55039 8.72503C7.79206 8.48337 8.19206 8.48337 8.43372 8.72503L9.24206 9.53337L12.1337 6.6417C12.3754 6.40003 12.7754 6.40003 13.0171 6.6417C13.2587 6.88337 13.2587 7.28337 13.0171 7.52503L9.68372 10.8584C9.55872 10.9834 9.40039 11.0417 9.24206 11.0417Z"
                                                fill="#0064FA"
                                            />
                                        </svg>
                                    </div>
                                    <Text type="p" fz="15px">
                                        Сохраненное
                                    </Text>
                                </div>
                                {arrowRight}
                            </div>
                            <div className={styles.item}>
                                <div className={styles.inner}>
                                    <div className={styles.icon}>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M15.1587 14.7915H6.28365C5.45865 14.7915 4.66699 14.4415 4.10865 13.8332C3.55032 13.2248 3.26699 12.4082 3.33366 11.5832L4.02533 3.28317C4.05033 3.02484 3.95865 2.77484 3.78365 2.58318C3.60865 2.39151 3.36699 2.2915 3.10866 2.2915H1.66699C1.32533 2.2915 1.04199 2.00817 1.04199 1.6665C1.04199 1.32484 1.32533 1.0415 1.66699 1.0415H3.117C3.72533 1.0415 4.30032 1.29983 4.70865 1.7415C4.93365 1.9915 5.10032 2.28317 5.19199 2.60817H15.6003C16.442 2.60817 17.217 2.9415 17.7837 3.5415C18.342 4.14984 18.6253 4.94151 18.5587 5.78317L18.1087 12.0332C18.017 13.5582 16.6837 14.7915 15.1587 14.7915ZM5.23366 3.84983L4.58366 11.6832C4.54199 12.1665 4.70032 12.6248 5.02532 12.9832C5.35032 13.3415 5.80032 13.5332 6.28365 13.5332H15.1587C16.0253 13.5332 16.8087 12.7998 16.8753 11.9332L17.3253 5.68318C17.3587 5.19151 17.2003 4.72485 16.8753 4.38318C16.5503 4.03318 16.1003 3.84149 15.6087 3.84149H5.23366V3.84983Z"
                                                fill="#0064FA"
                                            />
                                            <path
                                                d="M13.5417 18.9583C12.625 18.9583 11.875 18.2083 11.875 17.2917C11.875 16.375 12.625 15.625 13.5417 15.625C14.4583 15.625 15.2083 16.375 15.2083 17.2917C15.2083 18.2083 14.4583 18.9583 13.5417 18.9583ZM13.5417 16.875C13.3083 16.875 13.125 17.0583 13.125 17.2917C13.125 17.525 13.3083 17.7083 13.5417 17.7083C13.775 17.7083 13.9583 17.525 13.9583 17.2917C13.9583 17.0583 13.775 16.875 13.5417 16.875Z"
                                                fill="#0064FA"
                                            />
                                            <path
                                                d="M6.87467 18.9583C5.95801 18.9583 5.20801 18.2083 5.20801 17.2917C5.20801 16.375 5.95801 15.625 6.87467 15.625C7.79134 15.625 8.54134 16.375 8.54134 17.2917C8.54134 18.2083 7.79134 18.9583 6.87467 18.9583ZM6.87467 16.875C6.64134 16.875 6.45801 17.0583 6.45801 17.2917C6.45801 17.525 6.64134 17.7083 6.87467 17.7083C7.10801 17.7083 7.29134 17.525 7.29134 17.2917C7.29134 17.0583 7.10801 16.875 6.87467 16.875Z"
                                                fill="#0064FA"
                                            />
                                            <path
                                                d="M17.5 7.2915H7.5C7.15833 7.2915 6.875 7.00817 6.875 6.6665C6.875 6.32484 7.15833 6.0415 7.5 6.0415H17.5C17.8417 6.0415 18.125 6.32484 18.125 6.6665C18.125 7.00817 17.8417 7.2915 17.5 7.2915Z"
                                                fill="#0064FA"
                                            />
                                        </svg>
                                    </div>
                                    <Text type="p" fz="15px">
                                        Покупки
                                    </Text>
                                </div>
                                {arrowRight}
                            </div>
                        </div>
                    </div>
                </div>
            </MobileContainer>
        </div>
    );
};
