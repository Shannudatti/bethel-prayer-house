import { useState } from "react";

import MainLayout from "../layouts/MainLayout";
import { createPrayerRequest } from "../components/services/api";

import { FaPrayingHands, FaWhatsapp } from "react-icons/fa";

function PrayerRequest() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    prayer: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  // Submit prayer request to FastAPI
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      await createPrayerRequest(formData);

      alert("Prayer Request Submitted Successfully 🙏");

      setFormData({
        name: "",
        phone: "",
        prayer: "",
      });
    } catch (error) {
      console.error("Prayer request error:", error);

      alert(
        error.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // Send prayer request through WhatsApp
  const handleWhatsApp = () => {
    const message = `🙏 Prayer Request

Name: ${formData.name}
Phone: ${formData.phone}

Prayer Request:
${formData.prayer}`;

    const whatsappURL = `https://wa.me/919440389247?text=${encodeURIComponent(
      message
    )}`;

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

          {/* DESCRIPTION */}
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
              <label
                htmlFor="name"
                className="block text-gray-300 mb-3 text-lg"
              >
                Your Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full bg-black border border-gray-700 rounded-2xl px-6 py-4 text-white outline-none focus:border-yellow-400 transition"
              />
            </div>

            {/* PHONE */}
            <div>
              <label
                htmlFor="phone"
                className="block text-gray-300 mb-3 text-lg"
              >
                Phone Number
              </label>

              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
                className="w-full bg-black border border-gray-700 rounded-2xl px-6 py-4 text-white outline-none focus:border-yellow-400 transition"
              />
            </div>

            {/* PRAYER */}
            <div>
              <label
                htmlFor="prayer"
                className="block text-gray-300 mb-3 text-lg"
              >
                Prayer Request
              </label>

              <textarea
                id="prayer"
                name="prayer"
                value={formData.prayer}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Write your prayer request..."
                className="w-full bg-black border border-gray-700 rounded-2xl px-6 py-4 text-white outline-none focus:border-yellow-400 transition resize-none"
              />
            </div>

            {/* WHATSAPP BUTTON */}
            <button
              type="button"
              onClick={handleWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-2xl text-xl transition duration-500 flex items-center justify-center gap-3"
            >
              <FaWhatsapp className="text-2xl" />
              Send via WhatsApp
            </button>

            {/* API SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-500 disabled:cursor-not-allowed text-black font-bold py-4 rounded-2xl text-xl transition duration-500"
            >
              {loading ? "Submitting..." : "Submit Prayer Request 🙏"}
            </button>

          </form>
        </div>
      </div>
    </MainLayout>
  );
}

export default PrayerRequest;