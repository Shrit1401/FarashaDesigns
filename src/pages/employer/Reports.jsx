import {
  ChevronRight,
  ChevronDown,
  Calendar,
  Download,
  CalendarPlus,
  Users,
  UserMinus,
  ClipboardCheck,
  Banknote,
  TrendingUp,
  TrendingDown,
  CalendarClock,
  Hourglass,
  ShieldCheck,
  PieChart as PieChartIcon,
} from 'lucide-react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from 'recharts'
import { useChartColors } from '../../theme/ThemeContext'

const stats = [
  {
    label: 'Headcount',
    value: '248',
    trend: '+6.2%',
    up: true,
    icon: Users,
    iconBox: 'bg-[var(--c-primary-soft)] border-[rgba(37,99,235,0.2)]',
    iconColor: 'text-[var(--c-primary)]',
    gradient: 'from-[rgba(37,99,235,0.1)] to-[rgba(37,99,235,0)]',
  },
  {
    label: 'Turnover Rate',
    value: '3.4%',
    trend: '-0.8%',
    up: false,
    icon: UserMinus,
    iconBox: 'bg-[var(--c-red-soft)] border-[rgba(239,68,68,0.2)]',
    iconColor: 'text-[var(--c-red)]',
    gradient: 'from-[rgba(239,68,68,0.1)] to-[rgba(239,68,68,0)]',
  },
  {
    label: 'Avg Attendance',
    value: '96.8%',
    trend: '+1.1%',
    up: true,
    icon: ClipboardCheck,
    iconBox: 'bg-[var(--c-green-soft)] border-[rgba(16,185,129,0.2)]',
    iconColor: 'text-[var(--c-green)]',
    gradient: 'from-[rgba(16,185,129,0.1)] to-[rgba(16,185,129,0)]',
  },
  {
    label: 'Payroll Cost',
    value: '$1.24M',
    trend: '+4.6%',
    up: true,
    icon: Banknote,
    iconBox: 'bg-[var(--c-purple-soft)] border-[rgba(139,92,246,0.2)]',
    iconColor: 'text-[var(--c-purple)]',
    gradient: 'from-[rgba(139,92,246,0.1)] to-[rgba(139,92,246,0)]',
  },
]

const headcountData = [
  { month: 'Jan', headcount: 212 },
  { month: 'Feb', headcount: 216 },
  { month: 'Mar', headcount: 220 },
  { month: 'Apr', headcount: 225 },
  { month: 'May', headcount: 228 },
  { month: 'Jun', headcount: 231 },
  { month: 'Jul', headcount: 234 },
  { month: 'Aug', headcount: 238 },
  { month: 'Sep', headcount: 240 },
  { month: 'Oct', headcount: 243 },
  { month: 'Nov', headcount: 246 },
  { month: 'Dec', headcount: 248 },
]

const getDepartments = (cc) => [
  { name: 'Engineering', value: 38, color: cc.primary },
  { name: 'Operations', value: 24, color: cc.green },
  { name: 'Sales', value: 20, color: cc.amber },
  { name: 'Other', value: 18, color: cc.purple },
]

