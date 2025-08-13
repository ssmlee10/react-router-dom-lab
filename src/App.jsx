import NavBar from "./components/NavBar/NavBar";
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxList from "./components/MailboxList/MailboxList";
// import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import { useState } from "react";
import { Route, Routes } from "react-router";


const App = () => {

  const [mailboxes, setMailboxes ] = useState([]);

  // creates a new mailbox
  // it should accept form data for a new mailbox and setMailboxes state accordingly
  const addBox = () => {

  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<h1>Post Office</h1>}></Route>
        <Route path="/mailboxes" element={<MailboxList />} />
        <Route path="/new-mailbox" element={<MailboxForm />} />
        {/* <Route path="/mailboxes/:mailboxId" element={<MailboxDetails />} /> */}
      </Routes>
    </>
  );
};

export default App;
