import {
  ChevronRight,
  ShieldCheck,
  KeyRound,
  Bell,
  Fingerprint,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Globe,
  UserX,
  Lock,
} from 'lucide-react'
import avatar1 from '../../assets/avatar1.png'
import avatar2 from '../../assets/avatar2.png'
import avatar3 from '../../assets/avatar3.png'
import avatar4 from '../../assets/avatar4.png'
import avatar5 from '../../assets/avatar5.png'

const stats = [
  {
    label: 'Security Score',
    value: '92/100',
    trend: '+4 pts',
    up: true,
    icon: ShieldCheck,
    iconBox: 'bg-[var(--c-green-soft)] border-[rgba(16,185,129,0.2)]',
    iconColor: 'text-[var(--c-green)]',
    gradient: 'from-[rgba(16,185,129,0.1)] to-[rgba(16,185,129,0)]',
  },
  {
    label: 'Failed Logins (24h)',
    value: '38',
    trend: '+12',
    up: false,
    icon: KeyRound,
    iconBox: 'bg-[var(--c-red-soft)] border-[rgba(239,68,68,0.2)]',
    iconColor: 'text-[var(--c-red)]',
    gradient: 'from-[rgba(239,68,68,0.1)] to-[rgba(239,68,68,0)]',
  },
  {
    label: 'Open Alerts',
    value: '6',
    trend: '-3',
    up: true,
    icon: Bell,
    iconBox: 'bg-[var(--c-amber-soft)] border-[rgba(217,119,6,0.2)]',
    iconColor: 'text-[var(--c-amber)]',
    gradient: 'from-[rgba(217,119,6,0.1)] to-[rgba(217,119,6,0)]',
  },
  {
    label: '2FA Adoption',
    value: '87%',
    trend: '+5.2%',
    up: true,
    icon: Fingerprint,
    iconBox: 'bg-[var(--c-purple-soft)] border-[rgba(139,92,246,0.2)]',
    iconColor: 'text-[var(--c-purple)]',
    gradient: 'from-[rgba(139,92,246,0.1)] to-[rgba(139,92,246,0)]',
  },
]

const severityStyles = {
  High: 'bg-[var(--c-red-soft)] text-[var(--c-red)]',
  Medium: 'bg-[var(--c-amber-soft)] text-[var(--c-amber)]',
  Low: 'bg-[var(--c-primary-soft)] text-[var(--c-primary)]',
}

const alerts = [
  {
    title: 'Multiple failed login attempts',
    detail: 'Account s.garcia@outlook.com • 12 attempts',
    severity: 'High',
    time: '18m ago',
    icon: KeyRound,
    iconBox: 'bg-[var(--c-red-soft)]',
    iconColor: 'text-[var(--c-red)]',
  },
  {
    title: 'Login from new country',
    detail: 'Alex Rivera • São Paulo, Brazil',
    severity: 'Medium',
    time: '1h ago',
    icon: Globe,
    iconBox: 'bg-[var(--c-amber-soft)]',
    iconColor: 'text-[var(--c-amber)]',
  },
  {
    title: 'Suspended user attempted access',
    detail: 'd.miller@buildright.com • Admin portal',
    severity: 'Medium',
    time: '3h ago',
    icon: UserX,
    iconBox: 'bg-[var(--c-amber-soft)]',
    iconColor: 'text-[var(--c-amber)]',
  },
  {
    title: 'API key nearing expiration',
    detail: 'Integration: QuickBooks • Expires in 5 days',
    severity: 'Low',
    time: '6h ago',
    icon: AlertTriangle,
    iconBox: 'bg-[var(--c-primary-soft)]',
    iconColor: 'text-[var(--c-primary)]',
  },
]

const policies = [
  { label: 'Enforce 2FA for admins', detail: 'All admin accounts must use two-factor auth', on: true },
  { label: 'Password rotation (90 days)', detail: 'Force password reset every 90 days', on: true },
  { label: 'Session timeout (30 min)', detail: 'Sign out inactive sessions automatically', on: true },
  { label: 'IP allowlisting', detail: 'Restrict admin access to approved IP ranges', on: false },
  { label: 'SSO required', detail: 'Require single sign-on for all tenant users', on: true },
]

const sessions = [
  { avatar: avatar1, name: 'Alex Rivera', device: 'Chrome • macOS', location: 'New York, US', ip: '192.168.4.21', active: 'Active now' },
  { avatar: avatar2, name: 'Sarah Chen', device: 'Safari • iOS', location: 'San Francisco, US', ip: '10.0.12.87', active: '5m ago' },
  { avatar: avatar3, name: 'Emma Watson', device: 'Firefox • Windows', location: 'London, UK', ip: '172.16.8.44', active: '32m ago' },
  { avatar: avatar4, name: 'David Miller', device: 'Edge • Windows', location: 'Toronto, CA', ip: '192.168.4.63', active: '2h ago' },
  { avatar: avatar5, name: 'Sofia Garcia', device: 'Chrome • Android', location: 'Madrid, ES', ip: '10.0.12.19', active: '4h ago' },
]

