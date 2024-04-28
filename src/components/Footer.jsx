import React from 'react';

function Footer() {
  return (
    <div className="">
      <div className="container  max-w-7xl mx-auto pt-24 flex flex-col gap-10 pb-10">
        {/* Section 1 */}
        <div className="flex xl:gap-100 gap-40 flex-col md:flex-row px-5">
          {/* Left Section */}
          <div className="flex flex-col gap-24 w-full md:w-1/2 xl:w-1/5">
            <h1 className="font-semibold text-2xl leading-10">
              IMAGINE A
              <br />
              PLACE
            </h1>
            <div className="text-white text-xl flex gap-7">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-3/4 flex justify-around flex-wrap">
            <div className="w-1/2 xl:w-auto">
              <h2 className="text-sm font-semibold xl:py-2 py-3">
                Product
              </h2>
              <ul className="text-white flex flex-col gap-3 leading-6 font-normal">
                <li className="hover:underline"><a href="#">Download</a></li>
                <li className="hover:underline"><a href="#">Nitro</a></li>
                <li className="hover:underline"><a href="#">Status</a></li>
              </ul>
            </div>

            <div className="w-1/2 xl:w-auto">
              <h2 className="text-sm font-semibold xl:py-2 py-3">
                Company
              </h2>
              <ul className="text-white flex flex-col gap-3 leading-6 font-normal">
                <li className="hover:underline"><a href="#">About</a></li>
                <li className="hover:underline"><a href="#">Jobs</a></li>
                <li className="hover:underline"><a href="#">Branding</a></li>
                <li className="hover:underline"><a href="#">Newsroom</a></li>
                <li className="hover:underline">
                  <a href="#" className="text-[#1f1f1f00] select-none">.</a>
                </li>
              </ul>
            </div>

            <div className="w-1/2 xl:w-auto">
              <h2 className="text-sm font-semibold xl:py-2 py-3">
                Resources
              </h2>
              <ul className="text-white flex flex-col gap-3 leading-6 font-normal">
                <li className="hover:underline"><a href="#">Colleges</a></li>
                <li className="hover:underline"><a href="#">Support</a></li>
                <li className="hover:underline"><a href="#">Safety</a></li>
                <li className="hover:underline"><a href="#">Blog</a></li>
                <li className="hover:underline"><a href="#">Feedback</a></li>
                <li className="hover:underline"><a href="#">Developers</a></li>
                <li className="hover:underline"><a href="#">StreamKit</a></li>
                <li className="hover:underline"><a href="#">Creators</a></li>
              </ul>
            </div>

            <div className="w-1/2 xl:w-auto">
              <h2 className="text-sm font-semibold xl:py-2 py-3">
                Policies
              </h2>
              <ul className="text-white flex flex-col gap-3 leading-6 font-normal">
                <li className="hover:underline"><a href="#">Terms</a></li>
                <li className="hover:underline"><a href="#">Privacy</a></li>
                <li className="hover:underline"><a href="#">Cookie Settings</a></li>
                <li className="hover:underline"><a href="#">Guidelines</a></li>
                <li className="hover:underline"><a href="#">Acknowledgements</a></li>
                <li className="hover:underline"><a href="#">Licenses</a></li>
                <li className="hover:underline"><a href="#">Moderation</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex border-t-2 border- items-center justify-between pt-7 mx-5">
          

          
        </div>
      </div>
    </div>
  );
}

export default Footer;

