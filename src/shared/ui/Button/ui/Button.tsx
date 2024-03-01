import { ButtonHTMLAttributes, FC } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { Theme } from "app/providers/ThemeProvider";

import cls from "./Button.module.scss";

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({ className, children, theme, ...otherProps }) => {
    return (
        <button
            className={classNames(cls.Button, {}, [cls[theme]])}
            { ... otherProps }
        >
            {children}
        </button>
    );
};