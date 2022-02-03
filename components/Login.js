import Image from "next/image";
import { useMoralis } from "react-moralis"

function Login() {
    const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative text-white">
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-16">
        <div className="border-2 border-[#ec07ee] rounded-full relative w-[200px] h-[200px]">
        <Image
          src="/images/hobbes.png"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
        </div>
    

        <button onClick={authenticate} className="bg-[#07010b] border-2 border-[#ec07ee] text-[#ec07ee] rounded-lg p-5 font-bold animate-pulse">
          CONNECT WALLET
        </button>
      </div>
      <div className="w-full h-screen">
        <Image
          src="/images/metaverse-bg.jpeg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
