import { Heading2 } from "fadedgold/component/text";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "fadedgold/redux/hook";
import { CharacterCard } from "fadedgold/pages/swd3e/CharacterCard";
import { CharacterId } from "fadedgold/pages/swd3e/partySlice";
import { IStackTokens, Stack } from "@fluentui/react";

const partyStackTokens: IStackTokens = {
  childrenGap: 16,
};

export const Party = () => {
  const { t } = useTranslation("swd3e", { keyPrefix: "party" });
  const { party } = useAppSelector((state) => state.swd3e);

  const characters = (Object.keys(party) as Array<CharacterId>).map((id) => (
    <CharacterCard key={id} id={id} />
  ));

  return (
    <div>
      <Heading2>{t("title")}</Heading2>
      <Stack tokens={partyStackTokens} horizontal wrap>
        {characters}
      </Stack>
    </div>
  );
};
