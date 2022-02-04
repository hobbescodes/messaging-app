import { useMoralis } from "react-moralis"
import Avatar from "./Avatar";
import TimeAgo from 'timeago-react';
import Image from "next/image";

function Message({message}) {
const {user} = useMoralis();

const isUserMessage = message.get('ethAddress') === user.get("ethAddress");

  return (
    <div className={`flex items-end space-x-2 relative ${
        isUserMessage && "justify-end"
    }`}>
        <div className={`relative h-8 w-8 ${
            isUserMessage && "order-last ml-2"
        }`}>
            <Avatar username={message.get("username")}/>
        </div>
        <div className={`flex flex-col space-x-4 p-3 rounded-lg ${
            isUserMessage ? 'rounded-br-none bg-[#00dbf3]' : 'rounded-bl-none bg-[#fb03ff]'
        }`}>
        <p className="flex mb-2 max-w-xs lg:max-w-lg overflow-clip">{message.get("message")}</p>
        {message.get("photo") !== undefined ? <Image src={message.get("photo").url()} width={150} height={200} objectFit="cover" className="flex rounded-md" /> : null}
        </div>

        <TimeAgo className={`text-[10px] italic text-gray-400 ${
            isUserMessage && 'order-first pr-1'
        }`} datetime={message.createdAt} />

        <p className={`absolute -bottom-6 text-xs ${
            isUserMessage ? 'text-[#00dbf3]' : 'text-[#fb03ff]'
        }`}>
            {message.get("username")}
        </p>
        
    </div>
    );
}

export default Message;
