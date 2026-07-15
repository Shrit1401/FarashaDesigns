import {
  ChevronRight,
  Search,
  ListFilter,
  Plus,
  MoreHorizontal,
  Building2,
  CheckCircle2,
  Clock,
  Ban,
  TrendingUp,
  TrendingDown,
} from 'lucide-react'

const stats = [
  {
    label: 'Total Tenants',
    value: '1,284',
    trend: '+8.2%',
    up: true,
    icon: Building2,
    iconBox: 'bg-[var(--c-primary-soft)] border-[rgba(37,99,235,0.2)]',
    iconColor: 'text-[var(--c-primary)]',
    gradient: 'from-[rgba(37,99,235,0.1)] to-[rgba(37,99,235,0)]',
  },
  {
    label: 'Active',
    value: '1,092',
    trend: '+5.6%',
    up: true,
    icon: CheckCircle2,
    iconBox: 'bg-[var(--c-green-soft)] border-[rgba(16,185,129,0.2)]',
    iconColor: 'text-[var(--c-green)]',
    gradient: 'from-[rgba(16,185,129,0.1)] to-[rgba(16,185,129,0)]',
  },
  {
    label: 'Trial',
    value: '148',
    trend: '+12.1%',
    up: true,
    icon: Clock,
    iconBox: 'bg-[var(--c-amber-soft)] border-[rgba(217,119,6,0.2)]',
    iconColor: 'text-[var(--c-amber)]',
    gradient: 'from-[rgba(217,119,6,0.1)] to-[rgba(217,119,6,0)]',
  },
  {
    label: 'Suspended',
    value: '44',
    trend: '-2.4%',
    up: false,
    icon: Ban,
    iconBox: 'bg-[var(--c-red-soft)] border-[rgba(239,68,68,0.2)]',
    iconColor: 'text-[var(--c-red)]',
    gradient: 'from-[rgba(239,68,68,0.1)] to-[rgba(239,68,68,0)]',
  },
]

const statusStyles = {
  Active: 'bg-[var(--c-green-soft)] text-[var(--c-green)]',
  Trial: 'bg-[var(--c-amber-soft)] text-[var(--c-amber)]',
  Suspended: 'bg-[var(--c-red-soft)] text-[var(--c-red)]',
}

const badgeStyles = [
  'bg-[var(--c-primary-soft)] text-[var(--c-primary)]',
  'bg-[var(--c-green-soft)] text-[var(--c-green)]',
  'bg-[var(--c-amber-soft)] text-[var(--c-amber)]',
  'bg-[var(--c-purple-soft)] text-[var(--c-purple)]',
  'bg-[var(--c-teal-soft)] text-[var(--c-teal)]',
  'bg-[var(--c-cyan-soft)] text-[var(--c-cyan)]',
]

const tenants = [
  { name: 'TechFlow Inc', plan: 'Enterprise', users: 482, modules: 12, status: 'Active', created: 'Jan 12, 2024' },
  { name: 'Vertex Solutions', plan: 'Pro', users: 236, modules: 8, status: 'Active', created: 'Jan 15, 2024' },
  { name: 'BuildRight Ltd', plan: 'Enterprise', users: 391, modules: 11, status: 'Active', created: 'Dec 20, 2023' },
  { name: 'Northwind Traders', plan: 'Starter', users: 42, modules: 4, status: 'Trial', created: 'Jan 22, 2024' },
  { name: 'Acme Logistics', plan: 'Pro', users: 118, modules: 7, status: 'Active', created: 'Nov 05, 2023' },
  { name: 'Sunrise Retail', plan: 'Starter', users: 28, modules: 3, status: 'Trial', created: 'Jan 25, 2024' },
  { name: 'Pinnacle Health', plan: 'Enterprise', users: 654, modules: 14, status: 'Active', created: 'Oct 18, 2023' },
  { name: 'Quantum Labs', plan: 'Pro', users: 96, modules: 6, status: 'Suspended', created: 'Sep 30, 2023' },
]

const pages = ['1', '2', '3', '...', '18']

