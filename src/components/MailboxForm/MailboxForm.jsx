import { useState } from "react";
import { useNavigate } from "react-router";

const MailboxForm = ({ addBox }) => {
  const [formData, setFormData] = useState({
    boxOwner: "",
    boxSize: "Small",
  });

  const navigate = useNavigate();
  
  const boxSize = {
    Small: "Small",
    Medium: "Medium",
    Large: "Large",
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addBox(formData);
    setFormData({ boxOwner: "", boxSize: "Small" });
    navigate('/mailboxes');
  };

  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        {/* Boxholder Name */}
        <label htmlFor="boxOwner">Enter a Boxholder:</label>
        <input
          type="text"
          name="boxOwner"
          value={formData.boxOwner}
          onChange={handleChange}
          required
        />
        <label htmlFor="boxSize">Select a Box Size:</label>
        <select
        name="boxSize"
        value={formData.boxSize}
        onChange={handleChange}>
          {Object.entries(boxSize).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
        <button type="submit">Create a Mailbox</button>
      </form>
    </main>
  );
};

export default MailboxForm;
