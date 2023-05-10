import { classNames } from 'shared/lib/classNames';
import cls from './Sidebar.module.scss'
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';



interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className} : SidebarProps) => {
    const [collapsed, setCollabsed] = useState(false)

    const onToggle = () => {
        setCollabsed(prev => !prev)
    }

    return (
    <div 
    className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
    >
        <button onClick={onToggle}>toggle</button>
        <div className={cls.switchers}>
            <ThemeSwitcher />
            <LangSwitcher className={cls.lang}/>
        </div>
    </div>
    )
}
