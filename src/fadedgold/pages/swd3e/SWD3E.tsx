import { ImportButton } from "fadedgold/component/button";
import React from "react";

export const SWD3E = () => {
  const handleImport = (filename: string, buffer: ArrayBuffer) => {
    console.log(filename, buffer);
  };

  return (
    <>
      <ImportButton text={"Import"} onImport={handleImport} />
    </>
  );
};
