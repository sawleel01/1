export default function Navbar() {
  return (
    <div className="navbar py-6">
      <div className="container mx-auto">
        <div className="navbar-content flex flex-wrap justify-between items-center">
          <div className="logo">
            <img
              src="/logo.svg"
              alt="Logo"
              className="px-20"
            />
          </div>
          <nav className="bg-[#232323] px-6 py-2 rounded-4xl">
            <ul className="nav-list flex flex-wrap items-center gap-[50px] pt-[18px] pr-[42px] pb-[12px] pl-[52px]">
              <li>
                <a href="#">Domain</a>
              </li>
              <li>
                <a href="#">Hosting</a>
              </li>
              <li>
                <a href="#">Email</a>
              </li>
              <li>
                <a href="#">Website</a>
              </li>
              <li>
                <a href="#">Review</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="button-holder">
            <button className="bg-red-700 p-2 rounded-4xl mr-5 font-[satoshi]">
              Login/Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
