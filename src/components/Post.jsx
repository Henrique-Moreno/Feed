//component
import Avatar from "./Avatar";
import Comment from "./Comment";

// libs
import { format, formatDistanceToNow } from "date-fns";

//api nativa do js
import ptBR from "date-fns/locale/pt-BR";

//hooks
import { useState } from "react";

// styles
import styles from "./Post.module.css";

export default function Post({ author, publishedAt, content }) {
  const [comments, setComment] = useState([]);

  const [newCommentText, setNewCommentText] = useState(""); // aspas pq vai amarzenar, pegar o valor no input que e um texto

  //modo nativo do js api
  // const publishedDateFormatted = new Intl.DateTimeFormat("pt-BR", {
  //   day: "2-digit",
  //   month: "long",
  //   hour: "2-digit",
  //   minute: "2-digit",
  // }).format(publishedAt.date);

  //Lib = dns
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event) {
    event.preventDefault();

    // ...comments = ele copia o que tem no array e traz o valor
    setComment([...comments, newCommentText]);

    // limpar o form
    setNewCommentText("");
  }

  function handleNewCommentChange(event) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity("Esse campo é obrigatório!!");
  }

  function deleteComment(commentToDelete) {
    //imutalidade = metados filter para criar uma nova lista e fazer uma comparação pq no react e mais facil criar uma nova do que ficar monitorando a existente coisas do react.
    const commentWithoutDeletedOne = comments.filter((comment) => {
      return comment != commentToDelete;
    });

    setComment(commentWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src={author.avatarUrl} />

            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>
          <time
            title={publishedDateFormatted}
            datatime={publishedAt.toISOString()}
          >
            Publicado
            {publishedDateRelativeToNow}
          </time>
        </header>

        <div className={styles.content}>
          {content.map((line, index) => {
            if (line.type === "paragraph") {
              return <p key={index}>{line.content}</p>;
            } else {
              return (
                <p key={index}>
                  <a href="#">{line.content}</a>
                </p>
              );
            }
          })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea
            name="comment"
            placeholder="Deixe um comentário"
            value={newCommentText}
            onChange={handleNewCommentChange}
            onInvalid={handleNewCommentInvalid}
            required
          />

          <footer>
            <button type="submit" disabled={isNewCommentEmpty}>
              Publicar
            </button>
            {/* fazendo uma validação usando disable */}
          </footer>
        </form>

        <div className={styles.coomentList}>
          {comments.map((comment) => {
            return (
              <Comment
                key={comment}
                content={comment}
                onDeleteComment={deleteComment}
              />
            );
          })}
        </div>
      </article>
    </>
  );
}
