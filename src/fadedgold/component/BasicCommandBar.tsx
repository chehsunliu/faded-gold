import { CommandBar, ICommandBarItemProps } from "@fluentui/react";
import React from "react";
import { useTranslation } from "react-i18next";

interface BasiCommandBarProps {
  onUpload: (filename: string, buffer: ArrayBuffer) => any;
  uploadDisabled?: boolean;
  downloadDisabled?: boolean;
}

const handleChange =
  (props: BasiCommandBarProps) => (e: React.ChangeEvent<HTMLInputElement>) => {
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

export const BasicCommandBar = (props: BasiCommandBarProps) => {
  const { t } = useTranslation("translation", { keyPrefix: "commandBar" });
  const { uploadDisabled, downloadDisabled } = props;
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
      disabled: uploadDisabled,
      onClick: handleClick,
    },
    {
      key: "upload-dummy",
      onRender: () => (
        <input
          ref={uploadRef}
          style={{ display: "none" }}
          type="file"
          onChange={handleChange(props)}
        />
      ),
    },
    {
      key: "download",
      text: t("download"),
      iconProps: { iconName: "Download" },
      disabled: downloadDisabled,
    },
  ];

  return <CommandBar items={items} />;
};
