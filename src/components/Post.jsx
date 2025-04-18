import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://github.com/emanuelalderete.png" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Emanuel Alderete</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='Publicado em 23 de maio de 2024 às 14:04' dateTime='2025-01-01 13:34:35'>Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Tem novidade no meu portifa! Acabei de subir um
                    projeto que desenvolvi com muito carinho e foco em
                    resolver dores reais de quem trabalha na área contábil.
                    O nome do projeto é ContadorPro 📊🧾</p>
                <p>É um sistema feito pra facilitar a vida dos contadores:
                    gestão de clientes, prazos, documentos e muito mais.
                    Tudo de forma simples e eficiente!</p>
                <p><a href="">seulink.com/contadorpro</a></p>
                <p>
                    <a href="">#novo</a>{' '}
                    <a href="">#projeto</a>{' '}
                    <a href="">#contabilidade</a>{' '}
                    <a href="">#sistemaparaContadores</a>{' '}
                    <a href="">#backend</a>
                </p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe um comentário' />
                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>


            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>

        </article>
    )
}