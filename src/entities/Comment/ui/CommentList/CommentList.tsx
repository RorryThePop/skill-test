import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Comment } from "entities/Comment";
import { Text } from "shared/ui/Text/Text";
import { CommentCard } from "../CommentCard/CommentCard";
import cls from "./CommentList.module.scss";

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = (props: CommentListProps) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();
  if (isLoading) {
    return (
      <div className={classNames(cls.CommentList, {}, [])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
    );
  }
  if (!comments) {
    return null;
  }
  return (
    <div className={classNames(cls.CommentList, {}, [])}>
      {comments?.length > 0 ? (
        comments.map((comment) => (
          <CommentCard
            isLoading={isLoading}
            className={cls.comment}
            comment={comment}
            key={comment.id}
          />
        ))
      ) : (
        <Text text={t("Комментарий отсутствует")} />
      )}
    </div>
  );
};
