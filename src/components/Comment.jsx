import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import Avatar from "./Avatar";

import { useState } from "react";

export default function Comment({ content, onDeleteComment }) {
  // nesse caso estamos iniciando o estados com zero
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  // estamos pegando o valor mais recente (state) e somar mais um ou outro valor que queria
  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/maykbrito.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Henrique Moreno</strong>

              <time title="06 de Maio às 13:13" dateTime="2023-06-06 13:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentario">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            {/* () => setLikeCount(likeCount + 1) = criando uma função anonima detro onClick e um exemplo mais o ideal e criar uma função separada para ficar mais claro*/}
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
