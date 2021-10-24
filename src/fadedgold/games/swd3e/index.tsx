import { useTranslation } from "react-i18next";

export function SWD3E() {
  const { t } = useTranslation("swd3e");
  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
}
