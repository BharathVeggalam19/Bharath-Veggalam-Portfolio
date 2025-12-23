import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("http://127.0.0.1:8000/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("❌ Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0f1111] text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-8">

       
        {/* LEFT SIDE – CONTACT INFO */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-bold">Get In Touch</h2>
          <p className="text-gray-400 max-w-md">
            Feel free to contact me for any work or suggestions below.
          </p>

          <div className="space-y-4 text-gray-300">
            {/* Email */}
            <div className="flex items-center gap-4">
              <MdEmail className="text-teal-400 text-xl" />
              <span>veggalambharath10@gmail.com</span>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-4">
              <FaLinkedin className="text-teal-400 text-xl" />
              <a
                href="https://www.linkedin.com/in/bharath-veggalam-130563228"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                linkedin.com/in/bharath-veggalam-130563228
              </a>
            </div>

            {/* GitHub */}
            <div className="flex items-center gap-4">
              <FaGithub className="text-teal-400 text-xl" />
              <a
                href="https://github.com/BharathVeggalam19"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                github.com/BharathVeggalam19
              </a>
            </div>
          </div>
        </div>


        {/* RIGHT SIDE – FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-xl p-8"
        >
          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mb-4 p-3 bg-black/40 rounded border border-white/10"
          />

          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mb-4 p-3 bg-black/40 rounded border border-white/10"
          />

          <label className="block mb-2">Message</label>
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full mb-6 p-3 bg-black/40 rounded border border-white/10"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-400 hover:bg-blue-600 transition rounded-lg py-3 font-semibold"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="mt-4 text-center text-sm">{status}</p>
          )}
        </form>

      </div>
    </section>
  );
}
