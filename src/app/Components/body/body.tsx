export default function Body() {
  return (
    <div className="body">
      <div className="container flex flex-wrap py-40 px-10 mx-auto">
        <div className="w-1/3 px-10">
          <div className="avatar flex flex-wrap py-20">
            <div className="avatar w-8 h-8 rounded-full">
              <img src="/image/Ellipse 51.svg" alt="" />
            </div>
            <div className="avatar2 h-8 w-8">
              <img src="/image/Ellipse 52.svg" alt="" />
            </div>
            <div className="avatar3 h-8 w-8">
              <img src="/image/Ellipse 53.svg" alt="" />
            </div>
          </div>

          <div className="">
            <span className="text-red-500 text-[15px] font-[DM-sans]">
              FEATURED SERVICE
            </span>
            <p className="text-2xl font-[satoshi]">
              Careers at <span className="text-red-600">Aide Ascent</span>
            </p>
            <p className="w-100 text-gray-500 pb-3 font-[satoshi]">
              <br />
              Join our dynamic team and shape the future with us. Whether you're
              a developerm designer, or tech ethusiast, find your next challenge
              and grow with us.
            </p>
          </div>

          <button className="bg-red-700 px-2 py-1 rounded-4xl font-[satoshi] text-[16px]">
            Apply Now
          </button>
        </div>
        <div className="flex-1 flex justify-end">
          <div className="py-5 px-5 rounded-[20px] shadow-md inset-shadow-xs relative bg-white z-10 -right-30">
            <div className="mb-2">
              <img
                src="/image/1.svg"
                alt="An image of desktop computer"
                className="w-[389px] h-[173px]"
              />
            </div>
            <div>
              <p className="w-100 text-gray-600">
                Join our dynamic team and work on cutting-edge projects that
                drive real impact. Explore our open positions and take the next
                step in your career with us today!
              </p>
            </div>
            <div className="share text-right">
              <button className="rounded-full bg-white px-1 py-1">
                <img
                  src="/image/share.svg"
                  alt="share button"
                  className="rounded-full"
                />
              </button>
            </div>
            <div className="link-wrap capitalize text-red-500 shadow-md p-3 rounded-md inset-shadow-xs bg-white z-10 absolute bottom-10 -left-32">
              <a href="#">website development</a>
            </div>
            <div className="shadow-md p-2 rounded-md inset-shadow-xs bg-white z-10 absolute -top-4 -right-16 w-38 flex items-center">
              <div className="left-content mr-2">
                <div className="img-holder bg-red-600 w-10 h-10 flex items-center justify-center rounded-sm p-2">
                  <img src="/image/headset.svg" alt="headset" />
                </div>
              </div>
              <div className="text-wrap text-sm text-gray-800">
                <strong>Be a part of <br /> Aide Ascent</strong>
              </div>
            </div>
            <div className="icon-wrap bg-white rounded-md absolute -bottom-5 -right-5 p-2 w-18 h-18 shadow-2xl">
              <img src="/image/glasses.svg" alt="glasses" />
            </div>
          </div>
          <div className="bg w-1/3 bg-pink-100 rounded-xl -my-16 p-4">
            <div className="icon-wrap w-10 h-10 p-3 rounded-full bg-white flex items-center justify-center ml-auto">
              <img src="/image/arrow.svg" alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
