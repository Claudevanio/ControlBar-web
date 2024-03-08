"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowBack } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import ScrollContainer from "react-indiana-drag-scroll";
import { CardOrder, IconGradient } from "@/components";

type Order = {
  nameEvent: string;
  dateEvent: string;
  dateOrder: string;
  quantityItems: number;
  valueOrder: number;
  numberOrder: number;
  isActive: boolean;
};

const ordersData: Order[] = [
  {
    nameEvent: "Show Enrique e Juliano",
    dateEvent: "2023/12/29",
    dateOrder: "2023/12/31",
    numberOrder: 3045,
    quantityItems: 4,
    valueOrder: 259,
    isActive: true,
  },
  {
    nameEvent: "Show Enrique e Juliano",
    dateEvent: "2023/12/29",
    dateOrder: "2023/12/02",
    numberOrder: 3048,
    quantityItems: 4,
    valueOrder: 239,
    isActive: false,
  },
  {
    nameEvent: "Show Enrique e Juliano",
    dateEvent: "2023/12/29",
    dateOrder: "2023/12/12",
    numberOrder: 3047,
    quantityItems: 1,
    valueOrder: 269,
    isActive: true,
  },
  {
    nameEvent: "Show Enrique e Juliano",
    dateEvent: "2023/12/29",
    dateOrder: "2023/12/29",
    numberOrder: 3046,
    quantityItems: 1,
    valueOrder: 267,
    isActive: false,
  },
];

const MeusPedidosPage = () => {
  const router = useRouter();
  const [activeOrders, setActiveOrders] = useState<boolean>(true);

  const ordersDetails = (
    activeOrders ? ordersData.filter((value) => value.isActive) : ordersData
  ).sort(
    (a, b) => new Date(b.dateOrder).getTime() - new Date(a.dateOrder).getTime()
  );

  const handlePath = (path: string) => {
    router.push(path);
  };

  return (
    <main className="flex bg-[#F2F2F2] h-full items-center justify-center">
      <div className="flex bg-white w-[450px] min-h-screen">
        <div className="flex flex-col gap-y-4 p-[10%] w-full h-full items-center">
          <div className="w-full flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2 items-center">
              <IconButton onClick={() => handlePath("/home")}>
                <IconGradient>
                  <ArrowBack
                    sx={{
                      fill: "url(#gradientColors)",
                      height: 24,
                      width: 24,
                    }}
                  />
                </IconGradient>
              </IconButton>
              <p className="text-base text-primaryLight font-bold">
                Meus pedidos
              </p>
            </div>
          </div>
          <div className="flex flex-row w-full justify-evenly">
            <Button
              onClick={() => setActiveOrders(true)}
              className="flex flex-col"
            >
              <div
                className={`font-base ${
                  activeOrders
                    ? "bg-gradient-to-r from-[#421C6D] to-[#077167] bg-clip-text text-transparent font-bold"
                    : "text-textQuaternary font-medium"
                }`}
              >
                Ativos
              </div>
              {activeOrders && (
                <div className="rounded-[10px] w-1/2 h-1 bg-gradient-to-r from-[#421C6D] to-[#077167]" />
              )}
            </Button>
            <Button
              onClick={() => setActiveOrders(false)}
              className="flex flex-col"
            >
              <div
                className={`font-base ${
                  !activeOrders
                    ? "bg-gradient-to-r from-[#421C6D] to-[#077167] bg-clip-text text-transparent font-bold"
                    : "text-textQuaternary font-medium"
                }`}
              >
                Histórico
              </div>
              {!activeOrders && (
                <div className="rounded-[10px] w-1/2 h-1 bg-gradient-to-r from-[#421C6D] to-[#077167]" />
              )}
            </Button>
          </div>
          <ScrollContainer
            vertical
            className="w-full gap-2 flex flex-col h-[500px]"
          >
            {ordersDetails.map((value, index) => (
              <CardOrder
                key={index}
                onClick={() => handlePath(`/meus-pedidos/${value.numberOrder}`)}
                {...value}
              />
            ))}
          </ScrollContainer>
        </div>
      </div>
    </main>
  );
};

export default MeusPedidosPage;
