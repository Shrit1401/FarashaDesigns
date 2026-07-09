import { Download, Users, CalendarClock, Clock, Banknote } from 'lucide-react'
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
import avatar1 from '../../assets/avatar1.png'
import avatar2 from '../../assets/avatar2.png'
import avatar3 from '../../assets/avatar3.png'
import avatar4 from '../../assets/avatar4.png'
import avatar5 from '../../assets/avatar5.png'
import avatar6 from '../../assets/avatar6.png'

const stats = [
  {
    label: 'Total Employees',
    value: '1,284',
    sub: '+12 from last month',
    subClass: 'text-[var(--c-green)]',
    icon: Users,
    iconBox: 'bg-[var(--c-primary-soft)] border-[rgba(37,99,235,0.2)]',
    iconColor: 'text-[var(--c-primary)]',
  },
  {
    label: 'On Leave Today',
    value: '18',
    sub: '4 starting today',
    subClass: 'text-[var(--c-text)]',
    icon: CalendarClock,
    iconBox: 'bg-[var(--c-green-soft)] border-[rgba(16,185,129,0.2)]',
    iconColor: 'text-[var(--c-green)]',
  },
  {
    label: 'Pending Approvals',
    value: '24',
    sub: '12 urgent',
    subClass: 'text-[var(--c-text)]',
    icon: Clock,
    iconBox: 'bg-[var(--c-green-soft)] border-[rgba(16,185,129,0.2)]',
    iconColor: 'text-[var(--c-green)]',
  },
  {
    label: 'Next Payroll Date',
    value: 'Oct 28',
    sub: 'In 5 days',
    subClass: 'text-[var(--c-text)]',
    icon: Banknote,
    iconBox: 'bg-[var(--c-primary-soft)] border-[rgba(37,99,235,0.2)]',
    iconColor: 'text-[var(--c-primary)]',
  },
]

const headcountData = [
  { month: 'Jan', value: 1010 },
  { month: 'Feb', value: 1035 },
  { month: 'Mar', value: 1015 },
  { month: 'Apr', value: 1070 },
  { month: 'May', value: 1120 },
  { month: 'Jun', value: 1095 },
  { month: 'Jul', value: 1150 },
  { month: 'Aug', value: 1135 },
  { month: 'Sep', value: 1230 },
  { month: 'Oct', value: 1300 },
  { month: 'Nov', value: 1260 },
  { month: 'Dec', value: 1284 },
]

const getDepartments = (cc) => [
  { name: 'Engineering', value: 45, color: cc.green },
  { name: 'Marketing', value: 22, color: cc.cyan },
  { name: 'Sales', value: 18, color: cc.primary },
  { name: 'HR', value: 15, color: cc.amber },
]

const badgeStyles = {
  Pending: 'bg-[var(--c-amber-soft)] text-[var(--c-amber)]',
  Approved: 'bg-[var(--c-green-soft)] text-[var(--c-green)]',
  Rejected: 'bg-[var(--c-red-soft)] text-[var(--c-red)]',
}

const leaveRequests = [
  { avatar: avatar1, name: 'John Doe', type: 'Annual Leave', from: 'Oct 24, 2023', to: 'Oct 28, 2023', status: 'Pending' },
  { avatar: avatar2, name: 'Jane Smith', type: 'Sick Leave', from: 'Oct 25, 2023', to: 'Oct 25, 2023', status: 'Approved' },
  { avatar: avatar3, name: 'Michael Ross', type: 'Annual Leave', from: 'Nov 01, 2023', to: 'Nov 15, 2023', status: 'Pending' },
  { avatar: avatar4, name: 'Sarah Connor', type: 'Maternity', from: 'Dec 10, 2023', to: 'Mar 10, 2024', status: 'Approved' },
  { avatar: avatar5, name: 'David Miller', type: 'Casual', from: 'Oct 26, 2023', to: 'Oct 27, 2023', status: 'Rejected' },
  { avatar: avatar6, name: 'Sofia Garcia', type: 'Annual', from: 'Oct 30, 2023', to: 'Nov 03, 2023', status: 'Pending' },
]

function StatusBadge({ status }) {
  return (
    <span className={`inline-flex rounded-md px-2 py-1 text-[11px] font-bold uppercase ${badgeStyles[status]}`}>
      {status}
    </span>
  )
}

