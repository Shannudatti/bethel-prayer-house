import MainLayout from "../layouts/MainLayout";
import churchImage from "../assets/images/church.jpeg";

function About() {
  return (
    <MainLayout>

      <div className="min-h-screen bg-[#020617] text-white pt-32 px-6 pb-20">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT IMAGE */}
          <div>
            <img
              src={churchImage}
              alt="Bethel Prayer House"
              className="rounded-3xl shadow-2xl w-full h-[600px] object-cover border border-yellow-400/20"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>

            <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-8 leading-tight">
              About <br />
              Bethel Prayer House
            </h1>

            <p className="text-lg text-gray-300 leading-9 mb-8">
              Bethel Prayer House is a Christ-centered ministry dedicated to
              worship, prayer, faith, and spiritual transformation through the
              Word of God. We warmly welcome everyone to experience God's
              presence, love, and peace together as one family in Christ.
            </p>

            {/* BIBLE VERSE CARD */}
            <div className="bg-black/40 border border-yellow-400/20 rounded-3xl p-8 shadow-xl">

              <p className="text-2xl leading-relaxed text-gray-200 mb-4">
                “యెహోవా, నీ నివాసమందిరమును
                నీ తేజోమహిమ నిలుచు స్థలమును
                నేను ప్రేమించుచున్నాను.”
              </p>

              <p className="text-yellow-400 text-xl font-semibold">
                కీర్తనలు 26:8
              </p>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
}

export default About;