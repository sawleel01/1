export default function Body() {
  return (
    <div className="body px-6">
      <div className="container flex flex-wrap justify-between py-10 px-10">
        <div className="col-md-3 px-10">
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

        <div className="col-md-9">
          <div className="py-5 px-5 bg-black rounded-[20px]">
            <div>
              <img
                src="/image/1.svg"
                alt="An image of desktop computer"
                className="w-[389px] h-[173px]"
              />
            </div>
            <div>
              <p className="w-100">
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
          </div>
        </div>
      </div>
    </div>
  );
}
