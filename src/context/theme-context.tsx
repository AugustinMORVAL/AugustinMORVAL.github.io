import { createContext } from "react"
import type { ThemeProviderState } from "../interfaces/theme"

// Constants
const initialState: ThemeProviderState = {
  theme: "light",
  setTheme: () => null,
}

// Context
export const ThemeProviderContext = createContext<ThemeProviderState>(initialState)
