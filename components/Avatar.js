import Image from "next/image";
import { useMoralis } from "react-moralis";

function Avatar({ username, logoutOnPress }) {
  const { user, logout } = useMoralis();
  return (
    <Image
    className="rounded-full bg-black cursor-pointer hover:opacity-75"
      src={`https://avatars.dicebear.com/api/identicon/${
        username || user.get("username")
      }.svg`}
      layout="fill"
      onClick={() => logoutOnPress && logout()}
    />
  );
}

export default Avatar;
