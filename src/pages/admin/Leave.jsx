import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import avatar1 from '../../assets/avatar1.png'
import avatar2 from '../../assets/avatar2.png'
import avatar3 from '../../assets/avatar3.png'
import avatar4 from '../../assets/avatar4.png'
import avatar5 from '../../assets/avatar5.png'
import avatar6 from '../../assets/avatar6.png'

const statusStyles = {
  Pending: 'bg-[var(--c-amber-soft)] text-[var(--c-amber)]',
  Approved: 'bg-[var(--c-green-soft)] text-[var(--c-green)]',
  Rejected: 'bg-[var(--c-red-soft)] text-[var(--c-red)]',
}

const requests = [
  { avatar: avatar1, name: 'Sarah Jenkins', company: 'TechFlow Inc', type: 'Sick Leave', duration: 'Jan 20 - Jan 22', days: '3', status: 'Pending' },
  { avatar: avatar2, name: 'Michael Chen', company: 'Vertex Solutions', type: 'Annual', duration: 'Feb 05 - Feb 12', days: '7', status: 'Approved' },
  { avatar: avatar3, name: 'Emma Watson', company: 'Design Studio', type: 'Personal', duration: 'Jan 25 - Jan 26', days: '1', status: 'Pending' },
  { avatar: avatar4, name: 'David Miller', company: 'BuildRight Ltd', type: 'Annual', duration: 'Mar 10 - Mar 20', days: '10', status: 'Rejected' },
  { avatar: avatar5, name: 'Sofia Garcia', company: 'Global Logistics', type: 'Maternity', duration: 'Apr 01 - Jul 01', days: '90', status: 'Approved' },
  { avatar: avatar6, name: 'Lucas Scott', company: 'QuickDeliver', type: 'Sick Leave', duration: 'Jan 22 - Jan 23', days: '2', status: 'Pending' },
  { avatar: avatar5, name: 'Olivia Brown', company: 'Marketing Pro', type: 'Annual', duration: 'Feb 14 - Feb 21', days: '7', status: 'Approved' },
  { avatar: avatar2, name: 'James Bond', company: 'System', type: 'Special', duration: 'Jan 30 - Jan 31', days: '1', status: 'Pending' },
]

const pendingCount = requests.filter((r) => r.status === 'Pending').length

const tabs = [
  { key: 'all', label: 'All Requests' },
  { key: 'Pending', label: 'Pending', count: pendingCount },
  { key: 'Approved', label: 'Approved' },
  { key: 'Rejected', label: 'Rejected' },
]

export default function LeavePage() {
  const [tab, setTab] = useState('Pending')
  const rows = tab === 'all' ? requests : requests.filter((r) => r.status === tab)

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-8">
        {/* Page header */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-[13px] font-medium">
            <span className="text-[var(--c-text)]">Admin</span>
            <ChevronRight className="size-3.5 text-[var(--c-muted)]" />
            <span className="text-[var(--c-heading)]">Leave</span>
          </div>
          <h1 className="text-[28px] font-bold leading-tight text-[var(--c-heading)]">Leave</h1>
        </div>

        <div className="flex flex-col gap-6">
          {/* Tabs */}
          <div className="flex gap-8 overflow-x-auto border-b border-[var(--c-border)]">
            {tabs.map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => setTab(t.key)}
                className={`shrink-0 border-b-2 px-1 pb-3 text-sm whitespace-nowrap transition-colors ${
                  tab === t.key
                    ? 'border-[var(--c-primary)] font-semibold text-[var(--c-primary)]'
                    : 'border-transparent font-medium text-[var(--c-text2)] hover:text-[var(--c-heading)]'
                }`}
              >
                {t.label}
                {t.count != null && <span className="font-bold"> ({t.count})</span>}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)]">
            <table className="w-full min-w-[1020px] border-collapse text-left">
              <thead>
                <tr className="bg-[var(--c-primary-soft)] text-[13px] font-semibold text-[var(--c-primary)]">
                  <th className="p-4 font-semibold">Employee</th>
                  <th className="w-[180px] p-4 font-semibold">Company</th>
                  <th className="w-[120px] p-4 font-semibold">Type</th>
                  <th className="w-[160px] p-4 font-semibold">Duration</th>
                  <th className="w-[80px] p-4 font-semibold">Days</th>
                  <th className="w-[120px] p-4 font-semibold">Status</th>
                  <th className="w-[200px] p-4 text-right font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr
                    key={r.name}
                    className="border-t border-[var(--c-border)] transition-colors hover:bg-[var(--c-bg)]"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={r.avatar}
                          alt={r.name}
                          className="size-8 shrink-0 rounded-full object-cover"
                        />
                        <span className="text-sm font-semibold whitespace-nowrap text-[var(--c-heading)]">
                          {r.name}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-sm whitespace-nowrap text-[var(--c-text2)]">{r.company}</td>
                    <td className="p-4 text-sm whitespace-nowrap text-[var(--c-heading)]">{r.type}</td>
                    <td className="p-4 text-sm whitespace-nowrap text-[var(--c-text2)]">{r.duration}</td>
                    <td className="p-4 text-sm text-[var(--c-heading)]">{r.days}</td>
                    <td className="p-4">
                      <span
                        className={`inline-flex rounded-[20px] px-2.5 py-1 text-xs font-semibold shadow-[0px_2px_4px_rgba(0,0,0,0.07)] ${statusStyles[r.status]}`}
                      >
                        {r.status}
                      </span>
                    </td>
                    <td className="p-4">
                      {r.status === 'Pending' ? (
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            className="rounded-lg border border-[var(--c-green)] bg-[var(--c-green-soft)] px-4 py-2.5 text-sm font-semibold text-[var(--c-green)] transition-colors hover:bg-[var(--c-green-soft)]"
                          >
                            Reject
                          </button>
                          <button
                            type="button"
                            className="rounded-lg bg-[var(--c-green)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0px_8px_9px_rgba(16,185,129,0.2)] transition-colors hover:bg-[var(--c-green)]"
                          >
                            Approve
                          </button>
                        </div>
                      ) : (
                        <div className="flex justify-end">
                          <button
                            type="button"
                            className="rounded-lg border border-[var(--c-green)] bg-[var(--c-card)] px-4 py-2.5 text-sm font-semibold text-[var(--c-primary)] transition-colors hover:bg-[var(--c-green-soft)]"
                          >
                            View Details
                          </button>
                        </div>
                      )}
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
