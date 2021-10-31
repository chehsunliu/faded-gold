import { Heading2 } from "fadedgold/component/text";
import { useTranslation } from "react-i18next";

export const Party = () => {
  const { t } = useTranslation("swd3e", { keyPrefix: "party" });
  return (
    <div>
      <Heading2>{t("title")}</Heading2>
    </div>
  );
};