export default function DashboardPage() {
  const cc = useChartColors()
  const departments = getDepartments(cc)
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold leading-[1.2] text-[var(--c-heading)]">Employer Dashboard</h1>
            <p className="text-sm leading-normal text-[var(--c-text)]">
              Welcome back, Sarah. Here's a summary of your workforce.
            </p>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 self-start rounded-lg border border-[var(--c-primary)] bg-[var(--c-card)] px-4 py-2.5 text-sm font-semibold text-[var(--c-primary)] shadow-[0px_6px_8px_rgba(37,99,235,0.1)] transition-colors hover:bg-[var(--c-primary-soft)] sm:self-auto"
          >
            <Download className="size-[18px]" />
            Export Report
          </button>
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
                <p className={`text-[13px] ${s.subClass}`}>{s.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Charts row */}
        <div className="flex flex-col gap-6 xl:flex-row xl:items-stretch">
          {/* Headcount Trend */}
          <div className="flex min-w-0 flex-1 flex-col gap-5 rounded-2xl border border-[var(--c-border)] bg-[var(--c-card)] p-6 shadow-[0px_6px_9px_rgba(0,0,0,0.07)]">
            <h2 className="text-base font-semibold leading-[1.2] text-[var(--c-heading)]">Headcount Trend</h2>
            <div className="flex flex-1 flex-col gap-3 rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] p-4">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-0.5">
                  <p className="text-[13px] font-semibold text-[var(--c-heading)]">1,284</p>
                  <p className="text-xs text-[var(--c-text)]">Current headcount</p>
                </div>
                <span className="rounded-full bg-[var(--c-green-soft)] px-2 py-1 text-xs font-bold text-[var(--c-green)]">+12.5%</span>
              </div>
              <div className="h-[220px] w-full rounded-[10px] border border-[var(--c-border)] bg-[var(--c-card)] p-2 xl:flex-1">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={headcountData} margin={{ top: 10, right: 12, bottom: 0, left: -14 }}>
                    <CartesianGrid stroke={cc.grid} vertical={false} />
                    <XAxis
                      dataKey="month"
                      tick={{ fill: cc.axis, fontSize: 11 }}
                      tickLine={false}
                      axisLine={false}
                      interval="preserveStartEnd"
                    />
                    <YAxis
                      domain={[800, 1400]}
                      ticks={[800, 1000, 1200, 1400]}
                      tick={{ fill: cc.axis, fontSize: 11 }}
                      tickFormatter={(v) => v.toLocaleString()}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip
                      cursor={{ stroke: cc.grid }}
                      contentStyle={{
                        borderRadius: 8,
                        border: `1px solid ${cc.grid}`,
                        boxShadow: '0px 6px 18px -6px rgba(0,0,0,0.1)',
                        fontSize: 12,
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      name="Headcount"
                      stroke={cc.primary}
                      strokeWidth={2.5}
                      dot={{ r: 4, fill: cc.primary, strokeWidth: 0 }}
                      activeDot={{ r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Department Breakdown */}
          <div className="flex flex-col gap-5 rounded-2xl border border-[var(--c-border)] bg-[var(--c-card)] p-6 shadow-[0px_6px_9px_rgba(0,0,0,0.07)] xl:w-[400px] xl:shrink-0">
            <h2 className="text-base font-semibold leading-[1.2] text-[var(--c-heading)]">Department Breakdown</h2>
            <div className="flex flex-1 flex-col gap-4 rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] p-4">
              <div className="relative mx-auto size-[180px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={departments}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={60}
                      outerRadius={90}
                      startAngle={90}
                      endAngle={-270}
                      stroke="none"
                    >
                      {departments.map((d) => (
                        <Cell key={d.name} fill={d.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(v, n) => [`${v}%`, n]}
                      contentStyle={{
                        borderRadius: 8,
                        border: `1px solid ${cc.grid}`,
                        fontSize: 12,
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-xs text-[var(--c-muted)]">Departments</p>
                  <p className="text-lg font-bold text-[var(--c-heading)]">1,284</p>
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                {departments.map((d) => (
                  <div key={d.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="size-3 rounded-[3px]" style={{ backgroundColor: d.color }} />
                      <span className="text-[13px] text-[var(--c-text)]">{d.name}</span>
                    </div>
                    <span className="text-[13px] font-semibold text-[var(--c-heading)]">{d.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Leave Requests */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold leading-[1.2] text-[var(--c-heading)]">Recent Leave Requests</h2>
            <button
              type="button"
              className="rounded-lg border border-[var(--c-primary)] bg-[var(--c-primary-soft)] px-4 py-2.5 text-sm font-semibold text-[var(--c-heading)] transition-colors hover:bg-[var(--c-primary-soft2)]"
            >
              View All
            </button>
          </div>
          {/* Mobile card list */}
          <div className="flex flex-col gap-3 md:hidden">
            {leaveRequests.map((r) => (
              <div
                key={r.name}
                className="flex flex-col gap-3 rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] p-4 shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <img src={r.avatar} alt={r.name} className="size-9 shrink-0 rounded-full object-cover" />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-[var(--c-heading)]">{r.name}</p>
                      <p className="truncate text-[13px] text-[var(--c-text)]">{r.type}</p>
                    </div>
                  </div>
                  <StatusBadge status={r.status} />
                </div>
                <div className="grid grid-cols-2 gap-3 border-t border-[var(--c-border)] pt-3">
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase text-[var(--c-muted)]">From Date</p>
                    <p className="truncate text-sm text-[var(--c-heading)]">{r.from}</p>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase text-[var(--c-muted)]">To Date</p>
                    <p className="truncate text-sm text-[var(--c-heading)]">{r.to}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop / tablet table */}
          <div className="hidden overflow-x-auto rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)] md:block">
            <table className="w-full min-w-[760px] text-left">
              <thead>
                <tr className="border-b border-[var(--c-border)] bg-[var(--c-primary-soft)] text-xs font-semibold uppercase text-[var(--c-primary)]">
                  <th className="px-6 py-3 font-semibold">Employee</th>
                  <th className="w-[150px] px-2 py-3 font-semibold">Type</th>
                  <th className="w-[150px] px-2 py-3 font-semibold">From Date</th>
                  <th className="w-[150px] px-2 py-3 font-semibold">To Date</th>
                  <th className="w-[130px] px-2 py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {leaveRequests.map((r) => (
                  <tr key={r.name} className="border-b border-[var(--c-border)] last:border-b-0 hover:bg-[var(--c-bg)]">
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-3">
                        <img src={r.avatar} alt={r.name} className="size-9 rounded-full object-cover" />
                        <span className="text-sm text-[var(--c-heading)]">{r.name}</span>
                      </div>
                    </td>
                    <td className="px-2 py-3 text-sm text-[var(--c-heading)]">{r.type}</td>
                    <td className="px-2 py-3 text-sm text-[var(--c-heading)]">{r.from}</td>
                    <td className="px-2 py-3 text-sm text-[var(--c-heading)]">{r.to}</td>
                    <td className="px-2 py-3">
                      <StatusBadge status={r.status} />
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
