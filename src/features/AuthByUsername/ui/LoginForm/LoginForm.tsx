import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { Text, TextTheme } from "shared/ui/Text/Text";
import cls from "./LoginForm.module.scss";
import { loginActions } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../model/services/loginByUserName/loginByUsername";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password, error, isLoading } = useSelector(getLoginState);
  const onChangeUsername = useCallback(
    (value) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.LoginForm, {}, [])}>
      <Text title={t("Форма авторизации")} />
      {error && <Text text={error} theme={TextTheme.ERROR} />}
      <Input
        autofocus
        placeholder={t("Введите логин")}
        type="text"
        className={cls.input}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        placeholder={t("Введите пароль")}
        type="text"
        className={cls.input}
        onChange={onChangePassword}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBtn}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t("Войти")}
      </Button>
    </div>
  );
});
