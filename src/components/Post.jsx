//component
import Avatar from "./Avatar";
import Comment from "./Comment";

// styles
import styles from "./Post.module.css";

export default function Post() {
  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar 
            src="https://github.com/diego3g.png" />

            <div className={styles.authorInfo}>
              <strong>Diego</strong>
              <span>Web Developer</span>
            </div>
          </div>
          <time title="11 de Maio as 8:12h" datatime="2023-12-22 10:53:30">
            Publicado há 1h
          </time>
        </header>

        <div className={styles.content}>
          <p>Fala galeraa 👋 </p>
          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
            🚀
          </p>
          <p>
            👉 <a href="#"> jane.design/doctorcare </a>
          </p>
          <p>
            <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
            <a href="#">#rocketseat</a>{" "}
          </p>
        </div>

        <form action="" className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea placeholder="Deixe um comentário" />

          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>

        <div className={styles.coomentList}>
          {/* <Comment />
          <Comment /> */}
          <Comment />
        </div>
      </article>
    </>
  );
}
