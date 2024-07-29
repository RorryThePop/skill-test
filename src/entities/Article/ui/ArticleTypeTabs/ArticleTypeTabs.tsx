import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Tabs, TabsItem } from "shared/ui/Tabs/Tabs";
import { useCallback, useMemo } from "react";
import { ArticleType } from "entities/Article";

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {
  const { className, value, onChangeType } = props;
  const { t } = useTranslation();

  const typeTabs = useMemo<TabsItem[]>(
    () => [
      {
        value: ArticleType.ALL,
        content: t("Все"),
      },
      {
        value: ArticleType.IT,
        content: t("Айти"),
      },
      {
        value: ArticleType.ECONOMICS,
        content: t("Экономика"),
      },
      {
        value: ArticleType.SCIENCE,
        content: t("Научные"),
      },
    ],
    [t],
  );

  const onTabClick = useCallback(
    (tab: TabsItem) => {
      onChangeType(tab.value as ArticleType);
    },
    [onChangeType],
  );

  return (
    <Tabs
      tabs={typeTabs}
      value={value}
      onTabClick={onTabClick}
      className={classNames("", {}, [className])}
    />
  );
};
