import { useState } from "react";

export default function ContactPersone() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Format mailto
    const subject = encodeURIComponent(`Pesan dari ${name}`);
    const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`);
    const mailtoLink = `mailto:hafidzsyahn@gmail.com?subject=${subject}&body=${body}`;

    // Buka mail client
    window.location.href = mailtoLink;
  };

  return (
    <div className="md:w-1/2">
      <h2 className="text-3xl font-semibold mb-4 text-white border-b border-yellow-400 inline-block pb-2">
        Contact Form
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 mt-6">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-transparent border border-yellow-500 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-transparent border border-yellow-500 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <textarea
          name="message"
          placeholder="Message..."
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="bg-transparent border border-yellow-500 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        ></textarea>
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded transition"
        >
          Kirim
        </button>
      </form>
    </div>
  );
}
