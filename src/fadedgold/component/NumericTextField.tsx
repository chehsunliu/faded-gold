import { ITextFieldStyles, TextField } from "@fluentui/react";
import React from "react";

interface NumericTextFieldProps {
  label: string;
  value: number;
  maxValue?: number;
  onChange: (newValue: number) => void;
  width?: number;
}

const defaultWidth: number = 80;

export const NumericTextField = (props: NumericTextFieldProps) => {
  const { label, value, maxValue, onChange, width } = props;

  const textFieldsStyles: Partial<ITextFieldStyles> = {
    fieldGroup: {
      width: width !== undefined ? width : defaultWidth,
    },
  };

  const onChangeWrapped = (newValue: number) => {
    const maxV = maxValue !== undefined ? maxValue : 65535
    if (newValue >= 0 && newValue <= maxV) {
      onChange(newValue);
    }
  };

  const handleChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    raw?: string
  ) => {
    if (raw === undefined) {
      return;
    }

    if (raw.length === 0) {
      onChangeWrapped(0);
      return;
    }

    const newValue = parseInt(raw);
    if (isNaN(newValue)) {
      return;
    }

    onChangeWrapped(newValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      onChangeWrapped(value - 1);
    } else if (e.key === "ArrowUp") {
      onChangeWrapped(value + 1);
    }
  };

  return (
    <TextField
      label={label}
      value={`${value}`}
      onChange={handleChange}
      onKeyDown={handleKeyPress}
      styles={textFieldsStyles}
    />
  );
};
