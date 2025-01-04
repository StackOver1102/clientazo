"use client";
import Badge from "@/components/Common/Badge/Badge";
import RadioComponent from "@/components/Common/Radio/RadioComponent";
import Rating from "@/components/Common/Rating/Rating";
import TabComponent from "@/components/Common/Tabs/TabComponent";
import LayoutContent from "@/components/Layout/Content/LayoutContent";
import Sidebar from "@/components/Layout/Sidebar";
import { formatMoney } from "@/utils/formatMoney";
import { useLocale } from "next-intl";
// import Image from "next/image";
import React, { useState } from "react";

function ProductDetail() {
  const [selectedValue, setSelectedValue] = useState<string>("option1");
  const locale = useLocale();

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };
  const tabs = [
    {
        label: 'Mô tả',
        content: (
            <img
                src="https://lh3.googleusercontent.com/pw/AP1GczM4vn7NFq58XcgteaOEMHEXg5GBjnLiUMt0ufsARKz9rbov6LYEPOm16ubJxYKmu7dSrNRCoJbqfAAN_DmpF1iX0iQukSA63P-Ct02xRG8YUiLfuJFiAzd8Us1QHyp71wWf9Jg8qGRv7uUCi71lAj78=w1200-h447-s-no-gm?authuser=1"
                alt="Hướng dẫn mua hàng"
                className="max-w-full h-auto  w-full"
            />
        ),
    },
    {
        label: 'Reviews',
        content: <div>Đây là tab Reviews</div>,
    },
];
  return (
    <>
      <Sidebar />
      <LayoutContent className="ml-48">
        <div className="bg-gray-100">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-8">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="Product"
                  className="w-full h-auto rounded-lg shadow-md mb-4"
                  id="mainImage"
                  width={500}
                  height={500}
                />
                <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                  <img
                    src="https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="Thumbnail 1"
                    className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                    // onClick={() => changeImage(this.src)}
                  />
                  <img
                    src="https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="Thumbnail 2"
                    className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                    // onClick={() => changeImage(this.src)}
                  />
                  <img
                    src="https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="Thumbnail 3"
                    className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                    // onClick={() => changeImage(this.src)}
                  />
                  <img
                    src="https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="Thumbnail 4"
                    className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                    // onClick={() => changeImage(this.src)}
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 px-4">
                <h2 className="text-3xl font-bold mb-2">
                  <Badge size="large" text="Dịch vụ" className="mr-2" />
                  Dịch vụ code tools chất lượng - giá rẻ - bảo mật
                </h2>
                <div className="flex items-center my-5">
                  <Rating rating={4.5} size="small" />
                  <span className="text-[13px] text-gray-500 ml-2">
                    308 Reviews | Đơn hoàn thành: 1944 | Khiếu nại: 0.0%
                  </span>
                </div>
                <p className="text-gray-700 mb-6">
                  Experience premium sound quality and industry-leading noise
                  cancellation with these wireless headphones. Perfect for music
                  lovers and frequent travelers.
                </p>

                <div className="mb-6 border-t border-gray-200 pt-4">
                  <ul>
                    <li>
                      Người bán:{" "}
                      <span className="text-[#21bf73]">Nguyễn Văn A</span> |{" "}
                      <Badge
                        size="small"
                        text="Online"
                        className="bg-green-300 text-green-800"
                      />
                    </li>
                  </ul>
                  <ul>
                    <li>
                      Dịch vụ:{" "}
                      <span className="text-[#21bf73]">Dịch vụ đồ họa</span>
                    </li>
                  </ul>
                  <div className="flex items-center my-3 text-3xl font-bold">
                    {formatMoney(230000, locale)}
                  </div>
                </div>

                <div className="mb-6 border-t border-gray-200 pt-4">
                  <RadioComponent
                    options={[
                      { value: "option1", label: "Option 1" },
                      { value: "option2", label: "Option 2" },
                      { value: "option3", label: "Option 3" },
                    ]}
                    name="exampleGroup"
                    selectedValue={selectedValue}
                    onChange={handleRadioChange}
                  />
                </div>

                <div className="flex space-x-4 mb-6">
                  <button className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    Add to Cart
                  </button>
                  <button className="bg-gray-200 flex gap-2 items-center  text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    Wishlist
                  </button>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Industry-leading noise cancellation</li>
                    <li>30-hour battery life</li>
                    <li>Touch sensor controls</li>
                    <li>Speak-to-chat technology</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center ">
              <TabComponent tabs={tabs} defaultActiveTabIndex={0} />
            </div>
          </div>
        </div>
      </LayoutContent>
    </>
  );
}

export default ProductDetail;
