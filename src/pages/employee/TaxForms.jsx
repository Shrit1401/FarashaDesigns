import { ChevronRight, Info, Download, FileText } from 'lucide-react'

const statusStyles = {
  Available: 'bg-[var(--c-green-soft)] text-[var(--c-green)]',
  Processing: 'bg-[var(--c-amber-soft)] text-[var(--c-amber)]',
}

const forms = [
  { name: 'W-2 2024', year: '2024', issued: 'Jan 28, 2025', status: 'Available' },
  { name: 'W-2 2023', year: '2023', issued: 'Jan 26, 2024', status: 'Available' },
  { name: 'W-4 Current', year: '2025', issued: 'Mar 04, 2025', status: 'Available' },
  { name: '1095-C 2024', year: '2024', issued: 'Feb 12, 2025', status: 'Processing' },
  { name: 'State Withholding 2024', year: '2024', issued: 'Jan 30, 2025', status: 'Available' },
  { name: 'W-2 2022', year: '2022', issued: 'Jan 27, 2023', status: 'Available' },
]

const withholding = [
  { label: 'Federal Filing Status', value: 'Single' },
  { label: 'Federal Allowances', value: '1' },
  { label: 'State', value: 'California' },
  { label: 'Additional Withholding', value: '$50' },
]

export default function TaxFormsPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-8">
        {/* Page header */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-[13px] font-medium">
            <span className="text-[var(--c-text)]">Employee</span>
            <ChevronRight className="size-3.5 text-[var(--c-muted)]" />
            <span className="text-[var(--c-heading)]">Tax Forms</span>
          </div>
          <h1 className="text-[28px] font-bold leading-tight text-[var(--c-heading)]">Tax Forms</h1>
        </div>

        {/* Info banner */}
        <div className="flex flex-col gap-3 rounded-xl border border-[var(--c-primary)] bg-[var(--c-primary-soft)] p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Info className="size-5 shrink-0 text-[var(--c-primary)]" />
            <p className="text-sm font-medium text-[var(--c-heading)]">
              Your 2024 W-2 is now available.
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-lg bg-[var(--c-primary)] px-4 py-2 text-sm font-semibold text-white shadow-[0px_8px_9px_rgba(37,99,235,0.2)] transition-colors hover:bg-[var(--c-primary-hover)]"
          >
            <Download className="size-4" />
            Download
          </button>
        </div>

        {/* Tax Documents table */}
        <div className="flex flex-col gap-5 rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] p-6 shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)]">
          <p className="text-base font-semibold text-[var(--c-heading)]">Tax Documents</p>
          <div className="overflow-x-auto rounded-xl border border-[var(--c-border)]">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="bg-[var(--c-primary-soft)] text-[13px] font-semibold text-[var(--c-primary)]">
                  <th className="p-4 font-semibold">Form</th>
                  <th className="w-[120px] p-4 font-semibold">Tax Year</th>
                  <th className="w-[160px] p-4 font-semibold">Issued Date</th>
                  <th className="w-[140px] p-4 font-semibold">Status</th>
                  <th className="w-[100px] p-4 text-right font-semibold">Download</th>
                </tr>
              </thead>
              <tbody>
                {forms.map((f) => (
                  <tr
                    key={f.name}
                    className="border-t border-[var(--c-border)] transition-colors hover:bg-[var(--c-bg)]"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] border border-[rgba(37,99,235,0.2)] bg-[var(--c-primary-soft)]">
                          <FileText className="size-[18px] text-[var(--c-primary)]" />
                        </div>
                        <span className="text-sm font-semibold whitespace-nowrap text-[var(--c-heading)]">
                          {f.name}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-[var(--c-text2)]">{f.year}</td>
                    <td className="p-4 text-sm whitespace-nowrap text-[var(--c-text2)]">{f.issued}</td>
                    <td className="p-4">
                      <span
                        className={`inline-flex rounded-[20px] px-2.5 py-1 text-xs font-semibold shadow-[0px_2px_4px_rgba(0,0,0,0.07)] ${statusStyles[f.status]}`}
                      >
                        {f.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex justify-end">
                        <button
                          type="button"
                          className="rounded-md p-1 text-[var(--c-muted)] transition-colors hover:bg-[var(--c-hover)] hover:text-[var(--c-primary)]"
                          aria-label={`Download ${f.name}`}
                        >
                          <Download className="size-[18px]" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Withholding Summary */}
        <div className="flex flex-col gap-5 rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] p-6 shadow-[0px_6px_9px_rgba(0,0,0,0.07)]">
          <div className="flex items-center justify-between gap-4">
            <p className="text-base font-semibold text-[var(--c-heading)]">Withholding Summary</p>
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg border border-[var(--c-primary)] bg-[var(--c-primary-soft)] px-4 py-2.5 text-sm font-semibold text-[var(--c-primary)] transition-colors hover:bg-[var(--c-primary-soft2)]"
            >
              Update W-4
            </button>
          </div>
          <div className="flex flex-col">
            {withholding.map((w) => (
              <div
                key={w.label}
                className="flex items-center justify-between gap-4 border-b border-[var(--c-border)] py-4 last:border-b-0"
              >
                <p className="text-sm text-[var(--c-text)]">{w.label}</p>
                <p className="text-sm font-semibold text-[var(--c-heading)]">{w.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
