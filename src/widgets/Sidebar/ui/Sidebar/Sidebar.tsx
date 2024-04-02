import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { Button } from 'shared/ui/Button';

import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export function Sidebar({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => setCollapsed((prev) => !prev);
    return (
        <div
            data-testid="sidebar"
            className={classNames(
                cls.Sidebar,
                { [cls.collapsed]: collapsed },
                [className],
            )}
        >
            <Button data-testid="btn" onClick={onToggle}>{t('Свернуть')}</Button>
            <div
                className={cls.switchers}
            >
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
}
