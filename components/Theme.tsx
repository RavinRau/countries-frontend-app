import * as React from "react";
import {Sun, Moon} from "lucide-react"
import {useEffect, useState} from "react";

export interface IThemeProps {

}

export function ThemeSwitcher({ ...props }: IThemeProps) {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    // Effect to check and apply stored theme preference on component mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
        setTheme(savedTheme || 'light');
        document.body.classList.add(savedTheme || 'light');
    }, []);

    const changeTheme = (newTheme: 'dark' | 'light') => {
        // Update the theme in state
        setTheme(newTheme);
        // Update the theme in localStorage
        localStorage.setItem('theme', newTheme);
        // Apply the theme to the body element
        document.body.classList.remove('dark', 'light'); // remove both to avoid conflicts
        document.body.classList.add(newTheme);
    };

    // Choose which theme button to render based on the current theme
    const renderThemeSwitcher = () => {
        return theme === 'light' ? (
            <div className={"flex"} onClick={() => changeTheme('dark')}>
                <Sun className="h-6 w-6 mr-2" />
                Light Theme
            </div>
        ) : (
            <div className={"flex"} onClick={() => changeTheme('light')}>
                <Moon className="h-6 w-6 mr-2" />
                Dark Theme
            </div>
        );
    };

    return (
        <div className={"cursor-pointer"}>
            {renderThemeSwitcher()}
        </div>
    );
}

export default ThemeSwitcher;
