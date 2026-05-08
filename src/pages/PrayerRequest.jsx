import { useState } from "react";
import emailjs from "@emailjs/browser";

import MainLayout from "../layouts/MainLayout";

import { FaPrayingHands, FaWhatsapp } from "react-icons/fa";
function PrayerRequest() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    prayer: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      user_name: formData.name,
      user_phone: formData.phone,
      message: formData.prayer,
    };

    emailjs
      .send(
        "service_3p12d38", // service id
        "template_eptijma", // template id
        templateParams,
        "bIrZ3tDJcOL3XAE_N", // public key
      )
      .then(() => {
        alert("Prayer Request Submitted 🙏");

        setFormData({
          name: "",
          phone: "",
          prayer: "",
        });
      })
      .catch((error) => {
        console.log(error);

        alert("Something went wrong");
      });
  };
  const handleWhatsApp = () => {
    const message = `🙏 Prayer Request

Name: ${formData.name}
Phone: ${formData.phone}

Prayer Request:
${formData.prayer}`;

    const whatsappURL = `https://wa.me/919440389247?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  };
  return (
    <MainLayout>
      <div className="min-h-screen bg-black text-white pt-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* ICON */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-full bg-yellow-400 flex items-center justify-center text-black text-5xl shadow-2xl">
              <FaPrayingHands />
            </div>
          </div>

          {/* TITLE */}
          <h1 className="telugu-title text-5xl md:text-6xl text-center text-yellow-400 mb-6">
            ప్రార్థన విజ్ఞప్తి
          </h1>

          <p className="text-center text-gray-400 text-lg mb-14 leading-8">
            Submit your prayer request and our church will stand with you in
            prayer and faith.
          </p>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#111827] p-10 rounded-[40px] shadow-2xl border border-yellow-400/10 space-y-8"
          >
            {/* NAME */}
            <div>
              <label className="block text-gray-300 mb-3 text-lg">
                Your Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full bg-black border border-gray-700 rounded-2xl px-6 py-4 text-white outline-none focus:border-yellow-400"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-gray-300 mb-3 text-lg">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
                className="w-full bg-black border border-gray-700 rounded-2xl px-6 py-4 text-white outline-none focus:border-yellow-400"
              />
            </div>

            {/* PRAYER */}
            <div>
              <label className="block text-gray-300 mb-3 text-lg">
                Prayer Request
              </label>

              <textarea
                name="prayer"
                value={formData.prayer}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Write your prayer request..."
                className="w-full bg-black border border-gray-700 rounded-2xl px-6 py-4 text-white outline-none focus:border-yellow-400 resize-none"
              ></textarea>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 rounded-2xl text-xl transition duration-500"
            >
              Submit Prayer Request 🙏 (via Gmail)
            </button>
            <button
              type="button"
              onClick={handleWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-2xl text-xl transition duration-500 flex items-center justify-center gap-3"
            >
              <FaWhatsapp className="text-2xl" />
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}

export default PrayerRequest;
