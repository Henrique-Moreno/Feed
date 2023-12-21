// compenents
import Header from "./components/Header.jsx";
import { Post } from "./components/Post.jsx";

// styles
import './global.css';

function App() {
  return (
    <div>
      <Header />
      <h1>Olá, Mundo</h1>
      <Post 
      author='pedro'
      content="hdjdkjdkdkj jdjdkdk" 
      />
      <Post 
      author='Lucas'
      content="hdjdkjdkdkj jdjdkdk" 
      />
    </div>
  );
}

export default App;
