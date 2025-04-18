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
                <time>Publicado há 1h</time>
            </header>
        </article>
    )
}