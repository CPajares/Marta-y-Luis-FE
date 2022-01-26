/* eslint-disable @typescript-eslint/no-shadow */
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCommentThunks,
  editCommentThunks,
  getCommentsThunks,
  publishCommentThunks,
} from "../redux/thunks/commentThunks";
import {} from "../redux/thunks/userThunks";

const useComment = () => {
  const dispatch = useDispatch();

  const { comment, comments } = useSelector(({ comment, comments }: any) => ({
    comments,
    comment,
  }));

  const publishComment = (comment: any) => {
    dispatch(publishCommentThunks(comment));
  };

  const getComments = useCallback(() => {
    dispatch(getCommentsThunks());
  }, [dispatch]);

  const deleteComment = (id: any) => {
    dispatch(deleteCommentThunks(id));
  };

  const editComment = (comment: any) => {
    dispatch(editCommentThunks(comment));
  };

  return {
    publishComment,
    getComments,
    deleteComment,
    editComment,
    comment,
    comments,
  };
};

export default useComment;
