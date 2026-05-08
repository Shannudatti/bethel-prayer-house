import MainLayout from "../layouts/MainLayout";
import { FaYoutube } from "react-icons/fa";

function Sermons() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-[#0f172a] text-white pt-28 md:pt-32 px-4 md:px-6 pb-20">

        <div className="max-w-6xl mx-auto">

          {/* TITLE */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-400 mb-14 text-center">
            Sermons
          </h1>

          {/* FIRST CHANNEL */}
          <div className="mb-16">

            <div className="flex items-center gap-3 mb-6">
              <FaYoutube className="text-red-500 text-4xl" />

              <h2 className="text-2xl md:text-3xl font-bold text-white">
                David Raju Lanka Sermons
              </h2>
            </div>

            <div className="overflow-hidden rounded-3xl shadow-2xl border border-yellow-400/20">

              <iframe
                className="w-full h-[250px] sm:h-[400px] md:h-[600px]"
                src="https://www.youtube.com/embed/videoseries?list=PLmztcIrVLM-AjWP0S2R58mC0O5VtpqUvy"
                title="David Raju Lanka Sermons"
                allowFullScreen
              ></iframe>

            </div>

          </div>

          {/* SECOND CHANNEL */}
          <div>

            <div className="flex items-center gap-3 mb-6">
              <FaYoutube className="text-red-500 text-4xl" />

              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Bethel Prayer House LVG Sermons
              </h2>
            </div>

            <div className="overflow-hidden rounded-3xl shadow-2xl border border-yellow-400/20">

              <iframe
                className="w-full h-[250px] sm:h-[400px] md:h-[600px]"
                src="https://www.youtube.com/embed/videoseries?list=PLuGSZckuNkuHkpKKRryGA1_j2Z8KhSs0R"
                title="Bethel Prayer House LVG Sermons"
                allowFullScreen
              ></iframe>

            </div>

          </div>

        </div>

      </div>
    </MainLayout>
  );
}

export default Sermons;