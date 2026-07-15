import {
  ChevronRight,
  Banknote,
  Repeat,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
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
} from 'recharts'
import { useChartColors } from '../../theme/ThemeContext'

const stats = [
  {
    label: 'MRR',
    value: '$142k',
    trend: '+11.4%',
    up: true,
    icon: Banknote,
    iconBox: 'bg-[var(--c-primary-soft)] border-[rgba(37,99,235,0.2)]',
    iconColor: 'text-[var(--c-primary)]',
    gradient: 'from-[rgba(37,99,235,0.1)] to-[rgba(37,99,235,0)]',
  },
  {
    label: 'Active Subscriptions',
    value: '1,092',
    trend: '+5.6%',
    up: true,
    icon: Repeat,
    iconBox: 'bg-[var(--c-green-soft)] border-[rgba(16,185,129,0.2)]',
    iconColor: 'text-[var(--c-green)]',
    gradient: 'from-[rgba(16,185,129,0.1)] to-[rgba(16,185,129,0)]',
  },
  {
    label: 'Churn Rate',
    value: '2.1%',
    trend: '-0.4%',
    up: false,
    icon: TrendingDown,
    iconBox: 'bg-[var(--c-red-soft)] border-[rgba(239,68,68,0.2)]',
    iconColor: 'text-[var(--c-red)]',
    gradient: 'from-[rgba(239,68,68,0.1)] to-[rgba(239,68,68,0)]',
  },
  {
    label: 'Upgrades This Month',
    value: '38',
    trend: '+22.6%',
    up: true,
    icon: ArrowUpRight,
    iconBox: 'bg-[var(--c-purple-soft)] border-[rgba(139,92,246,0.2)]',
    iconColor: 'text-[var(--c-purple)]',
    gradient: 'from-[rgba(139,92,246,0.1)] to-[rgba(139,92,246,0)]',
  },
]

const mrrData = [
  { month: 'Jan', mrr: 84 },
  { month: 'Feb', mrr: 89 },
  { month: 'Mar', mrr: 94 },
  { month: 'Apr', mrr: 98 },
  { month: 'May', mrr: 104 },
  { month: 'Jun', mrr: 109 },
  { month: 'Jul', mrr: 114 },
  { month: 'Aug', mrr: 120 },
  { month: 'Sep', mrr: 126 },
  { month: 'Oct', mrr: 131 },
  { month: 'Nov', mrr: 137 },
  { month: 'Dec', mrr: 142 },
]

const plans = [
  { name: 'Enterprise', count: 186, pct: 17, bar: 'bg-[var(--c-primary)]' },
  { name: 'Pro', count: 428, pct: 39, bar: 'bg-[var(--c-green)]' },
  { name: 'Starter', count: 336, pct: 31, bar: 'bg-[var(--c-amber)]' },
  { name: 'Free', count: 142, pct: 13, bar: 'bg-[var(--c-purple)]' },
]

const statusStyles = {
  Active: 'bg-[var(--c-green-soft)] text-[var(--c-green)]',
  'Past Due': 'bg-[var(--c-amber-soft)] text-[var(--c-amber)]',
  Cancelled: 'bg-[var(--c-red-soft)] text-[var(--c-red)]',
}

const subscriptions = [
  { tenant: 'TechFlow Inc', plan: 'Enterprise', seats: 500, amount: '$4,990', renewal: 'Feb 12, 2024', status: 'Active' },
  { tenant: 'Pinnacle Health', plan: 'Enterprise', seats: 700, amount: '$6,860', renewal: 'Feb 18, 2024', status: 'Active' },
  { tenant: 'Vertex Solutions', plan: 'Pro', seats: 250, amount: '$1,490', renewal: 'Feb 15, 2024', status: 'Active' },
  { tenant: 'BuildRight Ltd', plan: 'Enterprise', seats: 400, amount: '$3,920', renewal: 'Mar 20, 2024', status: 'Active' },
  { tenant: 'Acme Logistics', plan: 'Pro', seats: 120, amount: '$720', renewal: 'Feb 05, 2024', status: 'Past Due' },
  { tenant: 'Northwind Traders', plan: 'Starter', seats: 50, amount: '$149', renewal: 'Feb 22, 2024', status: 'Active' },
  { tenant: 'Sunrise Retail', plan: 'Starter', seats: 30, amount: '$89', renewal: 'Feb 25, 2024', status: 'Active' },
  { tenant: 'Quantum Labs', plan: 'Pro', seats: 100, amount: '$590', renewal: 'Jan 30, 2024', status: 'Cancelled' },
]

