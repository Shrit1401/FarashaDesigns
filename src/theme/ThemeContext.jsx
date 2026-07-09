import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

const STORAGE_KEY = 'farasha-theme'

export const THEMES = [
  { key: 'light', label: 'Light' },
  { key: 'dark', label: 'Dark' },
  { key: 'whitelabel', label: 'White Label' },
]

const DEFAULT_BRAND = {
  name: 'Farasha',
  logo: null, // data URL when the user uploads a custom logo
  primary: '#7c3aed',
  secondary: '#8b5cf6',
}

function hexToSoft(hex, alpha) {
  const n = parseInt(hex.slice(1), 16)
  const r = (n >> 16) & 255
  const g = (n >> 8) & 255
  const b = n & 255
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      return {
        theme: THEMES.some((t) => t.key === parsed.theme) ? parsed.theme : 'light',
        brand: { ...DEFAULT_BRAND, ...(parsed.brand || {}) },
      }
    }
  } catch {
    /* corrupted storage — fall through to defaults */
  }
  return { theme: 'light', brand: DEFAULT_BRAND }
}

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [{ theme, brand }, setState] = useState(load)

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', theme)

    // White label: brand colors drive the primary token family.
    const vars = {
      '--c-primary': brand.primary,
      '--c-primary-hover': brand.primary,
      '--c-primary-light': brand.secondary,
      '--c-primary-soft': hexToSoft(brand.primary, 0.08),
      '--c-primary-soft2': hexToSoft(brand.primary, 0.16),
    }
    for (const [k, v] of Object.entries(vars)) {
      if (theme === 'whitelabel') root.style.setProperty(k, v)
      else root.style.removeProperty(k)
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify({ theme, brand }))
  }, [theme, brand])

  const setTheme = useCallback(
    (t) => setState((s) => ({ ...s, theme: t })),
    [],
  )
  const setBrand = useCallback(
    (patch) => setState((s) => ({ ...s, brand: { ...s.brand, ...patch } })),
    [],
  )
  const resetBrand = useCallback(
    () => setState((s) => ({ ...s, brand: DEFAULT_BRAND })),
    [],
  )

  const value = useMemo(
    () => ({ theme, brand, setTheme, setBrand, resetBrand }),
    [theme, brand, setTheme, setBrand, resetBrand],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider')
  return ctx
}

/**
 * Resolved chart colors — recharts sets SVG presentation attributes, which
 * cannot contain var(), so charts get concrete hex values that track the
 * active theme. Values mirror the token definitions in index.css.
 */
const CHART_COLORS = {
  light: {
    primary: '#2563eb',
    primaryLight: '#3b82f6',
    grid: '#e2e8f0',
    axis: '#94a3b8',
    card: '#ffffff',
    heading: '#0f172a',
    green: '#16a34a',
    red: '#ef4444',
    amber: '#d97706',
    teal: '#0d9488',
    cyan: '#06b6d4',
    purple: '#8b5cf6',
  },
  dark: {
    primary: '#2563eb',
    primaryLight: '#60a5fa',
    grid: '#1e293b',
    axis: '#64748b',
    card: '#0f172a',
    heading: '#f1f5f9',
    green: '#4ade80',
    red: '#f87171',
    amber: '#fbbf24',
    teal: '#2dd4bf',
    cyan: '#22d3ee',
    purple: '#a78bfa',
  },
}

export function useChartColors() {
  const { theme, brand } = useTheme()
  return useMemo(() => {
    const base = CHART_COLORS[theme === 'dark' ? 'dark' : 'light']
    if (theme === 'whitelabel') {
      return { ...base, primary: brand.primary, primaryLight: brand.secondary }
    }
    return base
  }, [theme, brand])
}
