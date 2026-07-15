import {
  ChevronRight,
  CheckCheck,
  CalendarClock,
  Banknote,
  Bell,
  FileText,
  Megaphone,
} from 'lucide-react'

const tabs = [
  { label: 'All', count: 12 },
  { label: 'Unread', count: 4 },
  { label: 'Mentions' },
  { label: 'System' },
]

const typeStyles = {
  leave: {
    icon: CalendarClock,
    box: 'bg-[var(--c-primary-soft)] border-[rgba(37,99,235,0.2)]',
    color: 'text-[var(--c-primary)]',
  },
  payslip: {
    icon: Banknote,
    box: 'bg-[var(--c-green-soft)] border-[rgba(16,185,129,0.2)]',
    color: 'text-[var(--c-green)]',
  },
  reminder: {
    icon: Bell,
    box: 'bg-[var(--c-amber-soft)] border-[rgba(217,119,6,0.2)]',
    color: 'text-[var(--c-amber)]',
  },
  document: {
    icon: FileText,
    box: 'bg-[var(--c-purple-soft)] border-[rgba(139,92,246,0.2)]',
    color: 'text-[var(--c-purple)]',
  },
  announcement: {
    icon: Megaphone,
    box: 'bg-[var(--c-teal-soft)] border-[rgba(13,148,136,0.2)]',
    color: 'text-[var(--c-teal)]',
  },
}

const notifications = [
  { type: 'leave', title: 'Leave request approved', body: 'Your annual leave for Feb 3–7 has been approved by Sarah Chen.', time: '12m ago', unread: true },
  { type: 'payslip', title: 'Payslip ready', body: 'Your January 2025 payslip is now available to view and download.', time: '1h ago', unread: true },
  { type: 'reminder', title: 'Timesheet reminder', body: 'Submit your timesheet for the week of Jan 20 before Friday 5 PM.', time: '3h ago', unread: true },
  { type: 'document', title: 'Document shared with you', body: 'HR shared "Benefits Guide 2025.pdf" with you.', time: '5h ago', unread: true },
  { type: 'announcement', title: 'Company announcement', body: 'All-hands meeting scheduled for Thursday at 10 AM in the main hall.', time: 'Yesterday', unread: false },
  { type: 'leave', title: 'Leave balance updated', body: 'Your PTO balance has been updated to 12 days for 2025.', time: 'Yesterday', unread: false },
  { type: 'payslip', title: 'Tax form available', body: 'Your 2024 W-2 form is ready in the Tax Forms section.', time: '2 days ago', unread: false },
  { type: 'reminder', title: 'Profile review due', body: 'Please review and confirm your emergency contact details.', time: '3 days ago', unread: false },
]

const preferences = [
  { label: 'Email notifications', description: 'Receive notifications via email', on: true },
  { label: 'Push notifications', description: 'Receive push notifications on your devices', on: true },
  { label: 'Payslip alerts', description: 'Get notified when a new payslip is available', on: true },
  { label: 'Leave updates', description: 'Get notified about leave request status changes', on: false },
]

function Toggle({ on, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
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

export default function NotificationsPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-8">
        {/* Page header */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-[13px] font-medium">
            <span className="text-[var(--c-text)]">Employee</span>
            <ChevronRight className="size-3.5 text-[var(--c-muted)]" />
            <span className="text-[var(--c-heading)]">Notifications</span>
          </div>
          <h1 className="text-[28px] font-bold leading-tight text-[var(--c-heading)]">Notifications</h1>
        </div>

        <div className="flex flex-col gap-6">
          {/* Toolbar */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {tabs.map((t) => (
                <button
                  key={t.label}
                  type="button"
                  className={`flex items-center gap-1.5 rounded-[20px] px-4 py-2 text-[13px] font-semibold transition-colors ${
                    t.label === 'All'
                      ? 'bg-[var(--c-primary)] text-white'
                      : 'border border-[var(--c-border)] bg-[var(--c-card)] text-[var(--c-text)] hover:bg-[var(--c-hover)]'
                  }`}
                >
                  {t.label}
                  {t.count != null && (
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[11px] font-bold ${
                        t.label === 'All'
                          ? 'bg-white/20 text-white'
                          : 'bg-[var(--c-primary-soft)] text-[var(--c-primary)]'
                      }`}
                    >
                      {t.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg border border-[var(--c-primary)] bg-[var(--c-primary-soft)] px-4 py-2.5 text-sm font-semibold text-[var(--c-primary)] transition-colors hover:bg-[var(--c-primary-soft2)]"
            >
              <CheckCheck className="size-4" />
              Mark all as read
            </button>
          </div>

          {/* Notification list */}
          <div className="overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)]">
            {notifications.map((n) => {
              const t = typeStyles[n.type]
              return (
                <div
                  key={n.title}
                  className={`flex items-start gap-4 border-b border-[var(--c-border)] p-4 transition-colors last:border-b-0 hover:bg-[var(--c-hover)] sm:items-center ${
                    n.unread ? 'bg-[var(--c-primary-soft)]' : ''
                  }`}
                >
                  <div className={`flex size-9 shrink-0 items-center justify-center rounded-[10px] border ${t.box}`}>
                    <t.icon className={`size-[18px] ${t.color}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-[var(--c-heading)]">{n.title}</p>
                    <p className="truncate text-[13px] text-[var(--c-text2)]">{n.body}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <p className="text-xs whitespace-nowrap text-[var(--c-muted)]">{n.time}</p>
                    {n.unread && <span className="size-2 rounded-full bg-[var(--c-primary)]" />}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Notification Preferences */}
          <div className="flex flex-col gap-5 rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] p-6 shadow-[0px_6px_9px_rgba(0,0,0,0.07)]">
            <p className="text-base font-semibold text-[var(--c-heading)]">Notification Preferences</p>
            <div className="flex flex-col">
              {preferences.map((p) => (
                <div
                  key={p.label}
                  className="flex items-center justify-between gap-4 border-b border-[var(--c-border)] py-4 last:border-b-0"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[var(--c-heading)]">{p.label}</p>
                    <p className="text-[13px] text-[var(--c-text2)]">{p.description}</p>
                  </div>
                  <Toggle on={p.on} label={p.label} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