function Toggle({ on }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
        on ? 'bg-[var(--c-primary)]' : 'bg-[var(--c-border-strong)]'
      }`}
    >
      <span
        className={`absolute top-0.5 size-5 rounded-full bg-white shadow-[0px_2px_4px_rgba(0,0,0,0.2)] transition-all ${
          on ? 'left-[22px]' : 'left-0.5'
        }`}
      />
    </button>
  )
}

export default function SecurityPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-8">
        {/* Page header */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-[13px] font-medium">
            <span className="text-[var(--c-text)]">Admin</span>
            <ChevronRight className="size-3.5 text-[var(--c-muted)]" />
            <span className="text-[var(--c-heading)]">Security</span>
          </div>
          <h1 className="text-[28px] font-bold leading-tight text-[var(--c-heading)]">
            Security Center
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

        {/* Alerts + Policies */}
        <div className="flex flex-col gap-6 xl:flex-row xl:items-stretch">
          {/* Security Alerts */}
          <div className="flex min-w-0 flex-1 flex-col gap-5 rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] p-6 shadow-[0px_6px_9px_rgba(0,0,0,0.07)]">
            <p className="text-base font-semibold text-[var(--c-heading)]">Security Alerts</p>
            <div className="flex flex-col">
              {alerts.map((a) => (
                <div
                  key={a.title}
                  className="flex flex-col gap-3 border-b border-[var(--c-border)] py-4 transition-colors last:border-b-0 hover:bg-[var(--c-bg)] sm:flex-row sm:items-center sm:gap-4"
                >
                  <div className="flex min-w-0 flex-1 items-center gap-4">
                    <div
                      className={`flex size-10 shrink-0 items-center justify-center rounded-[10px] ${a.iconBox}`}
                    >
                      <a.icon className={`size-5 ${a.iconColor}`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-[var(--c-heading)]">
                        {a.title}
                      </p>
                      <p className="truncate text-xs text-[var(--c-text2)]">
                        {a.detail} • {a.time}
                      </p>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-2.5">
                    <span
                      className={`inline-flex rounded-[20px] px-2.5 py-1 text-xs font-semibold shadow-[0px_2px_4px_rgba(0,0,0,0.07)] ${severityStyles[a.severity]}`}
                    >
                      {a.severity}
                    </span>
                    <button
                      type="button"
                      className="rounded-lg border border-[var(--c-primary)] bg-[var(--c-primary-soft)] px-3.5 py-1.5 text-[13px] font-semibold text-[var(--c-primary)] transition-colors hover:bg-[var(--c-primary-soft2)]"
                    >
                      Review
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Security Policies */}
          <div className="flex flex-col gap-5 rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] p-6 shadow-[0px_6px_9px_rgba(0,0,0,0.07)] xl:w-[400px]">
            <div className="flex items-center gap-2">
              <Lock className="size-4 text-[var(--c-primary)]" />
              <p className="text-base font-semibold text-[var(--c-heading)]">Security Policies</p>
            </div>
            <div className="flex flex-col">
              {policies.map((p) => (
                <div
                  key={p.label}
                  className="flex items-center gap-4 border-b border-[var(--c-border)] py-3.5 last:border-b-0"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-[var(--c-heading)]">{p.label}</p>
                    <p className="text-xs text-[var(--c-text2)]">{p.detail}</p>
                  </div>
                  <Toggle on={p.on} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Sessions */}
        <div className="flex flex-col gap-5 rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] p-6 shadow-[0px_6px_9px_rgba(0,0,0,0.07)]">
          <p className="text-base font-semibold text-[var(--c-heading)]">Recent Sessions</p>
          <div className="overflow-x-auto rounded-xl border border-[var(--c-border)]">
            <table className="w-full min-w-[860px] border-collapse text-left">
              <thead>
                <tr className="bg-[var(--c-primary-soft)] text-[13px] font-semibold text-[var(--c-primary)]">
                  <th className="p-4 font-semibold">User</th>
                  <th className="w-[190px] p-4 font-semibold">Device</th>
                  <th className="w-[180px] p-4 font-semibold">Location</th>
                  <th className="w-[140px] p-4 font-semibold">IP Address</th>
                  <th className="w-[130px] p-4 font-semibold">Last Active</th>
                  <th className="w-[100px] p-4 text-right font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {sessions.map((s) => (
                  <tr
                    key={s.ip}
                    className="border-t border-[var(--c-border)] transition-colors hover:bg-[var(--c-bg)]"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={s.avatar}
                          alt={s.name}
                          className="size-8 shrink-0 rounded-full object-cover"
                        />
                        <span className="text-sm font-semibold whitespace-nowrap text-[var(--c-heading)]">
                          {s.name}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-sm whitespace-nowrap text-[var(--c-text2)]">{s.device}</td>
                    <td className="p-4 text-sm whitespace-nowrap text-[var(--c-text2)]">{s.location}</td>
                    <td className="p-4 text-sm whitespace-nowrap text-[var(--c-text2)]">{s.ip}</td>
                    <td className="p-4 text-sm whitespace-nowrap text-[var(--c-heading)]">{s.active}</td>
                    <td className="p-4">
                      <div className="flex justify-end">
                        <button
                          type="button"
                          className="rounded-md px-2 py-1 text-sm font-semibold text-[var(--c-red)] transition-colors hover:bg-[var(--c-red-soft)]"
                        >
                          Revoke
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
    </div>
  )
}
