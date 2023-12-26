// compenents
import Header from "./components/Header.jsx";
import Post from "./components/Post.jsx";
import Sidebar from "./components/Sidebar.jsx";

// styles
import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Henrique-Moreno.png",
      name: "Henrique Alexandre",
      role: "Empresario",
    },
    content: [
      { type: "paragraph", content: "Novo projeto ✌" },
      { type: "Novo projeto no ar vai la comferir" },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date(),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernades",
      role: "CTO",
    },
    content: [
      { type: "paragraph", content: "Fala galera ✌" },
      { type: "Novo projeto no ar vai la comferir" },
      { type: "Link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date(),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educador",
    },
    content: [
      { type: "paragraph", content: "Novo projeto no ar vai la comferir✌" },
      { type: "Novo projeto no ar vai la comferir" },
      { type: "Link", content: "jane.design/doctorcare" },
    ],
   publishedAt: new Date(),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
