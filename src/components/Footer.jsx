import React from "react";
import qr from "../assets/qr.png";

const Footer = () => {
  return (
    <div className="h-92 bg-black flex justify-around items-center text-white px-14 py-10">
      <div className="h-full flex flex-col items-start gap-5">
        <h1 className="font-bold text-2xl">Exclusive</h1>
        <h1>Subscribe</h1>
        <p>Get 10% off your first order</p>
        <input
          className="border-1 border-white p-2 text-white"
          type="text"
          placeholder="Enter your e-mail"
        />
      </div>
      <div className="h-full flex flex-col items-start gap-5">
        <h1>Support</h1>
        <p>
          sant bhojalram society,
          <br />
          street no 1 rajkot
        </p>
        <p>exclusive@gmail.com</p>
        <p>92650 81552</p>
      </div>
      <div className="h-full flex flex-col gap-5 list-none">
        <h1>Account</h1>
        <li className="hover:underline">My Account</li>
        <li className="hover:underline">Login / Register</li>
        <li className="hover:underline">Cart</li>
        <li className="hover:underline">Wishlist</li>
        <li className="hover:underline">Shop</li>
      </div>
      <div className="h-full flex flex-col gap-5 list-none">
        <h1>Quick Link</h1>
        <li className="hover:underline">privacy policy</li>
        <li className="hover:underline">Terms of use</li>
        <li className="hover:underline">FAQ</li>
        <li className="hover:underline">Contact</li>
      </div>
      <div className="h-full flex flex-col gap-5">
        <h1>Download App</h1>
        <div className="flex flex-col gap-2">
          <p className="text-gray-500 text-xs">
            Save $3 with new app user only
          </p>

          <div className="flex gap-1">
            <img className="size-15" src={qr} alt="Qr" />
            <div>
                <div className="h-7 w-28 border-white border-1 rounded-md flex item-center justify-center">playstore</div>
                <div className="h-7 w-28 border-white border-1 rounded-md flex item-center justify-center mt-1">appstore</div>
            </div>
          </div>

          <div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
