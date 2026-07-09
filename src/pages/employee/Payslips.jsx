import { useState } from 'react'
import { ChevronRight, ChevronDown, ChevronUp, FileText, Download, Search, X } from 'lucide-react'

const months = [
  'August 2023',
  'July 2023',
  'June 2023',
  'May 2023',
  'April 2023',
  'March 2023',
  'February 2023',
  'January 2023',
]

const payslips = months.map((period) => ({
  period,
  gross: '$ 4,500.00',
  deductions: '$ 450.00',
  net: '$ 4,050.00',
  status: 'Paid',
}))

const earnings = [
  { label: 'Basic Salary', value: '$ 3,800.00' },
  { label: 'HRA Allowance', value: '$ 500.00' },
  { label: 'Travel Allowance', value: '$ 200.00' },
]

const deductions = [
  { label: 'Taxes', value: '$ 300.00' },
  { label: 'Health Insurance', value: '$ 150.00' },
  { label: 'Other', value: '$ 0.00' },
]

function PayslipModal({ payslip, onClose }) {
  const [earningsOpen, setEarningsOpen] = useState(true)
  const [deductionsOpen, setDeductionsOpen] = useState(true)

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(15,23,42,0.4)] p-4"
      onClick={onClose}
    >
      <div
        className="flex max-h-[90vh] w-full max-w-[560px] flex-col overflow-hidden rounded-2xl border border-[var(--c-border)] bg-[var(--c-card)] shadow-[0px_18px_40px_-10px_rgba(0,0,0,0.1)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-[var(--c-border)] p-6">
          <h2 className="text-lg font-bold text-[var(--c-heading)]">
            Payslip Details: {payslip.period}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-0.5 text-[var(--c-text2)] transition-colors hover:bg-[var(--c-hover)] hover:text-[var(--c-heading)]"
            aria-label="Close"
          >
            <X className="size-6" />
          </button>
        </div>

        <div className="flex flex-col gap-4 overflow-y-auto p-6">
          <div className="flex items-center justify-between rounded-lg bg-[var(--c-green-soft)] p-4">
            <p className="text-xs font-semibold text-black">Net Take-Home</p>
            <p className="font-mono text-xl font-extrabold text-[var(--c-green)]">{payslip.net}</p>
          </div>

          {/* Earnings */}
          <div className="overflow-hidden rounded-lg border border-[var(--c-border)] bg-[var(--c-card)]">
            <button
              type="button"
              onClick={() => setEarningsOpen((o) => !o)}
              className="flex w-full items-center justify-between bg-[var(--c-hover)] px-5 py-4"
            >
              <span className="text-sm font-semibold text-[var(--c-heading)]">Earnings</span>
              {earningsOpen ? (
                <ChevronUp className="size-4 text-[var(--c-text2)]" />
              ) : (
                <ChevronDown className="size-4 text-[var(--c-text2)]" />
              )}
            </button>
            {earningsOpen && (
              <div className="flex flex-col gap-3 p-5">
                {earnings.map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between text-[13px]">
                    <p className="text-[var(--c-text)]">{label}</p>
                    <p className="font-mono text-[var(--c-heading)]">{value}</p>
                  </div>
                ))}
                <div className="border-t border-[var(--c-green-soft)] pt-3">
                  <div className="flex items-center justify-between text-[13px] text-[var(--c-green)]">
                    <p className="font-semibold">Total Earnings</p>
                    <p className="font-mono font-bold">{payslip.gross}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Deductions */}
          <div className="overflow-hidden rounded-lg border border-[var(--c-border)] bg-[var(--c-card)]">
            <button
              type="button"
              onClick={() => setDeductionsOpen((o) => !o)}
              className="flex w-full items-center justify-between bg-[var(--c-hover)] px-5 py-4"
            >
              <span className="text-sm font-semibold text-[var(--c-heading)]">Deductions</span>
              {deductionsOpen ? (
                <ChevronUp className="size-4 text-[var(--c-text2)]" />
              ) : (
                <ChevronDown className="size-4 text-[var(--c-text2)]" />
              )}
            </button>
            {deductionsOpen && (
              <div className="flex flex-col gap-3 p-5">
                {deductions.map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between text-[13px]">
                    <p className="text-[var(--c-text)]">{label}</p>
                    <p className="font-mono text-[var(--c-heading)]">{value}</p>
                  </div>
                ))}
                <div className="border-t border-[var(--c-border)] pt-3">
                  <div className="flex items-center justify-between text-[13px] text-[var(--c-heading)]">
                    <p className="font-semibold">Total Deductions</p>
                    <p className="font-mono font-bold">{payslip.deductions}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="shrink-0 border-t border-[var(--c-border)] p-6 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-2 rounded-lg border border-[var(--c-primary)] bg-[var(--c-card)] px-4 py-2.5 text-sm font-semibold text-[var(--c-primary)] transition-colors hover:bg-[var(--c-primary-soft)]"
          >
            <X className="size-4" />
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default function PayslipsPage() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-6">
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-sm">
          <span className="text-[var(--c-text2)]">Home</span>
          <ChevronRight className="size-3.5 text-[var(--c-text2)]" />
          <span className="font-medium text-[var(--c-heading)]">Payslips</span>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-4 rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] p-5 shadow-[0px_6px_9px_rgba(0,0,0,0.07)] lg:flex-row lg:items-end">
          <div className="flex w-full flex-col gap-1.5 lg:w-[200px]">
            <label className="text-xs font-semibold text-[var(--c-heading)]">Year</label>
            <input
              type="text"
              defaultValue="2023"
              className="h-10 w-full rounded-md border border-[var(--c-border-strong)] bg-[var(--c-card)] px-3 text-sm text-[var(--c-heading)] shadow-[0px_1px_2px_rgba(0,0,0,0.04)] outline-none focus:border-[var(--c-primary)]"
            />
          </div>
          <div className="flex w-full flex-col gap-1.5 lg:w-[200px]">
            <label className="text-xs font-semibold text-[var(--c-heading)]">Month</label>
            <input
              type="text"
              placeholder="All Months"
              className="h-10 w-full rounded-md border border-[var(--c-border-strong)] bg-[var(--c-card)] px-3 text-sm text-[var(--c-heading)] shadow-[0px_1px_2px_rgba(0,0,0,0.04)] outline-none placeholder:text-[var(--c-muted)] focus:border-[var(--c-primary)]"
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-1.5">
            <label className="text-xs font-semibold text-[var(--c-heading)]">Search</label>
            <input
              type="text"
              placeholder="Search by ID or Period..."
              className="h-10 w-full rounded-md border border-[var(--c-border-strong)] bg-[var(--c-card)] px-3 text-sm text-[var(--c-heading)] shadow-[0px_1px_2px_rgba(0,0,0,0.04)] outline-none placeholder:text-[var(--c-muted)] focus:border-[var(--c-primary)]"
            />
          </div>
          <button
            type="button"
            className="flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg bg-[var(--c-green)] px-4 text-sm font-semibold text-white shadow-[0px_8px_9px_rgba(16,185,129,0.2)] transition-colors hover:bg-[var(--c-green)]"
          >
            <Search className="size-4" />
            Search
          </button>
        </div>

        {/* Monthly Payslips */}
        <div className="overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)]">
          <div className="border-b border-[var(--c-border)] px-6 py-4">
            <h2 className="text-lg font-bold text-[var(--c-heading)]">Monthly Payslips</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px] text-left">
              <thead>
                <tr className="border-b border-[var(--c-border)] bg-[var(--c-bg)] text-xs font-semibold text-[var(--c-text2)]">
                  <th className="px-6 py-3 font-semibold">PERIOD</th>
                  <th className="px-4 py-3 font-semibold">GROSS PAY</th>
                  <th className="px-4 py-3 font-semibold">DEDUCTIONS</th>
                  <th className="px-4 py-3 font-semibold">NET PAY</th>
                  <th className="px-4 py-3 font-semibold">STATUS</th>
                  <th className="px-6 py-3 text-right font-semibold">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {payslips.map((p) => (
                  <tr
                    key={p.period}
                    className="border-b border-[var(--c-border)] transition-colors last:border-b-0 hover:bg-[var(--c-bg)]"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="flex size-8 items-center justify-center rounded-lg bg-[var(--c-primary-soft)]">
                          <FileText className="size-4 text-[var(--c-primary)]" />
                        </span>
                        <span className="text-xs font-semibold text-[var(--c-heading)]">{p.period}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 font-mono text-xs text-[var(--c-heading)]">{p.gross}</td>
                    <td className="px-4 py-4 font-mono text-xs text-[var(--c-heading)]">{p.deductions}</td>
                    <td className="px-4 py-4 font-mono text-sm font-bold text-[var(--c-green)]">{p.net}</td>
                    <td className="px-4 py-4">
                      <span className="rounded bg-[var(--c-green-soft)] px-2 py-0.5 text-xs font-semibold text-[var(--c-green)]">
                        {p.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => setSelected(p)}
                          className="rounded-lg border border-[var(--c-primary)] bg-[var(--c-card)] px-4 py-2.5 text-sm font-semibold text-[var(--c-primary)] transition-colors hover:bg-[var(--c-primary-soft)]"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="flex items-center gap-2 rounded-lg border border-[var(--c-green)] bg-[var(--c-card)] px-4 py-2.5 text-sm font-semibold text-[var(--c-green)] transition-colors hover:bg-[var(--c-green-soft)]"
                        >
                          <Download className="size-4" />
                          PDF
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

      {selected && <PayslipModal payslip={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
