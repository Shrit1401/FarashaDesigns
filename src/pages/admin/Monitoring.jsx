import {
  ChevronRight,
  Activity,
  Timer,
  AlertTriangle,
  Users,
  TrendingUp,
  TrendingDown,
} from 'lucide-react'
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'
import { useChartColors } from '../../theme/ThemeContext'

const stats = [
  {
    label: 'Uptime (30d)',
    value: '99.98%',
    trend: '+0.02%',
    up: true,
    icon: Activity,
    iconBox: 'bg-[var(--c-green-soft)] border-[rgba(16,185,129,0.2)]',
    iconColor: 'text-[var(--c-green)]',
    gradient: 'from-[rgba(16,185,129,0.1)] to-[rgba(16,185,129,0)]',
  },
  {
    label: 'Avg Response',
    value: '142ms',
    trend: '-8ms',
    up: true,
    icon: Timer,
    iconBox: 'bg-[var(--c-primary-soft)] border-[rgba(37,99,235,0.2)]',
    iconColor: 'text-[var(--c-primary)]',
    gradient: 'from-[rgba(37,99,235,0.1)] to-[rgba(37,99,235,0)]',
  },
  {
    label: 'Error Rate',
    value: '0.03%',
    trend: '+0.01%',
    up: false,
    icon: AlertTriangle,
    iconBox: 'bg-[var(--c-red-soft)] border-[rgba(239,68,68,0.2)]',
    iconColor: 'text-[var(--c-red)]',
    gradient: 'from-[rgba(239,68,68,0.1)] to-[rgba(239,68,68,0)]',
  },
  {
    label: 'Active Sessions',
    value: '3,241',
    trend: '+14.2%',
    up: true,
    icon: Users,
    iconBox: 'bg-[var(--c-purple-soft)] border-[rgba(139,92,246,0.2)]',
    iconColor: 'text-[var(--c-purple)]',
    gradient: 'from-[rgba(139,92,246,0.1)] to-[rgba(139,92,246,0)]',
  },
]

const responseData = [
  { time: '00:00', ms: 128 },
  { time: '02:00', ms: 115 },
  { time: '04:00', ms: 108 },
  { time: '06:00', ms: 124 },
  { time: '08:00', ms: 168 },
  { time: '10:00', ms: 195 },
  { time: '12:00', ms: 176 },
  { time: '14:00', ms: 188 },
  { time: '16:00', ms: 162 },
  { time: '18:00', ms: 148 },
  { time: '20:00', ms: 136 },
  { time: '22:00', ms: 130 },
]

const statusStyles = {
  Operational: { pill: 'bg-[var(--c-green-soft)] text-[var(--c-green)]', dot: 'bg-[var(--c-green)]' },
  Degraded: { pill: 'bg-[var(--c-amber-soft)] text-[var(--c-amber)]', dot: 'bg-[var(--c-amber)]' },
  Down: { pill: 'bg-[var(--c-red-soft)] text-[var(--c-red)]', dot: 'bg-[var(--c-red)]' },
}

const services = [
  { name: 'API Gateway', status: 'Operational', checked: 'Checked 1m ago' },
  { name: 'Auth Service', status: 'Operational', checked: 'Checked 1m ago' },
  { name: 'Payroll Engine', status: 'Operational', checked: 'Checked 2m ago' },
  { name: 'Notifications', status: 'Degraded', checked: 'Checked 1m ago' },
  { name: 'Database', status: 'Operational', checked: 'Checked 30s ago' },
  { name: 'File Storage', status: 'Operational', checked: 'Checked 3m ago' },
]

const severityStyles = {
  High: 'bg-[var(--c-red-soft)] text-[var(--c-red)]',
  Medium: 'bg-[var(--c-amber-soft)] text-[var(--c-amber)]',
  Low: 'bg-[var(--c-primary-soft)] text-[var(--c-primary)]',
}

const incidents = [
  { title: 'Notification delivery delays in EU region', severity: 'Medium', date: 'Jan 21, 2024', duration: '42 min' },
  { title: 'Elevated API latency during payroll runs', severity: 'Low', date: 'Jan 17, 2024', duration: '18 min' },
  { title: 'Database failover triggered in us-east-1', severity: 'High', date: 'Jan 09, 2024', duration: '1h 05m' },
]

