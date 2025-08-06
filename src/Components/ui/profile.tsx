import { motion } from "framer-motion";

const Profile = () => {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="flex justify-between mb-20 items-center w-full max-w-4xl px-10 py-16 bg-[#252525aa] text-white rounded-xl shadow-lg backdrop-blur">
        
        {/* Teks dari kiri */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p>Hello Guys</p>
          <h1 className="text-4xl font-bold font-mono">
            Septania Nopa Hafidzsyah
          </h1>
          <h2 className="text-xl text-yellow-400  typing-loop ">
            Full-stack Developer
          </h2>
          <p>Welcome to my personal website. 🩷</p>
        </motion.div>

        {/* Gambar dari kanan */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-full border-4 border-yellow-400 p-2 shadow-lg bounce"
        >
          <img
            src="/photo.png"
            alt="Avatar"
            className="w-60 h-60 rounded-full object-cover"
          />
        </motion.div>
        
      </div>
    </section>
  );
};

export default Profile;
