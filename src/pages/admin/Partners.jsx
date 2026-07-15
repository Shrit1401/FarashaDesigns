import {
  ChevronRight,
  Handshake,
  Users,
  Banknote,
  Wallet,
  TrendingUp,
  TrendingDown,
  ArrowRight,
} from 'lucide-react'
import avatar1 from '../../assets/avatar1.png'
import avatar2 from '../../assets/avatar2.png'
import avatar3 from '../../assets/avatar3.png'
import avatar4 from '../../assets/avatar4.png'
import avatar5 from '../../assets/avatar5.png'
import avatar6 from '../../assets/avatar6.png'

const stats = [
  {
    label: 'Total Partners',
    value: '64',
    trend: '+6.8%',
    up: true,
    icon: Handshake,
    iconBox: 'bg-[var(--c-primary-soft)] border-[rgba(37,99,235,0.2)]',
    iconColor: 'text-[var(--c-primary)]',
    gradient: 'from-[rgba(37,99,235,0.1)] to-[rgba(37,99,235,0)]',
  },
  {
    label: 'Active Referrals',
    value: '312',
    trend: '+14.2%',
    up: true,
    icon: Users,
    iconBox: 'bg-[var(--c-green-soft)] border-[rgba(16,185,129,0.2)]',
    iconColor: 'text-[var(--c-green)]',
    gradient: 'from-[rgba(16,185,129,0.1)] to-[rgba(16,185,129,0)]',
  },
  {
    label: 'Commission Paid',
    value: '$86.4k',
    trend: '+9.5%',
    up: true,
    icon: Banknote,
    iconBox: 'bg-[var(--c-purple-soft)] border-[rgba(139,92,246,0.2)]',
    iconColor: 'text-[var(--c-purple)]',
    gradient: 'from-[rgba(139,92,246,0.1)] to-[rgba(139,92,246,0)]',
  },
  {
    label: 'Pending Payouts',
    value: '$12.8k',
    trend: '-3.1%',
    up: false,
    icon: Wallet,
    iconBox: 'bg-[var(--c-amber-soft)] border-[rgba(217,119,6,0.2)]',
    iconColor: 'text-[var(--c-amber)]',
    gradient: 'from-[rgba(217,119,6,0.1)] to-[rgba(217,119,6,0)]',
  },
]

const tierStyles = {
  Gold: 'bg-[var(--c-amber-soft)] text-[var(--c-amber)]',
  Silver: 'bg-[var(--c-hover)] text-[var(--c-text2)]',
  Bronze: 'bg-[var(--c-teal-soft)] text-[var(--c-teal)]',
}

const statusStyles = {
  Active: 'bg-[var(--c-green-soft)] text-[var(--c-green)]',
  Pending: 'bg-[var(--c-amber-soft)] text-[var(--c-amber)]',
  Inactive: 'bg-[var(--c-red-soft)] text-[var(--c-red)]',
}

const partners = [
  { avatar: avatar1, name: 'Meridian Consulting', tier: 'Gold', referrals: 48, commission: '$4,820', status: 'Active' },
  { avatar: avatar2, name: 'Nova HR Advisors', tier: 'Gold', referrals: 41, commission: '$4,150', status: 'Active' },
  { avatar: avatar3, name: 'Catalyst Partners', tier: 'Silver', referrals: 27, commission: '$2,340', status: 'Active' },
  { avatar: avatar4, name: 'Blue Peak Agency', tier: 'Silver', referrals: 19, commission: '$1,720', status: 'Pending' },
  { avatar: avatar5, name: 'Harbor Solutions', tier: 'Bronze', referrals: 12, commission: '$980', status: 'Active' },
  { avatar: avatar6, name: 'Summit Reach Co', tier: 'Bronze', referrals: 8, commission: '$640', status: 'Inactive' },
]

export default function PartnersPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-8">
        {/* Page header */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-[13px] font-medium">
            <span className="text-[var(--c-text)]">Admin</span>
            <ChevronRight className="size-3.5 text-[var(--c-muted)]" />
            <span className="text-[var(--c-heading)]">Partners</span>
          </div>
          <h1 className="text-[28px] font-bold leading-tight text-[var(--c-heading)]">Partner Management</h1>
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

        {/* Partner cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex flex-col gap-5 rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] p-6 shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img src={p.avatar} alt={p.name} className="size-11 shrink-0 rounded-full object-cover" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-[var(--c-heading)]">{p.name}</p>
                    <span
                      className={`mt-1 inline-flex rounded-[20px] px-2.5 py-0.5 text-xs font-semibold ${tierStyles[p.tier]}`}
                    >
                      {p.tier} Partner
                    </span>
                  </div>
                </div>
                <span
                  className={`inline-flex shrink-0 rounded-[20px] px-2.5 py-1 text-xs font-semibold shadow-[0px_2px_4px_rgba(0,0,0,0.07)] ${statusStyles[p.status]}`}
                >
                  {p.status}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] p-3">
                  <p className="text-xs text-[var(--c-text)]">Referred Tenants</p>
                  <p className="mt-1 text-xl font-bold text-[var(--c-heading)]">{p.referrals}</p>
                </div>
                <div className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] p-3">
                  <p className="text-xs text-[var(--c-text)]">Monthly Commission</p>
                  <p className="mt-1 text-xl font-bold text-[var(--c-heading)]">{p.commission}</p>
                </div>
              </div>
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-lg border border-[var(--c-primary)] bg-[var(--c-primary-soft)] px-4 py-2.5 text-sm font-semibold text-[var(--c-primary)] transition-colors hover:bg-[var(--c-primary-soft2)]"
              >
                View Details
                <ArrowRight className="size-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
