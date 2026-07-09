import {
  ChevronRight,
  ChevronDown,
  Play,
  Banknote,
  MinusCircle,
  Wallet,
  User,
  Building2,
  CheckCircle2,
} from 'lucide-react'
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip, Cell } from 'recharts'
import { useChartColors } from '../../theme/ThemeContext'
import avatar1 from '../../assets/avatar1.png'
import avatar2 from '../../assets/avatar2.png'
import avatar3 from '../../assets/avatar3.png'
import avatar4 from '../../assets/avatar4.png'
import avatar5 from '../../assets/avatar5.png'
import avatar6 from '../../assets/avatar6.png'

const stats = [
  {
    label: 'Total Gross',
    value: '$428,500',
    sub: 'Budgeted amount',
    icon: Banknote,
    iconBox: 'bg-[var(--c-primary-soft)] border-[rgba(37,99,235,0.2)]',
    iconColor: 'text-[var(--c-primary)]',
  },
  {
    label: 'Total Deductions',
    value: '$84,200',
    sub: 'Tax & Benefits',
    icon: MinusCircle,
    iconBox: 'bg-[var(--c-red-soft)] border-[rgba(239,68,68,0.2)]',
    iconColor: 'text-[var(--c-red)]',
  },
  {
    label: 'Net Pay',
    value: '$344,300',
    sub: 'Payable to employees',
    icon: Wallet,
    iconBox: 'bg-[var(--c-green-soft)] border-[rgba(16,185,129,0.2)]',
    iconColor: 'text-[var(--c-green)]',
  },
  {
    label: 'Employees Paid',
    value: '1,240 / 1,284',
    sub: '96% processed',
    icon: User,
    iconBox: 'bg-[var(--c-primary-soft)] border-[rgba(37,99,235,0.2)]',
    iconColor: 'text-[var(--c-primary)]',
  },
]

const trendData = [
  { label: 'Mar + 0', value: 120 },
  { label: 'Mar + 1', value: 140 },
  { label: 'Mar + 2', value: 110 },
  { label: 'Mar + 3', value: 150 },
  { label: 'Mar + 4', value: 180 },
  { label: 'Mar + 5', value: 200 },
  { label: 'Mar + 6', value: 190 },
  { label: 'Mar + 7', value: 220 },
]

const breakdown = [
  { avatar: avatar1, name: 'John Doe', department: 'Engineering', gross: '8,500', deductions: '1,200', net: '7,300', status: 'Paid' },
  { avatar: avatar2, name: 'Jane Smith', department: 'Marketing', gross: '7,200', deductions: '900', net: '6,300', status: 'Pending' },
  { avatar: avatar3, name: 'Michael Ross', department: 'Sales', gross: '9,000', deductions: '1,400', net: '7,600', status: 'Paid' },
  { avatar: avatar4, name: 'Sarah Connor', department: 'Engineering', gross: '10,500', deductions: '1,800', net: '8,700', status: 'Paid' },
  { avatar: avatar5, name: 'David Miller', department: 'Casual', gross: '4,500', deductions: '500', net: '4,000', status: 'Paid' },
  { avatar: avatar6, name: 'Rachel Zane', department: 'Legal', gross: '9,200', deductions: '1,300', net: '7,900', status: 'Pending' },
  { avatar: avatar1, name: 'Louis Litt', department: 'Legal', gross: '11,000', deductions: '2,000', net: '9,000', status: 'Paid' },
  { avatar: avatar2, name: 'Harvey Specter', department: 'Legal', gross: '15,000', deductions: '3,000', net: '12,000', status: 'Paid' },
]

const badgeStyles = {
  Paid: 'bg-[var(--c-green-soft)] text-[var(--c-green)]',
  Pending: 'bg-[var(--c-amber-soft)] text-[var(--c-amber)]',
}

const tableHeaders = [
  { label: 'Employee', icon: User, className: 'px-6' },
  { label: 'Department', icon: Building2, className: 'w-[150px] px-2' },
  { label: 'Gross ($)', icon: Banknote, className: 'w-[120px] px-2' },
  { label: 'Deductions', icon: MinusCircle, className: 'w-[130px] px-2' },
  { label: 'Net Pay', icon: Wallet, className: 'w-[120px] px-2' },
  { label: 'Status', icon: CheckCircle2, className: 'w-[110px] px-2' },
]

