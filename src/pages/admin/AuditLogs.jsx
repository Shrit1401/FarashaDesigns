import { ChevronRight, Search, ListFilter, Download, MoreHorizontal } from 'lucide-react'
import avatar1 from '../../assets/avatar1.png'
import avatar2 from '../../assets/avatar2.png'
import avatar3 from '../../assets/avatar3.png'
import avatar4 from '../../assets/avatar4.png'
import avatar5 from '../../assets/avatar5.png'
import avatar6 from '../../assets/avatar6.png'

const actionStyles = {
  Created: 'bg-[var(--c-green-soft)] text-[var(--c-green)]',
  Updated: 'bg-[var(--c-primary-soft)] text-[var(--c-primary)]',
  Deleted: 'bg-[var(--c-red-soft)] text-[var(--c-red)]',
  Login: 'bg-[var(--c-teal-soft)] text-[var(--c-teal)]',
}

const logs = [
  { id: 1, timestamp: 'Jan 22, 2024 14:32', avatar: avatar1, actor: 'Alex Rivera', action: 'Created', resource: 'Tenant: TechFlow Inc', ip: '192.168.4.21' },
  { id: 2, timestamp: 'Jan 22, 2024 13:58', avatar: avatar2, actor: 'Sarah Chen', action: 'Updated', resource: 'Subscription: Vertex Solutions', ip: '10.0.12.87' },
  { id: 3, timestamp: 'Jan 22, 2024 13:12', avatar: avatar3, actor: 'Emma Watson', action: 'Login', resource: 'Admin Portal', ip: '172.16.8.44' },
  { id: 4, timestamp: 'Jan 22, 2024 11:47', avatar: avatar4, actor: 'David Miller', action: 'Deleted', resource: 'User: m.chen@vertex.com', ip: '192.168.4.63' },
  { id: 5, timestamp: 'Jan 22, 2024 10:20', avatar: avatar5, actor: 'Sofia Garcia', action: 'Updated', resource: 'Billing: BuildRight Ltd', ip: '10.0.12.19' },
  { id: 6, timestamp: 'Jan 22, 2024 09:05', avatar: avatar6, actor: 'James Bond', action: 'Created', resource: 'Partner: Nexus Consulting', ip: '172.16.8.90' },
  { id: 7, timestamp: 'Jan 21, 2024 18:41', avatar: avatar2, actor: 'Sarah Chen', action: 'Login', resource: 'Admin Portal', ip: '10.0.12.87' },
  { id: 8, timestamp: 'Jan 21, 2024 16:29', avatar: avatar1, actor: 'Alex Rivera', action: 'Updated', resource: 'Module: Advanced Payroll', ip: '192.168.4.21' },
  { id: 9, timestamp: 'Jan 21, 2024 15:03', avatar: avatar3, actor: 'Emma Watson', action: 'Deleted', resource: 'Tenant: Orbit Media', ip: '172.16.8.44' },
  { id: 10, timestamp: 'Jan 21, 2024 12:56', avatar: avatar5, actor: 'Sofia Garcia', action: 'Created', resource: 'User: o.brown@corp.com', ip: '10.0.12.19' },
]

const pages = ['1', '2', '3', '...', '18']