const reports = [
  {
    title: 'Payroll Summary',
    description: 'Gross-to-net breakdown across all pay runs.',
    lastGenerated: 'Jan 20, 2024',
    icon: Banknote,
    iconBox: 'bg-[var(--c-primary-soft)] border-[rgba(37,99,235,0.2)]',
    iconColor: 'text-[var(--c-primary)]',
  },
  {
    title: 'Attendance Report',
    description: 'Daily attendance, lateness, and absences by team.',
    lastGenerated: 'Jan 19, 2024',
    icon: ClipboardCheck,
    iconBox: 'bg-[var(--c-green-soft)] border-[rgba(16,185,129,0.2)]',
    iconColor: 'text-[var(--c-green)]',
  },
  {
    title: 'Leave Balance',
    description: 'Accrued, used, and remaining leave per employee.',
    lastGenerated: 'Jan 18, 2024',
    icon: CalendarClock,
    iconBox: 'bg-[var(--c-amber-soft)] border-[rgba(217,119,6,0.2)]',
    iconColor: 'text-[var(--c-amber)]',
  },
  {
    title: 'Overtime Analysis',
    description: 'Overtime hours and cost trends by department.',
    lastGenerated: 'Jan 15, 2024',
    icon: Hourglass,
    iconBox: 'bg-[var(--c-purple-soft)] border-[rgba(139,92,246,0.2)]',
    iconColor: 'text-[var(--c-purple)]',
  },
  {
    title: 'Headcount Report',
    description: 'Hires, exits, and net headcount movement.',
    lastGenerated: 'Jan 12, 2024',
    icon: Users,
    iconBox: 'bg-[var(--c-teal-soft)] border-[rgba(13,148,136,0.2)]',
    iconColor: 'text-[var(--c-teal)]',
  },
  {
    title: 'Compliance Audit',
    description: 'Statutory filings and document expiry checks.',
    lastGenerated: 'Jan 10, 2024',
    icon: ShieldCheck,
    iconBox: 'bg-[var(--c-red-soft)] border-[rgba(239,68,68,0.2)]',
    iconColor: 'text-[var(--c-red)]',
  },
]

