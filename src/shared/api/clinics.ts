import { AxiosResponse } from "axios";

import { instance } from "../config/axiosInstance";
import {
  ClinicResTypes,
  IGetClinicsResponse,
  IRegisterClinicInput,
} from "../types";
import { instanceGraphQl } from "../config/axiosInstanceGraphql";

export async function getClinicById(
  token: string,
  clinicId: number
): Promise<AxiosResponse<ClinicResTypes>> {
  const res: AxiosResponse<ClinicResTypes> = await instance.get(
    `/admin/clinic/${clinicId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res;
}

export async function getClinics(
  take: number,
  skip: number
): Promise<IGetClinicsResponse> {
  const { data } = await instanceGraphQl.post(
    "",
    {
      query: `
        query getClinics($skip: Int, $take: Int) {
          clinics(skip: $skip, take: $take) {
            _id  
            title
            typeTitle
            createdAt
            detail {
              computerHave
              elevatorHave
              fridayTime
              internetHave
              language
              mondayTime
              numberOfFloors
              numbers
              rating
              registryNumber
              saturdayTime
              site
              square
              sundayTime
              thursdayTime
              totalDoctors
              totalServices
              tuesdayTime
              wednesdayTime
            }
            country {
              title
            }
            city
            address
          }
        }
      `,
      variables: {
        skip,
        take,
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
        "x-apollo-operation-name": "getClinics",
      },
    }
  );

  return data;
}

const REGISTER_CLINIC_MUTATION = `
  mutation RegisterClinic($registerClinicInput: RegisterClinicInput!) {
    registerClinic(registerClinicInput: $registerClinicInput) {
      id
      name
      address
      phone
    }
  }
`;

export async function registerClinic(
  registerClinicInput: IRegisterClinicInput
) {
  const { data } = await instanceGraphQl.post(
    "",
    {
      query: REGISTER_CLINIC_MUTATION,
      variables: {
        registerClinicInput,
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
        "x-apollo-operation-name": "RegisterClinic",
      },
    }
  );
  return data;
}
