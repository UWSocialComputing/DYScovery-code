import { Alert } from "flowbite-react";

function TicketVerificationAlert({ verified = false }) {
  return verified ? (
    <Alert color="success" withBorderAccent={true}>
      <strong className="font-semibold">VERIFIED TICKET</strong>
      <svg
        viewBox="0 0 2 2"
        className="mx-2 inline h-0.5 w-0.5 fill-current text-cyan-500"
        aria-hidden="true"
      ></svg>
      <p>User's event ticket has been verified through TicketMaster.</p>
    </Alert>
  ) : (
    <Alert color="warning" withBorderAccent={true}>
      <span>
        <strong className="font-semibold">UNVERIFIED TICKET</strong>
        <svg
          viewBox="0 0 2 2"
          className="mx-2 inline h-0.5 w-0.5 fill-current"
          aria-hidden="true"
        >
          <circle cx={1} cy={1} r={1} />
        </svg>
        User's event ticket has NOT been verified.
      </span>
    </Alert>
  );
}
export default TicketVerificationAlert;
