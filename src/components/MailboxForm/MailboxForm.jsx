import { useState } from "react";
import { useNavigate } from "react-router";

const MailboxForm = ({ addBox }) => {
  const [formData, setFormData] = useState({
    boxOwner: "",
    boxSize: "Small",
  });

  const boxSize = {
    Small: "Small",
    Medium: "Medium",
    Large: "Large",
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.boxholder]: target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addBox(formData);
    setFormData({ boxOwner: "", boxSize: "Small" });
  };

  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        {/* Boxholder Name */}
        <label htmlFor="boxholder">Enter a Boxholder:</label>
        <input
          type="text"
          id="boxholder"
          name="boxholder"
          value={formData.boxOwner}
          onChange={handleChange}
          required
        />
        <label htmlFor="boxSize">Select a Box Size:</label>
        <select>
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
