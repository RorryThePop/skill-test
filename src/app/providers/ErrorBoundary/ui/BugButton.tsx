import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface BugButtonProps {
  className?: string;
}

// Компонент для тестирования
export const BugButton = ({ className }: BugButtonProps) => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();
  const onThrow = () => setError(true);
  useEffect(() => {
    if (error === true) {
      throw new Error();
    }
  }, [error]);
  return <Button onClick={onThrow}>{t("Throw error")}</Button>;
};
