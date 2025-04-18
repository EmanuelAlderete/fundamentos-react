import { Post } from './components/Post';
import styles from './App.module.css';
import './assets/global.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/emanuelalderete.png",
      name: "Emanuel Alderete",
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera!' },
      { type: 'paragraph', content: 'Esse é meu post!' },
      { type: 'link', content: 'https://github.com/emanuelalderete' }
    ],
    publishedAt: new Date('2023-05-03 20:00:00')
  },
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/emanuelalderete.png",
      name: "Emanuel Alderete",
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera!' },
      { type: 'paragraph', content: 'Esse é meu post!' },
      { type: 'link', content: 'https://github.com/emanuelalderete' }
    ],
    publishedAt: new Date('2023-05-03 20:00:00')
  },
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/emanuelalderete.png",
      name: "Emanuel Alderete",
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera!' },
      { type: 'paragraph', content: 'Esse é meu post!' },
      { type: 'link', content: 'https://github.com/emanuelalderete' }
    ],
    publishedAt: new Date('2023-05-03 20:00:00')
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>

    </div>
  )
}

