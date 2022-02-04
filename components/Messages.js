import { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";

// Only show messages from the last day
const MINS_DURATION = 1440;

function Messages() {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);
  const { data, loading, error } = useMoralisQuery("Messages", (query) =>
    query
      .ascending("createdAt")
      .greaterThan(
        "createdAt",
        new Date(Date.now() - 1000 * 60 * MINS_DURATION)
      ),
      [],
      {
          live: true, //real time listener for the database
      }
  );

  return (
    <div className="pb-56">
      <div className="sticky top-[205px] lg:top-[300px] my-5 opacity-80 z-50">
        <ByMoralis
          variant="dark"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </div>
      <div className="space-y-10 p-4">
          {data.map(message => (
              <Message key={message.id} message={message} />
          ))}
      </div>
      <div className="flex justify-center">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>
      <div ref={endOfMessagesRef} className="text-center text-gray-400 mt-5">
        <p>You're up to date {user.getUsername()}! 🍻</p>
      </div>
    </div>
  );
}

export default Messages;
