import { Link } from 'react-router-dom'
import { ShieldCheck, Building2, User, ArrowRight } from 'lucide-react'
import { ROLES } from '../layout/roles'
import BrandLogo from '../layout/BrandLogo'
import ThemeControls from '../theme/ThemeControls'
import { useTheme } from '../theme/ThemeContext'

const CARDS = [
  {
    key: 'admin',
    icon: ShieldCheck,
    title: 'Admin Portal',
    desc: 'Manage users, employers, leave policies and platform settings.',
  },
  {
    key: 'employer',
    icon: Building2,
    title: 'Employer Portal',
    desc: 'Manage your workforce, approve leave and run payroll.',
  },
  {
    key: 'employee',
    icon: User,
    title: 'Employee Portal',
    desc: 'View your profile, apply for leave and download payslips.',
  },
]

export default function Landing() {
  const { theme, brand } = useTheme()
  const brandName = theme === 'whitelabel' ? brand.name : 'Farasha'

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[var(--c-bg)] px-6 py-12">
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <ThemeControls />
      </div>
      <BrandLogo className="mb-2 h-40" />
      <h1 className="text-center text-2xl font-bold text-[var(--c-heading)] sm:text-3xl">
        {brandName} Workforce Portal
      </h1>
      <p className="mt-2 mb-10 text-center text-[15px] text-[var(--c-text2)]">
        Choose a portal to continue
      </p>
      <div className="grid w-full max-w-4xl gap-6 md:grid-cols-3">
        {CARDS.map(({ key, icon: Icon, title, desc }) => (
          <Link
            key={key}
            to={ROLES[key].nav[0].path}
            className="group flex flex-col rounded-2xl border border-[var(--c-border)] bg-[var(--c-card)] p-6 shadow-[var(--c-shadow)] transition-all hover:-translate-y-1 hover:border-[var(--c-primary)] hover:shadow-lg"
          >
            <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-[var(--c-primary-soft)] text-[var(--c-primary)]">
              <Icon className="size-6" />
            </div>
            <h2 className="text-lg font-semibold text-[var(--c-heading)]">{title}</h2>
            <p className="mt-1 flex-1 text-sm leading-relaxed text-[var(--c-text2)]">
              {desc}
            </p>
            <span className="mt-4 flex items-center gap-1 text-sm font-semibold text-[var(--c-primary)]">
              Enter portal
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
