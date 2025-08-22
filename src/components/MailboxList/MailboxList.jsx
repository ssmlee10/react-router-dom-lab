import { Link } from 'react-router';

const MailboxList = ({ mailboxes }) => {
  return (
    <main>
      <h2>Mailboxes</h2>
 <div>
        {mailboxes.length === 0 ? (
          <p>No mailboxes found</p>
        ) : (
          mailboxes.map(({ _id }) => (
            <Link key={_id} to={`/mailboxes/${_id}`}>Mailbox {_id} </Link>
          ))
        )}
      </div>
    </main>
  );
};

export default MailboxList;