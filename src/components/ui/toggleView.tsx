"use client";
import { useState } from "react";
import { Switch } from "./switch";

const ToggleView = () => {
  const [viewTable, setViewTable] = useState<boolean>(true);
  

  const toggleViewType = () => {
    // const url = new URL(window.location.href);
    // url.searchParams.set("viewType", viewTable);
    // window.history.pushState({}, "", url.toString());
    setViewTable(!viewTable);
  };

  return (
    <Switch
      checked={viewTable}
      onCheckedChange={toggleViewType}
      className="data-[state=checked]:!bg-primary data-[state=unchecked]:!bg-secondary"
    />
  );
};

export default ToggleView;
