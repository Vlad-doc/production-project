import { classNames } from "shared/lib/classNames/classNames";
import { AppLinkTheme } from "shared/ui/AppLink/ui/AppLink";
import { AppLink } from "shared/ui/AppLink";

import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to='/' children='Главная' theme={AppLinkTheme.SECONDARY} />
                <AppLink to='/about' children='О сайте' theme={AppLinkTheme.SECONDARY} />
            </div>
        </div>
    );
};