export default function AuditLogsPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-8">
        {/* Page header */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-[13px] font-medium">
            <span className="text-[var(--c-text)]">Admin</span>
            <ChevronRight className="size-3.5 text-[var(--c-muted)]" />
            <span className="text-[var(--c-heading)]">Audit Logs</span>
          </div>
          <h1 className="text-[28px] font-bold leading-tight text-[var(--c-heading)]">Audit Logs</h1>
        </div>

        <div className="flex flex-col gap-6">
          {/* Toolbar */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex w-full flex-col gap-3 sm:max-w-[400px] sm:flex-row sm:items-start">
              <label className="flex min-h-9 w-full min-w-0 flex-1 items-center gap-2 rounded-lg border border-[var(--c-border)] bg-[var(--c-card)] px-3 py-2.5 shadow-[0px_2px_4px_rgba(0,0,0,0.04)] focus-within:border-[var(--c-primary)]">
                <Search className="size-[18px] shrink-0 text-[var(--c-muted)]" />
                <input
                  type="text"
                  placeholder="Search by actor or resource..."
                  className="w-full min-w-0 bg-transparent text-sm text-[var(--c-heading)] placeholder-[var(--c-text)] outline-none"
                />
              </label>
              <div className="flex items-center gap-3 sm:contents">
                <button
                  type="button"
                  className="flex min-h-9 flex-1 shrink-0 items-center justify-center gap-2 rounded-lg border border-[var(--c-primary)] bg-[var(--c-primary-soft)] px-4 py-2.5 text-sm font-semibold text-[var(--c-primary)] transition-colors hover:bg-[var(--c-primary-soft2)] sm:flex-none"
                >
                  <ListFilter className="size-4" />
                  Filter
                </button>
                <button
                  type="button"
                  className="flex min-h-9 flex-1 items-center justify-center gap-2 rounded-lg bg-[var(--c-primary)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0px_8px_9px_rgba(37,99,235,0.2)] transition-colors hover:bg-[var(--c-primary-hover)] sm:hidden"
                >
                  <Download className="size-4" />
                  Export CSV
                </button>
              </div>
            </div>
            <button
              type="button"
              className="hidden items-center gap-2 rounded-lg bg-[var(--c-primary)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0px_8px_9px_rgba(37,99,235,0.2)] transition-colors hover:bg-[var(--c-primary-hover)] sm:flex"
            >
              <Download className="size-4" />
              Export CSV
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)]">
            <table className="w-full min-w-[900px] border-collapse text-left">
              <thead>
                <tr className="bg-[var(--c-primary-soft)] text-[13px] font-semibold text-[var(--c-primary)]">
                  <th className="w-[170px] p-4 font-semibold">Timestamp</th>
                  <th className="p-4 font-semibold">Actor</th>
                  <th className="w-[110px] p-4 font-semibold">Action</th>
                  <th className="w-[260px] p-4 font-semibold">Resource</th>
                  <th className="w-[140px] p-4 font-semibold">IP Address</th>
                  <th className="w-[80px] p-4 text-right font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((l) => (
                  <tr
                    key={l.id}
                    className="border-t border-[var(--c-border)] transition-colors hover:bg-[var(--c-bg)]"
                  >
                    <td className="p-4 text-sm whitespace-nowrap text-[var(--c-text2)]">
                      {l.timestamp}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={l.avatar}
                          alt={l.actor}
                          className="size-8 shrink-0 rounded-full object-cover"
                        />
                        <span className="text-sm font-semibold whitespace-nowrap text-[var(--c-heading)]">
                          {l.actor}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-flex rounded-[20px] px-2.5 py-1 text-xs font-semibold shadow-[0px_2px_4px_rgba(0,0,0,0.07)] ${actionStyles[l.action]}`}
                      >
                        {l.action}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-[var(--c-heading)]">{l.resource}</td>
                    <td className="p-4 text-sm whitespace-nowrap text-[var(--c-text2)]">{l.ip}</td>
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

          {/* Pagination */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[13px] text-[var(--c-text)]">Showing 10 of 4,812 events</p>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                className="rounded-lg border border-[var(--c-green)] bg-[var(--c-green-soft)] px-4 py-2.5 text-sm font-semibold text-[var(--c-primary)] transition-colors hover:bg-[var(--c-green-soft)]"
              >
                Previous
              </button>
              <div className="flex items-center gap-1">
                {pages.map((p) => (
                  <button
                    key={p}
                    type="button"
                    className={`rounded-md px-3 py-2 text-[13px] font-semibold transition-colors ${
                      p === '1'
                        ? 'bg-[var(--c-primary)] text-white'
                        : p === '...'
                          ? 'cursor-default text-[var(--c-heading)]'
                          : 'text-[var(--c-primary)] hover:bg-[var(--c-primary-soft)]'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
              <button
                type="button"
                className="rounded-lg border border-[var(--c-green)] bg-[var(--c-green-soft)] px-4 py-2.5 text-sm font-semibold text-[var(--c-primary)] transition-colors hover:bg-[var(--c-green-soft)]"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
