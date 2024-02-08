import { MOBILE } from "@/shared/utils";
import { Layout } from "../Layout";
import { CustomMobileHeader } from "@/widgets";
import { Container } from "@/shared/ui/Container";
import styles from "./styles.module.scss";
import { Button } from "@/shared/ui/Button";
import { Links } from "./ui/Links/Links";
import { Characteristics } from "./ui/Characteristics/Characteristics";
import { News } from "./ui/News/News";
import { Gallery } from "./ui/Gallery/Gallery";
import { useEffect, useRef, useState } from "react";
import cn from "clsx";
import { Link, useParams } from "react-router-dom";
import { AdditionalMenuBtn } from "@/shared/ui/AdditionalMenuBtn";
import { useQuery } from "react-query";
import { getClinicById } from "@/shared/api";
import { useCookie } from "@/shared/lib/hooks/useCookie";
import { IClinic } from "@/shared/types";

const ClinicPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const bannerRef = useRef<HTMLImageElement>(null);
  const { id } = useParams();
  const { getCookie } = useCookie();
  const { data: clinicDataApi } = useQuery(
    ["clinics"],
    () => getClinicById(getCookie("access_token") as string, Number(id)),
    {
      keepPreviousData: true,
      staleTime: 5 * 60 * 1000,
      cacheTime: 30 * 60 * 1000,
    }
  );

  const [clinicData, setClinicData] = useState<IClinic>();

  useEffect(() => {
    if (!clinicDataApi) return;

    setClinicData(clinicDataApi.data.clinic[0]);
  }, [clinicDataApi]);

  useEffect(() => {
    const updateScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return (
    <Layout>
      {MOBILE && (
        <CustomMobileHeader
          back
          text={clinicData?.name}
          btn={
            <AdditionalMenuBtn
              list={[
                { title: "Заблокировать", onClick: () => console.log("asd") },
              ]}
            />
          }
        />
      )}
      <Container>
        <div className={styles.bannerWrapper}>
          <img
            className={cn(styles.banner, {
              [styles.active]: scrollY > 0,
            })}
            src="/assets/clinic-post.jpg"
            alt="clinic"
            onClick={() => {
              if (!bannerRef.current) return;
              bannerRef.current.classList.add(styles.active);
            }}
            ref={bannerRef}
          />

          <Link className={styles.helpTextWrapper} to="/">
            <p>Имеется запись на 24.01.24 / 09:00</p>

            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <h1 className={styles.title}>{clinicData?.name}</h1>

        <div className={styles.parameters}>
          <p>
            Страна: <span>{clinicData?.country || "-"}</span>
          </p>

          <p>
            Город: <span>{clinicData?.city || "-"}</span>
          </p>

          <p>
            Адрес: <span>{clinicData?.address || "-"}</span>
          </p>
        </div>

        <div className={styles.btns}>
          <Button
            title="Написать"
            styleType="outline"
            onClick={() => console.log("click")}
          />
          <Button title="Подписаться" onClick={() => console.log("click")} />
        </div>

        <Links />
        <Characteristics className={styles.characteristics} />

        <News />

        <Gallery className={styles.gallery} />
      </Container>
    </Layout>
  );
};

export default ClinicPage;
