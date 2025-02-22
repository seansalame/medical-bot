import React, { useState } from "react";

export default function MedicalReportForm() {
  const [formData, setFormData] = useState({
    blockNumber: "",
    prisonerNumber: "",
    consciousness: "",
    spokenToPrisoner: "",
    complaint: "",
    cause: ""
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
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-lg font-bold mb-4">📋 דיווח רפואי</h2>
      
      <label className="block mb-2">🏢 מכלאה:</label>
      <input type="text" name="blockNumber" onChange={handleChange} className="w-full p-2 border rounded" placeholder="הכנס מספר מכלאה" />
      
      <label className="block mt-2">🔢 מספר אסיר:</label>
      <input type="text" name="prisonerNumber" onChange={handleChange} className="w-full p-2 border rounded" />

      <label className="block mt-2">🧠 האם בהכרה?</label>
      <select name="consciousness" onChange={handleChange} className="w-full p-2 border rounded">
        <option value="כן">כן</option>
        <option value="לא">לא</option>
        <option value="קשה להבין">קשה להבין</option>
      </select>
      
      <label className="block mt-2">🗣️ האם ניסית לדבר עם האסיר?</label>
      <select name="spokenToPrisoner" onChange={handleChange} className="w-full p-2 border rounded">
        <option value="כן">כן</option>
        <option value="לא">לא</option>
      </select>
      
      <label className="block mt-2">📝 תלונה:</label>
      <textarea name="complaint" onChange={handleChange} className="w-full p-2 border rounded"></textarea>
      
      <label className="block mt-2">💥 ממה נגרם?</label>
      <select name="cause" onChange={handleChange} className="w-full p-2 border rounded">
        <option value="חבלה">חבלה</option>
        <option value="חיפושים">חיפושים</option>
        <option value="זריקת רימון">זריקת רימון</option>
        <option value="שגרה">שגרה</option>
      </select>
      
      <button onClick={sendToWhatsApp} className="mt-4 w-full bg-blue-500 text-white p-2 rounded">📩 לשליחה בוואטסאפ לחץ כאן</button>
    </div>
  );
}
