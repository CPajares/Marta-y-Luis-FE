/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import CommentForm from "../../component/CommentForm/CommentForm";
import Layout from "../../component/Layout/Layout";
import styles from "../../styles/LibroDeVisitas.module.css";
import Comment from "../../component/Comment/Comment";
import axios from "axios";
import { useEffect, useState } from "react";
import useComment from "../../flux/hooks/useComment";

const LibroDeVisitas: NextPage = ({ commentsList }: any) => {
  const { comments, comment, getComments } = useComment();

  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    if (comment.text !== undefined) {
      getComments();
      setIsSSR(false);
    }
  }, [comment, getComments]);

  return (
    <Layout title={"Libro de visitas"}>
      <main className={`${styles.main} main-margin-bottom`}>
        <CommentForm></CommentForm>
        <div className={styles.main__container}>
          <div className={styles.main__comments}>
            {isSSR ? (
              <Comment comments={commentsList}></Comment>
            ) : (
              <Comment comments={comments}> </Comment>
            )}
          </div>
          <img
            className={styles.main__image}
            src="/images/abrazoCielo.jpg"
            alt="Abrazo"
          />
        </div>
      </main>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_HEROKU;
  const response = await axios.get(`${apiUrl}martayluis/comments`);
  const commentsList = response.data;
  return {
    props: {
      commentsList: commentsList,
    },
  };
};

export default LibroDeVisitas;
