import NavBar from "./components/NavBar/NavBar";
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import { useState } from "react";
import { Route, Routes } from "react-router";


const App = () => {

  const [mailboxes, setMailboxes ] = useState([]);

  // creates a new mailbox
  // it should accept form data for a new mailbox and setMailboxes state accordingly
  const addBox = (mailboxData) => {
    // create a new mailbox
    // copy objects in mailboxData
    //_id: mailboxes.length+1 assigns new id to mailbox as mailboxes.length +1
    const newMailbox = {...mailboxData, _id: mailboxes.length +1,}

    // ... creates a new array with existing mailboxes + adds new ones at the end from newMailbox, pushes into the setMailboxes state
    setMailboxes([...mailboxes, newMailbox]);
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<h1>Post Office</h1>}></Route>
        <Route path="/mailboxes" element={<MailboxList />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox}/>} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails />} />
      </Routes>
    </>
  );
};

export default App;