export default function ReportsPage() {
  const cc = useChartColors()
  const departments = getDepartments(cc)
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-8">
        {/* Page header */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-[13px] font-medium">
            <span className="text-[var(--c-text)]">Employer</span>
            <ChevronRight className="size-3.5 text-[var(--c-muted)]" />
            <span className="text-[var(--c-heading)]">Reports</span>
          </div>
          <h1 className="text-[28px] font-bold leading-tight text-[var(--c-heading)]">Reports</h1>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            className="flex min-h-9 items-center justify-between gap-2 rounded-lg border border-[var(--c-border)] bg-[var(--c-card)] px-3 py-2.5 text-sm font-medium text-[var(--c-heading)] shadow-[0px_2px_4px_rgba(0,0,0,0.04)] transition-colors hover:bg-[var(--c-hover)] sm:w-[220px]"
          >
            <span className="flex items-center gap-2">
              <Calendar className="size-[18px] text-[var(--c-muted)]" />
              Last 30 days
            </span>
            <ChevronDown className="size-4 text-[var(--c-muted)]" />
          </button>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex min-h-9 flex-1 items-center justify-center gap-2 rounded-lg border border-[var(--c-primary)] bg-[var(--c-primary-soft)] px-4 py-2.5 text-sm font-semibold text-[var(--c-primary)] transition-colors hover:bg-[var(--c-primary-soft2)] sm:flex-none"
            >
              <Download className="size-4" />
              Export
            </button>
            <button
              type="button"
              className="flex min-h-9 flex-1 items-center justify-center gap-2 rounded-lg bg-[var(--c-primary)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0px_8px_9px_rgba(37,99,235,0.2)] transition-colors hover:bg-[var(--c-primary-hover)] sm:flex-none"
            >
              <CalendarPlus className="size-4" />
              Schedule Report
            </button>
          </div>
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

        {/* Charts row */}
        <div className="flex flex-col gap-6 xl:flex-row xl:items-stretch">
          {/* Headcount Trend */}
          <div className="flex min-w-0 flex-1 flex-col gap-5 rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] p-6 shadow-[0px_6px_9px_rgba(0,0,0,0.07)]">
            <p className="text-base font-semibold text-[var(--c-heading)]">Headcount Trend</p>
            <div className="flex flex-1 flex-col gap-3 rounded-lg border border-[var(--c-border)] bg-[var(--c-card)] p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-col gap-0.5">
                  <p className="text-[13px] font-semibold text-[var(--c-heading)]">Headcount Trend</p>
                  <p className="text-xs text-[var(--c-text)]">Jan-Dec 2024 • 248 employees</p>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-[var(--c-text)]">
                  <span className="size-2.5 rounded-[2px] bg-[var(--c-primary)]" /> Headcount
                </span>
              </div>
              <div className="h-56 w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] pt-3 pr-3">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={headcountData} margin={{ top: 8, right: 4, bottom: 4, left: 0 }}>
                    <CartesianGrid stroke={cc.grid} vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: cc.axis, fontSize: 11 }}
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: cc.axis, fontSize: 11 }}
                      width={36}
                      domain={[200, 260]}
                    />
                    <Tooltip
                      contentStyle={{
                        borderRadius: 8,
                        border: `1px solid ${cc.grid}`,
                        fontSize: 12,
                        boxShadow: '0px 6px 18px -6px rgba(0,0,0,0.15)',
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="headcount"
                      name="Headcount"
                      stroke={cc.primary}
                      strokeWidth={2}
                      dot={false}
                      activeDot={{ r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Department Split */}
          <div className="flex flex-col gap-5 rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] p-6 shadow-[0px_6px_9px_rgba(0,0,0,0.07)] xl:w-[400px]">
            <p className="text-base font-semibold text-[var(--c-heading)]">Department Split</p>
            <div className="flex flex-1 flex-col gap-3 rounded-lg border border-[var(--c-border)] bg-[var(--c-card)] p-4">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-0.5">
                  <p className="text-[13px] font-semibold text-[var(--c-heading)]">Department Split</p>
                  <p className="text-xs text-[var(--c-text)]">Share of employees by department</p>
                </div>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-[var(--c-heading)]">
                  <span className="size-2 rounded-full bg-[var(--c-primary)]" /> 248
                </span>
              </div>
              <div className="flex flex-1 flex-col items-center gap-4 sm:flex-row">
                <div className="relative size-[200px] shrink-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={departments}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={62}
                        outerRadius={90}
                        startAngle={90}
                        endAngle={-270}
                        strokeWidth={0}
                      >
                        {departments.map((d) => (
                          <Cell key={d.name} fill={d.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(v) => `${v}%`}
                        contentStyle={{
                          borderRadius: 8,
                          border: `1px solid ${cc.grid}`,
                          fontSize: 12,
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-xs text-[var(--c-muted)]">Total</p>
                    <p className="text-lg font-bold text-[var(--c-heading)]">248</p>
                  </div>
                </div>
                <div className="flex w-full min-w-0 flex-1 flex-col gap-2.5">
                  {departments.map((d) => (
                    <div key={d.name} className="flex items-center gap-2.5">
                      <span className="size-2.5 shrink-0 rounded-[2px]" style={{ backgroundColor: d.color }} />
                      <p className="min-w-0 flex-1 truncate text-xs text-[var(--c-text)]">{d.name}</p>
                      <p className="text-xs font-semibold text-[var(--c-heading)]">{d.value}%</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Available Reports */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <PieChartIcon className="size-[18px] text-[var(--c-primary)]" />
            <p className="text-base font-semibold text-[var(--c-heading)]">Available Reports</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {reports.map((r) => (
              <div
                key={r.title}
                className="flex flex-col gap-4 rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] p-6 shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)]"
              >
                <div className="flex items-start gap-3">
                  <div className={`flex size-10 shrink-0 items-center justify-center rounded-[10px] border ${r.iconBox}`}>
                    <r.icon className={`size-5 ${r.iconColor}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-[var(--c-heading)]">{r.title}</p>
                    <p className="mt-0.5 text-xs text-[var(--c-text2)]">{r.description}</p>
                  </div>
                </div>
                <div className="mt-auto flex items-center justify-between gap-3 border-t border-[var(--c-border)] pt-4">
                  <p className="text-xs text-[var(--c-muted)]">Last generated {r.lastGenerated}</p>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="rounded-lg border border-[var(--c-primary)] bg-[var(--c-primary-soft)] px-3 py-1.5 text-xs font-semibold text-[var(--c-primary)] transition-colors hover:bg-[var(--c-primary-soft2)]"
                    >
                      Generate
                    </button>
                    <button
                      type="button"
                      className="rounded-md p-1.5 text-[var(--c-muted)] transition-colors hover:bg-[var(--c-hover)] hover:text-[var(--c-text)]"
                    >
                      <Download className="size-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
