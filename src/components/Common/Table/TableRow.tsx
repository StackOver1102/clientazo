"use client";

import React, { FC, useState } from "react";
import Button from "./Button";
import Rating from "../Rating/Rating";
import Modal from "../Modal/ModalComponent";

type Props = {
  data: any;
};
const TableRow: FC<Props> = ({ data }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <>
      <tr className="hover:bg-gray-50 border border-gray-300">
        <td className="px-4 py-2 text-sm">{data.id}</td>
        <td className="px-4 py-2 text-sm">{data.service}</td>
        <td className="px-4 py-2 text-sm text-center">
          <Button onClick={toggleDetails}>
            {showDetails ? "Hide" : "Show"}
          </Button>
        </td>
        <td className="py-2 w-10">
          <Rating
            rating={4.5}
            reviewCount={126}
            onClick={() => setIsModalOpen(true)}
          />
        </td>
        <td className="px-4 py-2 text-sm text-center">{data.qna}</td>
        <td className="px-4 py-2 text-sm font-bold text-center">
          {data.startTime}
        </td>
        <td className="px-4 py-2 text-sm font-bold text-center">
          {data.minOrder}
        </td>
        <td className="px-4 py-2 text-sm font-bold text-center">
          {data.maxOrder}
        </td>
        <td className="px-4 py-2 text-sm text-center flex flex-row xl:items-center space-x-2 xl:space-x-0 xl:flex-col xl:justify-center">
          <div>
            <span className="numeric !text-left xl:!text-center font-bold">
              50,000-100,000
            </span>
          </div>
          <div className="font-normal text-sm text-black">per day</div>
        </td>
        <td className="px-4 py-2 text-sm  text-center">
          <div>
            <span className="font-bold">{data.price}</span>
          </div>
          <div>USD</div>
        </td>
        <td className="px-4 py-2 text-sm">
          <Button className="w-24">Buy</Button>
        </td>
      </tr>

      {showDetails && (
        <tr className="bg-gray-50">
          <td colSpan={11} className="border border-gray-300 px-4 py-2">
            <div>
              <p>
                <strong>Start Time:</strong> {data.startTime}
              </p>
              <p>
                <strong>Speed:</strong> {data.speed}
              </p>
              <p>
                <strong>Refill:</strong> {data.refill}
              </p>
              <p>
                <strong>GEO:</strong> {data.geo}
              </p>
              <p>
                <strong>Restrictions:</strong> {data.restrictions}
              </p>
              <p className="mt-2">
                <strong>Note:</strong> {data.note}
              </p>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default TableRow;
