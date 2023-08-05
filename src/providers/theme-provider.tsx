
'use client'

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { useEffect, useState } from "react";

export function ThemeProvider({ children }: ThemeProviderProps) {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <>{children}</>


    return <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>{children}</NextThemeProvider>
}