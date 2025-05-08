import classes from './index.module.css'

export const Background = () => {
    return (
        <div className={classes.background}>
            <button type="button" className={classes.button} onClick={() => alert('called')} >Click</button>
        </div>
    )
}