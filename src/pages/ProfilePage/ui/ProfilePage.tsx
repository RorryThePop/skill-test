import { useTranslation } from "react-i18next";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { profileReducer } from "entities/Profile";

const reducers: ReducersList = {
  profile: profileReducer,
};
interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div>{t("Profile page")}</div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
