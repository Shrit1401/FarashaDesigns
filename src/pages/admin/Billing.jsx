import {
  ChevronRight,
  Search,
  ListFilter,
  Plus,
  MoreHorizontal,
  Download,
  Banknote,
  Hourglass,
  AlertTriangle,
  RotateCcw,
  TrendingUp,
  TrendingDown,
} from 'lucide-react'

const stats = [
  {
    label: 'Revenue This Month',
    value: '$142k',
    trend: '+11.4%',
    up: true,
    icon: Banknote,
    iconBox: 'bg-[var(--c-primary-soft)] border-[rgba(37,99,235,0.2)]',
    iconColor: 'text-[var(--c-primary)]',
    gradient: 'from-[rgba(37,99,235,0.1)] to-[rgba(37,99,235,0)]',
  },
  {
    label: 'Outstanding',
    value: '$18.6k',
    trend: '+2.8%',
    up: true,
    icon: Hourglass,
    iconBox: 'bg-[var(--c-amber-soft)] border-[rgba(217,119,6,0.2)]',
    iconColor: 'text-[var(--c-amber)]',
    gradient: 'from-[rgba(217,119,6,0.1)] to-[rgba(217,119,6,0)]',
  },
  {
    label: 'Overdue Invoices',
    value: '14',
    trend: '-4.2%',
    up: false,
    icon: AlertTriangle,
    iconBox: 'bg-[var(--c-red-soft)] border-[rgba(239,68,68,0.2)]',
    iconColor: 'text-[var(--c-red)]',
    gradient: 'from-[rgba(239,68,68,0.1)] to-[rgba(239,68,68,0)]',
  },
  {
    label: 'Refunds',
    value: '$2.1k',
    trend: '-1.6%',
    up: false,
    icon: RotateCcw,
    iconBox: 'bg-[var(--c-purple-soft)] border-[rgba(139,92,246,0.2)]',
    iconColor: 'text-[var(--c-purple)]',
    gradient: 'from-[rgba(139,92,246,0.1)] to-[rgba(139,92,246,0)]',
  },
]

const statusStyles = {
  Paid: 'bg-[var(--c-green-soft)] text-[var(--c-green)]',
  Pending: 'bg-[var(--c-amber-soft)] text-[var(--c-amber)]',
  Overdue: 'bg-[var(--c-red-soft)] text-[var(--c-red)]',
}

const invoices = [
  { id: 'INV-2024-0187', tenant: 'TechFlow Inc', amount: '$4,990', issued: 'Jan 12, 2024', due: 'Feb 12, 2024', status: 'Paid' },
  { id: 'INV-2024-0186', tenant: 'Pinnacle Health', amount: '$6,860', issued: 'Jan 10, 2024', due: 'Feb 10, 2024', status: 'Paid' },
  { id: 'INV-2024-0185', tenant: 'Vertex Solutions', amount: '$1,490', issued: 'Jan 08, 2024', due: 'Feb 08, 2024', status: 'Pending' },
  { id: 'INV-2024-0184', tenant: 'BuildRight Ltd', amount: '$3,920', issued: 'Jan 05, 2024', due: 'Feb 05, 2024', status: 'Pending' },
  { id: 'INV-2024-0183', tenant: 'Acme Logistics', amount: '$720', issued: 'Dec 28, 2023', due: 'Jan 28, 2024', status: 'Overdue' },
  { id: 'INV-2024-0182', tenant: 'Northwind Traders', amount: '$149', issued: 'Dec 22, 2023', due: 'Jan 22, 2024', status: 'Paid' },
  { id: 'INV-2024-0181', tenant: 'Sunrise Retail', amount: '$89', issued: 'Dec 20, 2023', due: 'Jan 20, 2024', status: 'Paid' },
  { id: 'INV-2024-0180', tenant: 'Quantum Labs', amount: '$590', issued: 'Dec 15, 2023', due: 'Jan 15, 2024', status: 'Overdue' },
]

const pages = ['1', '2', '3', '...', '24']

export default function BillingPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-8">
        {/* Page header */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-[13px] font-medium">
            <span className="text-[var(--c-text)]">Admin</span>
            <ChevronRight className="size-3.5 text-[var(--c-muted)]" />
            <span className="text-[var(--c-heading)]">Billing</span>
          </div>
          <h1 className="text-[28px] font-bold leading-tight text-[var(--c-heading)]">Billing Management</h1>
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
                  placeholder="Search invoices..."
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
                  New Invoice
                </button>
              </div>
            </div>
            <button
              type="button"
              className="hidden items-center gap-2 rounded-lg bg-[var(--c-primary)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0px_8px_9px_rgba(37,99,235,0.2)] transition-colors hover:bg-[var(--c-primary-hover)] sm:flex"
            >
              <Plus className="size-4" />
              New Invoice
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)]">
            <table className="w-full min-w-[900px] border-collapse text-left">
              <thead>
                <tr className="bg-[var(--c-primary-soft)] text-[13px] font-semibold text-[var(--c-primary)]">
                  <th className="p-4 font-semibold">Invoice</th>
                  <th className="p-4 font-semibold">Tenant</th>
                  <th className="w-[120px] p-4 font-semibold">Amount</th>
                  <th className="w-[140px] p-4 font-semibold">Issued</th>
                  <th className="w-[140px] p-4 font-semibold">Due Date</th>
                  <th className="w-[120px] p-4 font-semibold">Status</th>
                  <th className="w-[110px] p-4 text-right font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((inv) => (
                  <tr
                    key={inv.id}
                    className="border-t border-[var(--c-border)] transition-colors hover:bg-[var(--c-bg)]"
                  >
                    <td className="p-4 text-sm font-semibold whitespace-nowrap text-[var(--c-heading)]">{inv.id}</td>
                    <td className="p-4 text-sm whitespace-nowrap text-[var(--c-text2)]">{inv.tenant}</td>
                    <td className="p-4 text-sm font-semibold text-[var(--c-heading)]">{inv.amount}</td>
                    <td className="p-4 text-sm whitespace-nowrap text-[var(--c-text2)]">{inv.issued}</td>
                    <td className="p-4 text-sm whitespace-nowrap text-[var(--c-text2)]">{inv.due}</td>
                    <td className="p-4">
                      <span
                        className={`inline-flex rounded-[20px] px-2.5 py-1 text-xs font-semibold shadow-[0px_2px_4px_rgba(0,0,0,0.07)] ${statusStyles[inv.status]}`}
                      >
                        {inv.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          type="button"
                          className="rounded-md p-1 text-[var(--c-muted)] transition-colors hover:bg-[var(--c-hover)] hover:text-[var(--c-text)]"
                          aria-label={`Download ${inv.id}`}
                        >
                          <Download className="size-[18px]" />
                        </button>
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
            <p className="text-[13px] text-[var(--c-text)]">Showing 8 of 187 invoices</p>
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
