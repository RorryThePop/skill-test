import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Select, SelectOption } from "shared/ui/Select/Select";
import { memo, useCallback, useMemo } from "react";
import { ArticleSortField } from "entities/Article/model/types/article";
import { SortOrder } from "shared/types";
import cls from "./ArticleSortSelector.module.scss";

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const { className, onChangeOrder, order, onChangeSort, sort } = props;
  const { t } = useTranslation();
  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: "asc",
        content: t("возрастанию"),
      },
      {
        value: "desc",
        content: t("убыванию"),
      },
    ],
    [t],
  );
  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: t("дате создания"),
      },
      {
        value: ArticleSortField.TITLE,
        content: t("названию"),
      },
      {
        value: ArticleSortField.VIEWS,
        content: t("просмотрам"),
      },
    ],
    [t],
  );

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [])}>
      <Select
        onChange={onChangeSort}
        value={sort}
        options={sortFieldOptions}
        label={t("Сортировать по")}
      />
      <Select
        onChange={onChangeOrder}
        value={order}
        options={orderOptions}
        label={t("по")}
        className={cls.order}
      />
    </div>
  );
});
