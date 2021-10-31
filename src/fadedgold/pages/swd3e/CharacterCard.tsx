import {
  actions,
  CharacterAttribute,
  CharacterId,
} from "fadedgold/pages/swd3e/partySlice";
import { useAppDispatch, useAppSelector } from "fadedgold/redux/hook";
import { Heading3 } from "fadedgold/component/text";
import { useTranslation } from "react-i18next";
import { NumericTextField } from "fadedgold/component/NumericTextField";
import { IStackTokens, Stack } from "@fluentui/react";

interface CharacterCardProps {
  id: CharacterId;
}

const statesStackTokens: IStackTokens = {
  childrenGap: 10,
};

export const CharacterCard = (props: CharacterCardProps) => {
  const { id } = props;
  const { t } = useTranslation("swd3e", { keyPrefix: "party" });
  const state = useAppSelector((state) => state.swd3e.party[id]);
  const dispatch = useAppDispatch();

  const items: Array<{
    attr: CharacterAttribute;
    maxValue: number;
    width?: number;
  }> = [
    { attr: "level", maxValue: 0xff, width: 60 },
    { attr: "experience", maxValue: 0xffffffff, width: 95 },
    { attr: "health", maxValue: 0xffff },
    { attr: "maxHealth", maxValue: 0xffff },
    { attr: "mana", maxValue: 0xffff },
    { attr: "maxMana", maxValue: 0xffff },
    { attr: "vitality", maxValue: 0xffff },
    { attr: "maxVitality", maxValue: 0xffff },
    { attr: "strength", maxValue: 0xffff },
    { attr: "durability", maxValue: 0xffff },
    { attr: "intelligence", maxValue: 0xffff },
    { attr: "speed", maxValue: 0xffff },
    { attr: "metalResistance", maxValue: 0xff, width: 60 },
    { attr: "woodResistance", maxValue: 0xff, width: 60 },
    { attr: "waterResistance", maxValue: 0xff, width: 60 },
    { attr: "fireResistance", maxValue: 0xff, width: 60 },
    { attr: "earthResistance", maxValue: 0xff, width: 60 },
  ];

  const renderedItems = items.map((item) => (
    <NumericTextField
      key={item.attr}
      label={t(`states.${item.attr}`)}
      value={state[item.attr]}
      maxValue={item.maxValue}
      width={item.width}
      onChange={(value) => {
        dispatch(actions.attributeUpdated({ id, attribute: item.attr, value }));
      }}
    />
  ));

  return (
    <div style={{ width: 400 }}>
      <Heading3>{t(`names.${id}`)}</Heading3>
      <Stack tokens={statesStackTokens} horizontalAlign="space-between" horizontal wrap>
        {renderedItems}
      </Stack>
    </div>
  );
};
