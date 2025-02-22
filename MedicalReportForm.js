const MedicalReportForm = () => {
    const [formData, setFormData] = React.useState({
        blockNumber: "",
        prisonerNumber: "",
        consciousness: "",
        complaint: "",
        cause: "",
        spokenToPrisoner: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendToWhatsApp = () => {
        const message = `🚨 *הקפצת חובשים!* 🚨%0A🏢 *מכלאה:* ${formData.blockNumber}.%0A🔢 *מספר אסיר:* ${formData.prisonerNumber}.%0A🧠 *האם בהכרה:* ${formData.consciousness}.%0A🗣️ *האם דיברת עם האסיר:* ${formData.spokenToPrisoner}.%0A📝 *תלונה:* ${formData.complaint}.%0A💥 *ממה נגרם:* ${formData.cause}.%0A✅ *אנא אשרו קבלה!* ✅`;
        const whatsappURL = `https://api.whatsapp.com/send?text=${message}`;
        window.open(whatsappURL, "_blank");
    };

    return (
        <div className="container">
            <h2>📋 טופס דיווח רפואי</h2>
            <label>🏢 מכלאה:</label>
            <input type="text" name="blockNumber" onChange={handleChange} />

            <label>🔢 מספר אסיר:</label>
            <input type="text" name="prisonerNumber" onChange={handleChange} />

            <label>🧠 האם בהכרה?</label>
            <select name="consciousness" onChange={handleChange}>
                <option value="כן">כן</option>
                <option value="לא">לא</option>
                <option value="קשה להבין">קשה להבין</option>
            </select>

            <label>🗣️ האם ניסית לדבר עם האסיר?</label>
            <select name="spokenToPrisoner" onChange={handleChange}>
                <option value="כן">כן</option>
                <option value="לא">לא</option>
            </select>

            <label>📝 תלונה:</label>
            <textarea name="complaint" onChange={handleChange}></textarea>

            <label>💥 ממה נגרם?</label>
            <select name="cause" onChange={handleChange}>
                <option value="חבלה">חבלה</option>
                <option value="חיפושים">חיפושים</option>
                <option value="זריקת רימון">זריקת רימון</option>
                <option value="שגרה">שגרה</option>
            </select>

            <button onClick={sendToWhatsApp}>📩 לשליחה בוואטסאפ לחץ כאן</button>
        </div>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(<MedicalReportForm />);
