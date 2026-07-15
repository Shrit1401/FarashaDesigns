import {
  ChevronRight,
  Clock,
  CalendarDays,
  Timer,
  Palmtree,
  LogOut,
  Coffee,
} from 'lucide-react'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from 'recharts'
import { useChartColors } from '../../theme/ThemeContext'

const stats = [
  {
    label: 'Hours Today',
    value: '6h 24m',
    icon: Clock,
    iconBox: 'bg-[var(--c-primary-soft)] border-[rgba(37,99,235,0.2)]',
    iconColor: 'text-[var(--c-primary)]',
  },
  {
    label: 'Hours This Week',
    value: '30h 12m',
    icon: CalendarDays,
    iconBox: 'bg-[var(--c-green-soft)] border-[rgba(16,185,129,0.2)]',
    iconColor: 'text-[var(--c-green)]',
  },
  {
    label: 'Overtime',
    value: '1h 45m',
    icon: Timer,
    iconBox: 'bg-[var(--c-amber-soft)] border-[rgba(217,119,6,0.2)]',
    iconColor: 'text-[var(--c-amber)]',
  },
  {
    label: 'PTO Balance',
    value: '12 days',
    icon: Palmtree,
    iconBox: 'bg-[var(--c-purple-soft)] border-[rgba(139,92,246,0.2)]',
    iconColor: 'text-[var(--c-purple)]',
  },
]

const weekData = [
  { day: 'Mon', hours: 8.2 },
  { day: 'Tue', hours: 7.8 },
  { day: 'Wed', hours: 8.5 },
  { day: 'Thu', hours: 7.9 },
  { day: 'Fri', hours: 6.4 },
]

const entryStatusStyles = {
  Approved: 'bg-[var(--c-green-soft)] text-[var(--c-green)]',
  Pending: 'bg-[var(--c-amber-soft)] text-[var(--c-amber)]',
}

const entries = [
  { date: 'Fri, Jan 24', clockIn: '9:02 AM', clockOut: '—', breakTime: '30m', total: '6h 24m', status: 'Pending' },
  { date: 'Thu, Jan 23', clockIn: '8:55 AM', clockOut: '5:32 PM', breakTime: '45m', total: '7h 52m', status: 'Approved' },
  { date: 'Wed, Jan 22', clockIn: '9:10 AM', clockOut: '6:05 PM', breakTime: '30m', total: '8h 25m', status: 'Approved' },
  { date: 'Tue, Jan 21', clockIn: '8:48 AM', clockOut: '5:15 PM', breakTime: '45m', total: '7h 42m', status: 'Approved' },
  { date: 'Mon, Jan 20', clockIn: '9:00 AM', clockOut: '5:48 PM', breakTime: '30m', total: '8h 18m', status: 'Approved' },
  { date: 'Fri, Jan 17', clockIn: '8:52 AM', clockOut: '4:30 PM', breakTime: '30m', total: '7h 08m', status: 'Approved' },
  { date: 'Thu, Jan 16', clockIn: '9:05 AM', clockOut: '5:56 PM', breakTime: '45m', total: '8h 06m', status: 'Approved' },
]

