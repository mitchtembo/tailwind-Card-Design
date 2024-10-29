import React from "react";

const CardZ = () => {
  return (
    <div>
      {/* container */}
      <div className="container p-4 mx-auto my-auto bg-[#f7f7f7] rounded-lg shadow-light-lg flex justify-center items-center">
        {/* grid display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {/* card item 1 */}
          <div className="card bg-[#f7f7f7] border-2 rounded-lg max-w-xs">
            <div className="overflow-hidden rounded-t-lg shadow- bg-white">
              <img
                className="w-full min-h-fit object-cover aspect-video"
                src="https://images.pexels.com/photos/28960478/pexels-photo-28960478/free-photo-of-scenic-lighthouse-on-rocky-coastal-path.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </div>
            {/* card content */}
            <div className="px-1 mx-3 flex-grow overflow-hidden">
              <h1 className="text-2xl font-bold text-orange-300 py-1">
                Card Title
              </h1>
              <p className="text-white min-h-20 overflow-hidden line-clamp-3 font-semibold py-1 m-0.5 text-sm bg-[#ccc] rounded-lg px-4 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                magnam perferendis.
              </p>

              {/* buttons */}
              <div className="flex justify-center  items-center my-4">
                <button className="bg-cyan-500 text-white px-4 py-2 rounded-lg mr-2 font-bold shadow-lg">
                  Add to Cart
                </button>
                <button className="bg-orange-300 text-white px-4 py-2 rounded-lg ml-2 font-bold">
                  Buy Now
                </button>
              </div>
            </div>
            <div></div>
          </div>
          {/* card item 2 */}

          <div className="card bg-[#f7f7f7] border-2 rounded-lg max-w-xs">
            <div className="overflow-hidden rounded-t-lg shadow- bg-white">
              <img
                className="w-full min-h-fit object-cover aspect-video"
                src="https://images.pexels.com/photos/13461021/pexels-photo-13461021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </div>
            {/* card content */}
            <div className="px-1 mx-3">
              <h1 className="text-2xl font-bold text-orange-300 py-1">
                Card Title
              </h1>
              <p className="max-w-xs mx-auto min-h-20 overflow-hidden line-clamp-3 text-white font-semibold py-1 m-0.5 text-sm bg-[#ccc] rounded-lg px-4 pb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
              </p>

              {/* buttons */}
              <div className="my-4 flex justify-center items-center">
                <button className="bg-cyan-500 text-white px-4 py-2 rounded-lg mr-2 font-bold">
                  Book Now
                </button>
                <button className="bg-orange-300 text-white px-4 py-2 rounded-lg ml-2 font-bold">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          {/* card item 3 */}
          <div className="card bg-[#f7f7f7] border-2 rounded-lg max-w-xs">
            <div className="overflow-hidden rounded-t-lg shadow- bg-white">
              <img
                className="w-full min-h-fit object-cover aspect-video"
                src="https://images.pexels.com/photos/28962828/pexels-photo-28962828/free-photo-of-colorful-lifeguard-tower-on-miami-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </div>
            {/* card content */}
            <div className="px-1 mx-3">
              <h1 className="text-2xl font-bold text-orange-300 py-1">
                Card Title
              </h1>
              <p className=" max-w-xs mx-auto md:max-w-md lg:max-w-lg min-h-20 text-white font-semibold py-1 m-0.5 text-sm bg-[#ccc] rounded-lg px-4 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                omnis.
              </p>

              {/* buttons */}
              <div className="flex justify-center  items-center my-4">
                <button className="bg-cyan-500 text-white px-4 py-2 rounded-lg mr-2 font-bold">
                  Add to Cart
                </button>
                <button className="bg-orange-300 text-white px-4 py-2 rounded-lg ml-2 font-bold">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardZ;
