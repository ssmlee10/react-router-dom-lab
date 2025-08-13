const MailboxForm = () => {
const boxSize = {
    small: 'small',
    medium: 'medium',
    large: 'large',
}

    return (
        <main>
            <h2>New Mailbox</h2>
            <form>
                {/* Boxholder Name */}
                <label htmlFor="boxholder">Enter a Boxholder:</label>
                <input type="text" id='boxholder' name='boxholder'
                value='Boxholder name'/>
                <label htmlFor="boxSize">Select a Box Size:</label>
                <select>
                    <option value="">-- Select --</option>
                    {Object.entries(boxSize).map(([key, value]) => (
                        <option key={key} value = {key}>
                            {value}
                        </option>
                    ))}
                </select>
                <button>Submit</button>
            </form>
        </main>
    )
}

export default MailboxForm;