import { classNames, Mods } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cls from "./Select.module.scss";
import { ChangeEvent, useMemo } from "react";

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select = (props: SelectProps) => {
  const { className, label, options, readonly, value, onChange } = props;
  const { t } = useTranslation();

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
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
    <div className={classNames(cls.Wrapper, mods, [])}>
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
