import React, { useState } from "react";
import SearchIcon from "../Icons/Search";

interface InputSearchProps {
  isCollapsed?: boolean;
}

export default function InputSearch({ isCollapsed = true }: InputSearchProps) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div className={`${!isCollapsed ? "p-1" : "p-0"} relative`}>
      <div
        className={
          isCollapsed
            ? "bg-white w-10 h-10 flex items-center justify-center rounded-2xl cursor-pointer mx-auto"
            : "p-2 my-2 relative"
        }
      >
        {/* Icon Search */}
        <span
          className={
            isCollapsed
              ? "text-gray-400"
              : "absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
          }
        >
          <SearchIcon marginRight={!isCollapsed ? "mr-2" : ""}/>
        </span>

        {/* Input hiển thị khi không thu gọn */}
        {!isCollapsed && (
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search..."
            className="w-full p-2 pl-10 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
        )}
      </div>
    </div>
  );
}
