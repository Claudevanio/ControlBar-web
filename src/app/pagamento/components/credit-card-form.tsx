import { TextField } from "@mui/material";

const CreditCardForm = () => {
  return (
    <>
      <p className="text-base font-bold text-textPrimary">Dados do cartão</p>
      <div className="grid grid-cols-2 grid-rows-2 gap-2">
        <TextField
          variant="filled"
          className="col-span-2"
          placeholder="Número do cartão de crédito"
        />
        <TextField variant="filled" placeholder="Validade" />
        <TextField variant="filled" placeholder="CVV" />
      </div>
      <p className="text-base font-bold text-textPrimary">
        Dados do titular do cartão
      </p>
      <TextField
        variant="filled"
        className="col-span-2"
        placeholder="Nome impresso no cartão"
      />
      <p className="text-base font-bold text-textPrimary">
        Endereço de cobrança
      </p>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row w-2/3 gap-2 justify-between">
          <div className="w-4 h-4 border-4 border-primaryLight rounded-full" />
          <p className="w-11/12">
            74000-000 - Jardins Pereira Qd 00 Lt 00, Goiânia/GO
          </p>
        </div>
        <p className="text-base font-bold text-primaryLight underline">
          Alterar
        </p>
      </div>
      <p className="text-base font-bold text-textPrimary">
        Incluir cupom de desconto
      </p>
      <div className="flex flex-row justify-between items-center">
        <TextField variant="filled" placeholder="Cupom de desconto" />
        <p className="text-base font-bold text-primaryLight underline">
          Aplicar
        </p>
      </div>
    </>
  );
};

export default CreditCardForm;
