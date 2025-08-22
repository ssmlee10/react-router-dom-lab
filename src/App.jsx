import NavBar from "./components/NavBar/NavBar";
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import { useState } from "react";
import { Route, Routes } from "react-router";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (mailboxData) => {
    const newMailbox = { ...mailboxData, _id: mailboxes.length + 1 };
    setMailboxes([...mailboxes, newMailbox]);
  };


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Post Office</h1>}></Route>
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes}/>} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox}/>} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes}/>} />
      </Routes>
    </>
  );
};

export default App;
