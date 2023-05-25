import { useState } from "react";
import { Card, Avatar } from "flowbite-react";
import TicketVerificationAlert from "../TicketVerificationAlert/TicketVerificationAlert";

function ChatWindow({ onClose, user }) {
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
          <Avatar img={user.profileImage} rounded={true} />
          <h3 className="ml-4 font-medium">Chat with {user.name}</h3>
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
              <div key={index} className="flex space-x-3">
                {index % 2 === 0 ? (
                  <>
                    <div className="flex-shrink-0">
                      {/* Avatar component for the left side */}
                      <Avatar img={user.profileImage} rounded={true} />
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

function InterestCard({ userInformation, verified }) {
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
        <TicketVerificationAlert verified={verified} />
        <div>
          <h2 className="mt-3 text font-semibold tracking-tight text-dark">
            Group Members
          </h2>

          <div className="grid sm:grid-cols-1 grid-cols-2 space-y-4 py-3">
            {userInformation.map((user, index) => (
              <div key={index} className={`flex items-center gap-2 rounded-lg`}>
                <Avatar img={user.profileImage} rounded={true}>
                  <div className="dark:text-white">
                    <p className=" text-sm">{user.name}</p>
                    <div className="flex items-center">
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Rating star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <p className="ml-1 text-sm text-gray-500 dark:text-gray-400">
                        {(
                          user.ratings.reduce(
                            (total, rating) => total + rating,
                            0
                          ) / user.ratings.length
                        ).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </Avatar>
              </div>
            ))}
          </div>
        </div>

        <h2 className="mt-3 text-lg font-bold tracking-tight text-dark flex justify-center">
          Interested in this post?
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
        {showChat && (
          <ChatWindow onClose={handleCloseChat} user={userInformation[0]} />
        )}
      </div>
    </Card>
  );
}

export default InterestCard;
