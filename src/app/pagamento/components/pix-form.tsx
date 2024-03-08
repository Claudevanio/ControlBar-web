import Image from "next/image";
import pixLogo from "@/assets/pix-logo.png";

const PixForm = () => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <p className="text-base font-normal text-textPrimary">PIX</p>
      <Image src={pixLogo} alt="pagseguro-img" width={24} height={24} />
      <div className="rounded-[10px] h-6 items-center flex bg-success p-2">
        <p className="text-xs font-normal text-white">Aprovação em minutos</p>
      </div>
    </div>
  );
};

export default PixForm;
