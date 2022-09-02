import React, {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from 'react';
import { SafeAreaView, Appearance, ColorSchemeName, useColorScheme, Text } from "react-native";

type ThemeContextType = {
    theme: ColorSchemeName,
    changeTheme: Dispatch<SetStateAction<ColorSchemeName>>;
};
type ThemeContextProviderProps = {
    children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType>({ theme: Appearance.getColorScheme(), changeTheme: () => {} });

export const useThemeContext = () => useContext(ThemeContext);

export function ThemeContextProvider ({ children }: ThemeContextProviderProps) {
    const preferredTheme = useColorScheme();
    const [theme, setTheme] = useState<ThemeContextType["theme"]>(preferredTheme || 'light');
    Appearance.addChangeListener((e) => setTheme(e.colorScheme));

    return (
        <ThemeContext.Provider value={{ theme, changeTheme: setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}