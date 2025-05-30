import React from "react";
import cart from "../assets/cart.png";
import like from "../assets/like.png";
import search from "../assets/search.png";

const Header = () => {
  return (
    <div>
      <div className="h-10 w-screen bg-black text-white flex justify-center items-center">
        Summer sale for swimming suits and fast delevery fast shopping
      </div>

      <div className="h-24 w-screen border-b flex justify-around items-center pt-4">
        <div className="font-bold text-2xl">Exclusive</div>

        <div className="flex list-none gap-10">
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Sign Up</li>
        </div>

        <div className="flex w-90 justify-between ">
          <div>
            <input
              className="text-sm h-10 width-32 bg-gray-100 rounded p-4 pr-14 border"
              type="text"
              name="search"
              id="search"
              placeholder="What are you looking for? "
            />
            <img
              className="size-5 inline-block relative right-7 bottom-1"
              src={search}
              alt="search"
            />
          </div>

          <img className="size-7 mt-1" src={like} alt="like" />
          <img className="size-7 mt-1" src={cart} alt="like" />
        </div>
      </div>
    </div>
  );
};

export default Header;
