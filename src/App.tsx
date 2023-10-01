import { Header } from './components/Header';
// import { Task } from './components/Task';
// import { Post, PostType } from './components/Post/Post';

import styles from './App.module.css';

import './global.css';
import { Task } from './components/Task';
import { List } from './components/List';

// const posts: PostType[] = [
//   {
//     id: 1,
//     author: {
//       avatarUrl: 'https://github.com/giovannikarioca.png',
//       name: 'Giovanni Ramos',
//       role: 'CTO @ Kogio'
//     },
//     content: [
//       { type: 'paragraph', content:'Fala galeraaaaa 👋' },
//       { type: 'paragraph', content:'Acabeiiii de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
//       { type: 'link', content:'jane.design/doctorcaree' },
//     ],
//     publishedAt: new Date('2023-05-03 20:00:00')
//   },
//   {
//     id: 2,
//     author: {
//       avatarUrl: 'https://github.com/maykbrito.png',
//       name: 'Mayk Brito',
//       role: 'Rocketseat'
//     },
//     content: [
//       { type: 'paragraph', content:'Fala galeraaaaa 👋' },
//       { type: 'paragraph', content:'Acabeii de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
//       { type: 'link', content:'jane.design/doctorcareee' },
//     ],
//     publishedAt: new Date('2023-05-03 20:00:00')
//   },
//   {
//     id: 3,
//     author: {
//       avatarUrl: 'https://github.com/diego3d.png',
//       name: 'Diego Fernandes',
//       role: 'CTO @ Rocketseat'
//     },
//     content: [
//       { type: 'paragraph', content:'Fala galeraa 👋' },
//       { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
//       { type: 'link', content:'jane.design/doctorcare' },
//     ],
//     publishedAt: new Date('2023-05-03 20:00:00')
//   }
// ]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        {/* <Sidebar /> */}
        <main>
        <List />
        </main>
      </div>
    </div>
  )
}

export default App