export default function PayrollPage() {
  const cc = useChartColors()
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm">
          <span className="text-[var(--c-muted)]">Home</span>
          <ChevronRight className="size-3.5 text-[var(--c-muted)]" />
          <span className="font-semibold text-[var(--c-heading)]">Payroll</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold leading-[1.2] text-[var(--c-heading)]">Workforce Payroll</h1>
            <p className="text-sm leading-normal text-[var(--c-text)]">Manage and execute payroll for the current period.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="flex w-[180px] items-center justify-between rounded-lg border border-[var(--c-border)] bg-[var(--c-card)] px-3 py-2 text-sm text-[var(--c-heading)] transition-colors hover:bg-[var(--c-bg)]"
            >
              October 2023
              <ChevronDown className="size-4 text-[var(--c-text2)]" />
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--c-primary)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0px_8px_10px_rgba(37,99,235,0.2)] transition-colors hover:bg-[var(--c-primary-hover)]"
            >
              <Play className="size-[18px]" />
              Run Payroll
            </button>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col gap-3 rounded-2xl border border-[var(--c-border)] bg-[var(--c-card)] p-6 shadow-[0px_6px_9px_rgba(0,0,0,0.07)]"
            >
              <div className="flex items-center gap-3">
                <div className={`flex size-9 items-center justify-center rounded-[10px] border ${s.iconBox}`}>
                  <s.icon className={`size-[18px] ${s.iconColor}`} />
                </div>
                <p className="text-xs font-semibold uppercase text-[var(--c-text)]">{s.label}</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[32px] font-bold leading-normal text-[var(--c-heading)]">{s.value}</p>
                <p className="text-[13px] text-[var(--c-text)]">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Payroll Trends */}
        <div className="flex flex-col gap-4">
          <h2 className="text-base font-semibold leading-[1.2] text-[var(--c-heading)]">Payroll Trends</h2>
          <div className="h-[300px] w-full rounded-2xl border border-[var(--c-border)] bg-[var(--c-card)] p-6 shadow-[0px_6px_9px_rgba(0,0,0,0.07)]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={trendData} margin={{ top: 10, right: 0, bottom: 0, left: 0 }} barCategoryGap="35%">
                <XAxis
                  dataKey="label"
                  tick={{ fill: cc.axis, fontSize: 12 }}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{
                    borderRadius: 8,
                    border: `1px solid ${cc.grid}`,
                    boxShadow: '0px 6px 18px -6px rgba(0,0,0,0.1)',
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="value" name="Payroll" radius={[4, 4, 0, 0]} maxBarSize={40}>
                  {trendData.map((d) => (
                    <Cell key={d.label} fill={cc.primary} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Payroll Breakdown */}
        <div className="flex flex-col gap-4">
          <h2 className="text-base font-semibold leading-[1.2] text-[var(--c-heading)]">Payroll Breakdown</h2>
          <div className="overflow-x-auto rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)]">
            <table className="w-full min-w-[900px] text-left">
              <thead>
                <tr className="border-b border-[var(--c-border)] bg-[var(--c-primary-soft)]">
                  {tableHeaders.map((h) => (
                    <th key={h.label} className={`py-3 ${h.className}`}>
                      <div className="flex items-center gap-2">
                        <h.icon className="size-4 text-[var(--c-primary)]" />
                        <span className="text-xs font-semibold uppercase text-[var(--c-primary)]">{h.label}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {breakdown.map((r) => (
                  <tr key={r.name} className="border-b border-[var(--c-border)] last:border-b-0 hover:bg-[var(--c-bg)]">
                    <td className="px-6 py-3.5">
                      <div className="flex items-center gap-3">
                        <img src={r.avatar} alt={r.name} className="size-8 rounded-full object-cover" />
                        <span className="whitespace-nowrap text-sm font-semibold text-[var(--c-heading)]">{r.name}</span>
                      </div>
                    </td>
                    <td className="px-2 py-3.5 text-sm text-[var(--c-heading)]">{r.department}</td>
                    <td className="px-2 py-3.5 text-sm text-[var(--c-heading)]">{r.gross}</td>
                    <td className="px-2 py-3.5 text-sm text-[var(--c-red)]">{r.deductions}</td>
                    <td className="px-2 py-3.5 text-sm font-bold text-[var(--c-heading)]">{r.net}</td>
                    <td className="px-2 py-3.5">
                      <span className={`inline-flex rounded-full px-2 py-1 text-[11px] font-bold uppercase ${badgeStyles[r.status]}`}>
                        {r.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
