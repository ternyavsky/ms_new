import { IClinic } from "@/shared/types/clinic.types";

export interface IUserInfoProps {
    img: string;
    name: string;
    country: string;
    street: string;
    email: string;
    sex: string;
    mainCenter: string;
    distanse: string;
    createdAt: Date | string;
    centers: IClinic[];
}
