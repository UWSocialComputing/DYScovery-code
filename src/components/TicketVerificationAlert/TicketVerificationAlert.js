import { Alert } from "flowbite-react";

function TicketVerificationAlert({ verified = false }) {
  return verified ? (
    <Alert color="success" withBorderAccent={true}>
      <strong className="font-semibold">VERIFIED TICKET</strong>
      <p>User's event ticket has been verified through TicketMaster.</p>
    </Alert>
  ) : (
    <Alert color="warning" withBorderAccent={true}>
      <strong className="font-semibold">UNVERIFIED TICKET</strong>
      <p>User's event ticket has NOT been verified.</p>
    </Alert>
  );
}
export default TicketVerificationAlert;
