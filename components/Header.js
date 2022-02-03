import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
const { user, logout } = useMoralis();

  return (
  <div className="sticky top-0 p-5 z-50 bg-black rounded-md shadow-md shadow-[#a126ff] border-b-2 border-[#a126ff] text-[#a126ff]">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
          <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
              <Image src="/images/hobbes.png" layout="fill" objectFit="cover" className="rounded-full" />
          </div>
          <div className="text-left lg:text-center col-span-4">
              <div className="relative h-48 w-48 lg:mx-auto border-[#a126ff] border-8 rounded-full">
                  <Avatar logoutOnPress />
              </div>
              <h1 className="text-3xl mt-4">Welcome Web3 Enthusiasts</h1>
              <h2 className="text-5xl mt-4 font-bold truncate">{user.getUsername()}</h2>

              <ChangeUsername />
              <button className="bg-[#07010b] border-2 border-[#a126ff] text-[#a126ff] hover:border-[#057cc1] hover:text-[#057cc1] rounded-lg p-3 font-bold text-sm absolute top-5 right-5" onClick={logout}>Logout</button>

          </div>
      </div>
  </div>
  );
}

export default Header;
