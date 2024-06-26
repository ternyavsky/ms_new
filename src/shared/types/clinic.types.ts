import { Doctor } from ".";
import { IDisease } from "./disease.interface";
import { IUserData } from "./user.types";

export interface IClinic {
    id: number;
    name: string;
    password: string;
    last_login: null;
    image: string;
    rating: number;
    description: string;
    is_required: boolean;
    number: string;
    email: string;
    observed: number;
    observed_after: number;
    address: string;
    lng: string;
    lat: string;
    created_at: Date;
    updated_at: Date;
    review_date: null;
    review_passed: null;
    admin: IUserData;
    country: string;
    city: string;
    employees: Doctor[];
    supported_diseases: IDisease[];
    online_notes: number;
    offline_notes: number;
}

export type ClinicResTypes = {
    clinic: IClinic[];
    pacients: IUserData[];
};
