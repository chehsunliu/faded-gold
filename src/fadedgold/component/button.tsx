import { PrimaryButton } from "@fluentui/react";
import React from "react";

interface ImportButtonProps {
  text: string;
  onImport: (filename: string, buffer: ArrayBuffer) => any;
}

export const ImportButton = (props: ImportButtonProps) => {
  const { text } = props;
  const fileUploadRef = React.createRef<HTMLInputElement>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) {
      console.error("event.target.files is null");
      return;
    }

    const targetFile = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      if (e.target === null) {
        console.error("ProgressEvent.target is null");
        return;
      }

      const buffer = e.target.result;
      if (!(buffer instanceof ArrayBuffer)) {
        console.error("buffer is not an instance of ArrayBuffer");
        return;
      }

      props.onImport(targetFile.name, buffer);
    };

    reader.readAsArrayBuffer(targetFile);
  };

  const handleClick = (e: any) => {
    if (fileUploadRef.current) {
      fileUploadRef.current.click();
    }
  };

  return (
    <PrimaryButton text={text} onClick={handleClick} onChange={handleChange}>
      <input ref={fileUploadRef} type="file" hidden />
    </PrimaryButton>
  );
};
