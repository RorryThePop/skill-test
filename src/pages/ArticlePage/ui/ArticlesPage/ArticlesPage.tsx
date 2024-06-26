import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import cls from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation("article");
  return (
    <div className={classNames(cls.ArticlesPage, {}, [])}>
      {t("Article details")}
    </div>
  );
};

export default memo(ArticlesPage);
