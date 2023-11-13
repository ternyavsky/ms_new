import { FC } from "react";

import { useUserMutate } from "@/entities/User/lib/hooks/useUserMutate";
import { Text } from "@/shared/ui/Text";
import { ICondition } from "../../types/condition.interface";
import { SMALL_LAPTOP, PC, LAPTOP } from "@/shared/utils";

import styles from "./styles.module.scss";

export const Healthy: FC<ICondition & { isHovered: boolean }> = ({
    condition,
    handleMouseEnter,
    handleMousleLeave,
    isHovered,
}) => {
    const { mutate } = useUserMutate({ disease: [] });
    const healthyClasses = `${styles.healthy} ${styles.item}`;

    return (
        <div
            onClick={() => condition && mutate()}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMousleLeave}
            className={!condition ? healthyClasses : styles.item}
        >
            {((!isHovered && SMALL_LAPTOP && condition) ||
                (isHovered && SMALL_LAPTOP) ||
                PC ||
                LAPTOP) && (
                <svg width="22" height="20" viewBox="0 0 22 20" fill="none">
                    <path d="M16.3721 4.87306C16.3721 4.44826 16.0285 4.10389 15.6047 4.10389C15.1808 4.10389 14.8372 4.44826 14.8372 4.87306V6.15502H13.5581C13.1343 6.15502 12.7907 6.49939 12.7907 6.92419C12.7907 7.34899 13.1343 7.69335 13.5581 7.69335L14.8372 7.69335V8.97528C14.8372 9.40008 15.1808 9.74445 15.6047 9.74445C16.0285 9.74445 16.3721 9.40008 16.3721 8.97528V7.69335H17.6512C18.075 7.69335 18.4186 7.34899 18.4186 6.92419C18.4186 6.49939 18.075 6.15502 17.6512 6.15502H16.3721V4.87306Z" />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22 7.24975C22 3.83938 20.4831 1.29353 18.1228 0.367228C15.9374 -0.490405 13.3144 0.151268 11 2.32269C8.68555 0.151269 6.06258 -0.490405 3.87722 0.367233C1.51689 1.29354 0 3.8394 0 7.24979C0 9.42179 1.1567 11.5593 2.5963 13.3995C4.0507 15.2586 5.88036 16.9232 7.40749 18.1653L7.54474 18.277C8.77325 19.2776 9.66011 20 11 20C12.3399 20 13.2268 19.2777 14.4553 18.277L14.5925 18.1653C16.1197 16.9233 17.9493 15.2586 19.4037 13.3995C20.8433 11.5593 22 9.4218 22 7.24975ZM11.5606 3.93606C13.7215 1.61978 15.9619 1.17124 17.5631 1.79966C19.168 2.42947 20.4651 4.27093 20.4651 7.24975C20.4651 8.90235 19.5654 10.6997 18.1958 12.4503C16.8411 14.182 15.109 15.7642 13.6254 16.9708C12.2004 18.1297 11.7397 18.4617 11 18.4617C10.2603 18.4617 9.79959 18.1297 8.37466 16.9708C6.89106 15.7641 5.15891 14.182 3.80417 12.4503C2.43464 10.6997 1.53488 8.90234 1.53488 7.24979C1.53488 4.27095 2.83203 2.42948 4.43686 1.79967C6.03815 1.17124 8.27854 1.61978 10.4394 3.93606C10.5845 4.09162 10.7875 4.17991 11 4.17991C11.2125 4.17991 11.4155 4.09162 11.5606 3.93606Z"
                    />
                </svg>
            )}
            <Text type="p" fz="14px">
                Здоров
            </Text>
        </div>
    );
};
