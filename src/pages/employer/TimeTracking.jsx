import {
  ChevronRight,
  Clock,
  Timer,
  Hourglass,
  ClipboardCheck,
  TrendingUp,
  TrendingDown,
} from 'lucide-react'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
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
    label: 'Clocked In Now',
    value: '38',
    trend: '+4.1%',
    up: true,
    icon: Clock,
    iconBox: 'bg-[var(--c-primary-soft)] border-[rgba(37,99,235,0.2)]',
    iconColor: 'text-[var(--c-primary)]',
    gradient: 'from-[rgba(37,99,235,0.1)] to-[rgba(37,99,235,0)]',
  },
  {
    label: 'Total Hours Today',
    value: '312h',
    trend: '+2.8%',
    up: true,
    icon: Timer,
    iconBox: 'bg-[var(--c-green-soft)] border-[rgba(16,185,129,0.2)]',
    iconColor: 'text-[var(--c-green)]',
    gradient: 'from-[rgba(16,185,129,0.1)] to-[rgba(16,185,129,0)]',
  },
  {
    label: 'Overtime This Week',
    value: '46h',
    trend: '-8.3%',
    up: false,
    icon: Hourglass,
    iconBox: 'bg-[var(--c-amber-soft)] border-[rgba(217,119,6,0.2)]',
    iconColor: 'text-[var(--c-amber)]',
    gradient: 'from-[rgba(217,119,6,0.1)] to-[rgba(217,119,6,0)]',
  },
  {
    label: 'Pending Approvals',
    value: '14',
    trend: '+3 new',
    up: true,
    icon: ClipboardCheck,
    iconBox: 'bg-[var(--c-purple-soft)] border-[rgba(139,92,246,0.2)]',
    iconColor: 'text-[var(--c-purple)]',
    gradient: 'from-[rgba(139,92,246,0.1)] to-[rgba(139,92,246,0)]',
  },
]

const hoursByDay = [
  { day: 'Mon', regular: 296, overtime: 12 },
  { day: 'Tue', regular: 310, overtime: 8 },
  { day: 'Wed', regular: 304, overtime: 10 },
  { day: 'Thu', regular: 318, overtime: 6 },
  { day: 'Fri', regular: 288, overtime: 4 },
  { day: 'Sat', regular: 92, overtime: 14 },
  { day: 'Sun', regular: 40, overtime: 2 },
]

const clockedIn = [
  { avatar: avatar1, name: 'Sarah Jenkins', department: 'Engineering', clockIn: '08:02 AM', duration: '6h 24m' },
  { avatar: avatar2, name: 'Michael Chen', department: 'Design', clockIn: '08:45 AM', duration: '5h 41m' },
  { avatar: avatar3, name: 'Emma Watson', department: 'Marketing', clockIn: '09:00 AM', duration: '5h 26m' },
  { avatar: avatar4, name: 'David Miller', department: 'Operations', clockIn: '09:12 AM', duration: '5h 14m' },
  { avatar: avatar5, name: 'Sofia Garcia', department: 'Finance', clockIn: '09:30 AM', duration: '4h 56m' },
]

const timesheets = [
  { avatar: avatar1, name: 'Sarah Jenkins', week: 'Jan 15 – Jan 21', regular: '40h', overtime: '4h', total: '44h', status: 'Pending' },
  { avatar: avatar2, name: 'Michael Chen', week: 'Jan 15 – Jan 21', regular: '38h', overtime: '0h', total: '38h', status: 'Pending' },
  { avatar: avatar3, name: 'Emma Watson', week: 'Jan 15 – Jan 21', regular: '40h', overtime: '2h', total: '42h', status: 'Approved' },
  { avatar: avatar4, name: 'David Miller', week: 'Jan 08 – Jan 14', regular: '40h', overtime: '6h', total: '46h', status: 'Pending' },
  { avatar: avatar5, name: 'Sofia Garcia', week: 'Jan 08 – Jan 14', regular: '40h', overtime: '0h', total: '40h', status: 'Approved' },
  { avatar: avatar6, name: 'James Bond', week: 'Jan 08 – Jan 14', regular: '36h', overtime: '3h', total: '39h', status: 'Approved' },
]

const statusStyles = {
  Pending: 'bg-[var(--c-amber-soft)] text-[var(--c-amber)]',
  Approved: 'bg-[var(--c-green-soft)] text-[var(--c-green)]',
}

