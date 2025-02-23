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

    const isFormValid = () => {
        return (
            formData.blockNumber.trim() !== "" &&
            formData.prisonerNumber.trim() !== "" &&
            formData.consciousness !== "" &&
            formData.spokenToPrisoner !== "" &&
            formData.complaint.trim() !== "" &&
            formData.cause !== ""
        );
    };

    const sendToWhatsApp = () => {
        if (!isFormValid()) {
            alert("יש למלא את כל השדות לפני שליחה!");
            return;
        }

        const message = `🚨 *הקפצת חובשים!* 🚨%0A🏢 *מכלאה (אות ומספר):* ${formData.blockNumber}.%0A🔢 *מספר אסיר:* ${formData.prisonerNumber}.%0A🧠 *האם בהכרה:* ${formData.consciousness}.%0A🗣️ *האם דיברת עם האסיר:* ${formData.spokenToPrisoner}.%0A📝 *תלונה:* ${formData.complaint}.%0A💥 *ממה נגרם:* ${formData.cause}.%0A✅ *אנא אשרו קבלה!* ✅`;
        const whatsappURL = `https://api.whatsapp.com/send?text=${message}`;
        window.open(whatsappURL, "_blank");
    };

    return (
        <div className="container" style={{ direction: "rtl", textAlign: "right", maxWidth: "500px", margin: "auto" }}>
            <h2 style={{ textAlign: "center" }}>📋 טופס דיווח רפואי</h2>
            <label>🏢 מכלאה (אות ומספר):</label>
            <input type="text" name="blockNumber" onChange={handleChange} style={{ textAlign: "right" }} />

            <label>🔢 מספר אסיר:</label>
            <input type="text" name="prisonerNumber" onChange={handleChange} style={{ textAlign: "right" }} />

            <label>🧠 האם בהכרה?</label>
            <select name="consciousness" onChange={handleChange} style={{ textAlign: "right" }}>
                <option value="">בחר</option>
                <option value="כן">כן</option>
                <option value="לא">לא</option>
                <option value="קשה להבין">קשה להבין</option>
            </select>

            <label>🗣️ האם ניסית לדבר עם האסיר?</label>
            <select name="spokenToPrisoner" onChange={handleChange} style={{ textAlign: "right" }}>
                <option value="">בחר</option>
                <option value="כן">כן</option>
                <option value="לא">לא</option>
            </select>

            <label>📝 תלונה:</label>
            <textarea name="complaint" onChange={handleChange} style={{ textAlign: "right" }}></textarea>

            <label>💥 ממה נגרם?</label>
            <select name="cause" onChange={handleChange} style={{ textAlign: "right" }}>
                <option value="">בחר</option>
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
