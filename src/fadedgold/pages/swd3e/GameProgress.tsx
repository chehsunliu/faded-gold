import { Heading2 } from "fadedgold/component/text";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "fadedgold/redux/hook";
import { actions } from "fadedgold/pages/swd3e/gameSlice";
import { ITextFieldStyles, TextField } from "@fluentui/react";
import { FormEvent } from "react";

const textFieldsStyles: Partial<ITextFieldStyles> = {
  fieldGroup: {
    width: 100,
  },
};

export const GameProgress = () => {
  const { t } = useTranslation("swd3e", { keyPrefix: "game" });
  const dispatch = useAppDispatch();
  const { money } = useAppSelector((state) => state.swd3e.game);

  const handleMoneyChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    raw?: string
  ) => {
    if (raw === undefined) {
      return;
    }

    if (raw.length === 0) {
      dispatch(actions.moneyUpdated(0));
      return;
    }

    const value = parseInt(raw);
    if (isNaN(value)) {
      return;
    }

    dispatch(actions.moneyUpdated(value));
  };

  return (
    <>
      <Heading2>{t("title")}</Heading2>
      <TextField
        label={t("money")}
        value={`${money}`}
        onChange={handleMoneyChange}
        styles={textFieldsStyles}
      />
    </>
  );
};
