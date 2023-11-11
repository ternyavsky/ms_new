import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Geocode from "react-geocode";
import { IGeocoderData } from "../Map/types";
import { TCondition } from "@/shared/types/condition.type";

import { Rows } from "@/shared/ui/Rows";
import { DistanceText } from "../DistanceText";
import { SelectCenterMap } from "../Map";
import { SetCondition } from "../SetCondition";
import { Btn } from "@/shared/ui/Btn";
import { PickDisease } from "@/features/PickDisease";
import { useRegistration } from "@/shared/model/store/registration";
import { useRegistrationMutation } from "@/features/Registration/model/hooks/useRegistrationMutation";

export const SelectCenter: FC = () => {
    const [isMap, setIsMap] = useState<boolean>(false);
    const [city, setCity] = useState<string>("");
    const [main_center, setMain_center] = useState<number>(0);
    const [condition, setCondition] = useState<TCondition>("Здоров");
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [disease, setDisease] = useState<number[]>([]);

    const navigate = useNavigate();
    const { birthday, password1, password2, number } = useRegistration();
    const { mutate } = useRegistrationMutation(
        {
            birthday,
            password1,
            password2,
            numberOrEmail: number,
            stage: 2,
            group: "Пользователи",
            main_center,
            disease,
            city: "Москва",
        },
        () => navigate("/confirmation")
    );

    console.log(city);

    useEffect(() => {
        const permission = "geolocation" in navigator;

        if (permission) {
            navigator.geolocation.getCurrentPosition(
                (pos: GeolocationPosition) => {
                    const { latitude, longitude } = pos.coords;
                    let country = "";

                    Geocode.setApiKey(import.meta.env.VITE_GOOGLE_MAP_API_KEY);
                    Geocode.setLanguage("ru");
                    Geocode.fromLatLng(
                        latitude.toString(),
                        longitude.toString()
                    ).then((res: IGeocoderData) => {
                        const addressComponents =
                            res.results[0].address_components;

                        for (const data of addressComponents) {
                            if (data.types.includes("locality")) {
                                setCity(data.long_name);
                            } else if (data.types.includes("country")) {
                                country = data.long_name;
                            }
                        }
                    });

                    setIsMap(permission);
                }
            );
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClick = () => {
        if (condition === "Болен") {
            setIsOpenModal(true);
        }
    };

    console.log(disease);

    return (
        <Rows gap={20} rows={["auto"]}>
            <DistanceText />
            {isMap && (
                <SelectCenterMap
                    city={"Москва"}
                    allowed={isMap}
                    setCenter={setMain_center}
                />
            )}
            <SetCondition condition={condition} setCondition={setCondition} />
            <Btn
                color="#0064FA"
                onClick={handleClick}
                disabled={main_center === 0 && !!password1.length}
            >
                Продолжить
            </Btn>
            {isOpenModal && (
                <PickDisease
                    setDisease={setDisease}
                    setIsOpenModal={setIsOpenModal}
                    text="Интерес к какому заболеванию у вас имеется?"
                    btns={
                        <>
                            <Btn
                                color="transparent"
                                textColor="#0064FA"
                                border="1px solid #0064FA"
                                onClick={() => setIsOpenModal(false)}
                            >
                                Отсутствует
                            </Btn>
                            <Btn color="#0064FA" onClick={() => mutate()}>
                                Продолжить
                            </Btn>
                        </>
                    }
                />
            )}
        </Rows>
    );
};
