import { Doctor, ICountry, INews, INote } from ".";
import { ICity } from "./city.interface";
import { IDisease } from "./disease.interface";
import { IUser } from "./user.types";

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
  start_time: number;
  end_time: number;
  admin: IUser;
  country: ICountry;
  city: ICity;
  employees: Doctor[];
  supported_diseases: IDisease[];
  online_notes: number;
  offline_notes: number;
  detail: IClinicDetail;
  title: string;
  typeTitle: string;
  createdAt: number;
}

export type ClinicResTypes = {
  online_notes: INote[];
  offline_notes: INote[];
  doctors: Doctor[];
  clinic: IClinic[];
  news: INews[];
  users: IUser[];
};

export interface IClinicDetail {
  _id: string;
  adminFirstName: string;
  adminLastName: string;
  adminNumber: string;
  calendar: string;
  computerHave: boolean;
  elevatorHave: boolean;
  fridayTime: string;
  internetHave: boolean;
  language: string;
  mondayTime: string;
  numberOfFloors: number;
  numbers: string[];
  rating: number;
  registryNumber: string;
  saturdayTime: string;
  site: string;
  square: number;
  sundayTime: string;
  thursdayTime: string;
  totalDoctors: number;
  totalServices: number;
  tuesdayTime: string;
  wednesdayTime: string;
}

export interface IGetClinicsResponse {
  data: {
    clinics: IClinic[];
  };
}

export interface IRegisterClinicInput {
  address: string;
  age: number;
  avatar: File;
  city: string;
  countryName: string;
  detail: IClinicDetail;
  services: IRegisterServiceInput[];
  title: string;
  typeTitle: string;
}

export interface IRegisterServiceInput {
  avatar: File;
  category: string;
  description: string;
  doctors: IRegisterDoctorInput[];
  durationMax: number;
  durationMin: number;
  offline: boolean;
  online: boolean;
  paymentMethods: string[];
  priceMax: number;
  priceMin: number;
  title: string;
}

export interface IRegisterDoctorInput {
  avatar: File;
  firstName: string;
  lastName: string;
  specialization: string;
  surname: string;
  workExp: number;
}
