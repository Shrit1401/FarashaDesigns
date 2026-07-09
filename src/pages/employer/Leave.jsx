import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import avatar1 from '../../assets/avatar1.png'
import avatar2 from '../../assets/avatar2.png'
import avatar3 from '../../assets/avatar3.png'
import avatar4 from '../../assets/avatar4.png'
import avatar5 from '../../assets/avatar5.png'
import avatar6 from '../../assets/avatar6.png'

const tabs = ['Pending Approvals', 'All Leave', 'Leave Calendar']

const requests = [
  { avatar: avatar1, name: 'John Doe', type: 'Annual', from: 'Oct 28', to: 'Oct 31', days: '4', reason: 'Family vacation to Coast.' },
  { avatar: avatar2, name: 'Michael Ross', type: 'Sick', from: 'Oct 26', to: 'Oct 26', days: '1', reason: 'Sudden high fever.' },
  { avatar: avatar3, name: 'Rachel Zane', type: 'Maternity', from: 'Nov 01', to: 'Jan 31', days: '92', reason: 'New child.' },
  { avatar: avatar4, name: 'Louis Litt', type: 'Casual', from: 'Oct 30', to: 'Oct 30', days: '1', reason: 'Personal emergency.' },
  { avatar: avatar5, name: 'Donna Paulsen', type: 'Annual', from: 'Dec 12', to: 'Dec 24', days: '12', reason: 'Holidays.' },
  { avatar: avatar6, name: 'Harvey Specter', type: 'Annual', from: 'Oct 27', to: 'Oct 28', days: '2', reason: 'Legal retreat.' },
]

export default function LeavePage() {
  const [activeTab, setActiveTab] = useState('Pending Approvals')

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm">
          <span className="text-[var(--c-muted)]">Home</span>
          <ChevronRight className="size-3.5 text-[var(--c-muted)]" />
          <span className="font-semibold text-[var(--c-heading)]">Leave</span>
        </nav>

        <h1 className="text-2xl font-bold leading-[1.2] text-[var(--c-heading)]">Leave Requests</h1>

        {/* Tabs */}
        <div className="overflow-x-auto">
          <div className="flex min-w-max gap-8 border-b border-[var(--c-border)]">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap pb-3 text-[15px] transition-colors ${
                  activeTab === tab
                    ? 'border-b-2 border-[var(--c-teal)] font-bold text-[var(--c-teal)]'
                    : 'border-b-2 border-transparent font-medium text-[var(--c-muted)] hover:text-[var(--c-text)]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'Pending Approvals' ? (
          <div className="overflow-x-auto rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)]">
            <table className="w-full min-w-[920px] text-left">
              <thead>
                <tr className="border-b border-[var(--c-border)] bg-[var(--c-primary-soft)] text-xs font-semibold uppercase text-[var(--c-primary)]">
                  <th className="px-6 py-3 font-semibold">Employee</th>
                  <th className="w-[120px] px-2 py-3 font-semibold">Type</th>
                  <th className="w-[120px] px-2 py-3 font-semibold">From</th>
                  <th className="w-[120px] px-2 py-3 font-semibold">To</th>
                  <th className="w-[80px] px-2 py-3 font-semibold">Days</th>
                  <th className="px-2 py-3 font-semibold">Reason</th>
                  <th className="w-[180px] px-6 py-3 text-right font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((r) => (
                  <tr key={r.name} className="border-b border-[var(--c-border)] last:border-b-0 hover:bg-[var(--c-bg)]">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={r.avatar} alt={r.name} className="size-9 rounded-full object-cover" />
                        <span className="whitespace-nowrap text-sm text-[var(--c-heading)]">{r.name}</span>
                      </div>
                    </td>
                    <td className="px-2 py-4 text-sm text-[var(--c-heading)]">{r.type}</td>
                    <td className="px-2 py-4 text-sm text-[var(--c-heading)]">{r.from}</td>
                    <td className="px-2 py-4 text-sm text-[var(--c-heading)]">{r.to}</td>
                    <td className="px-2 py-4 text-sm text-[var(--c-heading)]">{r.days}</td>
                    <td className="max-w-[220px] truncate px-2 py-4 text-sm text-[var(--c-heading)]">{r.reason}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          type="button"
                          className="rounded-lg border border-[var(--c-primary)] bg-[var(--c-primary)] px-3 py-2 text-[13px] font-semibold text-white shadow-[0px_8px_10px_rgba(37,99,235,0.2)] transition-colors hover:bg-[var(--c-primary-hover)]"
                        >
                          Approve
                        </button>
                        <button
                          type="button"
                          className="rounded-lg border border-[var(--c-red)] bg-[var(--c-red)] px-3 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-[var(--c-red)]"
                        >
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] px-6 py-16 text-center shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)]">
            <p className="text-base font-semibold text-[var(--c-heading)]">{activeTab}</p>
            <p className="text-sm text-[var(--c-text2)]">
              {activeTab === 'All Leave'
                ? 'A full history of leave requests will appear here.'
                : 'The team leave calendar will appear here.'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
