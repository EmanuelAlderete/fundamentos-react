import { Post } from './components/Post';
import styles from './App.module.css';
import './assets/global.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Emanuel"
            content="Meu primeiro post"
          />
          <Post
            author="Emanuel"
            content="Meu primeiro post"
          />
          <Post
            author="Emanuel"
            content="Meu primeiro post"
          />
          <Post
            author="Emanuel"
            content="Meu primeiro post"
          />
        </main>
      </div>

    </div>
  )
}

