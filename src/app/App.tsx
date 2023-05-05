import './styles/index.scss';
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { classNames } from 'shared/lib/classNames';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

const App = () => {
    const {theme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
        </div>
    )
}

export default App;