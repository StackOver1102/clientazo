import React, { useState } from "react";
import styled from "styled-components";
import TableRow from "./TableRow";
import Selector from "../Select/Selector";
import { useTranslations } from "next-intl";
import Modal from "../Modal/ModalComponent";
import Button from "./Button";
import Rating from "../Rating/Rating";
import ButtonComponents from "../Button/ButtonComponents";

interface TableRow {
  id: number;
  service: string;
  ratings: string;
  qna: number;
  startTime: string;
  minOrder: number;
  maxOrder: number;
  speed: string;
  price: number;
  refill: string;
  geo: string;
  restrictions: string;
  note: string;
}

interface TableProps {
  rows: TableRow[];
  isFullRow?: boolean;
}

const CustomTh = styled.th`
  border-bottom-width: 2px;
  --tw-border-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity));
  padding: 1rem;
  font-weight: 600;
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
  font-size: 14px;
  line-height: 1.25rem;
`;

const Table = ({ rows }: TableProps) => {
  const t = useTranslations("Section.Service.tableService");
  const initialVisibleRows = 10; // Initial number of visible rows
  const [visibleRows, setVisibleRows] = useState(initialVisibleRows);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const optionsSort = [
    { label: "Most Popular", value: "option1" },
    { label: "Highest Rated", value: "option2" },
    { label: "Price High/Low", value: "option3" },
    { label: "Price Low/High", value: "option4" },
    { label: "Service ID High/Low", value: "option5" },
    { label: "Service ID Low/High", value: "option6" },
  ];

  const handleShowMore = () => {
    setVisibleRows((prev) => prev + 10); // Show 10 more rows
  };

  const handleViewAll = () => {
    setVisibleRows(rows.length); // Show all rows
  };

  const handleShowLess = () => {
    setVisibleRows(initialVisibleRows); // Reset to initial visible rows
  };

  const [showDetails, setShowDetails] = useState(false);
  const [details, setDetails] = useState<TableRow | null>(null);
  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <div className="overflow-x-auto mt-16">
      <div className="flex justify-between mb-2">
        <div className="flex justify-center items-center mt-2">
          <span className="mr-2">Sort By: </span>
          <Selector options={optionsSort} onChange={(e) => console.log(e)} />
        </div>
        <div className="flex justify-center items-center mt-2">
          <span className="mr-2">Sort: </span>
          <Selector options={optionsSort} onChange={(e) => console.log(e)} />
        </div>
      </div>
      <table className="min-w-full border-collapse bg-white">
        <thead>
          <tr className=" border border-gray-300">
            <CustomTh className="px-4 py-2 text-left w-10">{t("ID")}</CustomTh>
            <CustomTh className="px-4 py-2 text-left w-80">
              {t("service")}
            </CustomTh>
            <CustomTh className="px-4 py-2 text-left w-10">
              {t("description")}
            </CustomTh>
            <CustomTh className="px-4 py-2 w-10 text-center">
              {t("rating")}
            </CustomTh>
            <CustomTh className="px-4 py-2 text-center">{t("Q&A")}</CustomTh>
            <CustomTh className="px-4 py-2 text-center">
              {t("startTime")}
            </CustomTh>
            <CustomTh className="px-4 py-2 text-center">
              {t("minOrder")}
            </CustomTh>
            <CustomTh className="px-4 py-2 text-center">
              {t("maxOrder")}
            </CustomTh>
            <CustomTh className="px-4 py-2 text-center">{t("speed")}</CustomTh>
            <CustomTh className="px-4 py-2 text-center ">
              {t("price per 1000")}
            </CustomTh>
            <CustomTh className="px-4 py-2 text-left w-32"></CustomTh>
          </tr>
        </thead>
        <tbody>
          {rows.slice(0, visibleRows).map((row) => (
            // <TableRow key={row.id} data={row} />
            <tr
              className="hover:bg-gray-50 border border-gray-300"
              key={row.id}
            >
              <td className="px-4 py-2 text-sm">{row.id}</td>
              <td className="px-4 py-2 text-sm">{row.service}</td>
              <td className="px-4 py-2 text-sm text-center">
                <Button onClick={toggleDetails}>
                  {showDetails ? "Hide" : "Show"}
                </Button>
              </td>
              <td className="py-2 w-10">
                <Rating
                  rating={4.5}
                  reviewCount={126}
                  onClick={() => {
                    setDetails(row);
                    setIsModalOpen(true);
                  }}
                />
              </td>
              <td className="px-4 py-2 text-sm text-center">{row.qna}</td>
              <td className="px-4 py-2 text-sm font-bold text-center">
                {row.startTime}
              </td>
              <td className="px-4 py-2 text-sm font-bold text-center">
                {row.minOrder}
              </td>
              <td className="px-4 py-2 text-sm font-bold text-center">
                {row.maxOrder}
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
                  <span className="font-bold">{row.price}</span>
                </div>
                <div>USD</div>
              </td>
              <td className="px-4 py-2 text-sm">
                <Button className="w-24">Buy</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4 space-x-4">
        {visibleRows < rows.length && (
          <button
            onClick={handleShowMore}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          >
            {t("showMore")}
          </button>
        )}
        {visibleRows < rows.length && (
          <button
            onClick={handleViewAll}
            className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800"
          >
            {t("viewAll")}
          </button>
        )}
        {visibleRows > initialVisibleRows && (
          <button
            onClick={handleShowLess}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          >
            {t("showLess")}
          </button>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div>
          <div className="border-b px-6 py-4">
            <h2 className="text-xl font-bold text-center">Test</h2>
            <div className="flex justify-center items-center">
              <ButtonComponents
                variant="primary"
                label="Show description"
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              />
              <ButtonComponents
                label="Buy"
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium rounded-lg border border-gray-200"
              />
            </div>
          </div>
          <h2 className="text-lg font-bold">Participant Details</h2>
          <p>{details?.service}</p>
          <p>{details?.price}</p>
        </div>
      </Modal>
    </div>
  );
};

export default Table;
