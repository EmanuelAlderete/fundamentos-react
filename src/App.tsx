import { Post, PostType } from './components/Post';
import styles from './App.module.css';
import './assets/global.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

const posts: PostType[] = [
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
    publishedAt: new Date('2023-05-03T20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/octocat.png",
      name: "The Octocat",
      role: "GitHub Mascot"
    },
    content: [
      { type: 'paragraph', content: 'Explorando os sete mares do código!' },
      { type: 'link', content: 'https://github.com/octocat' }
    ],
    publishedAt: new Date('2023-06-12T14:30:00')
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/torvalds.png",
      name: "Linus Torvalds",
      role: "Kernel Magician"
    },
    content: [
      { type: 'paragraph', content: 'Só passando pra dizer: use Linux.' },
      { type: 'paragraph', content: 'Ou não. A escolha é sua.' },
      { type: 'link', content: 'https://github.com/torvalds' }
    ],
    publishedAt: new Date('2023-07-01T10:00:00')
  },
  {
    id: 4,
    author: {
      avatarUrl: "https://github.com/gaearon.png",
      name: "Dan Abramov",
      role: "React Developer"
    },
    content: [
      { type: 'paragraph', content: 'Hooks são o futuro do React!' },
      { type: 'link', content: 'https://github.com/gaearon' }
    ],
    publishedAt: new Date('2023-08-22T08:00:00')
  },
  {
    id: 5,
    author: {
      avatarUrl: "https://github.com/sindresorhus.png",
      name: "Sindre Sorhus",
      role: "Open Source Enthusiast"
    },
    content: [
      { type: 'paragraph', content: 'Criando ferramentas incríveis para a comunidade!' },
      { type: 'link', content: 'https://github.com/sindresorhus' }
    ],
    publishedAt: new Date('2023-09-10T13:45:00')
  },
  {
    id: 6,
    author: {
      avatarUrl: "https://github.com/yyx990803.png",
      name: "Evan You",
      role: "Vue.js Creator"
    },
    content: [
      { type: 'paragraph', content: 'Vue 3 está mais poderoso do que nunca!' },
      { type: 'link', content: 'https://github.com/yyx990803' }
    ],
    publishedAt: new Date('2023-10-05T18:20:00')
  },
  {
    id: 7,
    author: {
      avatarUrl: "https://github.com/addyosmani.png",
      name: "Addy Osmani",
      role: "Chrome Engineer"
    },
    content: [
      { type: 'paragraph', content: 'Melhorando a performance da web, um byte de cada vez.' },
      { type: 'link', content: 'https://github.com/addyosmani' }
    ],
    publishedAt: new Date('2023-11-19T09:15:00')
  },
  {
    id: 8,
    author: {
      avatarUrl: "https://github.com/paulirish.png",
      name: "Paul Irish",
      role: "Web Developer Advocate"
    },
    content: [
      { type: 'paragraph', content: 'Ferramentas modernas para desenvolvedores modernos.' },
      { type: 'link', content: 'https://github.com/paulirish' }
    ],
    publishedAt: new Date('2023-12-01T11:00:00')
  },
  {
    id: 9,
    author: {
      avatarUrl: "https://github.com/gaearon.png",
      name: "Dan Abramov",
      role: "React Developer"
    },
    content: [
      { type: 'paragraph', content: 'Reflexões sobre o estado do React em 2024.' },
      { type: 'link', content: 'https://github.com/gaearon' }
    ],
    publishedAt: new Date('2024-01-10T17:40:00')
  },
  {
    id: 10,
    author: {
      avatarUrl: "https://github.com/defunkt.png",
      name: "Chris Wanstrath",
      role: "GitHub Co-founder"
    },
    content: [
      { type: 'paragraph', content: 'Construindo comunidades através do código.' },
      { type: 'link', content: 'https://github.com/defunkt' }
    ],
    publishedAt: new Date('2024-02-14T21:00:00')
  }
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
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>

    </div>
  )
}

