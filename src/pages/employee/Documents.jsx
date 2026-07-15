import {
  ChevronRight,
  Search,
  ListFilter,
  Upload,
  Download,
  FileText,
  FileSpreadsheet,
  Image as ImageIcon,
} from 'lucide-react'

const categories = ['All', 'Contracts', 'Payroll', 'Personal', 'Company Policy']

const typeStyles = {
  pdf: {
    icon: FileText,
    box: 'bg-[var(--c-primary-soft)] border-[rgba(37,99,235,0.2)]',
    color: 'text-[var(--c-primary)]',
  },
  sheet: {
    icon: FileSpreadsheet,
    box: 'bg-[var(--c-green-soft)] border-[rgba(16,185,129,0.2)]',
    color: 'text-[var(--c-green)]',
  },
  image: {
    icon: ImageIcon,
    box: 'bg-[var(--c-purple-soft)] border-[rgba(139,92,246,0.2)]',
    color: 'text-[var(--c-purple)]',
  },
}

const categoryStyles = {
  Contracts: 'bg-[var(--c-primary-soft)] text-[var(--c-primary)]',
  Payroll: 'bg-[var(--c-green-soft)] text-[var(--c-green)]',
  Personal: 'bg-[var(--c-purple-soft)] text-[var(--c-purple)]',
  'Company Policy': 'bg-[var(--c-amber-soft)] text-[var(--c-amber)]',
}

const documents = [
  { name: 'Employment Contract.pdf', type: 'pdf', category: 'Contracts', uploaded: 'Jan 12, 2024', size: '1.2 MB' },
  { name: 'NDA Agreement.pdf', type: 'pdf', category: 'Contracts', uploaded: 'Jan 12, 2024', size: '840 KB' },
  { name: 'Handbook 2024.pdf', type: 'pdf', category: 'Company Policy', uploaded: 'Feb 02, 2024', size: '4.6 MB' },
  { name: 'Benefits Guide.pdf', type: 'pdf', category: 'Company Policy', uploaded: 'Feb 02, 2024', size: '2.1 MB' },
  { name: 'ID Scan.png', type: 'image', category: 'Personal', uploaded: 'Mar 18, 2024', size: '3.4 MB' },
  { name: 'Payslip Dec 2024.pdf', type: 'pdf', category: 'Payroll', uploaded: 'Dec 31, 2024', size: '260 KB' },
  { name: 'Expense Report Q4.xlsx', type: 'sheet', category: 'Payroll', uploaded: 'Jan 06, 2025', size: '520 KB' },
  { name: 'Insurance Card.png', type: 'image', category: 'Personal', uploaded: 'Apr 22, 2024', size: '1.8 MB' },
]

export default function DocumentsPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-8">
        {/* Page header */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-[13px] font-medium">
            <span className="text-[var(--c-text)]">Employee</span>
            <ChevronRight className="size-3.5 text-[var(--c-muted)]" />
            <span className="text-[var(--c-heading)]">Documents</span>
          </div>
          <h1 className="text-[28px] font-bold leading-tight text-[var(--c-heading)]">My Documents</h1>
        </div>

        <div className="flex flex-col gap-6">
          {/* Toolbar */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex w-full flex-col gap-3 sm:max-w-[400px] sm:flex-row sm:items-start">
              <label className="flex min-h-9 w-full min-w-0 flex-1 items-center gap-2 rounded-lg border border-[var(--c-border)] bg-[var(--c-card)] px-3 py-2.5 shadow-[0px_2px_4px_rgba(0,0,0,0.04)] focus-within:border-[var(--c-primary)]">
                <Search className="size-[18px] shrink-0 text-[var(--c-muted)]" />
                <input
                  type="text"
                  placeholder="Search documents..."
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
                  <Upload className="size-4" />
                  Upload
                </button>
              </div>
            </div>
            <button
              type="button"
              className="hidden items-center gap-2 rounded-lg bg-[var(--c-primary)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0px_8px_9px_rgba(37,99,235,0.2)] transition-colors hover:bg-[var(--c-primary-hover)] sm:flex"
            >
              <Upload className="size-4" />
              Upload
            </button>
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                className={`rounded-[20px] px-4 py-2 text-[13px] font-semibold transition-colors ${
                  c === 'All'
                    ? 'bg-[var(--c-primary)] text-white'
                    : 'border border-[var(--c-border)] bg-[var(--c-card)] text-[var(--c-text)] hover:bg-[var(--c-hover)]'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Documents table */}
          <div className="overflow-x-auto rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)]">
            <table className="w-full min-w-[820px] border-collapse text-left">
              <thead>
                <tr className="bg-[var(--c-primary-soft)] text-[13px] font-semibold text-[var(--c-primary)]">
                  <th className="p-4 font-semibold">Name</th>
                  <th className="w-[160px] p-4 font-semibold">Category</th>
                  <th className="w-[150px] p-4 font-semibold">Uploaded</th>
                  <th className="w-[100px] p-4 font-semibold">Size</th>
                  <th className="w-[100px] p-4 text-right font-semibold">Download</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((d) => {
                  const t = typeStyles[d.type]
                  return (
                    <tr
                      key={d.name}
                      className="border-t border-[var(--c-border)] transition-colors hover:bg-[var(--c-bg)]"
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className={`flex size-9 shrink-0 items-center justify-center rounded-[10px] border ${t.box}`}>
                            <t.icon className={`size-[18px] ${t.color}`} />
                          </div>
                          <span className="text-sm font-semibold whitespace-nowrap text-[var(--c-heading)]">
                            {d.name}
                          </span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span
                          className={`inline-flex rounded-[20px] px-2.5 py-1 text-xs font-semibold whitespace-nowrap shadow-[0px_2px_4px_rgba(0,0,0,0.07)] ${categoryStyles[d.category]}`}
                        >
                          {d.category}
                        </span>
                      </td>
                      <td className="p-4 text-sm whitespace-nowrap text-[var(--c-text2)]">{d.uploaded}</td>
                      <td className="p-4 text-sm text-[var(--c-text2)]">{d.size}</td>
                      <td className="p-4">
                        <div className="flex justify-end">
                          <button
                            type="button"
                            className="rounded-md p-1 text-[var(--c-muted)] transition-colors hover:bg-[var(--c-hover)] hover:text-[var(--c-primary)]"
                            aria-label={`Download ${d.name}`}
                          >
                            <Download className="size-[18px]" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination footer */}
          <p className="text-[13px] text-[var(--c-text)]">Showing 8 of 24 documents</p>
        </div>
      </div>
    </div>
  )
}
