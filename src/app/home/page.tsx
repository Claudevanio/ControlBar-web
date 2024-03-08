"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button as BaseButton, IconButton } from "@mui/material";
import {
  Fastfood,
  SportsBar,
  ControlPoint,
  DinnerDining,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Button, CardEvent, CardOption, IconGradient } from "@/components";
import profilePic from "@/assets/user-img-control-bar.png";
import logoPic from "@/assets/logo-control-bar.png";
import eventPic from "@/assets/event-image.png";
import { CardEventProps } from "@/types";

const eventsDetails: CardEventProps = {
  imgEvent: eventPic,
  dateEvent: "3523/12/31",
  nameEvent: "SHOW ZÉ NETO E CRISTIANO",
  location: "Vila Mix",
};

const HomePage = () => {
  const router = useRouter();
  const handlePath = (path: string) => {
    router.push(path);
  };

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
          <CardEvent {...eventsDetails} />
          <div className="w-[90%] flex flex-col gap-2">
            <div className="flex flex-row justify-between">
              <CardOption
                title="Bebidas"
                onClick={() => handlePath("produtos/bebidas")}
              >
                <IconGradient>
                  <SportsBar
                    sx={{ fill: "url(#gradientColors)", height: 35, width: 35 }}
                  />
                </IconGradient>
              </CardOption>
              <CardOption
                title="Petiscos"
                onClick={() => handlePath("petiscos")}
              >
                <IconGradient>
                  <DinnerDining
                    sx={{ fill: "url(#gradientColors)", height: 35, width: 35 }}
                  />
                </IconGradient>
              </CardOption>
            </div>
            <div className="flex flex-row justify-between">
              <CardOption title="Combos" onClick={() => handlePath("combos")}>
                <IconGradient>
                  <Fastfood
                    sx={{ fill: "url(#gradientColors)", height: 35, width: 35 }}
                  />
                </IconGradient>
              </CardOption>
              <CardOption
                title="Outros"
                onClick={() => handlePath("produtos/outros")}
              >
                <IconGradient>
                  <ControlPoint
                    sx={{ fill: "url(#gradientColors)", height: 35, width: 35 }}
                  />
                </IconGradient>
              </CardOption>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
