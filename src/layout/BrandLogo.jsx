import { useTheme } from '../theme/ThemeContext'
import logo from '../assets/logo.png'
import logoDark from '../assets/logo-dark.png'

export default function BrandLogo({ className = '' }) {
  const { theme, brand } = useTheme()

  if (theme === 'whitelabel') {
    return (
      <div className={`flex flex-col items-center gap-2 ${className}`}>
        {brand.logo ? (
          <img
            src={brand.logo}
            alt={brand.name}
            className="max-h-16 w-auto max-w-[160px] object-contain"
          />
        ) : (
          <div className="flex size-14 items-center justify-center rounded-2xl bg-[var(--c-primary)] text-2xl font-bold text-white">
            {(brand.name || 'F').charAt(0).toUpperCase()}
          </div>
        )}
        <span className="text-lg font-bold text-[var(--c-heading)]">
          {brand.name}
        </span>
      </div>
    )
  }

  return (
    <img
      src={theme === 'dark' ? logoDark : logo}
      alt="Farasha"
      className={`w-auto ${theme === 'dark' ? 'object-contain py-2' : 'rounded-2xl'} ${className}`}
    />
  )
}
