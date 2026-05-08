import MainLayout from "../layouts/MainLayout";

function Sermons() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-[#0f172a] text-white pt-28 md:pt-32 px-4 md:px-6 pb-20">

        <div className="max-w-6xl mx-auto">

          {/* TITLE */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-400 mb-10 text-center md:text-left">
            Sermons
          </h1>

          {/* VIDEO CONTAINER */}
          <div className="overflow-hidden rounded-3xl shadow-2xl border border-yellow-400/20">

            <iframe
              className="w-full h-[250px] sm:h-[400px] md:h-[600px]"
              src="https://www.youtube.com/embed/videoseries?list=PLmztcIrVLM-AjWP0S2R58mC0O5VtpqUvy"
              title="Sermons Playlist"
              allowFullScreen
            ></iframe>

          </div>

        </div>

      </div>
    </MainLayout>
  );
}

export default Sermons;