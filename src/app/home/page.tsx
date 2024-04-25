"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IconButton } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  CardEvent,
  CardOption,
  IconGradient,
  CardEventLoading,
  CardOptionLoading,
  ButtonGradient,
} from "@/components";
import profilePic from "@/assets/user-img-control-bar.png";
import logoPic from "@/assets/logo-control-bar.png";
import noImage from "@/assets/no-image.png";
import { EventProps, ProductGroupProps } from "@/types";
import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { toCurrency } from "@/utils/currency";
import { CreditCardIcon } from "@/assets/icons/credit-card";
import CurrencyInput from "@/components/form/currency-input";

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
    if (event && event.tipoVenda !== "CREDITO_CARTAO") {
      getProductGroups(event.idEvento);
    }
  }, [event]);

  return (
    <main className="flex bg-[#F2F2F2] h-full items-center justify-center">
      <div className="bg-white w-[450px] min-h-screen">
        <div className="flex flex-col gap-y-8 py-[10%] px-4 h-full items-center">
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

          {loading.event && !event ? (
            <CardEventLoading />
          ) : (
            <CardEvent event={event as EventProps} />
          )}

          <div className="w-[90%] flex flex-col gap-2">
            <div className="flex flex-row flex-wrap justify-between">
              {event?.tipoVenda !== "FICHAS" ? (
                loading.productGroups ? (
                  Array.from({ length: 2 }).map((_, index) => (
                    <CardOptionLoading key={index} />
                  ))
                ) : (
                  productGroups?.map((productGroup) => (
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
                  ))
                )
              ) : (
                <EventWithCredit event={event as EventProps} />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

function EventWithCredit({ event }: { event: EventProps }) {
  const [value, setValue] = useState<number>(0);

  return (
    <div className="bg-background w-full flex flex-col items-center rounded-[20px] shadow-md min-h-96 p-4">
      <div className="flex items-center gap-2 m-auto mb-6 w-max">
        <span className="block w-14 h-14">
          <CreditCardIcon />
        </span>

        <strong className="w-24 text-xs custom-gradient bg-clip-text self-end text-transparent">
          Créditos Control Bar
        </strong>
      </div>

      <div className="flex flex-col flex-[1.5] m-auto w-[85%]">
        <strong className="text-textPrimary text-sm">
          Qual valor deseja inserir?
        </strong>

        <CurrencyInput setValue={setValue} />
      </div>

      <div className="text-[0.65rem] flex flex-1 gap-2 font-semibold flex-col text-textQuaternary align-bottom">
        <span>
          *Valor do Material Rfid (Cartão, pulseira e/ou outros){" "}
          {toCurrency(event?.taxaCartao as number)}
        </span>

        <span>
          OBS.: O custo do material será reembolsado ao final do evento,
          mediante devolução do material.
        </span>
      </div>

      {value > 0 && (
        <footer className="flex items-center gap-4">
          <Button title="Cancelar" className="mt-4" variant="secondary" />
          <ButtonGradient title="Confirmar" className="mt-4" />
        </footer>
      )}
    </div>
  );
}

export default HomePage;
