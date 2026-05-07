import MainLayout from "../layouts/MainLayout";

function Sermons() {
  return (
    <MainLayout>

    <div className="min-h-screen bg-[#0f172a] text-white pt-32 px-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-yellow-400 mb-10">
          Sermons
        </h1>

        <iframe
          className="w-full h-[600px] rounded-3xl"
          src="https://www.youtube.com/embed/videoseries?list=PLmztcIrVLM-AjWP0S2R58mC0O5VtpqUvy"
          title="Sermons Playlist"
          allowFullScreen
        ></iframe>

      </div>
    </div>
    </MainLayout>
  );
}

export default Sermons;