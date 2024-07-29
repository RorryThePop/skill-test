import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { ReactNode, useCallback } from "react";
import { Card, CardTheme } from "shared/ui/Card/Card";
import cls from "./Tabs.module.scss";

export interface TabsItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabsItem[];
  value: string;
  onTabClick: (tab: TabsItem) => void;
}

export const Tabs = (props: TabsProps) => {
  const { className, tabs, onTabClick, value } = props;
  const { t } = useTranslation();

  const clickHandle = useCallback(
    (tab: TabsItem) => () => {
      onTabClick(tab);
    },
    [onTabClick],
  );

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          className={cls.tab}
          key={tab.value}
          onClick={clickHandle(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};
