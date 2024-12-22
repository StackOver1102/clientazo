import React from "react";
import styled from "styled-components";
import TableRow from "./TableRow";

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
const Table = ({ rows }) => {
  return (
    <div className="overflow-x-auto mt-20">
      <table className="min-w-full border-collapse bg-white">
        <thead>
          <tr className=" border border-gray-300">
            <CustomTh className="px-4 py-2 text-left w-10">ID</CustomTh>
            <CustomTh className="px-4 py-2 text-left w-80">Service</CustomTh>
            <CustomTh className="px-4 py-2 text-left w-10">
              Description
            </CustomTh>
            <CustomTh className="px-4 py-2 w-10 text-center">Ratings</CustomTh>
            <CustomTh className="px-4 py-2 text-center">Q&A</CustomTh>
            <CustomTh className="px-4 py-2 text-center">Start Time</CustomTh>
            <CustomTh className="px-4 py-2 text-center w-5">Min. Order</CustomTh>
            <CustomTh className="px-4 py-2 text-center">Max Order</CustomTh>
            <CustomTh className="px-4 py-2 text-center">Speed</CustomTh>
            <CustomTh className="px-4 py-2 text-center w-24">Price per 1,000</CustomTh>
            <CustomTh className="px-4 py-2 text-left w-32"></CustomTh>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <TableRow key={row.id} data={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
