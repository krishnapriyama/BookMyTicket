import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
import { BiSearch, BiMenu, BiChevronDown } from "react-icons/bi";
import Modal from "react-modal";
import Bookmyshowimg from '../../assets/bookmyshow.png'


import LoginSignup from '../../Components/Navbar/loginSignup'

Modal.setAppElement("#root");
const NavSm = () => {
  return (
    <div>
      <div className="text-white flex items-center justify-between ">
        <div>
          <h3 className="text-xl font-bold">It All starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center">
            Idukki
            <GoChevronRight />
          </span>
        </div>
        <div className="w-8 h-8">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};
const NavMd = () => {
  return (
    <div className="w-full flex items-center gap-3  px-3 py-2 rounded-md bg-red">
      <BiSearch className="" />
      <input
        type="search"
        className="w-full bg-transparent border-none focus:outline"
        placeholder="Search for movies, events, Plays, Sports and Activities."
      />
    </div>
  );
};
const NavLg = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [locations, setLocations] = useState("");
  const [value, setValue] = useState("");

  return (
    <>
      <Modal
        isOpen={isModelOpen}
        onRequestClose={() => {
          setIsModelOpen(false);
        }}
      >
        <div className="bg-white border mt-0 w-full">
          <input
            type="text"
            placeholder="Search for Your City"
            className="w-4/5 h-10 border"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className="w-1/12 rounded-lg border-4 h-10 text-lg font-bold hover:bg-red-600"
            onClick={() => setLocations(value)}
          >
            Submit
          </button>
          <p className="text-center">Popular Cities</p>
          <div className="flex gap-2 ">
            <div className="w-1/6 ">
              <img
                src="https://in.bmscdn.com/m6/images/common-modules/regions/mumbai.png"
                alt=""
              />
              <p className="text-center text-slate-800 font-bold">Mumbai</p>
            </div>
            <div className="w-1/6 ">
              <img
                src="https://in.bmscdn.com/m6/images/common-modules/regions/ncr.png"
                alt=""
                className="w-24 -mt-2 ml-4"
              />
              <p className="text-center text-slate-800 font-bold -ml-4 mt-1">
                NCR
              </p>
            </div>
            <div className="w-1/6 ">
              <img
                src="https://in.bmscdn.com/m6/images/common-modules/regions/bang.png"
                alt=""
              />
              <p className="text-center text-slate-800 font-bold">Bengaluru</p>
            </div>
            <div className="w-1/6 ">
              <img
                src="https://in.bmscdn.com/m6/images/common-modules/regions/hyd.png"
                alt=""
                className="w-24 -mt-4 ml-4"
              />
              <p className="text-center text-slate-800 font-bold">Hyderabad</p>
            </div>
            <div className="w-1/6 ">
              <img
                src="https://in.bmscdn.com/m6/images/common-modules/regions/ahd.png"
                alt=""
              />
              <p className="text-center text-slate-800 font-bold">Ahmedabad</p>
            </div>
            <div className="w-1/6 ">
              <img
                src="https://in.bmscdn.com/m6/images/common-modules/regions/chd.png"
                alt=""
                className="w-28  ml-4"
              />
              <p className="text-center text-slate-800 font-bold">Chandigarh</p>
            </div>
            <div className="w-1/6 ">
              <img
                src="https://in.bmscdn.com/m6/images/common-modules/regions/chen.png"
                alt=""
                className="w-28 -mt-2 ml-4"
              />
              <p className="text-center text-slate-800 font-bold">Chennai</p>
            </div>
            <div className="w-1/6 ">
              <img
                src="https://in.bmscdn.com/m6/images/common-modules/regions/pune.png"
                alt=""
              />
              <p className="text-center text-slate-800 font-bold">Pune</p>
            </div>
            <div className="w-1/6 ">
              <img
                src="https://in.bmscdn.com/m6/images/common-modules/regions/kolk.png"
                alt=""
              />
              <p className="text-center text-slate-800 font-bold">Kolkata</p>
            </div>
            <div className="w-1/6 ">
              <img
                src="https://in.bmscdn.com/m6/images/common-modules/regions/koch.png"
                alt=""
              />
              <p className="text-center text-slate-800 font-bold">Kochi</p>
            </div>
          </div>
        </div>
      </Modal>
      <div className="container flex items-center gap-8 justify-center">
        <div className="flex items-center w-2/3 gap-3">
          <div className="w-40 h-11 m-0  ">

            <img src={Bookmyshowimg} alt="logo" className="w-full h-full" />

          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md ml-10">
            <BiSearch className="ml-2" />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none ml-2"
              placeholder="Search for movies, events, Plays, Sports and Activities."
            />
          </div>
        </div>
        <div className="flex items-center justify-end w-full gap-3 ml-6">
          <span
            className="text-gray-200 text-xs flex items-center cursor-pointer hover:text-white mr-8 font-bold "
            onClick={() => {
              setIsModelOpen(true);
            }}
          >
            {locations === "" ? "Location" : locations} <BiChevronDown />
          </span>
<div className="justify-end flex items-center">

          <LoginSignup></LoginSignup>
</div>

        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <div>
      <nav className="bg-slate-700 w-full h-26">
        <div className="p-3 ">
          <div className="md:hidden mt-0 p-2">
            {/* Mobile screen */}
            <NavSm />
          </div>
          <div className="hidden md:flex lg:hidden mt-0 ">
            {/* Medium/Tab screen */}
            <NavMd />
          </div>
          <div className="hidden w-full justify-center lg:flex mt-0 ">
            {/* Large screen */}
            <NavLg />
          </div>
        </div>
        <div className="flex justify-between bg-slate-900 h-11 w-full text-white ">
          <div className="flex gap-7 ml-20 mt-2">
            <div>

              <Link to="/allmovies">Movie</Link>
            </div>
            <div>
              <Link to="/streams">Stream</Link>
            </div>
            <div>
              <Link to="/events">Events</Link>
            </div>
            <div>
              <Link to="/play">Plays</Link>
            </div>
          </div>

          <div className="flex gap-7 mr-20 mt-2">
          
            <div>
              <Link to="/offers">Offers</Link>
            </div>
            <div>
              <Link to="/giftcarts"> Gift Cards</Link>{" "}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
