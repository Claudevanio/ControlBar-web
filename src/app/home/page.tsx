"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button as BaseButton, IconButton, SvgIcon } from "@mui/material";
import {
  Fastfood,
  SportsBar,
  ControlPoint,
  DinnerDining,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  Button,
  CardEvent,
  CardOption,
  IconGradient,
  CardEventLoading,
  CardOptionLoading,
} from "@/components";
import profilePic from "@/assets/user-img-control-bar.png";
import logoPic from "@/assets/logo-control-bar.png";
import eventPic from "@/assets/event-image.png";
import noImage from "@/assets/no-image.png";
import { CardEventProps, EventProps, ProductGroupProps } from "@/types";
import { useEffect, useState } from "react";
import { api } from "@/services/api";

const eventsDetails: CardEventProps = {
  imgEvent: eventPic,
  dateEvent: "3523/12/31",
  nameEvent: "SHOW ZÉ NETO E CRISTIANO",
  location: "Vila Mix",
};

const codigoIntegracao = 1506;

type Loading = {
  event: boolean;
  productGroups: boolean;
};

type UrlState = {
  groupId: number;
  name: string;
};

const HomePage = () => {
  const router = useRouter();
  const [event, setEvent] = useState<EventProps>();
  const [productGroups, setProductGroups] = useState<ProductGroupProps[]>();
  const [loading, setLoading] = useState<Loading>({
    event: false,
    productGroups: false,
  });

  const handlePath = (path: string, state?: UrlState) => {
    if (state) {
      return router.push(
        `${path}?name=${state.name.toLocaleLowerCase()}&groupdId=${
          state.groupId
        }`
      );
    }

    router.push(path);
  };

  async function getEventsData() {
    try {
      const response = await api.get(`/evento/${codigoIntegracao}`);
      setEvent(response.data[0]);
      setLoading({ ...loading, event: false });
    } catch (error) {
      console.error(error);
      setLoading({ ...loading, event: false });
    }
  }

  async function getProductGroups(eventId: number) {
    try {
      const response = await api.get(`/gruposdeprodutos/${eventId}`);
      setProductGroups(response.data);
      setLoading({ ...loading, productGroups: false });
      sessionStorage.setItem("productGroups", JSON.stringify(response.data));
    } catch (error) {
      console.error(error);
      setLoading({ ...loading, productGroups: false });
    }
  }

  useEffect(() => {
    setLoading({ event: true, productGroups: true });
    getEventsData();
  }, []);

  useEffect(() => {
    if (event) {
      getProductGroups(event.idEvento);
    }
  }, [event]);

  return (
    <main className="flex bg-[#F2F2F2] h-full items-center justify-center">
      <div className="bg-white w-[450px] min-h-screen">
        <div className="flex flex-col gap-y-8 p-[10%] h-full items-center">
          <div className="w-full flex flex-row justify-between items-center">
            <Image src={logoPic} alt="logo-img" width={60} height={50} />
            <div className="w-5/12">
              <Button
                title="Meus pedidos"
                className="h-10 ml-4"
                variant="secondary"
                onClick={() => handlePath("/meus-pedidos")}
              />
            </div>
            <div className="flex flex-row justify-between items-center gap-x-1">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#421C6D] to-[#077167] p-[1px]">
                <div className="rounded-full w-full h-full bg-white p-[1px]">
                  <Image
                    src={profilePic}
                    alt="logo-img"
                    width={60}
                    height={50}
                    className="rounded-full w-full h-full"
                  />
                </div>
              </div>
              <IconButton onClick={() => handlePath("/carrinho")}>
                <IconGradient>
                  <div className="rounded-full h-5 w-5 bg-primaryLight absolute top-[-2px] right-[0px] text-[10px] text-white font-bold flex items-center justify-center">
                    5
                  </div>
                  <ShoppingCartOutlined
                    sx={{ fill: "url(#gradientColors)", height: 24, width: 24 }}
                  />
                </IconGradient>
              </IconButton>
            </div>
          </div>

          {loading.event ? (
            <CardEventLoading />
          ) : (
            <CardEvent event={event ?? ({} as EventProps)} />
          )}

          <div className="w-[90%] flex flex-col gap-2">
            <div className="flex flex-row flex-wrap justify-between">
              {loading.productGroups
                ? Array.from({ length: 2 }).map((_, index) => (
                    <CardOptionLoading key={index} />
                  ))
                : productGroups?.map((productGroup) => (
                    <CardOption
                      key={productGroup.idGrupoProduto}
                      title={productGroup.nomeGrupoProduto}
                      onClick={() =>
                        handlePath("produtos", {
                          name: productGroup.nomeGrupoProduto,
                          groupId: productGroup.idGrupoProduto,
                        })
                      }
                    >
                      <Image
                        src={productGroup.imagemGrupoProduto ?? noImage}
                        alt={`Imagem do produto ${productGroup.nomeGrupoProduto}`}
                        width={60}
                        height={60}
                        className="object-cover rounded-[10px]"
                      />
                    </CardOption>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
