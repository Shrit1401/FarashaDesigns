import {
  Users,
  Building2,
  CalendarClock,
  Banknote,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  MoreHorizontal,
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
import avatar1 from '../../assets/avatar1.png'
import avatar2 from '../../assets/avatar2.png'
import avatar3 from '../../assets/avatar3.png'
import avatar4 from '../../assets/avatar4.png'
import avatar5 from '../../assets/avatar5.png'

const stats = [
  {
    label: 'Total Users',
    value: '12,482',
    trend: '+12.5%',
    up: true,
    icon: Users,
    iconBox: 'bg-[var(--c-primary-soft)] border-[rgba(37,99,235,0.2)]',
    iconColor: 'text-[var(--c-primary)]',
    gradient: 'from-[rgba(37,99,235,0.1)] to-[rgba(37,99,235,0)]',
  },
  {
    label: 'Active Employers',
    value: '856',
    trend: '+3.2%',
    up: true,
    icon: Building2,
    iconBox: 'bg-[var(--c-green-soft)] border-[rgba(16,185,129,0.2)]',
    iconColor: 'text-[var(--c-green)]',
    gradient: 'from-[rgba(16,185,129,0.1)] to-[rgba(16,185,129,0)]',
  },
  {
    label: 'Leave Requests',
    value: '48',
    trend: '-5.4%',
    up: false,
    icon: CalendarClock,
    iconBox: 'bg-[var(--c-red-soft)] border-[rgba(239,68,68,0.2)]',
    iconColor: 'text-[var(--c-red)]',
    gradient: 'from-[rgba(239,68,68,0.1)] to-[rgba(239,68,68,0)]',
  },
  {
    label: 'Revenue (YTD)',
    value: '$248k',
    trend: '+18.7%',
    up: true,
    icon: Banknote,
    iconBox: 'bg-[var(--c-purple-soft)] border-[rgba(139,92,246,0.2)]',
    iconColor: 'text-[var(--c-purple)]',
    gradient: 'from-[rgba(139,92,246,0.1)] to-[rgba(139,92,246,0)]',
  },
]

const activityData = [
  { month: 'Jan', users: 4200, growth: 3400 },
  { month: 'Feb', users: 4800, growth: 3900 },
  { month: 'Mar', users: 5400, growth: 4300 },
  { month: 'Apr', users: 6100, growth: 4900 },
  { month: 'May', users: 6800, growth: 5400 },
  { month: 'Jun', users: 7600, growth: 6000 },
  { month: 'Jul', users: 8300, growth: 6700 },
  { month: 'Aug', users: 9100, growth: 7300 },
  { month: 'Sep', users: 9900, growth: 8000 },
  { month: 'Oct', users: 10800, growth: 8800 },
  { month: 'Nov', users: 11600, growth: 9500 },
  { month: 'Dec', users: 12482, growth: 10400 },
]

const getBreakdown = (cc) => [
  { name: 'TechFlow', value: 34, color: cc.primary },
  { name: 'Vertex', value: 26, color: cc.green },
  { name: 'BuildRight', value: 20, color: cc.amber },
  { name: 'Others', value: 20, color: cc.purple },
]

const activity = [
  { avatar: avatar1, name: 'Sarah Jenkins', action: 'Approved leave request', meta: 'TechFlow Inc • 2m ago' },
  { avatar: avatar2, name: 'Michael Chen', action: 'Added new employer', meta: 'Vertex Solutions • 15m ago' },
  { avatar: avatar3, name: 'Emma Watson', action: 'Updated payroll settings', meta: 'System • 1h ago' },
  { avatar: avatar4, name: 'David Miller', action: 'Rejected leave request', meta: 'BuildRight Ltd • 3h ago' },
  { avatar: avatar5, name: 'Sofia Garcia', action: 'New user registered', meta: 'Admin Panel • 5h ago' },
]

export default function DashboardPage() {
  const cc = useChartColors()
  const breakdown = getBreakdown(cc)
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-8">
        {/* Page header */}
        <div className="flex flex-col gap-1">
          <p className="text-[13px] font-medium text-[var(--c-heading)]">Admin</p>
          <h1 className="text-[28px] font-bold leading-tight text-[var(--c-heading)]">Dashboard</h1>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="relative overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] p-6 shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)]"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${s.gradient}`}
              />
              <div className="relative flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex size-9 items-center justify-center rounded-[10px] border ${s.iconBox}`}
                  >
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
                    {s.up ? (
                      <TrendingUp className="size-3.5" />
                    ) : (
                      <TrendingDown className="size-3.5" />
                    )}
                    {s.trend}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts row */}
        <div className="flex flex-col gap-6 xl:flex-row xl:items-stretch">
          {/* Monthly Activity */}
          <div className="flex min-w-0 flex-1 flex-col gap-5 rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] p-6 shadow-[0px_6px_9px_rgba(0,0,0,0.07)]">
            <p className="text-base font-semibold text-[var(--c-heading)]">Monthly Activity</p>
            <div className="flex flex-1 flex-col gap-3 rounded-lg border border-[var(--c-border)] bg-[var(--c-card)] p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-col gap-0.5">
                  <p className="text-[13px] font-semibold text-[var(--c-heading)]">Monthly Activity</p>
                  <p className="text-xs text-[var(--c-text)]">Jan-Dec 2024 • 12,482 users</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="flex items-center gap-1.5 text-xs text-[var(--c-text)]">
                    <span className="size-2.5 rounded-[2px] bg-[var(--c-primary)]" /> Users
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-[var(--c-text)]">
                    <span className="size-2.5 rounded-[2px] bg-[var(--c-green)]" /> Growth
                  </span>
                </div>
              </div>
              <div className="h-56 w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] pt-3 pr-3">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={activityData} margin={{ top: 8, right: 4, bottom: 4, left: 0 }}>
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
                      tickFormatter={(v) => `${Math.round(v / 1000)}k`}
                      width={36}
                      domain={[3000, 13000]}
                    />
                    <Tooltip
                      formatter={(v) => v.toLocaleString()}
                      contentStyle={{
                        borderRadius: 8,
                        border: `1px solid ${cc.grid}`,
                        fontSize: 12,
                        boxShadow: '0px 6px 18px -6px rgba(0,0,0,0.15)',
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="users"
                      name="Users"
                      stroke={cc.primary}
                      strokeWidth={2}
                      dot={false}
                      activeDot={{ r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="growth"
                      name="Growth"
                      stroke={cc.green}
                      strokeWidth={2}
                      dot={false}
                      activeDot={{ r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Employer Breakdown */}
          <div className="flex flex-col gap-5 rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] p-6 shadow-[0px_6px_9px_rgba(0,0,0,0.07)] xl:w-[400px]">
            <p className="text-base font-semibold text-[var(--c-heading)]">Employer Breakdown</p>
            <div className="flex flex-1 flex-col gap-3 rounded-lg border border-[var(--c-border)] bg-[var(--c-card)] p-4">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-0.5">
                  <p className="text-[13px] font-semibold text-[var(--c-heading)]">Employer Breakdown</p>
                  <p className="text-xs text-[var(--c-text)]">Top 4 employers by active users</p>
                </div>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-[var(--c-heading)]">
                  <span className="size-2 rounded-full bg-[var(--c-primary)]" /> 856
                </span>
              </div>
              <div className="flex flex-1 flex-col items-center gap-4 sm:flex-row">
                <div className="relative size-[200px] shrink-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={breakdown}
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
                        {breakdown.map((b) => (
                          <Cell key={b.name} fill={b.color} />
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
                    <p className="text-lg font-bold text-[var(--c-heading)]">856</p>
                  </div>
                </div>
                <div className="flex w-full min-w-0 flex-1 flex-col gap-2.5">
                  {breakdown.map((b) => (
                    <div key={b.name} className="flex items-center gap-2.5">
                      <span
                        className="size-2.5 shrink-0 rounded-[2px]"
                        style={{ backgroundColor: b.color }}
                      />
                      <p className="min-w-0 flex-1 truncate text-xs text-[var(--c-text)]">{b.name}</p>
                      <p className="text-xs font-semibold text-[var(--c-heading)]">{b.value}%</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="flex flex-col gap-5 rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] p-6 shadow-[0px_6px_9px_rgba(0,0,0,0.07)]">
          <div className="flex items-center justify-between gap-4">
            <p className="text-base font-semibold text-[var(--c-heading)]">Recent Activity</p>
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg border border-[var(--c-primary)] bg-[var(--c-primary-soft)] px-4 py-2.5 text-sm font-semibold text-[var(--c-primary)] transition-colors hover:bg-[var(--c-primary-soft2)]"
            >
              View All
              <ArrowRight className="size-4" />
            </button>
          </div>
          <div className="flex flex-col">
            {activity.map((a) => (
              <div
                key={a.name}
                className="flex items-center gap-5 border-b border-[var(--c-border)] py-4 transition-colors last:border-b-0 hover:bg-[var(--c-bg)]"
              >
                <img
                  src={a.avatar}
                  alt={a.name}
                  className="size-9 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm text-[var(--c-heading)]">
                    <span className="font-semibold">{a.name}</span>{' '}
                    <span className="font-normal">{a.action}</span>
                  </p>
                  <p className="truncate text-xs text-[var(--c-text2)]">{a.meta}</p>
                </div>
                <button
                  type="button"
                  className="shrink-0 rounded-md p-1 text-[var(--c-muted)] transition-colors hover:bg-[var(--c-hover)] hover:text-[var(--c-text)]"
                >
                  <MoreHorizontal className="size-[18px]" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
