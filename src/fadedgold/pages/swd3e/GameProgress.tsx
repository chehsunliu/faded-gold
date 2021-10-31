import { Heading2 } from "fadedgold/component/text";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "fadedgold/redux/hook";
import { actions } from "fadedgold/pages/swd3e/gameSlice";
import { NumericTextField } from "fadedgold/component/NumericTextField";

export const GameProgress = () => {
  const { t } = useTranslation("swd3e", { keyPrefix: "game" });
  const dispatch = useAppDispatch();
  const { money } = useAppSelector((state) => state.swd3e.game);

  const handleMoneyChange = (value: number) => {
    dispatch(actions.moneyUpdated(value));
  };

  return (
    <div>
      <Heading2>{t("title")}</Heading2>
      <NumericTextField
        label={t("money")}
        value={money}
        maxValue={0xffffffff}
        width={100}
        onChange={handleMoneyChange}
      />
    </div>
  );
};
