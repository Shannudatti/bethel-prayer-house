import MainLayout from "../layouts/MainLayout";

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

function Contact() {
  return (
    <MainLayout>

      <div className="min-h-screen bg-[#0f172a] text-white pt-32 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h1 className="text-5xl font-bold text-yellow-400 mb-10">
            Contact Us
          </h1>

          <div className="space-y-6 text-lg text-gray-300 mb-14">

            <p>
              📍 Bethel Prayer House, Parvathipuram
            </p>

            <p>
              📞 +91 94403 89247
            </p>

            <p>
              ✉️ jeremiahdavid.lanka@gmail.com
            </p>

          </div>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center gap-8 flex-wrap">

            {/* WHATSAPP */}
            <a
              href="https://wa.me/919440389247"
              target="_blank"
              rel="noreferrer"
              className="w-20 h-20 rounded-full bg-[#111827] flex items-center justify-center text-green-500 text-4xl shadow-2xl hover:scale-110 hover:bg-green-500 hover:text-white transition duration-500"
            >
              <FaWhatsapp />
            </a>

            {/* YOUTUBE */}
            <a
              href="https://www.youtube.com/@DavidRajuLanka"
              target="_blank"
              rel="noreferrer"
              className="w-20 h-20 rounded-full bg-[#111827] flex items-center justify-center text-red-500 text-4xl shadow-2xl hover:scale-110 hover:bg-red-500 hover:text-white transition duration-500"
            >
              <FaYoutube />
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/bethel_parvathipuram?igsh=MXh4aGo0d3JveG4xaA=="
              target="_blank"
              rel="noreferrer"
              className="w-20 h-20 rounded-full bg-[#111827] flex items-center justify-center text-pink-500 text-4xl shadow-2xl hover:scale-110 hover:bg-pink-500 hover:text-white transition duration-500"
            >
              <FaInstagram />
            </a>

            {/* FACEBOOK */}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="w-20 h-20 rounded-full bg-[#111827] flex items-center justify-center text-blue-500 text-4xl shadow-2xl hover:scale-110 hover:bg-blue-500 hover:text-white transition duration-500"
            >
              <FaFacebookF />
            </a>

          </div>

        </div>

      </div>

    </MainLayout>
  );
}

export default Contact;