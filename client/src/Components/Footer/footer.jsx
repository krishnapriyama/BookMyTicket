import React from "react";
import { GiBarracksTent } from "react-icons/gi";
import {
  BsInstagram,
  BsTwitter,
  BsPinterest,
  BsLinkedin,
} from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoTicketSharp } from "react-icons/io5";
import { IoIosMailOpen } from "react-icons/io";
import { AiFillFacebook, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-black">
      {/* list Show */}
      <div>
        <div className="flex justify-between text-white ml-16 mr-16 bg-black items-center">
          <div className="flex">
            <GiBarracksTent className="text-4xl mt-2" />{" "}
            <p className="ml-2 text-lg mt-2">List your Show</p>
            <div className="ml-4 text-lg mt-2 mb-4">
              Got a show, event, activity or a great experience? Partner with us
              &amp; get listed on BookMyShow
            </div>
          </div>
          <div>
            <p className="text-lg mt-2 border-2 bg-red-600">Contact today!</p>
          </div>
        </div>
      </div>

      {/* list Show */}
      {/* Customer care */}
      <div
        className="flex justify-between h-32 items-center"
        style={{ backgroundColor: "white" }}
      >
        <div className="ml-36">
          <RiCustomerService2Fill className="text-6xl" />
          <p className="-ml-10">24/7CUSTOMER CARE</p>
        </div>
        <div>
          <IoTicketSharp className="text-6xl ml-24" />
          <p>PRESEND BOOKING CONFIRMATION</p>
        </div>
        <div className="">
          <IoIosMailOpen className="text-6xl mr-48" />
          <p className="-ml-10">SUBSCRIBE TO NEWSLETTER</p>
        </div>
      </div>
      {/* Customer care */}
      {/* Details */}
      <div className="bg-black text-white ml-16 mr-16">
        <h6 className="mt-3 mb-3">
          Movies Playing in National Capital Region (NCR)
        </h6>
        <p>
          The House of Dead Horror |Wild Roller Coaster | Prehistoric Adventure
          | Pushpa:The Rise - Part 01 |83 | Spider-Man:No way Home | Shooter
          |The King's Man | Chandigarh Kare Aashiqui | Banglore
        </p>
        <h6 className="mt-3 mb-3">Upcoming Movies</h6>
       
        <h6 className="mt-3 mb-3">COUNTRIES</h6>
        <p>Indonesia |Singapore |UAE |Sri Lanka |West Indies | </p>
        <h6 className="mt-3 mb-3">HELP</h6>
        <p>
          Contact Us |Current Openings |Press Release | Press Release |Terms &
          Conditions |Privacy Policy |FAQs |Sitemap{" "}
        </p>
        <h6 className="mt-3 mb-3">BOOKMYSHOW EXCLUSIVE</h6>
        <p>
          Watch Guide |Superstar |BookASmile |BookASmile |BookASmile |List My
          Show |Offers | Stream{" "}
        </p>
      </div>

      {/* Details */}
      {/* book my show logo and social media connect */}

      <div className="bg-black flex  ">
        <img
          src="https://in.bmscdn.com/webin/common/icons/logo.svg"
          alt=""
          className="m-auto mt-4 "
        />
      </div>
      <div className=" flex bg-white justify-center  mt-4 mb-4">
        <div className="flex mt-4 mb-4">
          <AiFillFacebook className="ml-2 text-4xl" />
          <BsInstagram className="ml-2 text-4xl" />
          <BsTwitter className="ml-2 text-4xl" />
          <AiFillYoutube className="ml-2 text-4xl" />
          <BsPinterest className="ml-2 text-4xl" />
          <BsLinkedin className="ml-2 text-4xl" />
        </div>
      </div>
      <div>
        <p className="text-center text-white">
          Copyright 2022 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved
        </p>
        <p className="text-center text-white">
          The content and images used on this site are copyright protected and
          copyrights vests with the respective owners. The usage of the content
          and images on this website is intended to promote the works and no
          endorsement of the artist shall be implied. Unauthorized use is
          prohibited and punishable by law.
        </p>
      </div>
      {/* book my show logo and social media connect */}
    </div>
  );
};

export default Footer;
