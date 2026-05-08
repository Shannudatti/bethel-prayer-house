import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import churchImage from "../assets/images/church.jpeg";
import gurumurthyImage from "../assets/images/gurumurthy.jpg";
import davidRajuImage from "../assets/images/davidraju.jpeg";
import pastor3Image from "../assets/images/pastor3.png";
import pastor4Image from "../assets/images/pastor4.jpeg";
import bethellogo from "../assets/images/bethellogo.png";
import event1 from "../assets/images/event1.jpeg";
import event2 from "../assets/images/event2.jpeg";
import event3 from "../assets/images/event3.jpeg";
import event4 from "../assets/images/event4.jpeg";
import event5 from "../assets/images/event5.jpeg";
import event6 from "../assets/images/event6.jpeg";
import { FaPrayingHands } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import {
  FaYoutube,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

function Home() {
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
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-6 bg-black">
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2070&auto=format&fit=crop')",
          }}
        ></div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* GOLD GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black"></div>

        {/* TOP LEFT LOGO */}
        <div className="absolute top-24 left-3 md:top-20 md:left-10 z-20">
          <img
            src={bethellogo}
            alt="Bethel Prayer House Logo"
            className="w-12 sm:w-14 md:w-24 object-contain drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]"
          />

          <p className="text-[8px] sm:text-[10px] md:text-sm text-gray-300 tracking-[2px] mt-1 text-center">
            ESTD • 1972
          </p>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 text-center px-6 max-w-5xl">
          {/* SMALL TEXT */}
          <div className="space-y-3 mb-6 mt-16 md:mt-0">
            <p className="uppercase tracking-[8px] text-yellow-400 text-sm md:text-base">
              Welcome To The Presence Of God
            </p>

            <p className="text-gray-400 tracking-[4px] text-sm uppercase">
              ESTD • 1972
            </p>
          </div>

          {/* MAIN TITLE */}
          <h1 className="text-5xl md:text-8xl font-extrabold leading-tight text-white drop-shadow-2xl">
            Bethel
            <span className="block text-yellow-400">Prayer House</span>
          </h1>

          {/* SUBTITLE */}
          <p className="mt-8 text-gray-300 text-lg md:text-2xl leading-9 max-w-3xl mx-auto">
            A place of worship, prayer, faith, healing, and the transforming
            power of God.
          </p>

          {/* TELUGU VERSE */}
          <p className="telugu-verse text-yellow-300 text-2xl md:text-4xl mt-10 leading-relaxed">
            యెహోవా, నీ నివాసమందిరమును నీ తేజోమహిమ నిలుచు స్థలమును నేను ప్రేమించు
            చున్నాను.
          </p>

          <p className="text-gray-400 mt-2 text-lg">కీర్తనలు 26:8</p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-14 pb-16">
            {/* LIVE WORSHIP */}
            <a
              href="https://www.youtube.com/@DavidRajuLanka/live"
              target="_blank"
              rel="noreferrer"
              className="bg-yellow-400 text-black px-10 py-4 rounded-full text-xl font-bold hover:scale-105 hover:bg-yellow-300 transition duration-500 shadow-2xl"
            >
              Join Live Worship
            </a>

            {/* SERMONS */}
            <a
              href="https://www.youtube.com/@DavidRajuLanka"
              target="_blank"
              rel="noreferrer"
              className="border border-white/30 backdrop-blur-md bg-white/10 px-10 py-4 rounded-full text-xl text-white hover:bg-white hover:text-black transition duration-500"
            >
              Watch Sermons
            </a>
          </div>
        </div>
      </section>
      {/* BIBLE VERSE */}
      <section className="py-24 px-6 bg-[#111827] text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <p className="telugu-verse text-3xl leading-relaxed text-gray-200 italic">
            “ సైన్యములకధిపతియగు యెహోవా, నీ నివాస స్థలములు ఎంత రమ్యములు!”
          </p>

          <p className="mt-6 text-yellow-300 text-xl">— కీర్తనలు 84:1</p>
        </motion.div>
      </section>
      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-6 bg-[#0f172a]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <img
            src={churchImage}
            alt="Bethel Prayer House"
            className="rounded-3xl shadow-2xl w-full h-full object-cover"
          />

          <div>
            <h2 className="text-4xl font-bold text-yellow-400 mb-6">
              About Our Church
            </h2>

            <p className="text-gray-300 text-lg leading-8 mb-6">
              Bethel Prayer House is a Christ-centered church focused on
              worship, prayer, faith, and transforming lives through the Word of
              God.
            </p>

            <p className="text-gray-400 leading-8">
              We welcome people from every background to experience God’s love,
              powerful worship, and spiritual growth together as one family in
              Christ.
            </p>
          </div>
        </div>
      </section>
      {/* CHURCH LEADERSHIP */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* <h2 className="text-5xl font-bold text-center text-yellow-400 mb-16">
      Church Leadership
    </h2> */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* FOUNDER CARD */}
            <div className="bg-[#111827] rounded-3xl overflow-hidden shadow-2xl border border-yellow-400/10 hover:scale-[1.02] transition duration-500 flex flex-col">
              <img
                src={gurumurthyImage}
                alt="Founder"
                className="w-full h-[420px] object-cover"
              />

              <div className="p-7 flex flex-col flex-1">
                <p className=" uppercase tracking-widest mb-3 text-sm">
                  Founder
                </p>

                <h3 className="text-yellow-400 text-3xl font-bold leading-tight mb-5 min-h-[110px]">
                  Bro. L.V. Gurumurthy Garu
                </h3>

                <p className="text-gray-300 leading-8 text-lg">
                  Faithfully founded Bethel Prayer House with a vision to spread
                  the Gospel and lead people into God’s presence through prayer
                  and worship.
                </p>
              </div>
            </div>

            {/* SENIOR PASTOR CARD */}
            <div className="bg-[#111827] rounded-3xl overflow-hidden shadow-2xl border border-yellow-400/10 hover:scale-[1.02] transition duration-500 flex flex-col">
              <img
                src={davidRajuImage}
                alt="Pastor"
                className="w-full h-[420px] object-cover"
              />

              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-yellow-400 text-3xl font-bold leading-tight mb-5 min-h-[110px]">
                  Bro. L.V. David Raju Garu
                </h3>

                <p className="text-gray-300 leading-8 text-lg">
                  Passionately serving God through preaching, worship, prayer,
                  and spiritual guidance to strengthen believers in faith.
                </p>
              </div>
            </div>
            {/* PASTOR 3 */}
            <div className="bg-[#111827] rounded-3xl overflow-hidden shadow-2xl border border-yellow-400/10 hover:scale-[1.02] transition duration-500 flex flex-col">
              <div className="bg-black h-[420px] flex justify-center items-center p-4">
                <img
                  src={pastor3Image}
                  alt="Pastor"
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>

              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-yellow-400 text-3xl font-bold leading-tight mb-5 min-h-[110px]">
                  Bro. Samuel Lanka
                </h3>

                <p className="text-gray-300 leading-8 text-lg">
                  Dedicated to sharing God’s love and truth through faithful
                  ministry, biblical teaching, and servant leadership.
                </p>
              </div>
            </div>
            {/* PASTOR 4 */}
            <div className="bg-[#111827] rounded-3xl overflow-hidden shadow-2xl border border-yellow-400/10 hover:scale-[1.02] transition duration-500 flex flex-col">
              <img
                src={pastor4Image}
                alt="Pastor"
                className="w-full h-[420px] object-cover"
              />

              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-yellow-400 text-3xl font-bold leading-tight mb-5 min-h-[110px]">
                  Bro. Anna Samuel Lanka
                </h3>

                <p className="text-gray-300 leading-8 text-lg">
                  Passionately serving the Kingdom of God through prayer,
                  worship, and guiding believers in spiritual growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SERVICE TIMINGS */}
      <section id="services" className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="telugu-title text-5xl md:text-6xl font-bold text-center text-yellow-400 mb-16">
            ఆరాధన సమయాలు
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* SUNDAY WORSHIP */}
            <div className="bg-[#111827] rounded-[40px] p-10 shadow-2xl border border-yellow-400/10 hover:-translate-y-2 transition duration-500">
              <h3 className="text-3xl font-bold text-yellow-400 mb-6">
                ఆదివార ఆరాధన
              </h3>

              <p className="text-gray-300 text-2xl leading-10">
                ఉదయం
                <br />
                9:00 AM - 12:00 PM
              </p>
            </div>
            {/* YOUTH MEETING */}
            <div className="bg-[#111827] rounded-[40px] p-10 shadow-2xl border border-yellow-400/10 hover:-translate-y-2 transition duration-500">
              <h3 className="telugu-title text-[28px] md:text-[32px] font-bold text-yellow-400 mb-6 leading-snug">
                యవనస్తుల కూడిక
              </h3>

              <p className="text-gray-300 text-2xl leading-10">
                ఆదివారం
                <br />
                6:00 PM
              </p>
            </div>

            {/* WEDNESDAY PRAYER */}
            <div className="bg-[#111827] rounded-[40px] p-10 shadow-2xl border border-yellow-400/10 hover:-translate-y-2 transition duration-500">
              <h3 className="text-3xl font-bold text-yellow-400 mb-6">
                బుధవార ప్రార్థన
              </h3>

              <p className="text-gray-300 text-2xl leading-10">
                సాయంత్రం
                <br />
                7:00 PM - 8:30 PM
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* MINISTRIES */}
      <section id="ministries" className="py-24 px-6 bg-[#071133]">
        <div className="max-w-7xl mx-auto">
          <h6 className="text-5xl md:text-6xl font-bold text-center text-yellow-400 mb-16">
            పరిచర్యలు
          </h6>

          <div className="grid md:grid-cols-3 gap-8">
            {/* WORSHIP */}
            <div className="bg-black rounded-[40px] p-10 shadow-2xl border border-yellow-400/10 hover:-translate-y-2 transition duration-500">
              <h3 className="text-3xl font-bold text-yellow-400 mb-6">
                ఆరాధన పరిచర్య
              </h3>

              <p className="telugu-body text-gray-300 text-xl leading-10">
                స్తుతి మరియు ఆరాధన ద్వారా ప్రజలను దేవుని సన్నిధిలోనికి
                నడిపించుట.
              </p>
            </div>

            {/* YOUTH */}
            <div className="bg-black rounded-[40px] p-10 shadow-2xl border border-yellow-400/10 hover:-translate-y-2 transition duration-500">
              <h3 className="text-3xl font-bold text-yellow-400 mb-6">
                యవనస్తుల కూడిక
              </h3>

              <p className="telugu-body text-gray-300 text-xl leading-10">
                యువత ఆత్మీయంగా ఎదిగి, క్రీస్తును ధైర్యంగా సేవించుటకు
                ప్రోత్సహించుట.
              </p>
            </div>

            {/* PRAYER */}
            <div className="bg-black rounded-[40px] p-10 shadow-2xl border border-yellow-400/10 hover:-translate-y-2 transition duration-500">
              <h3 className="text-3xl font-bold text-yellow-400 mb-6">
                ప్రార్థనా పరిచర్య
              </h3>

              <p className="telugu-body text-gray-300 text-xl leading-10">
                కుటుంబాలు మరియు సమాజం కొరకు ప్రార్థనలో నిలిచి మధ్యవర్తిత్వం
                చేయుట.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CHURCH GALLERY */}
      <section className="py-24 px-6 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-bold text-center text-yellow-400 mb-16">
            Church Gallery
          </h2>

          {/* GALLERY GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* IMAGE 1 */}
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={event1}
                alt="Church Event"
                className="w-full h-[320px] object-cover hover:scale-110 transition duration-700"
              />
            </div>

            {/* IMAGE 2 */}
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={event2}
                alt="Church Worship"
                className="w-full h-[320px] object-cover hover:scale-110 transition duration-700"
              />
            </div>

            {/* IMAGE 3 */}
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={event3}
                alt="Prayer Meeting"
                className="w-full h-[320px] object-cover hover:scale-110 transition duration-700"
              />
            </div>

            {/* IMAGE 4 */}
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={event4}
                alt="Church Program"
                className="w-full h-[320px] object-cover hover:scale-110 transition duration-700"
              />
            </div>

            {/* IMAGE 5 */}
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={event5}
                alt="Bible Study"
                className="w-full h-[320px] object-cover hover:scale-110 transition duration-700"
              />
            </div>

            {/* IMAGE 6 */}
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={event6}
                alt="Church Gathering"
                className="w-full h-[320px] object-cover hover:scale-110 transition duration-700"
              />
            </div>
          </div>
        </div>
      </section>
      {/* SERMONS */}
      <section
        id="sermons"
        className="py-20 md:py-24 px-4 sm:px-6 bg-black overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          {/* TITLE */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-yellow-400 mb-12 md:mb-14">
            Latest Sermons
          </h2>

          {/* SERMON GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CARD 1 */}
            <div className="bg-[#111827] rounded-3xl overflow-hidden shadow-2xl border border-yellow-400/10 hover:scale-[1.02] transition duration-500">
              <img
                src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2070&auto=format&fit=crop"
                alt="Sunday Worship"
                className="h-56 sm:h-64 w-full object-cover"
              />

              <div className="p-5 sm:p-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-3 leading-tight">
                  Sunday Worship Message
                </h3>

                <p className="text-gray-300 text-base sm:text-lg leading-7">
                  Experience God’s presence through powerful worship.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#111827] rounded-3xl overflow-hidden shadow-2xl border border-yellow-400/10 hover:scale-[1.02] transition duration-500">
              <img
                src="https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=1974&auto=format&fit=crop"
                alt="Prayer and Faith"
                className="h-56 sm:h-64 w-full object-cover"
              />

              <div className="p-5 sm:p-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-3 leading-tight">
                  Prayer & Faith
                </h3>

                <p className="text-gray-300 text-base sm:text-lg leading-7">
                  Grow deeper in faith and trust in God.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#111827] rounded-3xl overflow-hidden shadow-2xl border border-yellow-400/10 hover:scale-[1.02] transition duration-500">
              <img
                src="https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=1974&auto=format&fit=crop"
                alt="Hope in Christ"
                className="h-56 sm:h-64 w-full object-cover"
              />

              <div className="p-5 sm:p-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-3 leading-tight">
                  Hope in Christ
                </h3>

                <p className="text-gray-300 text-base sm:text-lg leading-7">
                  Discover God’s promises and purpose for your life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* LIVE STREAM */}
      <section className="py-20 md:py-24 px-4 sm:px-6 bg-black overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          {/* TITLE */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 mb-5">
            Watch Live Service
          </h2>

          {/* SUBTEXT */}
          <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 md:mb-10 leading-8 max-w-3xl mx-auto">
            Join our Sunday and Wednesday worship services live online.
          </p>

          {/* LIVE STREAM */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-yellow-400/20">
            <iframe
              className="w-full h-[240px] sm:h-[350px] md:h-[500px]"
              src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID&autoplay=0"
              title="YouTube Live Stream"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      {/* LATEST SERMONS */}
      <section className="py-20 md:py-24 px-4 sm:px-6 bg-[#0f172a] overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          {/* TITLE */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 mb-5">
            Latest Sermons
          </h2>

          {/* SUBTEXT */}
          <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 md:mb-10 leading-8 max-w-3xl mx-auto">
            Watch recent messages, worship services, and spiritual teachings.
          </p>

          {/* YOUTUBE SECTION */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-yellow-400/20">
            <iframe
              className="w-full h-[240px] sm:h-[350px] md:h-[500px]"
              src="https://www.youtube.com/embed/videoseries?list=PLmztcIrVLM-AjWP0S2R58mC0O5VtpqUvy"
              title="YouTube Sermons Playlist"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      {/* PRAYER REQUEST */}
      <section id="prayer-request" className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className=" text-5xl md:text-6xl text-center text-yellow-500 mb-8">
            Prayer Request
          </h2>

          <p className="text-center text-gray-400 text-lg mb-14">
            Submit your prayer request and our church will pray for you.
          </p>

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
              Submit Prayer Request 🙏(via Gmail)
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
      </section>
      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-[#0f172a]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-yellow-400 mb-10">
            Contact Us
          </h2>

          <div className="space-y-6 text-lg text-gray-300">
            <p>📍 Bethel Prayer House, Parvathipuram</p>

            <p>📞 +91 94403 89247</p>

            <p>✉️ jeremiahdavid.lanka@gmail.com</p>
          </div>

          <div className="mt-10 rounded-3xl overflow-hidden shadow-2xl border border-yellow-400/20">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.5442830394704!2d83.42425209999999!3d18.766970099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3b790018bb110d%3A0x5203370c8384d36a!2sBethel%20Prayer%20House%2C%20Parvathipuram!5e1!3m2!1sen!2sin!4v1778070338947!5m2!1sen!2sin"
              className="w-full h-96 border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <a
            href="#prayer-request"
            className="fixed bottom-28 right-6 bg-yellow-400 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-black text-3xl hover:scale-110 hover:bg-yellow-500 transition duration-500 z-50"
          >
            <FaPrayingHands />
          </a>
          <a
            href="https://wa.me/919440389247"
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-2xl text-white text-3xl hover:scale-110 transition"
          >
            <FaWhatsapp />
          </a>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="bg-[#020617] border-t border-gray-800 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {/* CHURCH INFO */}
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Bethel Prayer House
            </h2>

            <p className="text-gray-400 leading-7">
              Bringing people closer to God through worship, prayer, and the
              Word.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">
              <a href="#home" className="hover:text-yellow-400 transition">
                Home
              </a>

              <a href="#about" className="hover:text-yellow-400 transition">
                About
              </a>

              <a href="#sermons" className="hover:text-yellow-400 transition">
                Sermons
              </a>

              <a href="#contact" className="hover:text-yellow-400 transition">
                Contact
              </a>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-5 mt-6">
              {/* YOUTUBE */}
              <a
                href="https://www.youtube.com/@DavidRajuLanka"
                target="_blank"
                rel="noreferrer"
                className="text-red-500 text-3xl hover:scale-110 transition"
              >
                <FaYoutube />
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/919440389247"
                target="_blank"
                rel="noreferrer"
                className="text-green-500 text-3xl hover:scale-110 transition"
              >
                <FaWhatsapp />
              </a>

              {/* FACEBOOK */}
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 text-3xl hover:scale-110 transition"
              >
                <FaFacebookF />
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/bethel_parvathipuram?igsh=MXh4aGo0d3JveG4xaA=="
                target="_blank"
                rel="noreferrer"
                className="text-pink-500 text-3xl hover:scale-110 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* SERVICE HOURS */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Service Hours
            </h3>

            <div className="text-gray-400 space-y-2">
              <p>Sunday: 9 AM - 12 PM</p>

              <p>Wednesday: 7 PM</p>

              <p>Sunday Youth Meeting: 6 PM</p>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 mt-12">
          © 2026 Bethel Prayer House. All rights reserved.
        </div>
      </footer>
    </MainLayout>
  );
}

export default Home;
