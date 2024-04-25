"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LockOpen, Person } from "@mui/icons-material";
import { ButtonGradient, IconGradient, TextFieldInput } from "@/components";
import profilePic from "@/assets/logo-control-bar.png";

const LoginPage = () => {
  const router = useRouter();
  const handlePath = (path: string) => {
    router.push(path);
  };

  return (
    <main className="flex bg-[#F2F2F2] h-full flex-col items-center justify-center">
      <div className="bg-white w-[430px] min-h-screen">
        <div className="flex flex-col gap-y-4 p-[5%] h-full items-center justify-center">
          <div className="items-center mb-20 h-[92px] w-[228px]">
            <Image
              src={profilePic}
              alt="logo-img"
              width={0}
              height={0}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col gap-y-1 w-full">
            <TextFieldInput
              placeholder="Usuário"
              leftIconName={
                <IconGradient>
                  <Person sx={{ fill: "url(#gradientColors)" }} />
                </IconGradient>
              }
            />
            <TextFieldInput
              placeholder="Senha"
              leftIconName={
                <IconGradient>
                  <LockOpen sx={{ fill: "url(#gradientColors)" }} />
                </IconGradient>
              }
            />
            <div className="w-full text-end mb-8 font-bold text-sm text-[#5A2491]">
              Esqueceu a senha?
            </div>
          </div>
          <div className="flex flex-col gap-y-8 w-full">
            <ButtonGradient title="LOGIN" onClick={() => handlePath("/home")} />
            <ButtonGradient
              title="CADASTRAR"
              variant="secondary"
              onClick={() => handlePath("/home")}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
