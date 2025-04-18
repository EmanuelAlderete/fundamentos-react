import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import styles from './Post.module.css';
import { useState } from 'react';

export function Post({ author, content, publishedAt }) {

    const [comments, setComments] = useState(['Post muito bacana']);

    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR });
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: "Há"
    });

    function handleCreateNewComment() {
        event.preventDefault();
        if (!newCommentText.trim() == '') {
            setComments([...comments, newCommentText].reverse())
            setNewCommentText('');
        } else {
            alert("Sem nada para comentar? Dê um tempinho, as boas ideias sempre chegam com estilo!")
        }
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value);
    }
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time
                    title={publishedDateFormatted}
                    dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>
            <div className={styles.content}>
                {content.reverse().map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p><a>{line.content}</a></p>
                    }
                })}
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name='comment'
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange} />
                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>


            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment content={comment} />
                })}
            </div>

        </article>
    )
}