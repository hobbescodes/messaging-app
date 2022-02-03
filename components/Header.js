import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
const { user, logout } = useMoralis();

  return (
  <div className="sticky top-0 p-5 z-50 bg-black rounded-md shadow-sm shadow-[#fb03ff] border-b-2 border-[#fb03ff] text-[#fb03ff]">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
          <div className="text-left lg:text-center col-span-6">
              <div className="relative h-48 w-48 lg:mx-auto border-[#fb03ff] border-8 rounded-full hidden lg:inline-grid">
                  <Avatar />
              </div>
              <h2 className="text-3xl mt-4 font-bold truncate">{user.getUsername()}</h2>

              <ChangeUsername />
              <button className="bg-[#07010b] border-2 border-[#fb03ff] text-[#fb03ff] hover:border-[#057cc1] hover:text-[#057cc1] rounded-lg p-3 font-bold text-sm absolute top-4 right-5" onClick={logout}>Logout</button>
            </div>
      </div>
  </div>
  );
}

export default Header;
