import { Calendar, Clock, Briefcase, Banknote, FileText } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip } from 'recharts'
import { useChartColors } from '../../theme/ThemeContext'
import holidayDussehra from '../../assets/employee-holiday-dussehra.png'
import holidayDiwali from '../../assets/employee-holiday-diwali.png'
import holidayChristmas from '../../assets/employee-holiday-christmas.png'

const stats = [
  { icon: Calendar, label: 'Annual Leave Balance', value: '18 Days' },
  { icon: Clock, label: 'Days Taken (YTD)', value: '4 Days' },
  { icon: Briefcase, label: 'Upcoming Leave', value: 'Oct 12 - 15' },
  { icon: Banknote, label: 'Next Payday', value: '12 Days' },
]

const attendanceData = [
  { day: 'Sep 1', hours: 4.5 },
  { day: 'Sep 3', hours: 6 },
  { day: 'Sep 5', hours: 4 },
  { day: 'Sep 8', hours: 7 },
  { day: 'Sep 10', hours: 8 },
  { day: 'Sep 12', hours: 5 },
  { day: 'Sep 15', hours: 9 },
  { day: 'Sep 17', hours: 6 },
  { day: 'Sep 19', hours: 4.5 },
  { day: 'Sep 22', hours: 7 },
  { day: 'Sep 24', hours: 8 },
  { day: 'Sep 26', hours: 5 },
  { day: 'Sep 30', hours: 9 },
]

const payslips = ['August 2023', 'July 2023', 'June 2023']

const holidays = [
  { day: '24', month: 'Oct', name: 'Dussehra', icon: holidayDussehra },
  { day: '12', month: 'Nov', name: 'Diwali', icon: holidayDiwali },
  { day: '25', month: 'Dec', name: 'Christmas', icon: holidayChristmas },
]

export default function DashboardPage() {
  const cc = useChartColors()
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-6 lg:gap-8">
        {/* Welcome banner */}
        <div className="flex flex-col gap-2 rounded-2xl bg-[var(--c-primary)] p-6 text-white shadow-[0px_10px_12px_rgba(37,99,235,0.2)]">
          <h1 className="text-2xl font-bold leading-tight sm:text-[32px] [text-shadow:0px_2px_6px_rgba(0,0,0,0.15)]">
            Good Morning, Sarah!
          </h1>
          <p className="text-base opacity-90">Here's what's happening with your HR profile today.</p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6 xl:grid-cols-4">
          {stats.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-center gap-4 rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] p-5 shadow-[0px_6px_9px_rgba(0,0,0,0.07)] transition-shadow hover:shadow-[0px_8px_14px_rgba(0,0,0,0.1)]"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[var(--c-primary-soft)]">
                <Icon className="size-6 text-[var(--c-primary)]" />
              </div>
              <div className="flex min-w-0 flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Icon className="size-4 shrink-0 text-[var(--c-primary)]" />
                  <p className="truncate text-sm text-[var(--c-text)]">{label}</p>
                </div>
                <p className="font-mono text-2xl font-bold text-[var(--c-heading)]">{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Attendance chart */}
        <div className="overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)]">
          <div className="border-b border-[var(--c-border)] px-6 py-4">
            <h2 className="text-lg font-bold text-[var(--c-heading)]">Attendance Overview (Last 30 Days)</h2>
          </div>
          <div className="p-6">
            <div className="h-[240px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={attendanceData} margin={{ top: 8, right: 0, left: -28, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={cc.grid} vertical={false} />
                  <XAxis
                    dataKey="day"
                    tick={{ fill: cc.axis, fontSize: 12 }}
                    tickLine={false}
                    axisLine={{ stroke: cc.grid }}
                    interval="preserveStartEnd"
                  />
                  <YAxis tick={{ fill: cc.axis, fontSize: 12 }} tickLine={false} axisLine={false} />
                  <Tooltip
                    cursor={{ fill: cc.grid }}
                    contentStyle={{
                      borderRadius: 8,
                      border: `1px solid ${cc.grid}`,
                      boxShadow: '0px 6px 9px rgba(0,0,0,0.07)',
                      fontSize: 13,
                    }}
                  />
                  <Bar dataKey="hours" fill={cc.primaryLight} radius={[4, 4, 0, 0]} maxBarSize={16} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Payslips + Holidays */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)]">
            <div className="border-b border-[var(--c-border)] px-6 py-4">
              <h2 className="text-lg font-bold text-[var(--c-heading)]">Recent Payslips</h2>
            </div>
            <div className="flex flex-col gap-5 p-6">
              {payslips.map((month) => (
                <div
                  key={month}
                  className="flex items-center justify-between rounded-lg border border-[var(--c-border)] bg-[var(--c-card)] p-3 transition-colors hover:bg-[var(--c-bg)]"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="size-5 text-[var(--c-primary)]" />
                    <p className="text-xs font-semibold text-black">{month}</p>
                  </div>
                  <button
                    type="button"
                    className="text-xs font-bold text-[var(--c-primary)] hover:underline"
                  >
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)]">
            <div className="border-b border-[var(--c-border)] px-6 py-4">
              <h2 className="text-lg font-bold text-[var(--c-heading)]">Upcoming Holidays</h2>
            </div>
            <div className="flex flex-col gap-5 p-6">
              {holidays.map(({ day, month, name, icon }) => (
                <div
                  key={name}
                  className="flex items-center gap-4 rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] p-3 transition-colors hover:bg-[var(--c-hover)]"
                >
                  <div className="flex w-14 shrink-0 flex-col items-center text-xs">
                    <p className="font-extrabold text-[var(--c-green)]">{day}</p>
                    <p className="text-[var(--c-text2)]">{month}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={icon} alt="" className="size-6 rounded-lg object-cover" />
                    <p className="text-xs font-semibold text-[var(--c-heading)]">{name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
