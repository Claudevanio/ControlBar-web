"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Radio,
  Button,
  Divider,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  RadioGroup,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import {
  Home,
  Room,
  Info,
  Check,
  ArrowBack,
  ExpandMore,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { IconGradient, ButtonGradient, Stepper } from "@/components";
import { CurrencyUtils, DateUtils } from "@/utils";
import pagSeguroPic from "@/assets/pagseguro-img.png";
import logoimg from "@/assets/logo-control-bar.png";
import qrcodeimg from "@/assets/qr-core-img.png";
import { CreditCardForm, PixForm } from "./components";

type Event = {
  nameEvent: string;
  dateEvent: string;
};

const eventDetails: Event = {
  nameEvent: "Show Enrique e Juliano",
  dateEvent: "2023/03/06",
};

type PaymentMethod = "credit" | "pix";

const PagamentoPage = () => {
  const router = useRouter();
  const totalSteps = 4;
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("pix");
  const [isPayment, setIsPayment] = useState<boolean>(false);
  const [currentAccordion, setCurrentAccordion] = useState<string | false>(
    false
  );

  const handlePath = (path: string) => {
    router.push(path);
  };

  const handleAccordion =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setCurrentAccordion(isExpanded ? panel : false);
    };

  return (
    <main className="flex bg-[#F2F2F2] h-full items-center justify-center">
      <div className="bg-white w-[450px] min-h-screen">
        <div className="flex flex-col gap-y-8 p-[10%] h-full items-center">
          <div className="w-full flex flex-row gap-2 justify-between items-center align-middle">
            <IconButton onClick={() => handlePath("/home")}>
              <IconGradient>
                <ArrowBack
                  sx={{ fill: "url(#gradientColors)", height: 24, width: 24 }}
                />
              </IconGradient>
            </IconButton>
            <div className="flex flex-row px-2 bg-primaryLight h-9 w-4/6 rounded-[15px] justify-between items-center align-middle">
              <div className="flex flex-row w-5/12 justify-center gap-2 border-r-4 border-white">
                <IconGradient>
                  <ShoppingCartOutlined
                    className="text-white"
                    sx={{
                      height: 24,
                      width: 24,
                    }}
                  />
                </IconGradient>
                <div className="text-xl text-white font-bold">{0}</div>
              </div>
              <div className="flex flex-row w-7/12 text-base text-white font-bold p-2">
                {CurrencyUtils.toCurrency(254)}
              </div>
            </div>
            <IconButton onClick={() => handlePath("/home")}>
              <IconGradient>
                <Home
                  sx={{ fill: "url(#gradientColors)", height: 24, width: 24 }}
                />
              </IconGradient>
            </IconButton>
          </div>
          <div className="w-full flex flex-row gap-2 justify-center items-center align-middle">
            <Room className="text-primary w-4 h-4" />
            <p className="text-textPrimary font-normal text-xs">
              Evento: {eventDetails.nameEvent} -{" "}
              {DateUtils.toFormatDate(eventDetails.dateEvent, "DD/MM/YYYY")}
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full justify-start">
            <p className="font-bold text-textPrimary text-base">Pagamentos</p>
            <Stepper currentStep={currentStep} totalSteps={totalSteps} />
          </div>
          <div className="flex flex-col gap-4 w-full justify-center">
            {currentStep < 4 ? (
              <>
                <Accordion
                  className="bg-grayLight"
                  onChange={handleAccordion("informacoesPagamentoAccordion")}
                  disabled={currentStep !== 1}
                  elevation={0}
                  sx={{
                    "&:before": {
                      display: "none",
                    },
                  }}
                  style={{
                    margin: 0,
                    border: 1,
                    borderRadius: 10,
                  }}
                  expanded={
                    currentStep === 1 &&
                    currentAccordion === "informacoesPagamentoAccordion"
                  }
                >
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <div
                      className={`flex flex-row gap-2 items-center ${
                        currentStep === 1
                          ? "text-primaryLight"
                          : "text-textSecondary"
                      }`}
                    >
                      <Info className="text-sm" />
                      <p className="text-base font-bold">Regras e Termos</p>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails className="flex flex-col gap-8 items-center">
                    <Divider className="bg-textSecondary" />
                    <p className="text-[15px] px-8 text-justify font-normal text-textSecondary">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using &apos;Content here, content here&apos;,
                      making it look like readable English. Many desktop
                      publishing packages and
                    </p>
                    <p className="text-xs px-8 text-justify font-normal text-textPrimary">
                      Ao avançar, declaro que li e estou cientes dos termos e
                      condições acima.
                    </p>
                    <div className="w-4/6">
                      <ButtonGradient
                        title="Aceitar e avançar"
                        onClick={() => setCurrentStep(2)}
                      />
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  className="bg-grayLight"
                  onChange={handleAccordion("informacoesPagamentoAccordion")}
                  disabled={currentStep !== 2}
                  elevation={0}
                  sx={{
                    "&:before": {
                      display: "none",
                    },
                  }}
                  style={{
                    margin: 0,
                    border: 1,
                    borderRadius: 10,
                  }}
                  expanded={
                    currentStep === 2 &&
                    currentAccordion === "informacoesPagamentoAccordion"
                  }
                >
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <div
                      className={`flex flex-row gap-2 items-center ${
                        currentStep === 2
                          ? "text-primaryLight"
                          : "text-textSecondary"
                      }`}
                    >
                      <p className="text-base font-bold">
                        Informações de pagamento
                      </p>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                      <p className="text-base font-bold text-textPrimary">
                        Formas de pagamento
                      </p>
                      <RadioGroup
                        defaultValue={paymentMethod}
                        className="w-full flex flex-row gap-2justify-start px-3"
                      >
                        <FormControlLabel
                          className={`border flex justify-start items-center rounded-[10px] text-base font-bold min-w-[100px] pr-3 ${
                            paymentMethod === "credit"
                              ? "border-primaryLight text-primaryLight"
                              : "border-textPrimary text-textPrimary"
                          }`}
                          value="credit"
                          label="Cartão"
                          control={
                            <Radio
                              onClick={() => setPaymentMethod("credit")}
                              className="text-textPrimary"
                              sx={{
                                "&, &.Mui-checked": {
                                  color: "#5A2491",
                                },
                              }}
                            />
                          }
                        />
                        <FormControlLabel
                          className={`border flex justify-start items-center rounded-[10px] text-base font-bold min-w-[100px] pr-3 ${
                            paymentMethod === "pix"
                              ? "border-primaryLight text-primaryLight"
                              : "border-textPrimary text-textPrimary"
                          }`}
                          value="pix"
                          label="Pix"
                          control={
                            <Radio
                              onClick={() => setPaymentMethod("pix")}
                              className="text-textPrimary"
                              sx={{
                                "&, &.Mui-checked": {
                                  color: "#5A2491",
                                },
                              }}
                            />
                          }
                        />
                      </RadioGroup>
                    </div>
                    {paymentMethod === "credit" ? (
                      <CreditCardForm />
                    ) : (
                      <PixForm />
                    )}
                    <div className="flex flex-row gap-2 justify-between">
                      <div className="w-1/2">
                        <ButtonGradient
                          title="Confirmar"
                          className="w-[50%]"
                          onClick={() => setCurrentStep(3)}
                        />
                      </div>
                      <div className="w-1/2">
                        <Image
                          src={pagSeguroPic}
                          alt="pagseguro-img"
                          width={0}
                          height={0}
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  className="bg-grayLight"
                  elevation={0}
                  sx={{
                    "&:before": {
                      display: "none",
                    },
                  }}
                  onChange={handleAccordion("informacoesPagamentoAccordion")}
                  disabled={currentStep !== 3}
                  style={{
                    margin: 0,
                    border: 1,
                    borderRadius: 10,
                  }}
                  expanded={
                    currentStep === 3 &&
                    currentAccordion === "informacoesPagamentoAccordion"
                  }
                >
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <div
                      className={`flex flex-row gap-2 items-center ${
                        currentStep === 3
                          ? "text-primaryLight"
                          : "text-textSecondary"
                      }`}
                    >
                      <p className="text-base font-bold">Detalhes do pedido</p>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails className="flex flex-col gap-4">
                    <Divider className="bg-textSecondary" />
                    <p className="text-base font-bold text-textPrimary">
                      Pagamento
                    </p>
                    {paymentMethod === "credit" ? (
                      <CreditCardForm />
                    ) : (
                      <PixForm />
                    )}
                    <Divider className="bg-textSecondary" />
                    <div className="flex text-base font-bold text-textPrimary justify-between">
                      <p>Subtotal</p>
                      <p>{CurrencyUtils.toCurrency(209.24)}</p>
                    </div>
                    <Divider className="bg-textSecondary" />
                    <div className="flex text-base font-bold text-textPrimary justify-between">
                      <p>Desconto</p>
                      <p>{CurrencyUtils.toCurrency(0)}</p>
                    </div>
                    <Divider className="bg-textSecondary" />
                    <div className="flex text-base font-bold text-primaryLight justify-between">
                      <p>Total</p>
                      <p>{CurrencyUtils.toCurrency(209.24)}</p>
                    </div>
                    <div className="flex w-4/6 flex-col gap-2 self-center">
                      <ButtonGradient
                        title="Finalizar"
                        onClick={() => setCurrentStep(4)}
                      />
                      <ButtonGradient
                        title="Cancelar"
                        variant="secondary"
                        onClick={() => setCurrentStep(2)}
                      />
                    </div>
                  </AccordionDetails>
                </Accordion>
              </>
            ) : (
              <Accordion
                className="bg-grayLight rounded-[10px]"
                expanded={
                  currentStep >= 4 &&
                  currentAccordion === "pedidoRealizadoAccordion"
                }
              >
                {!isPayment ? (
                  <AccordionDetails className="flex flex-col gap-4 items-center">
                    <p className="text-xl font-bold text-textPrimary">
                      Pedido realizado
                    </p>
                    <div className="rounded-[10px] h-6 items-center flex bg-warning border border-[#A84701] p-1">
                      <p className="text-xs font-normal text-[#A84701]">
                        Aguardando pagamento
                      </p>
                    </div>
                    <p className="text-base font-normal text-textPrimary text-center">
                      Aguardando confirmação de pagamento via PIX para liberação
                      dos bilhetes do pedido.
                    </p>
                    <p className="text-2xl font-bold text-textPrimary">
                      {CurrencyUtils.toCurrency(209.24)}
                    </p>
                    <div className="w-4/6 flex flex-col gap-4 justify-center items-center text-center">
                      <p className="text-base font-normal text-textPrimary">
                        Escaneie o QR code
                      </p>
                      <Image
                        src={qrcodeimg}
                        alt="qr-code-img"
                        width={300}
                        height={300}
                      />
                      <p className="text-base font-normal text-textPrimary">
                        ou se preferir, você pode pagar copiando e colando o
                        seguinte código
                      </p>
                    </div>
                    <div className="text-black font-normal text-justify">
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry&apos;s
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen
                    </div>
                    <div className="flex w-4/6 flex-col gap-2 self-center">
                      <ButtonGradient
                        title="Copiar Código"
                        variant="secondary"
                        onClick={() => {
                          setIsPayment(true);
                          setCurrentStep(5);
                        }}
                      />
                      <ButtonGradient
                        title="Fechar"
                        variant="secondary"
                        onClick={() => {
                          setIsPayment(true);
                          setCurrentStep(5);
                        }}
                      />
                    </div>
                  </AccordionDetails>
                ) : (
                  <AccordionDetails className="flex flex-col justify-evenly gap-8 items-center p-8">
                    <Image
                      src={logoimg}
                      alt="logo-img"
                      width={150}
                      height={150}
                    />
                    <div className="flex flex-col gap-4 justify-center items-center text-center">
                      <div className="bg-gradient-to-r from-[#421C6D] to-[#077167] rounded-full flex justify-center items-center h-10 w-10">
                        <Check className="text-white" />
                      </div>
                      <p className="text-base font-bold text-primaryLight">
                        Pedido Nº 3045
                      </p>
                      <div className="flex flex-row justify-center">
                        {new Array(8).fill(undefined).map((_, index) => (
                          <div
                            key={index}
                            className="h-2 w-2 rounded-full bg-gray mr-2"
                          />
                        ))}
                      </div>
                      <div className="text-textPrimary font-bold text-center">
                        Sua compra foi concluída, você já pode retirar no
                        balcão.
                      </div>
                    </div>
                    <div className="flex w-4/6 flex-col gap-2 self-center">
                      <ButtonGradient
                        title="Fechar"
                        variant="secondary"
                        onClick={() => handlePath("/home")}
                      />
                    </div>
                  </AccordionDetails>
                )}
              </Accordion>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default PagamentoPage;
