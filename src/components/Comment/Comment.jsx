import classes from './Comment.module.css'

export const Comment = ({number, name, body}) => {
    return (
        <>
            <div className={classes.comment_name}>{number}.{name}</div>
            <div className={classes.comment_body}>{body}</div>
        </>
    )
}