import { FC } from "react";
import { IDoctorCardProps } from "./types";

import { CardLayout } from "@/entities/Card";
import { Username } from "@/entities/User";
import { getFullUsernameWithInitials } from "@/entities/User/lib/helpers/getFullUsernameWithInitials";
import { Avatar } from "@/shared/ui/Avatar";
import { UserRank } from "@/entities/User";

export const DoctorCard: FC<IDoctorCardProps> = ({
    name,
    surname,
    patronymic,
    avatar,
    rank,
}) => {
    const surnameLength = surname.length >= 8;

    return (
        <CardLayout
            username={
                <Username
                    name={
                        surnameLength
                            ? `${surname}...`
                            : getFullUsernameWithInitials(
                                  surname,
                                  name,
                                  patronymic
                              )
                    }
                />
            }
            userAvatar={<Avatar type="user" img={avatar} size="M" />}
            userRank={<UserRank rank={rank} position="center" />}
        />
    );
};