export default function TenantsPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-8">
        {/* Page header */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-[13px] font-medium">
            <span className="text-[var(--c-text)]">Admin</span>
            <ChevronRight className="size-3.5 text-[var(--c-muted)]" />
            <span className="text-[var(--c-heading)]">Tenants</span>
          </div>
          <h1 className="text-[28px] font-bold leading-tight text-[var(--c-heading)]">Tenant Management</h1>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="relative overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] p-6 shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)]"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${s.gradient}`} />
              <div className="relative flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className={`flex size-9 items-center justify-center rounded-[10px] border ${s.iconBox}`}>
                    <s.icon className={`size-[18px] ${s.iconColor}`} />
                  </div>
                  <p className="text-sm font-medium text-[var(--c-text)]">{s.label}</p>
                </div>
                <div className="flex items-end justify-between">
                  <p className="text-[32px] font-bold leading-none text-[var(--c-heading)]">{s.value}</p>
                  <span
                    className={`flex items-center gap-1 rounded-[20px] px-2 py-1 text-xs font-semibold ${
                      s.up ? 'bg-[var(--c-green-soft)] text-[var(--c-green)]' : 'bg-[var(--c-red-soft)] text-[var(--c-red)]'
                    }`}
                  >
                    {s.up ? <TrendingUp className="size-3.5" /> : <TrendingDown className="size-3.5" />}
                    {s.trend}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          {/* Toolbar */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex w-full flex-col gap-3 sm:max-w-[400px] sm:flex-row sm:items-start">
              <label className="flex min-h-9 w-full min-w-0 flex-1 items-center gap-2 rounded-lg border border-[var(--c-border)] bg-[var(--c-card)] px-3 py-2.5 shadow-[0px_2px_4px_rgba(0,0,0,0.04)] focus-within:border-[var(--c-primary)]">
                <Search className="size-[18px] shrink-0 text-[var(--c-muted)]" />
                <input
                  type="text"
                  placeholder="Search tenants..."
                  className="w-full min-w-0 bg-transparent text-sm text-[var(--c-heading)] placeholder-[var(--c-text)] outline-none"
                />
              </label>
              <div className="flex items-center gap-3 sm:contents">
                <button
                  type="button"
                  className="flex min-h-9 flex-1 shrink-0 items-center justify-center gap-2 rounded-lg border border-[var(--c-primary)] bg-[var(--c-primary-soft)] px-4 py-2.5 text-sm font-semibold text-[var(--c-primary)] transition-colors hover:bg-[var(--c-primary-soft2)] sm:flex-none"
                >
                  <ListFilter className="size-4" />
                  Filter
                </button>
                <button
                  type="button"
                  className="flex min-h-9 flex-1 items-center justify-center gap-2 rounded-lg bg-[var(--c-primary)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0px_8px_9px_rgba(37,99,235,0.2)] transition-colors hover:bg-[var(--c-primary-hover)] sm:hidden"
                >
                  <Plus className="size-4" />
                  Add Tenant
                </button>
              </div>
            </div>
            <button
              type="button"
              className="hidden items-center gap-2 rounded-lg bg-[var(--c-primary)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0px_8px_9px_rgba(37,99,235,0.2)] transition-colors hover:bg-[var(--c-primary-hover)] sm:flex"
            >
              <Plus className="size-4" />
              Add Tenant
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)]">
            <table className="w-full min-w-[900px] border-collapse text-left">
              <thead>
                <tr className="bg-[var(--c-primary-soft)] text-[13px] font-semibold text-[var(--c-primary)]">
                  <th className="p-4 font-semibold">Company</th>
                  <th className="w-[130px] p-4 font-semibold">Plan</th>
                  <th className="w-[100px] p-4 font-semibold">Users</th>
                  <th className="w-[110px] p-4 font-semibold">Modules</th>
                  <th className="w-[130px] p-4 font-semibold">Status</th>
                  <th className="w-[140px] p-4 font-semibold">Created</th>
                  <th className="w-[80px] p-4 text-right font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tenants.map((t, i) => (
                  <tr
                    key={t.name}
                    className="border-t border-[var(--c-border)] transition-colors hover:bg-[var(--c-bg)]"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex size-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${badgeStyles[i % badgeStyles.length]}`}
                        >
                          {t.name.charAt(0)}
                        </div>
                        <span className="text-sm font-semibold whitespace-nowrap text-[var(--c-heading)]">
                          {t.name}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-[var(--c-heading)]">{t.plan}</td>
                    <td className="p-4 text-sm text-[var(--c-text2)]">{t.users}</td>
                    <td className="p-4 text-sm text-[var(--c-text2)]">{t.modules}</td>
                    <td className="p-4">
                      <span
                        className={`inline-flex rounded-[20px] px-2.5 py-1 text-xs font-semibold shadow-[0px_2px_4px_rgba(0,0,0,0.07)] ${statusStyles[t.status]}`}
                      >
                        {t.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm whitespace-nowrap text-[var(--c-text2)]">{t.created}</td>
                    <td className="p-4">
                      <div className="flex justify-end">
                        <button
                          type="button"
                          className="rounded-md p-1 text-[var(--c-muted)] transition-colors hover:bg-[var(--c-hover)] hover:text-[var(--c-text)]"
                        >
                          <MoreHorizontal className="size-[18px]" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[13px] text-[var(--c-text)]">Showing 8 of 1,284 tenants</p>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                className="rounded-lg border border-[var(--c-green)] bg-[var(--c-green-soft)] px-4 py-2.5 text-sm font-semibold text-[var(--c-primary)] transition-colors hover:bg-[var(--c-green-soft)]"
              >
                Previous
              </button>
              <div className="flex items-center gap-1">
                {pages.map((p) => (
                  <button
                    key={p}
                    type="button"
                    className={`rounded-md px-3 py-2 text-[13px] font-semibold transition-colors ${
                      p === '1'
                        ? 'bg-[var(--c-primary)] text-white'
                        : p === '...'
                          ? 'cursor-default text-[var(--c-heading)]'
                          : 'text-[var(--c-primary)] hover:bg-[var(--c-primary-soft)]'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
              <button
                type="button"
                className="rounded-lg border border-[var(--c-green)] bg-[var(--c-green-soft)] px-4 py-2.5 text-sm font-semibold text-[var(--c-primary)] transition-colors hover:bg-[var(--c-green-soft)]"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
