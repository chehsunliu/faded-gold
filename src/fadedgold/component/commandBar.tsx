import { CommandBar, ICommandBarItemProps } from "@fluentui/react";
import React from "react";
import { useTranslation } from "react-i18next";

interface BasiCommandBarProps {
  onUpload: (filename: string, buffer: ArrayBuffer) => any;
}

export const BasicCommandBar = (props: BasiCommandBarProps) => {
  const { t } = useTranslation("translation", {keyPrefix: "commandBar"});

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

      props.onUpload(targetFile.name, buffer);
    };

    reader.readAsArrayBuffer(targetFile);
  };

  const uploadRef = React.createRef<HTMLInputElement>();

  const handleClick = () => {
    if (uploadRef.current) {
      uploadRef.current.click();
    }
  };

  const items: ICommandBarItemProps[] = [
    {
      key: "upload",
      text: t("upload"),
      iconProps: { iconName: "Upload" },
      onClick: handleClick,
    },
    {
      key: "upload-dummy",
      onRender: () => (
        <input
          ref={uploadRef}
          style={{ display: "none" }}
          type="file"
          onChange={handleChange}
        />
      ),
    },
    {
      key: "download",
      text: t("download"),
      iconProps: { iconName: "Download" },
    },
  ];

  return <CommandBar items={items} />;
};
