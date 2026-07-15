import { NavLink, Outlet, useLocation, Link } from 'react-router-dom'
import { Search, Bell, ChevronsUpDown, Menu, X } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { ROLES } from './roles'
import BrandLogo from './BrandLogo'
import ThemeControls from '../theme/ThemeControls'

function RoleSwitcher({ current }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-3 rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] p-3 text-left shadow-[var(--c-shadow)] transition-colors hover:bg-[var(--c-hover)]"
      >
        <img
          src={current.user.avatar}
          alt={current.user.name}
          className="size-8 rounded-full object-cover"
        />
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-semibold text-[var(--c-heading)]">
            {current.user.name}
          </p>
          <p className="truncate text-[11px] text-[var(--c-muted)]">
            {current.user.role}
          </p>
        </div>
        <ChevronsUpDown className="size-4 shrink-0 text-[var(--c-muted)]" />
      </button>
      {open && (
        <div className="absolute bottom-full left-0 z-50 mb-2 w-full overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] shadow-lg">
          <p className="px-3 pt-3 pb-1 text-[11px] font-semibold tracking-wide text-[var(--c-muted)] uppercase">
            Switch portal
          </p>
          {Object.entries(ROLES).map(([key, role]) => (
            <Link
              key={key}
              to={role.nav[0].path}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 text-[13px] font-medium transition-colors hover:bg-[var(--c-hover)] ${
                role === current
                  ? 'bg-[var(--c-primary-soft)] text-[var(--c-primary)]'
                  : 'text-[var(--c-text)]'
              }`}
            >
              <img
                src={role.user.avatar}
                alt=""
                className="size-6 rounded-full object-cover"
              />
              <span>{role.label} Portal</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

function SidebarContent({ role, onNavigate }) {
  const location = useLocation()
  return (
    <>
      <Link to="/" className="flex justify-center" onClick={onNavigate}>
        <BrandLogo className="h-[110px] lg:h-[130px]" />
      </Link>
      <nav className="flex flex-col gap-2">
        {role.nav.map((item) => {
          const active = location.pathname.startsWith(item.path)
          const Icon = item.icon
          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onNavigate}
              className={`relative flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm transition-colors ${
                active
                  ? 'bg-[var(--c-primary)] font-semibold text-white'
                  : 'font-medium text-[var(--c-text2)] hover:bg-[var(--c-hover)] hover:text-[var(--c-heading)]'
              }`}
            >
              <Icon className="size-5" strokeWidth={active ? 2.2 : 2} />
              <span>{item.label}</span>
            </NavLink>
          )
        })}
      </nav>
      <div className="mt-auto">
        <RoleSwitcher current={role} />
      </div>
    </>
  )
}

function BottomNav({ role }) {
  const location = useLocation()
  // Bottom bar fits 5 tabs; skip entries whose route is just a redirect.
  const items = role.nav.filter((i) => !i.redirectOnly).slice(0, 5)
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 flex border-t border-[var(--c-border)] bg-[var(--c-card)] pb-[env(safe-area-inset-bottom)] shadow-[0_-2px_8px_rgba(0,0,0,0.06)] lg:hidden">
      {items.map((item) => {
        const active = location.pathname.startsWith(item.path)
        const Icon = item.icon
        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={`flex flex-1 flex-col items-center gap-1 py-2 text-[10px] font-medium transition-colors ${
              active ? 'text-[var(--c-primary)]' : 'text-[var(--c-text2)]'
            }`}
          >
            <span
              className={`flex h-7 w-12 items-center justify-center rounded-full transition-colors ${
                active ? 'bg-[var(--c-primary-soft2)]' : ''
              }`}
            >
              <Icon className="size-5" strokeWidth={active ? 2.3 : 2} />
            </span>
            <span>{item.label}</span>
          </NavLink>
        )
      })}
    </nav>
  )
}

export default function AppLayout({ roleKey }) {
  const role = ROLES[roleKey]
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <div className="flex min-h-screen bg-[var(--c-bg)]">
      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen w-[260px] shrink-0 flex-col gap-[22px] overflow-y-auto border-r border-[var(--c-border)] bg-[var(--c-card)] p-6 shadow-[var(--c-shadow)] lg:flex">
        <SidebarContent role={role} />
      </aside>

      {/* Mobile sidebar drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="absolute inset-y-0 left-0 flex w-[280px] max-w-[85vw] flex-col gap-[22px] overflow-y-auto bg-[var(--c-card)] p-6 shadow-xl">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-full text-[var(--c-text2)] hover:bg-[var(--c-hover)]"
              aria-label="Close menu"
            >
              <X className="size-5" />
            </button>
            <SidebarContent role={role} onNavigate={() => setMobileOpen(false)} />
          </aside>
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-[var(--c-border)] bg-[var(--c-card)] px-4 shadow-[var(--c-shadow)] sm:px-8">
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={() => setMobileOpen(true)}
              className="flex size-10 items-center justify-center rounded-lg text-[var(--c-text)] hover:bg-[var(--c-hover)] lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </button>
            <div className="flex items-center gap-4 text-sm sm:gap-6">
              <span className="font-semibold text-[var(--c-heading)]">Overview</span>
              <span className="hidden cursor-pointer font-medium text-[var(--c-text)] hover:text-[var(--c-heading)] sm:inline">
                Reports
              </span>
              <span className="hidden cursor-pointer font-medium text-[var(--c-text)] hover:text-[var(--c-heading)] sm:inline">
                Notifications
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <ThemeControls />
            <button className="hidden size-10 items-center justify-center rounded-full border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] hover:bg-[var(--c-hover)] sm:flex">
              <Search className="size-[18px]" />
            </button>
            <button className="relative flex size-10 items-center justify-center rounded-full border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] hover:bg-[var(--c-hover)]">
              <Bell className="size-[18px]" />
              <span className="absolute top-2 right-2.5 size-2 rounded-full bg-[var(--c-red)]" />
            </button>
          </div>
        </header>
        <main className="flex-1 pb-24 lg:pb-0">
          <Outlet />
        </main>
        <BottomNav role={role} />
      </div>
    </div>
  )
}
