import classes from "./Button.module.scss";

function MyButton() {
    return (
        <div>
            Hello
            <button className={classes.red}>I'm a button</button>
        </div>
    );
}

export default MyButton;
