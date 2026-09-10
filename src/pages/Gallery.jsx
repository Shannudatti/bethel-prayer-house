import MainLayout from "../layouts/MainLayout";

import event1 from "../assets/images/event1.jpeg";
import event2 from "../assets/images/event2.jpeg";
import event3 from "../assets/images/event3.jpeg";
import event4 from "../assets/images/event4.jpeg";
import event5 from "../assets/images/event5.jpeg";
import event6 from "../assets/images/event6.jpeg";
function Gallery() {

  return (

    <MainLayout>

      <div className="min-h-screen bg-black text-white pt-32 px-6 pb-24">

        <div className="max-w-7xl mx-auto">

          {/* TITLE */}
          <h1 className="text-5xl md:text-6xl font-bold text-center text-yellow-400 mb-16">
            Church Gallery
          </h1>

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

      </div>

    </MainLayout>

  );
}

export default Gallery;