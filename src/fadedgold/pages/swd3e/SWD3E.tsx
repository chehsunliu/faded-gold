import { ImportButton } from "fadedgold/component/button";
import React from "react";
import * as editor from "fadedgold/pages/swd3e/editor";

export const SWD3E = () => {
  const handleImport = (filename: string, buffer: ArrayBuffer) => {
    console.log(filename);
    console.log(editor.load(buffer));
  };

  return (
    <>
      <ImportButton text={"Import"} onImport={handleImport} />
    </>
  );
};
