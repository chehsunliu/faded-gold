import { useTranslation } from "react-i18next";

export function SWD2E() {
  const { t } = useTranslation("swd2e");
  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
}
