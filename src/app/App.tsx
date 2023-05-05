import './styles/index.scss';
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { classNames } from 'shared/lib/classNames';
import { Sidebar } from 'widgets/Sidebar';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

const App = () => {
    const {theme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className='content-page'>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    )
}

export default App;