import { Card } from "flowbite-react";
import TicketVerificationAlert from "../TicketVerificationAlert/TicketVerificationAlert";

function InterestCard() {
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
          >
            Begin Chat
          </button>
        </div>
      </div>
    </Card>
  );
}

export default InterestCard;
