import { useParams } from "react-router";

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();

  // find the mailbox with the matching _id
  const mailbox = mailboxes.find((box) => box._id === Number(mailboxId));

  if (!mailbox) {
    return (
      <main>
        <h2>Mailbox not found!</h2>
      </main>
    );
  }

  return (
    <main>
        <h2>Mailbox {mailbox._id}</h2>
        <p>Boxholder: {mailbox.boxOwner}</p>
        <p>Box Size: {mailbox.boxSize}</p>
    </main>
  );
};

export default MailboxDetails;
