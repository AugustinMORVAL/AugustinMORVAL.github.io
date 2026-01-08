export type Theme = "dark" | "light"

export interface ThemeProviderState {
  theme: Theme
  setTheme: (theme: Theme) => void
}
