import NavBar from "./components/NavBar/NavBar";
// import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxList from "./components/MailboxList/MailboxList";
// import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import { useState } from "react";
import { Route, React } from "react-router";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/'><h1>Mailbox List</h1></Route>
        <Route path="/mailboxes" element={<MailboxList mail={mail} />} />
        <Route path="/new-mailbox" element={<MailboxForm />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails />} />
      </Routes>
    </>
  );
};

export default App;
