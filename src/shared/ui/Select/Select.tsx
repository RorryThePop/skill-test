import { classNames, Mods } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { ChangeEvent, useMemo } from "react";
import cls from "./Select.module.scss";

export interface SelectOption<T extends string> {
  value: string;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const { className, label, options, readonly, value, onChange } = props;
  const { t } = useTranslation();

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value as T);
    }
  };

  const optionList = useMemo(
    () =>
      options?.map((item) => (
        <option className={cls.option} value={item.value} key={item.value}>
          {item.content}
        </option>
      )),
    [options],
  );
  const mods: Mods = {};
  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      {label && <span className={cls.label}>{`${label}`}</span>}
      <select
        disabled={readonly}
        value={value}
        onChange={onChangeHandler}
        className={cls.select}
      >
        {optionList}
      </select>
    </div>
  );
};
