import { useEffect, useRef, useState } from 'react'
import { Sun, Moon, Palette, Check, Upload, RotateCcw } from 'lucide-react'
import { useTheme, THEMES } from './ThemeContext'

export default function ThemeControls() {
  const { theme, brand, setTheme, setBrand, resetBrand } = useTheme()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const fileRef = useRef(null)

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const onLogoUpload = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setBrand({ logo: reader.result })
    reader.readAsDataURL(file)
    e.target.value = ''
  }

  return (
    <div className="flex items-center gap-2 sm:gap-4">
      {/* Quick light/dark toggle */}
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="flex size-10 items-center justify-center rounded-full border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] transition-colors hover:bg-[var(--c-hover)]"
        title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {theme === 'dark' ? (
          <Sun className="size-[18px]" />
        ) : (
          <Moon className="size-[18px]" />
        )}
      </button>

      {/* Theme / white-label menu */}
      <div className="relative" ref={ref}>
        <button
          onClick={() => setOpen((v) => !v)}
          className={`flex size-10 items-center justify-center rounded-full border transition-colors ${
            open
              ? 'border-[var(--c-primary)] bg-[var(--c-primary-soft)] text-[var(--c-primary)]'
              : 'border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] hover:bg-[var(--c-hover)]'
          }`}
          title="Theme & branding"
        >
          <Palette className="size-[18px]" />
        </button>

        {open && (
          <div className="absolute right-0 z-50 mt-2 w-72 rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] p-3 shadow-lg">
            <p className="px-1 pb-2 text-[11px] font-semibold tracking-wide text-[var(--c-muted)] uppercase">
              Theme
            </p>
            <div className="flex flex-col gap-1">
              {THEMES.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setTheme(t.key)}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    theme === t.key
                      ? 'bg-[var(--c-primary-soft)] text-[var(--c-primary)]'
                      : 'text-[var(--c-text)] hover:bg-[var(--c-hover)]'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span
                      className="size-3.5 rounded-full border border-[var(--c-border-strong)]"
                      style={{
                        background:
                          t.key === 'light'
                            ? '#ffffff'
                            : t.key === 'dark'
                              ? '#0f172a'
                              : brand.primary,
                      }}
                    />
                    {t.label}
                  </span>
                  {theme === t.key && <Check className="size-4" />}
                </button>
              ))}
            </div>

            {theme === 'whitelabel' && (
              <div className="mt-3 border-t border-[var(--c-border)] pt-3">
                <p className="flex items-center justify-between px-1 pb-2 text-[11px] font-semibold tracking-wide text-[var(--c-muted)] uppercase">
                  Brand customization
                  <button
                    onClick={resetBrand}
                    className="flex items-center gap-1 font-medium text-[var(--c-text2)] normal-case hover:text-[var(--c-heading)]"
                    title="Reset brand"
                  >
                    <RotateCcw className="size-3" /> Reset
                  </button>
                </p>
                <div className="flex flex-col gap-2.5 px-1">
                  <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text2)]">
                    Company name
                    <input
                      value={brand.name}
                      onChange={(e) => setBrand({ name: e.target.value })}
                      className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] px-2.5 py-1.5 text-sm text-[var(--c-heading)] outline-none focus:border-[var(--c-primary)]"
                    />
                  </label>
                  <div className="flex gap-3">
                    <label className="flex flex-1 flex-col gap-1 text-xs font-medium text-[var(--c-text2)]">
                      Primary
                      <input
                        type="color"
                        value={brand.primary}
                        onChange={(e) => setBrand({ primary: e.target.value })}
                        className="h-8 w-full cursor-pointer rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] p-0.5"
                      />
                    </label>
                    <label className="flex flex-1 flex-col gap-1 text-xs font-medium text-[var(--c-text2)]">
                      Secondary
                      <input
                        type="color"
                        value={brand.secondary}
                        onChange={(e) => setBrand({ secondary: e.target.value })}
                        className="h-8 w-full cursor-pointer rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] p-0.5"
                      />
                    </label>
                  </div>
                  <button
                    onClick={() => fileRef.current?.click()}
                    className="flex items-center justify-center gap-2 rounded-lg border border-dashed border-[var(--c-border-strong)] px-3 py-2 text-xs font-medium text-[var(--c-text2)] transition-colors hover:border-[var(--c-primary)] hover:text-[var(--c-primary)]"
                  >
                    <Upload className="size-3.5" />
                    {brand.logo ? 'Replace logo' : 'Upload logo'}
                  </button>
                  <input
                    ref={fileRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={onLogoUpload}
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
