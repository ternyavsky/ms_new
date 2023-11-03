import { TGender } from "./gender.type";
import { TGroups } from "./group.type";

export interface IUserData {
    id: number;
    password: string;
    last_login: Date;
    is_required: boolean;
    is_staff: boolean;
    sex: TGender;
    number: string;
    email: string;
    first_name: string;
    last_name: string;
    surname: string | null;
    birthday: string;
    image: string;
    address: null;
    created_at: Date;
    updated_at: Date;
    verification_code: number;
    reset_code: number;
    email_verification_code: number;
    group: number | TGroups;
    main_center: number;
    clinic: null;
    interest: null;
    country: number;
    city: number;
    centers: number[];
    disease: number[];
}