export default function MonitoringPage() {
  const cc = useChartColors()
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-8">
        {/* Page header */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-[13px] font-medium">
            <span className="text-[var(--c-text)]">Admin</span>
            <ChevronRight className="size-3.5 text-[var(--c-muted)]" />
            <span className="text-[var(--c-heading)]">Monitoring</span>
          </div>
          <h1 className="text-[28px] font-bold leading-tight text-[var(--c-heading)]">
            System Monitoring
          </h1>
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
                  <p className="text-[32px] font-bold leading-none text-[var(--c-heading)]">
                    {s.value}
                  </p>
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
          {/* API Response Time */}
          <div className="flex min-w-0 flex-1 flex-col gap-5 rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] p-6 shadow-[0px_6px_9px_rgba(0,0,0,0.07)]">
            <p className="text-base font-semibold text-[var(--c-heading)]">
              API Response Time (24h)
            </p>
            <div className="flex flex-1 flex-col gap-3 rounded-lg border border-[var(--c-border)] bg-[var(--c-card)] p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-col gap-0.5">
                  <p className="text-[13px] font-semibold text-[var(--c-heading)]">Latency</p>
                  <p className="text-xs text-[var(--c-text)]">p95 across all endpoints • 142ms avg</p>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-[var(--c-text)]">
                  <span className="size-2.5 rounded-[2px] bg-[var(--c-primary)]" /> Response time
                </span>
              </div>
              <div className="h-56 w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] pt-3 pr-3">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={responseData} margin={{ top: 8, right: 4, bottom: 4, left: 0 }}>
                    <defs>
                      <linearGradient id="latencyFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={cc.primary} stopOpacity={0.25} />
                        <stop offset="100%" stopColor={cc.primary} stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke={cc.grid} vertical={false} />
                    <XAxis
                      dataKey="time"
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: cc.axis, fontSize: 11 }}
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: cc.axis, fontSize: 11 }}
                      tickFormatter={(v) => `${v}ms`}
                      width={48}
                      domain={[80, 220]}
                    />
                    <Tooltip
                      formatter={(v) => `${v}ms`}
                      contentStyle={{
                        borderRadius: 8,
                        border: `1px solid ${cc.grid}`,
                        fontSize: 12,
                        boxShadow: '0px 6px 18px -6px rgba(0,0,0,0.15)',
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="ms"
                      name="Response time"
                      stroke={cc.primary}
                      strokeWidth={2}
                      fill="url(#latencyFill)"
                      activeDot={{ r: 4 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Service Status */}
          <div className="flex flex-col gap-5 rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] p-6 shadow-[0px_6px_9px_rgba(0,0,0,0.07)] xl:w-[400px]">
            <p className="text-base font-semibold text-[var(--c-heading)]">Service Status</p>
            <div className="flex flex-col">
              {services.map((s) => (
                <div
                  key={s.name}
                  className="flex items-center gap-3 border-b border-[var(--c-border)] py-3.5 last:border-b-0"
                >
                  <span className={`size-2.5 shrink-0 rounded-full ${statusStyles[s.status].dot}`} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-[var(--c-heading)]">
                      {s.name}
                    </p>
                    <p className="truncate text-xs text-[var(--c-text2)]">{s.checked}</p>
                  </div>
                  <span
                    className={`inline-flex shrink-0 rounded-[20px] px-2.5 py-1 text-xs font-semibold shadow-[0px_2px_4px_rgba(0,0,0,0.07)] ${statusStyles[s.status].pill}`}
                  >
                    {s.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Incidents */}
        <div className="flex flex-col gap-5 rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] p-6 shadow-[0px_6px_9px_rgba(0,0,0,0.07)]">
          <p className="text-base font-semibold text-[var(--c-heading)]">Recent Incidents</p>
          <div className="flex flex-col">
            {incidents.map((i) => (
              <div
                key={i.title}
                className="flex flex-col gap-2 border-b border-[var(--c-border)] py-4 transition-colors last:border-b-0 hover:bg-[var(--c-bg)] sm:flex-row sm:items-center sm:gap-5"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-[var(--c-heading)]">{i.title}</p>
                  <p className="text-xs text-[var(--c-text2)]">
                    {i.date} • Duration {i.duration}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2.5">
                  <span
                    className={`inline-flex rounded-[20px] px-2.5 py-1 text-xs font-semibold shadow-[0px_2px_4px_rgba(0,0,0,0.07)] ${severityStyles[i.severity]}`}
                  >
                    {i.severity}
                  </span>
                  <span className="inline-flex rounded-[20px] bg-[var(--c-green-soft)] px-2.5 py-1 text-xs font-semibold text-[var(--c-green)] shadow-[0px_2px_4px_rgba(0,0,0,0.07)]">
                    Resolved
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
