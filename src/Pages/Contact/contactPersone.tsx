import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPersone() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;

    const subject = encodeURIComponent(`Pesan dari ${name}`);
    const body = encodeURIComponent(
      `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`
    );
    const mailtoLink = `mailto:hafidzsyahn@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };

  return (
    <motion.div
      className="md:w-1/2"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-3xl font-semibold mb-4 text-white border-b border-yellow-400 inline-block pb-2"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Contact Form
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-6 mt-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {["name", "email", "message"].map((field) => (
          <motion.div
            key={field}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {field !== "message" ? (
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={
                  field === "name"
                    ? "Name"
                    : field === "email"
                    ? "Email"
                    : ""
                }
                value={formData[field as "name" | "email"]}
                onChange={handleChange}
                required
                className="bg-transparent border border-yellow-500 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
              />
            ) : (
              <textarea
                name="message"
                placeholder="Message..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-transparent border border-yellow-500 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
              ></textarea>
            )}
          </motion.div>
        ))}

        <motion.button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded transition w-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Kirim
        </motion.button>
      </motion.form>
    </motion.div>
  );
}
