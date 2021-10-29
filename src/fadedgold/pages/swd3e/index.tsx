import { ImportButton } from "fadedgold/component/button";

export function SWD3E() {
  const handleImport = (filename: string, buffer: ArrayBuffer) => {
    console.log(filename, buffer);
  };

  return (
    <>
      <ImportButton text={"Import"} onImport={handleImport} />
    </>
  );
}