export default function TimeTrackingPage() {
  const cc = useChartColors()
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-8">
        {/* Page header */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-[13px] font-medium">
            <span className="text-[var(--c-text)]">Employer</span>
            <ChevronRight className="size-3.5 text-[var(--c-muted)]" />
            <span className="text-[var(--c-heading)]">Time Tracking</span>
          </div>
          <h1 className="text-[28px] font-bold leading-tight text-[var(--c-heading)]">Time Tracking</h1>
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
          {/* Hours by Day */}
          <div className="flex min-w-0 flex-1 flex-col gap-5 rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] p-6 shadow-[0px_6px_9px_rgba(0,0,0,0.07)]">
            <p className="text-base font-semibold text-[var(--c-heading)]">Hours by Day</p>
            <div className="flex flex-1 flex-col gap-3 rounded-lg border border-[var(--c-border)] bg-[var(--c-card)] p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-col gap-0.5">
                  <p className="text-[13px] font-semibold text-[var(--c-heading)]">Hours by Day</p>
                  <p className="text-xs text-[var(--c-text)]">This week • 1,704 hours logged</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="flex items-center gap-1.5 text-xs text-[var(--c-text)]">
                    <span className="size-2.5 rounded-[2px] bg-[var(--c-primary)]" /> Regular
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-[var(--c-text)]">
                    <span className="size-2.5 rounded-[2px] bg-[var(--c-amber)]" /> Overtime
                  </span>
                </div>
              </div>
              <div className="h-56 w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] pt-3 pr-3">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={hoursByDay} margin={{ top: 8, right: 4, bottom: 4, left: 0 }}>
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
                      width={40}
                    />
                    <Tooltip
                      formatter={(v) => `${v}h`}
                      cursor={{ fill: 'rgba(148,163,184,0.1)' }}
                      contentStyle={{
                        borderRadius: 8,
                        border: `1px solid ${cc.grid}`,
                        fontSize: 12,
                        boxShadow: '0px 6px 18px -6px rgba(0,0,0,0.15)',
                      }}
                    />
                    <Bar dataKey="regular" name="Regular" fill={cc.primary} radius={[4, 4, 0, 0]} maxBarSize={24} />
                    <Bar dataKey="overtime" name="Overtime" fill={cc.amber} radius={[4, 4, 0, 0]} maxBarSize={24} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Currently Clocked In */}
          <div className="flex flex-col gap-5 rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] p-6 shadow-[0px_6px_9px_rgba(0,0,0,0.07)] xl:w-[400px]">
            <p className="text-base font-semibold text-[var(--c-heading)]">Currently Clocked In</p>
            <div className="flex flex-col">
              {clockedIn.map((e) => (
                <div
                  key={e.name}
                  className="flex items-center gap-3 border-b border-[var(--c-border)] py-3.5 transition-colors last:border-b-0 hover:bg-[var(--c-bg)]"
                >
                  <img src={e.avatar} alt={e.name} className="size-9 shrink-0 rounded-full object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-[var(--c-heading)]">{e.name}</p>
                    <p className="truncate text-xs text-[var(--c-text2)]">
                      {e.department} • In at {e.clockIn}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-1">
                    <span className="text-[13px] font-semibold text-[var(--c-heading)]">{e.duration}</span>
                    <span className="inline-flex items-center gap-1 rounded-[20px] bg-[var(--c-green-soft)] px-2 py-0.5 text-[11px] font-semibold text-[var(--c-green)]">
                      <span className="size-1.5 rounded-full bg-[var(--c-green)]" />
                      Active
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timesheet Approvals */}
        <div className="flex flex-col gap-5">
          <p className="text-base font-semibold text-[var(--c-heading)]">Timesheet Approvals</p>
          <div className="overflow-x-auto rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)]">
            <table className="w-full min-w-[860px] border-collapse text-left">
              <thead>
                <tr className="bg-[var(--c-primary-soft)] text-[13px] font-semibold text-[var(--c-primary)]">
                  <th className="p-4 font-semibold">Employee</th>
                  <th className="w-[170px] p-4 font-semibold">Week</th>
                  <th className="w-[110px] p-4 font-semibold">Regular</th>
                  <th className="w-[110px] p-4 font-semibold">Overtime</th>
                  <th className="w-[100px] p-4 font-semibold">Total</th>
                  <th className="w-[120px] p-4 font-semibold">Status</th>
                  <th className="w-[200px] p-4 text-right font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {timesheets.map((t) => (
                  <tr
                    key={`${t.name}-${t.week}`}
                    className="border-t border-[var(--c-border)] transition-colors hover:bg-[var(--c-bg)]"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img src={t.avatar} alt={t.name} className="size-8 shrink-0 rounded-full object-cover" />
                        <span className="text-sm font-semibold whitespace-nowrap text-[var(--c-heading)]">
                          {t.name}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-sm whitespace-nowrap text-[var(--c-text2)]">{t.week}</td>
                    <td className="p-4 text-sm text-[var(--c-heading)]">{t.regular}</td>
                    <td className="p-4 text-sm text-[var(--c-heading)]">{t.overtime}</td>
                    <td className="p-4 text-sm font-semibold text-[var(--c-heading)]">{t.total}</td>
                    <td className="p-4">
                      <span
                        className={`inline-flex rounded-[20px] px-2.5 py-1 text-xs font-semibold shadow-[0px_2px_4px_rgba(0,0,0,0.07)] ${statusStyles[t.status]}`}
                      >
                        {t.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex justify-end gap-2">
                        {t.status === 'Pending' ? (
                          <>
                            <button
                              type="button"
                              className="rounded-lg bg-[var(--c-primary)] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[var(--c-primary-hover)]"
                            >
                              Approve
                            </button>
                            <button
                              type="button"
                              className="rounded-lg border border-[var(--c-red)] bg-[var(--c-red-soft)] px-3 py-1.5 text-xs font-semibold text-[var(--c-red)] transition-colors hover:bg-[var(--c-red-soft)]"
                            >
                              Reject
                            </button>
                          </>
                        ) : (
                          <span className="text-xs text-[var(--c-muted)]">Approved Jan 22</span>
                        )}
                      </div>
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
