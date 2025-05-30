import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import iphone from "../assets/iphone.png";
import r from "../assets/right.png";
import l from "../assets/left.png";
import p from "../assets/product.png";
import pc from "../assets/com.png";
import jbl from "../assets/jbl.png";
import ps from "../assets/ps.png";
import wm from "../assets/women.png";
import sp from "../assets/speaker.png";
import pr from "../assets/per.png";
import t from "../assets/t.png";
import c from "../assets/c.png";
import s from "../assets/s.png";

const products = [
  { id: 1, name: "Gaming Pad", price: "$120", image: p },
  { id: 2, name: "Wireless Mouse", price: "$80", image: p },
  { id: 3, name: "Mechanical Keyboard", price: "$150", image: p },
  { id: 4, name: "Gaming Headset", price: "$200", image: p },
];

const category = [
  { id: 1, name: "Phone", image: pc },
  { id: 2, name: "Computer", image: pc },
  { id: 3, name: "Smartphone", image: pc },
  { id: 4, name: "Camera", image: pc },
  { id: 5, name: "Headphone", image: pc },
  { id: 6, name: "Gaming", image: pc },
];

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-auto w-full flex">
        <div className="flex flex-col list-none text-sm w-1/4 border-r gap-4 px-6 py-10">
          <li>Women's Fashion</li>
          <li>Men's Fashion</li>
          <li>Electronics</li>
          <li>Home</li>
          <li>Medicine</li>
          <li>Sports</li>
          <li>Baby Care</li>
          <li>Grocery</li>
          <li>Health and Beauty</li>
        </div>

        <div className=" h-auto w-screen p-6">
          <img className="h-80 w-218" src={iphone} alt="slider" />
        </div>
      </div>

      <div className="h-screen w-screen flex flex-col justify-center items-center px-18 py-6">
        <div className="h-26 w-full flex">
          <div className="w-1/2 flex flex-col">
            <div className="flex h-10 items-center gap-1">
              <div className="h-8 w-4 rounded bg bg-red-600"></div>
              <p className="font-bold text-red-600">Today's</p>
            </div>

            <div className="h-full flex items-end justify-between">
              <h1 className="text-3xl">Flash Sales</h1>
              <div className="flex items-center gap-1">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-xs">Days</p>
                  <h3 className="text-3xl">03</h3>
                </div>
                :
                <div className="flex flex-col items-center justify-center">
                  <p className="text-xs">Hours</p>
                  <h3 className="text-3xl">23</h3>
                </div>
                :
                <div className="flex flex-col items-center justify-center">
                  <p className="text-xs">minutes</p>
                  <h3 className="text-3xl">19</h3>
                </div>
                :
                <div className="flex flex-col items-center justify-center">
                  <p className="text-xs">Seconds</p>
                  <h3 className="text-3xl">53</h3>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-1/2 flex justify-end items-end gap-2">
            <div className="flex justify-center items-center size-10 bg-gray-200 rounded-4xl text-2xl font-bold">
              <img className="size-6" src={l} alt="" />
            </div>
            <div className="flex justify-center items-center size-10 bg-gray-200 rounded-4xl text-2xl font-bold">
              <img className="size-6" src={r} alt="" />
            </div>
          </div>
        </div>

        <div className="h-auto w-full flex mt-6">
          {products.map((product) => (
            <div key={product.id} className="h-70 w-full flex p-4">
              <div className="flex flex-col items-start">
                <div className="relative size-50 bg-gray-200 rounded flex justify-center items-center group">
                  <img
                    className="size-29"
                    src={product.image}
                    alt={product.name}
                  />
                  <button className="absolute bottom-0 w-full h-10 bg-black text-white text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Add To Cart
                  </button>
                </div>
                <p className="text-lg font-semibold">{product.name}</p>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="bg-red-600 text-xl rounded p-3 text-white hover:bg-white hover:text-black hover:border">
          View All Products
        </button>
      </div>

      <hr className=" w-full border-gray-400" />

      <div className="h-auto w-screen flex flex-col justify-center items-center px-18 py-6">
        <div className="h-26 w-full flex">
          <div className="w-1/2 flex flex-col">
            <div className="flex h-10 items-center gap-1">
              <div className="h-8 w-4 rounded bg bg-red-600"></div>
              <p className="font-bold text-red-600">Categories</p>
            </div>

            <div className="h-full flex items-end justify-between">
              <h1 className="text-3xl">Browse By Category</h1>
            </div>
          </div>

          <div className=" w-1/2 flex justify-end items-end gap-2">
            <div className="flex justify-center items-center size-10 bg-gray-200 rounded-4xl text-2xl font-bold">
              <img className="size-6" src={l} alt="" />
            </div>
            <div className="flex justify-center items-center size-10 bg-gray-200 rounded-4xl text-2xl font-bold">
              <img className="size-6" src={r} alt="" />
            </div>
          </div>
        </div>

        <div className="h-auto w-full flex mt-6">
          {category.map((category) => (
            <div key={category.id} className="h-full w-full flex p-4">
              <div className="size-32 border-1 rounded flex flex-col justify-center items-center hover:bg-red-600 hover:text-white">
                <img
                  className="size-16"
                  src={category.image}
                  alt={category.name}
                />
                <p className="text-xs font-semibold">{category.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className=" w-full border-gray-400" />

      <div className="h-full w-screen flex flex-col justify-center items-center px-18 py-6">
        <div className="h-26 w-full flex">
          <div className="w-1/2 flex flex-col">
            <div className="flex h-10 items-center gap-1">
              <div className="h-8 w-4 rounded bg bg-red-600"></div>
              <p className="font-bold text-red-600">This month</p>
            </div>

            <div className="h-full flex items-end justify-between">
              <h1 className="text-3xl">Best Selling Products</h1>
            </div>
          </div>

          <div className=" w-1/2 flex justify-end items-end gap-2">
            <button className="bg-red-600 text-md rounded px-4 py-2 text-white hover:bg-white hover:text-black hover:border">
              View All
            </button>
          </div>
        </div>

        <div className="h-auto w-full flex mt-6">
          {products.map((product) => (
            <div key={product.id} className="h-70 w-full flex p-4">
              <div className="flex flex-col items-start">
                <div className="relative size-50 bg-gray-200 rounded flex justify-center items-center group">
                  <img
                    className="size-29"
                    src={product.image}
                    alt={product.name}
                  />
                  <button className="absolute bottom-0 w-full h-10 bg-black text-white text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Add To Cart
                  </button>
                </div>
                <p className="text-lg font-semibold">{product.name}</p>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="h-110 w-full bg-black my-6 flex px-14">
          <div className="h-full w-1/2 flex flex-col items-start justify-center gap-10">
            <p className="text-green-500">Categories</p>
            <h1 className="text-4xl text-white tracking-wider">
              Enhance Your <br />
              Music Experience
            </h1>
            <div className="flex gap-5">
              <div className="text-xs font-extrabold size-10 bg-white rounded-4xl flex flex-col justify-center items-center">
                <p>Days</p>
                <p>02</p>
              </div>
              <div className="text-xs font-extrabold size-10 bg-white rounded-4xl flex flex-col justify-center items-center">
                <p>Days</p>
                <p>02</p>
              </div>
              <div className="text-xs font-extrabold size-10 bg-white rounded-4xl flex flex-col justify-center items-center">
                <p>Days</p>
                <p>02</p>
              </div>
              <div className="text-xs font-extrabold size-10 bg-white rounded-4xl flex flex-col justify-center items-center">
                <p>Days</p>
                <p>02</p>
              </div>
            </div>
            <button className="bg-green-500 px-4 py-2 text-black rounded hover:text-white">
              Buy Now
            </button>
          </div>

          <div className="w-1/2 flex justify-center items-center">
            <img src={jbl} alt="" />
          </div>
        </div>
      </div>

      <div className="h-screen w-screen flex flex-col justify-center items-center px-18 py-6">
        <div className="h-26 w-full flex">
          <div className="w-1/2 flex flex-col">
            <div className="flex h-10 items-center gap-1">
              <div className="h-8 w-4 rounded bg bg-red-600"></div>
              <p className="font-bold text-red-600">Our Products</p>
            </div>

            <div className="h-full flex items-end justify-between">
              <h1 className="text-3xl">Explore Our Products</h1>
            </div>
          </div>

          <div className=" w-1/2 flex justify-end items-end gap-2">
            <div className="flex justify-center items-center size-10 bg-gray-200 rounded-4xl text-2xl font-bold">
              <img className="size-6" src={l} alt="" />
            </div>
            <div className="flex justify-center items-center size-10 bg-gray-200 rounded-4xl text-2xl font-bold">
              <img className="size-6" src={r} alt="" />
            </div>
          </div>
        </div>

        <div className="h-auto w-full flex mt-6">
          {products.map((product) => (
            <div key={product.id} className="h-70 w-full flex p-4">
              <div className="flex flex-col items-start">
                <div className="relative size-50 bg-gray-200 rounded flex justify-center items-center group">
                  <img
                    className="size-29"
                    src={product.image}
                    alt={product.name}
                  />
                  <button className="absolute bottom-0 w-full h-10 bg-black text-white text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Add To Cart
                  </button>
                </div>
                <p className="text-lg font-semibold">{product.name}</p>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="bg-red-600 text-xl rounded p-3 text-white hover:bg-white hover:text-black hover:border">
          View All Products
        </button>
      </div>

      <div className="h-screen w-screen flex flex-col justify-center items-center px-18 py-6">
        <div className="h-26 w-full flex">
          <div className="w-1/2 flex flex-col">
            <div className="flex h-10 items-center gap-1">
              <div className="h-8 w-4 rounded bg bg-red-600"></div>
              <p className="font-bold text-red-600">Featured</p>
            </div>

            <div className="h-full flex items-end justify-between">
              <h1 className="text-3xl">New Arrival</h1>
            </div>
          </div>
        </div>

        <div className="h-full w-full my-5 flex gap-5">
          <div className="h-full w-1/2 bg-black flex justify-center items-center ">
            <img className="h-90 w-full" src={ps} alt="" />
          </div>
          <div className="h-full w-1/2 flex flex-col gap-5">
            <div className="h-1/2 bg-black flex justify-end items-end w-full">
              <img className="h-40 w-60" src={wm} alt="" />
            </div>
            <div className="h-1/2 w-full flex gap-5">
              <div className="h-full bg-black flex justify-center items-center w-1/2">
                <img className="size-40" src={sp} alt="" />
              </div>
              <div className="h-full bg-black flex justify-center items-center w-1/2">
                <img className="size-40" src={pr} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-screen flex justify-center items-center pb-12 gap-7">
        <div className="h-30 w-60 flex flex-col justify-center items-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-black shadow-lg border-7 border-gray-300">
            <img className="h-7 w-10" src={t} alt="" />
          </div>
          <p className="text-xs">FREE AND FAST DELIVERY</p>
          <p className="text-xs">delevery</p>
        </div>

        <div className="h-30 w-60 flex flex-col justify-center items-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-black shadow-lg border-7 border-gray-300">
            <img className="size-7" src={c} alt="" />
          </div>
          <p className="text-xs">24/5 CUSTOMER SUPPORT</p>
          <p className="text-xs">support</p>
        </div>

        <div className="h-30 w-60 flex flex-col justify-center items-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-black shadow-lg border-7 border-gray-300">
            <img className="size-7" src={s} alt="" />
          </div>
          <p className="text-xs">MONEY BACK GAURANTEE</p>
          <p className="text-xs">trust</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
