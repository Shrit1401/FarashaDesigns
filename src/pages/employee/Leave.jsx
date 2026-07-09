import { useState } from 'react'
import { ChevronRight, ChevronDown } from 'lucide-react'
import iconAnnual from '../../assets/employee-leave-annual.png'
import iconSick from '../../assets/employee-leave-sick.png'
import iconCasual from '../../assets/employee-leave-casual.png'
import iconRow1 from '../../assets/employee-leave-row1.png'
import iconRow2 from '../../assets/employee-leave-row2.png'
import iconRow3 from '../../assets/employee-leave-row3.png'
import iconRow4 from '../../assets/employee-leave-row4.png'

const balances = [
  {
    label: 'ANNUAL',
    value: '15 / 20',
    icon: iconAnnual,
    bg: 'bg-[var(--c-green-soft)]',
    border: 'border-[var(--c-green)]',
    text: 'text-[var(--c-green)]',
  },
  {
    label: 'SICK',
    value: '3 / 10',
    icon: iconSick,
    bg: 'bg-[var(--c-cyan-soft)]',
    border: 'border-[var(--c-cyan)]',
    text: 'text-[var(--c-cyan)]',
  },
  {
    label: 'CASUAL',
    value: '2 / 5',
    icon: iconCasual,
    bg: 'bg-[var(--c-amber-soft)]',
    border: 'border-[var(--c-amber)]',
    text: 'text-[var(--c-amber)]',
  },
]

const history = [
  { type: 'Annual', icon: iconRow1, from: 'Sep 12', to: 'Sep 15', days: '4', status: 'Approved' },
  { type: 'Sick', icon: iconRow2, from: 'Aug 05', to: 'Aug 06', days: '2', status: 'Rejected' },
  { type: 'Annual', icon: iconRow3, from: 'Jul 20', to: 'Jul 21', days: '2', status: 'Approved' },
  { type: 'Casual', icon: iconRow4, from: 'Jun 10', to: 'Jun 10', days: '1', status: 'Pending' },
]

const statusStyles = {
  Approved: 'bg-[var(--c-green-soft)] text-[var(--c-green)]',
  Rejected: 'bg-[var(--c-red-soft)] text-[var(--c-red)]',
  Pending: 'bg-[var(--c-amber-soft)] text-[var(--c-amber)]',
}

