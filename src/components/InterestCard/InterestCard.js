import { useState } from "react";
import { Card, Avatar } from "flowbite-react";
import TicketVerificationAlert from "../TicketVerificationAlert/TicketVerificationAlert";

function ChatWindow({ onClose }) {
  const [messages, setMessages] = useState([
    "Hello! We are still looking for people to join us. Could you introduce yourself a bit?",
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages((prevMessages) => [...prevMessages, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div
      className="fixed bottom-6 right-6 bg-white rounded-md shadow-lg border-2"
      style={{ width: "300px", height: "400px" }}
    >
      <div className="bg-cyan-500 text-white px-4 py-2 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center">
          <Avatar
            img="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
            rounded={true}
          />
          <h3 className="ml-4 font-medium">Chat with Ella</h3>
        </div>
        <button
          className="text-white hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300"
          onClick={onClose}
        >
          Close
        </button>
      </div>
      <div className="flex flex-col h-full">
        <div className="flex-1 ">
          <div className="overflow-y-auto p-3">
            {messages.map((message, index) => (
              <div className="flex justify-center space-x-3">
                {index % 2 === 0 ? (
                  <>
                    <div className="flex-shrink-0">
                      {/* Avatar component for the left side */}
                      <Avatar
                        img="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                        rounded={true}
                      />
                    </div>
                    <div
                      key={index}
                      className="p-2 rounded-lg mb-2 space-y-4 text-sm bg-gray-200"
                    >
                      {message}
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      key={index}
                      className="p-2 rounded-lg mb-2 space-y-4 text-sm bg-sky-200 ml-auto"
                    >
                      {message}
                    </div>
                    <div className="flex-shrink-0">
                      {/* Avatar component for the right side */}
                      <Avatar
                        img="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                        rounded={true}
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex pb-16 px-4 justify-center">
          <input
            type="text"
            placeholder="Type a message..."
            className="border border-gray-300 rounded-l-lg px-3 py-2 flex-1"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="text-white bg-cyan-500 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-r-lg px-4 py-2"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

function InterestCard() {
  const [showChat, setShowChat] = useState(false);

  const handleBeginChat = () => {
    setShowChat(true);
  };

  const handleCloseChat = () => {
    setShowChat(false);
  };

  return (
    <Card>
      <div>
        <TicketVerificationAlert verified={true} />
        <h2 className="mt-3 text-lg font-medium tracking-tight text-dark flex justify-center">
          Interested in this listing?
        </h2>
        <div className="mt-3 flex justify-center">
          <button
            type="submit"
            className="text-white bg-cyan-500 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleBeginChat}
          >
            Begin Chat
          </button>
        </div>
        {showChat && <ChatWindow onClose={handleCloseChat} />}
      </div>
    </Card>
  );
}

export default InterestCard;
