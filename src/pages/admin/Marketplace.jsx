import {
  ChevronRight,
  Search,
  Banknote,
  CalendarClock,
  MapPin,
  ShieldCheck,
  BarChart3,
  UserPlus,
  Star,
  Receipt,
  PenLine,
  Download,
} from 'lucide-react'

const categories = ['All', 'HR', 'Payroll', 'Time', 'Compliance', 'Analytics']

const modules = [
  {
    name: 'Advanced Payroll',
    description: 'Multi-currency payroll runs with automated tax filing.',
    installs: '2.4k installs',
    price: '$49/mo',
    installed: true,
    icon: Banknote,
    iconBox: 'bg-[var(--c-primary-soft)] border-[rgba(37,99,235,0.2)]',
    iconColor: 'text-[var(--c-primary)]',
  },
  {
    name: 'Shift Scheduling',
    description: 'Drag-and-drop rosters with conflict detection and swaps.',
    installs: '1.8k installs',
    price: '$29/mo',
    installed: false,
    icon: CalendarClock,
    iconBox: 'bg-[var(--c-green-soft)] border-[rgba(16,185,129,0.2)]',
    iconColor: 'text-[var(--c-green)]',
  },
  {
    name: 'GPS Time Clock',
    description: 'Geofenced clock-ins for field and remote teams.',
    installs: '1.2k installs',
    price: '$19/mo',
    installed: false,
    icon: MapPin,
    iconBox: 'bg-[var(--c-amber-soft)] border-[rgba(217,119,6,0.2)]',
    iconColor: 'text-[var(--c-amber)]',
  },
  {
    name: 'Compliance Suite',
    description: 'Labor-law alerts, document retention, and audit trails.',
    installs: '980 installs',
    price: '$59/mo',
    installed: true,
    icon: ShieldCheck,
    iconBox: 'bg-[var(--c-purple-soft)] border-[rgba(139,92,246,0.2)]',
    iconColor: 'text-[var(--c-purple)]',
  },
  {
    name: 'Analytics Pro',
    description: 'Custom dashboards, cohort reports, and data exports.',
    installs: '2.1k installs',
    price: '$39/mo',
    installed: false,
    icon: BarChart3,
    iconBox: 'bg-[var(--c-teal-soft)] border-[rgba(13,148,136,0.2)]',
    iconColor: 'text-[var(--c-teal)]',
  },
  {
    name: 'Recruitment ATS',
    description: 'Job postings, applicant pipelines, and interview kits.',
    installs: '860 installs',
    price: '$45/mo',
    installed: false,
    icon: UserPlus,
    iconBox: 'bg-[var(--c-cyan-soft)] border-[rgba(6,182,212,0.2)]',
    iconColor: 'text-[var(--c-cyan)]',
  },
  {
    name: 'Performance Reviews',
    description: '360° feedback cycles, goals, and review templates.',
    installs: '1.5k installs',
    price: 'Free',
    installed: true,
    icon: Star,
    iconBox: 'bg-[var(--c-amber-soft)] border-[rgba(217,119,6,0.2)]',
    iconColor: 'text-[var(--c-amber)]',
  },
  {
    name: 'Expense Management',
    description: 'Receipt capture, approval chains, and reimbursements.',
    installs: '1.1k installs',
    price: '$25/mo',
    installed: false,
    icon: Receipt,
    iconBox: 'bg-[var(--c-green-soft)] border-[rgba(16,185,129,0.2)]',
    iconColor: 'text-[var(--c-green)]',
  },
  {
    name: 'E-Signatures',
    description: 'Legally binding signatures on offers and contracts.',
    installs: '640 installs',
    price: 'Free',
    installed: false,
    icon: PenLine,
    iconBox: 'bg-[var(--c-primary-soft)] border-[rgba(37,99,235,0.2)]',
    iconColor: 'text-[var(--c-primary)]',
  },
]

export default function MarketplacePage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-8">
        {/* Page header */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-[13px] font-medium">
            <span className="text-[var(--c-text)]">Admin</span>
            <ChevronRight className="size-3.5 text-[var(--c-muted)]" />
            <span className="text-[var(--c-heading)]">Marketplace</span>
          </div>
          <h1 className="text-[28px] font-bold leading-tight text-[var(--c-heading)]">
            Module Marketplace
          </h1>
        </div>

        <div className="flex flex-col gap-6">
          {/* Toolbar */}
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <label className="flex min-h-9 w-full items-center gap-2 rounded-lg border border-[var(--c-border)] bg-[var(--c-card)] px-3 py-2.5 shadow-[0px_2px_4px_rgba(0,0,0,0.04)] focus-within:border-[var(--c-primary)] lg:max-w-[400px]">
              <Search className="size-[18px] shrink-0 text-[var(--c-muted)]" />
              <input
                type="text"
                placeholder="Search modules..."
                className="w-full min-w-0 bg-transparent text-sm text-[var(--c-heading)] placeholder-[var(--c-text)] outline-none"
              />
            </label>
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((c, i) => (
                <button
                  key={c}
                  type="button"
                  className={`rounded-[20px] px-4 py-2 text-[13px] font-semibold transition-colors ${
                    i === 0
                      ? 'bg-[var(--c-primary)] text-white shadow-[0px_4px_8px_rgba(37,99,235,0.2)]'
                      : 'border border-[var(--c-border)] bg-[var(--c-card)] text-[var(--c-text)] hover:bg-[var(--c-hover)] hover:text-[var(--c-heading)]'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Module cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {modules.map((m) => (
              <div
                key={m.name}
                className="flex flex-col gap-4 rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] p-6 shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div
                    className={`flex size-11 items-center justify-center rounded-[10px] border ${m.iconBox}`}
                  >
                    <m.icon className={`size-5 ${m.iconColor}`} />
                  </div>
                  {m.installed && (
                    <span className="inline-flex rounded-[20px] bg-[var(--c-green-soft)] px-2.5 py-1 text-xs font-semibold text-[var(--c-green)] shadow-[0px_2px_4px_rgba(0,0,0,0.07)]">
                      Installed
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-base font-semibold text-[var(--c-heading)]">{m.name}</p>
                  <p className="text-sm text-[var(--c-text2)]">{m.description}</p>
                </div>
                <div className="mt-auto flex items-center justify-between border-t border-[var(--c-border)] pt-4">
                  <div className="flex flex-col gap-0.5">
                    <p className="text-sm font-bold text-[var(--c-heading)]">{m.price}</p>
                    <p className="flex items-center gap-1 text-xs text-[var(--c-muted)]">
                      <Download className="size-3" />
                      {m.installs}
                    </p>
                  </div>
                  {m.installed ? (
                    <button
                      type="button"
                      className="rounded-lg border border-[var(--c-border)] bg-[var(--c-card)] px-4 py-2 text-sm font-semibold text-[var(--c-text)] transition-colors hover:bg-[var(--c-hover)]"
                    >
                      Manage
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="rounded-lg bg-[var(--c-primary)] px-4 py-2 text-sm font-semibold text-white shadow-[0px_8px_9px_rgba(37,99,235,0.2)] transition-colors hover:bg-[var(--c-primary-hover)]"
                    >
                      Install
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