export default function LeavePage() {
  const [policyOpen, setPolicyOpen] = useState(false)
  const [form, setForm] = useState({ type: '', from: '', to: '', reason: '' })
  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm">
          <span className="text-[var(--c-text2)]">Home</span>
          <ChevronRight className="size-3.5 text-[var(--c-text2)]" />
          <span className="font-medium text-[var(--c-heading)]">Leave</span>
        </div>

        <div className="flex flex-col items-start gap-6 lg:flex-row">
          {/* Left column */}
          <div className="flex w-full shrink-0 flex-col gap-6 lg:w-[400px]">
            {/* Apply for Leave */}
            <div className="overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)]">
              <div className="border-b border-[var(--c-border)] px-6 py-4">
                <h2 className="text-lg font-bold text-[var(--c-heading)]">Apply for Leave</h2>
              </div>
              <div className="flex flex-col gap-4 p-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold leading-tight text-[var(--c-heading)]">
                    Leave Type
                  </label>
                  <div className="relative">
                    <select
                      value={form.type}
                      onChange={set('type')}
                      className={`h-10 w-full appearance-none rounded-md border border-[var(--c-border-strong)] bg-[var(--c-card)] px-3 pr-9 text-sm shadow-[0px_1px_2px_rgba(0,0,0,0.04)] outline-none focus:border-[var(--c-primary)] ${
                        form.type ? 'text-[var(--c-heading)]' : 'text-[var(--c-muted)]'
                      }`}
                    >
                      <option value="">Select type...</option>
                      <option value="annual">Annual</option>
                      <option value="sick">Sick</option>
                      <option value="casual">Casual</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[var(--c-text2)]" />
                  </div>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-3">
                  <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                    <label className="text-[13px] font-semibold leading-tight text-[var(--c-heading)]">
                      From Date
                    </label>
                    <input
                      type="text"
                      placeholder="DD/MM/YYYY"
                      value={form.from}
                      onChange={set('from')}
                      className="h-10 w-full rounded-md border border-[var(--c-border-strong)] bg-[var(--c-card)] px-3 text-sm text-[var(--c-heading)] shadow-[0px_1px_2px_rgba(0,0,0,0.04)] outline-none placeholder:text-[var(--c-muted)] focus:border-[var(--c-primary)]"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                    <label className="text-[13px] font-semibold leading-tight text-[var(--c-heading)]">
                      To Date
                    </label>
                    <input
                      type="text"
                      placeholder="DD/MM/YYYY"
                      value={form.to}
                      onChange={set('to')}
                      className="h-10 w-full rounded-md border border-[var(--c-border-strong)] bg-[var(--c-card)] px-3 text-sm text-[var(--c-heading)] shadow-[0px_1px_2px_rgba(0,0,0,0.04)] outline-none placeholder:text-[var(--c-muted)] focus:border-[var(--c-primary)]"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold leading-tight text-[var(--c-heading)]">
                    Reason
                  </label>
                  <textarea
                    placeholder="Enter reason here..."
                    value={form.reason}
                    onChange={set('reason')}
                    className="h-20 w-full resize-none rounded-md border border-[var(--c-border-strong)] bg-[var(--c-card)] p-3 text-sm text-[var(--c-heading)] shadow-[0px_1px_2px_rgba(0,0,0,0.04)] outline-none placeholder:text-[var(--c-muted)] focus:border-[var(--c-primary)]"
                  />
                </div>
                <button
                  type="button"
                  className="w-full rounded-lg bg-[var(--c-primary)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0px_8px_9px_rgba(37,99,235,0.2)] transition-colors hover:bg-[var(--c-primary-hover)]"
                >
                  Submit Request
                </button>
              </div>
            </div>

            {/* Leave Policy Overview */}
            <div className="rounded-lg border border-[var(--c-border)] bg-[var(--c-card)] shadow-[0px_6px_9px_rgba(0,0,0,0.07)]">
              <button
                type="button"
                onClick={() => setPolicyOpen((o) => !o)}
                className="flex w-full items-center justify-between px-5 py-4"
              >
                <span className="text-sm font-semibold text-[var(--c-heading)]">Leave Policy Overview</span>
                <ChevronDown
                  className={`size-4 text-[var(--c-text2)] transition-transform ${policyOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {policyOpen && (
                <div className="border-t border-[var(--c-border)] px-5 py-4">
                  <ul className="flex list-disc flex-col gap-2 pl-4 text-[13px] text-[var(--c-text)]">
                    <li>Annual leave: 20 days per calendar year, accrued monthly.</li>
                    <li>Sick leave: 10 days per year with medical certificate after 2 days.</li>
                    <li>Casual leave: 5 days per year, non-carryover.</li>
                    <li>Requests must be submitted at least 3 working days in advance.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Right column */}
          <div className="flex min-w-0 flex-1 flex-col gap-6">
            {/* Balance chips */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {balances.map(({ label, value, icon, bg, border, text }) => (
                <div key={label} className={`flex flex-col gap-1 rounded-xl border ${border} ${bg} p-4`}>
                  <p className={`text-xs font-semibold ${text}`}>{label}</p>
                  <p className={`font-mono text-2xl font-bold ${text}`}>{value}</p>
                  <img src={icon} alt="" className="size-6 rounded-lg object-cover" />
                </div>
              ))}
            </div>

            {/* Leave History */}
            <div className="overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)]">
              <div className="border-b border-[var(--c-border)] px-6 py-4">
                <h2 className="text-lg font-bold text-[var(--c-heading)]">Leave History</h2>
              </div>
              <div className="p-4 sm:p-6">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[520px] text-left">
                    <thead>
                      <tr className="bg-[var(--c-hover)] text-xs font-semibold text-[var(--c-text2)]">
                        <th className="px-3 py-3 font-semibold">TYPE</th>
                        <th className="px-3 py-3 font-semibold">FROM</th>
                        <th className="px-3 py-3 font-semibold">TO</th>
                        <th className="px-3 py-3 font-semibold">DAYS</th>
                        <th className="px-3 py-3 font-semibold">STATUS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {history.map((row, i) => (
                        <tr
                          key={i}
                          className="border-b border-[var(--c-border)] text-[13px] text-black transition-colors hover:bg-[var(--c-bg)]"
                        >
                          <td className="px-3 py-4">
                            <div className="flex items-center gap-2">
                              <img src={row.icon} alt="" className="size-4 rounded object-cover" />
                              <span>{row.type}</span>
                            </div>
                          </td>
                          <td className="px-3 py-4">{row.from}</td>
                          <td className="px-3 py-4">{row.to}</td>
                          <td className="px-3 py-4 font-mono font-semibold">{row.days}</td>
                          <td className="px-3 py-4">
                            <span
                              className={`rounded px-2 py-0.5 text-xs font-semibold ${statusStyles[row.status]}`}
                            >
                              {row.status}
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
        </div>
      </div>
    </div>
  )
}