export default function SubscriptionsPage() {
  const cc = useChartColors()
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-8">
        {/* Page header */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-[13px] font-medium">
            <span className="text-[var(--c-text)]">Admin</span>
            <ChevronRight className="size-3.5 text-[var(--c-muted)]" />
            <span className="text-[var(--c-heading)]">Subscriptions</span>
          </div>
          <h1 className="text-[28px] font-bold leading-tight text-[var(--c-heading)]">Subscription Management</h1>
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
          {/* MRR Growth */}
          <div className="flex min-w-0 flex-1 flex-col gap-5 rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] p-6 shadow-[0px_6px_9px_rgba(0,0,0,0.07)]">
            <p className="text-base font-semibold text-[var(--c-heading)]">MRR Growth</p>
            <div className="flex flex-1 flex-col gap-3 rounded-lg border border-[var(--c-border)] bg-[var(--c-card)] p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-col gap-0.5">
                  <p className="text-[13px] font-semibold text-[var(--c-heading)]">Monthly Recurring Revenue</p>
                  <p className="text-xs text-[var(--c-text)]">Jan-Dec 2024 • $142k current</p>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-[var(--c-text)]">
                  <span className="size-2.5 rounded-[2px] bg-[var(--c-primary)]" /> MRR ($k)
                </span>
              </div>
              <div className="h-56 w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] pt-3 pr-3">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mrrData} margin={{ top: 8, right: 4, bottom: 4, left: 0 }}>
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
                      tickFormatter={(v) => `$${v}k`}
                      width={42}
                      domain={[80, 150]}
                    />
                    <Tooltip
                      formatter={(v) => `$${v}k`}
                      contentStyle={{
                        borderRadius: 8,
                        border: `1px solid ${cc.grid}`,
                        fontSize: 12,
                        boxShadow: '0px 6px 18px -6px rgba(0,0,0,0.15)',
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="mrr"
                      name="MRR"
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

          {/* Plan Distribution */}
          <div className="flex flex-col gap-5 rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] p-6 shadow-[0px_6px_9px_rgba(0,0,0,0.07)] xl:w-[400px]">
            <p className="text-base font-semibold text-[var(--c-heading)]">Plan Distribution</p>
            <div className="flex flex-1 flex-col gap-5 rounded-lg border border-[var(--c-border)] bg-[var(--c-card)] p-4">
              <div className="flex flex-col gap-0.5">
                <p className="text-[13px] font-semibold text-[var(--c-heading)]">Subscriptions by Plan</p>
                <p className="text-xs text-[var(--c-text)]">1,092 active subscriptions</p>
              </div>
              <div className="flex flex-1 flex-col justify-center gap-5">
                {plans.map((p) => (
                  <div key={p.name} className="flex flex-col gap-2">
                    <div className="flex items-center justify-between text-[13px]">
                      <span className="font-medium text-[var(--c-heading)]">{p.name}</span>
                      <span className="text-[var(--c-text2)]">
                        {p.count} <span className="text-[var(--c-muted)]">({p.pct}%)</span>
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--c-hover)]">
                      <div className={`h-full rounded-full ${p.bar}`} style={{ width: `${p.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Subscriptions table */}
        <div className="overflow-x-auto rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)]">
          <table className="w-full min-w-[860px] border-collapse text-left">
            <thead>
              <tr className="bg-[var(--c-primary-soft)] text-[13px] font-semibold text-[var(--c-primary)]">
                <th className="p-4 font-semibold">Tenant</th>
                <th className="w-[130px] p-4 font-semibold">Plan</th>
                <th className="w-[100px] p-4 font-semibold">Seats</th>
                <th className="w-[130px] p-4 font-semibold">Amount / mo</th>
                <th className="w-[140px] p-4 font-semibold">Renewal Date</th>
                <th className="w-[130px] p-4 font-semibold">Status</th>
                <th className="w-[80px] p-4 text-right font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {subscriptions.map((s) => (
                <tr
                  key={s.tenant}
                  className="border-t border-[var(--c-border)] transition-colors hover:bg-[var(--c-bg)]"
                >
                  <td className="p-4 text-sm font-semibold whitespace-nowrap text-[var(--c-heading)]">{s.tenant}</td>
                  <td className="p-4 text-sm text-[var(--c-heading)]">{s.plan}</td>
                  <td className="p-4 text-sm text-[var(--c-text2)]">{s.seats}</td>
                  <td className="p-4 text-sm font-semibold text-[var(--c-heading)]">{s.amount}</td>
                  <td className="p-4 text-sm whitespace-nowrap text-[var(--c-text2)]">{s.renewal}</td>
                  <td className="p-4">
                    <span
                      className={`inline-flex rounded-[20px] px-2.5 py-1 text-xs font-semibold whitespace-nowrap shadow-[0px_2px_4px_rgba(0,0,0,0.07)] ${statusStyles[s.status]}`}
                    >
                      {s.status}
                    </span>
                  </td>
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
      </div>
    </div>
  )
}
