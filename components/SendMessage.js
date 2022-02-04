import { useState, useRef } from "react";
import { useMoralis } from "react-moralis";
import { CameraIcon } from "@heroicons/react/outline";

function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {
          // the object was saved successfully
        },
        (error) => {
          // the saved failed
          // error is a Moralis.Error with an error code and message
          console.log(error.message);
        }
      );

    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });

    setMessage("");
  };

  const hiddenFileInput = useRef(null);

  const handleChange = (event) => {
    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const name = "photo.jpg";

      const photoFile = new Moralis.File(name, file);
      messages.set("photo", photoFile);
      messages
        .save({
          message: message,
          username: user.getUsername(),
          ethAddress: user.get("ethAddress"),
          photoFile: "photo",
        })
        .then(
          (message) => {
            // the object was saved successfully
          },
          (error) => {
            // the saved failed
            // error is a Moralis.Error with an error code and message
            console.log(error.message);
          }
        );
        endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });

    setMessage("");
    }
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  return (
    <form className="flex w-11/12 fixed bottom-10 bg-black px-6 py-4 max-w-2xl shadow-xl rounded-full border-4 border-[#fb03ff]">
      <input
        type="text"
        placeholder={`Enter a Message ${user.getUsername()}...`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-grow pr-5 outline-none bg-transparent text-white placeholder-gray-500"
      />
      <input
        name="wagmi"
        type="file"
        className="hidden"
        ref={hiddenFileInput}
        onChange={handleChange}
        accept="image/*"
      />
      <CameraIcon
        className="h-10 w-10 cursor-pointer hover:animate-pulse text-[#fb03ff] px-2"
        onClick={handleClick}
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="font-bold text-[#fb03ff] hover:animate-pulse"
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;