export default function TimeTrackingPage() {
  const cc = useChartColors()
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-8">
        {/* Page header */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-[13px] font-medium">
            <span className="text-[var(--c-text)]">Employee</span>
            <ChevronRight className="size-3.5 text-[var(--c-muted)]" />
            <span className="text-[var(--c-heading)]">Time Tracking</span>
          </div>
          <h1 className="text-[28px] font-bold leading-tight text-[var(--c-heading)]">Time Tracking</h1>
        </div>

        {/* Clock-in hero */}
        <div className="flex flex-col gap-6 rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] p-6 shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="relative flex size-3 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--c-green)] opacity-60" />
              <span className="relative inline-flex size-3 rounded-full bg-[var(--c-green)]" />
            </span>
            <div className="flex flex-col gap-0.5">
              <p className="text-xl font-bold text-[var(--c-heading)]">Clocked In since 9:02 AM</p>
              <p className="text-sm text-[var(--c-text2)]">
                Elapsed today: <span className="font-semibold text-[var(--c-heading)]">6h 24m</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg border border-[var(--c-red)] bg-[var(--c-red-soft)] px-4 py-2.5 text-sm font-semibold text-[var(--c-red)] transition-colors hover:opacity-90"
            >
              <LogOut className="size-4" />
              Clock Out
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg border border-[var(--c-primary)] bg-[var(--c-primary-soft)] px-4 py-2.5 text-sm font-semibold text-[var(--c-primary)] transition-colors hover:bg-[var(--c-primary-soft2)]"
            >
              <Coffee className="size-4" />
              Start Break
            </button>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] p-6 shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)]"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className={`flex size-9 items-center justify-center rounded-[10px] border ${s.iconBox}`}>
                    <s.icon className={`size-[18px] ${s.iconColor}`} />
                  </div>
                  <p className="text-sm font-medium text-[var(--c-text)]">{s.label}</p>
                </div>
                <p className="text-[32px] font-bold leading-none text-[var(--c-heading)]">{s.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* This Week chart */}
        <div className="flex flex-col gap-5 rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] p-6 shadow-[0px_6px_9px_rgba(0,0,0,0.07)]">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-col gap-0.5">
              <p className="text-base font-semibold text-[var(--c-heading)]">This Week</p>
              <p className="text-xs text-[var(--c-text)]">Hours logged vs 8h daily target</p>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="flex items-center gap-1.5 text-xs text-[var(--c-text)]">
                <span className="size-2.5 rounded-[2px] bg-[var(--c-primary)]" /> Hours
              </span>
              <span className="flex items-center gap-1.5 text-xs text-[var(--c-text)]">
                <span className="size-2.5 rounded-[2px] bg-[var(--c-amber)]" /> Target
              </span>
            </div>
          </div>
          <div className="h-56 w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] pt-3 pr-3">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weekData} margin={{ top: 8, right: 4, bottom: 4, left: 0 }}>
                <CartesianGrid stroke={cc.grid} vertical={false} />
                <XAxis
                  dataKey="day"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: cc.axis, fontSize: 11 }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: cc.axis, fontSize: 11 }}
                  tickFormatter={(v) => `${v}h`}
                  width={36}
                  domain={[0, 10]}
                />
                <Tooltip
                  formatter={(v) => `${v}h`}
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{
                    borderRadius: 8,
                    border: `1px solid ${cc.grid}`,
                    fontSize: 12,
                    boxShadow: '0px 6px 18px -6px rgba(0,0,0,0.15)',
                  }}
                />
                <ReferenceLine y={8} stroke={cc.amber} strokeDasharray="4 4" />
                <Bar dataKey="hours" name="Hours" fill={cc.primary} radius={[6, 6, 0, 0]} maxBarSize={44} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Entries */}
        <div className="flex flex-col gap-5 rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] p-6 shadow-[0px_6px_9px_rgba(0,0,0,0.07)]">
          <p className="text-base font-semibold text-[var(--c-heading)]">Recent Entries</p>
          <div className="overflow-x-auto rounded-xl border border-[var(--c-border)]">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="bg-[var(--c-primary-soft)] text-[13px] font-semibold text-[var(--c-primary)]">
                  <th className="p-4 font-semibold">Date</th>
                  <th className="w-[120px] p-4 font-semibold">Clock In</th>
                  <th className="w-[120px] p-4 font-semibold">Clock Out</th>
                  <th className="w-[100px] p-4 font-semibold">Break</th>
                  <th className="w-[130px] p-4 font-semibold">Total Hours</th>
                  <th className="w-[120px] p-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((e) => (
                  <tr
                    key={e.date}
                    className="border-t border-[var(--c-border)] transition-colors hover:bg-[var(--c-bg)]"
                  >
                    <td className="p-4 text-sm font-semibold whitespace-nowrap text-[var(--c-heading)]">{e.date}</td>
                    <td className="p-4 text-sm text-[var(--c-text2)]">{e.clockIn}</td>
                    <td className="p-4 text-sm text-[var(--c-text2)]">{e.clockOut}</td>
                    <td className="p-4 text-sm text-[var(--c-text2)]">{e.breakTime}</td>
                    <td className="p-4 text-sm font-semibold text-[var(--c-heading)]">{e.total}</td>
                    <td className="p-4">
                      <span
                        className={`inline-flex rounded-[20px] px-2.5 py-1 text-xs font-semibold shadow-[0px_2px_4px_rgba(0,0,0,0.07)] ${entryStatusStyles[e.status]}`}
                      >
                        {e.status}
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
