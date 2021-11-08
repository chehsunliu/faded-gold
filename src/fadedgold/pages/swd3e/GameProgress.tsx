import { Heading2 } from "fadedgold/component/text";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "fadedgold/redux/hook";
import { actions } from "fadedgold/pages/swd3e/gameSlice";
import { NumericTextField } from "fadedgold/component/NumericTextField";
import { IStackStyles, IStackTokens, Stack } from "@fluentui/react";

const gameStackStyles: IStackStyles = {
  root: {
    width: 600,
    padding: 10,
  },
};

const gameStackTokens: IStackTokens = {
  childrenGap: 10,
};

export const GameProgress = () => {
  const { t } = useTranslation("swd3e", { keyPrefix: "game" });
  const dispatch = useAppDispatch();
  const { money, scene, x, y } = useAppSelector((state) => state.swd3e.game);

  const handleMoneyChange = (value: number) => {
    dispatch(actions.moneyUpdated(value));
  };

  const handleSceneChange = (value: number) => {
    dispatch(actions.sceneUpdated(value));
  };

  const handleXChange = (value: number) => {
    dispatch(actions.xUpdated(value));
  };

  const handleYChange = (value: number) => {
    dispatch(actions.yUpdated(value));
  };

  return (
    <div>
      <Heading2>{t("title")}</Heading2>
      <Stack styles={gameStackStyles} tokens={gameStackTokens} horizontal wrap>
        <span>
          <NumericTextField
            label={t("money")}
            value={money}
            maxValue={0xffffffff}
            width={100}
            onChange={handleMoneyChange}
          />
        </span>
        <span>
          <NumericTextField
            label={t("scene")}
            value={scene}
            maxValue={0xffffffff}
            width={100}
            onChange={handleSceneChange}
          />
        </span>
        <span>
          <NumericTextField
            label="x"
            value={x}
            maxValue={0xffffffff}
            width={100}
            onChange={handleXChange}
          />
        </span>
        <span>
          <NumericTextField
            label="y"
            value={y}
            maxValue={0xffffffff}
            width={100}
            onChange={handleYChange}
          />
        </span>
      </Stack>
    </div>
  );
};
