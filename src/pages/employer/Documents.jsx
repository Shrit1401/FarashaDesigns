import {
  ChevronRight,
  Search,
  ListFilter,
  Upload,
  Folder,
  FileText,
  FileSpreadsheet,
  Image as ImageIcon,
  Download,
  MoreHorizontal,
} from 'lucide-react'
import avatar1 from '../../assets/avatar1.png'
import avatar2 from '../../assets/avatar2.png'
import avatar3 from '../../assets/avatar3.png'
import avatar4 from '../../assets/avatar4.png'
import avatar5 from '../../assets/avatar5.png'

const folders = [
  {
    name: 'Contracts',
    files: 128,
    size: '1.2 GB',
    iconBox: 'bg-[var(--c-primary-soft)] border-[rgba(37,99,235,0.2)]',
    iconColor: 'text-[var(--c-primary)]',
  },
  {
    name: 'Policies',
    files: 42,
    size: '340 MB',
    iconBox: 'bg-[var(--c-green-soft)] border-[rgba(16,185,129,0.2)]',
    iconColor: 'text-[var(--c-green)]',
  },
  {
    name: 'Onboarding',
    files: 86,
    size: '760 MB',
    iconBox: 'bg-[var(--c-amber-soft)] border-[rgba(217,119,6,0.2)]',
    iconColor: 'text-[var(--c-amber)]',
  },
  {
    name: 'Compliance',
    files: 57,
    size: '480 MB',
    iconBox: 'bg-[var(--c-purple-soft)] border-[rgba(139,92,246,0.2)]',
    iconColor: 'text-[var(--c-purple)]',
  },
]

const typeStyles = {
  PDF: { icon: FileText, box: 'bg-[var(--c-primary-soft)]', color: 'text-[var(--c-primary)]' },
  XLSX: { icon: FileSpreadsheet, box: 'bg-[var(--c-green-soft)]', color: 'text-[var(--c-green)]' },
  PNG: { icon: ImageIcon, box: 'bg-[var(--c-purple-soft)]', color: 'text-[var(--c-purple)]' },
}

const categoryStyles = {
  Contracts: 'bg-[var(--c-primary-soft)] text-[var(--c-primary)]',
  Policies: 'bg-[var(--c-green-soft)] text-[var(--c-green)]',
  Onboarding: 'bg-[var(--c-amber-soft)] text-[var(--c-amber)]',
  Compliance: 'bg-[var(--c-purple-soft)] text-[var(--c-purple)]',
}

const documents = [
  { name: 'Employment_Agreement_2024.pdf', type: 'PDF', category: 'Contracts', ownerAvatar: avatar1, owner: 'Sarah Jenkins', size: '2.4 MB', modified: 'Jan 21, 2024' },
  { name: 'Remote_Work_Policy_v3.pdf', type: 'PDF', category: 'Policies', ownerAvatar: avatar2, owner: 'Michael Chen', size: '860 KB', modified: 'Jan 18, 2024' },
  { name: 'Q4_Payroll_Register.xlsx', type: 'XLSX', category: 'Compliance', ownerAvatar: avatar3, owner: 'Emma Watson', size: '4.1 MB', modified: 'Jan 15, 2024' },
  { name: 'New_Hire_Checklist.pdf', type: 'PDF', category: 'Onboarding', ownerAvatar: avatar4, owner: 'David Miller', size: '540 KB', modified: 'Jan 12, 2024' },
  { name: 'Org_Chart_January.png', type: 'PNG', category: 'Onboarding', ownerAvatar: avatar5, owner: 'Sofia Garcia', size: '1.8 MB', modified: 'Jan 10, 2024' },
  { name: 'Benefits_Enrollment_Guide.pdf', type: 'PDF', category: 'Policies', ownerAvatar: avatar1, owner: 'Sarah Jenkins', size: '3.2 MB', modified: 'Jan 08, 2024' },
  { name: 'Contractor_Rates_2024.xlsx', type: 'XLSX', category: 'Contracts', ownerAvatar: avatar2, owner: 'Michael Chen', size: '920 KB', modified: 'Jan 05, 2024' },
  { name: 'Office_Floor_Plan.png', type: 'PNG', category: 'Compliance', ownerAvatar: avatar4, owner: 'David Miller', size: '2.6 MB', modified: 'Dec 28, 2023' },
]

const pages = ['1', '2', '3', '...', '9']

export default function DocumentsPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-8">
        {/* Page header */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-[13px] font-medium">
            <span className="text-[var(--c-text)]">Employer</span>
            <ChevronRight className="size-3.5 text-[var(--c-muted)]" />
            <span className="text-[var(--c-heading)]">Documents</span>
          </div>
          <h1 className="text-[28px] font-bold leading-tight text-[var(--c-heading)]">Documents</h1>
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
                  Upload Document
                </button>
              </div>
            </div>
            <button
              type="button"
              className="hidden items-center gap-2 rounded-lg bg-[var(--c-primary)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0px_8px_9px_rgba(37,99,235,0.2)] transition-colors hover:bg-[var(--c-primary-hover)] sm:flex"
            >
              <Upload className="size-4" />
              Upload Document
            </button>
          </div>

          {/* Folder cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {folders.map((f) => (
              <button
                key={f.name}
                type="button"
                className="flex items-center gap-4 rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] p-5 text-left shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)] transition-colors hover:bg-[var(--c-bg)]"
              >
                <div className={`flex size-11 shrink-0 items-center justify-center rounded-[10px] border ${f.iconBox}`}>
                  <Folder className={`size-5 ${f.iconColor}`} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-[var(--c-heading)]">{f.name}</p>
                  <p className="truncate text-xs text-[var(--c-text2)]">
                    {f.files} files • {f.size}
                  </p>
                </div>
                <ChevronRight className="size-4 shrink-0 text-[var(--c-muted)]" />
              </button>
            ))}
          </div>

          {/* All Documents table */}
          <div className="flex flex-col gap-5">
            <p className="text-base font-semibold text-[var(--c-heading)]">All Documents</p>
            <div className="overflow-x-auto rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)]">
              <table className="w-full min-w-[920px] border-collapse text-left">
                <thead>
                  <tr className="bg-[var(--c-primary-soft)] text-[13px] font-semibold text-[var(--c-primary)]">
                    <th className="p-4 font-semibold">Name</th>
                    <th className="w-[130px] p-4 font-semibold">Category</th>
                    <th className="w-[190px] p-4 font-semibold">Owner</th>
                    <th className="w-[100px] p-4 font-semibold">Size</th>
                    <th className="w-[140px] p-4 font-semibold">Modified</th>
                    <th className="w-[110px] p-4 text-right font-semibold">Actions</th>
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
                            <div className={`flex size-9 shrink-0 items-center justify-center rounded-[10px] ${t.box}`}>
                              <t.icon className={`size-[18px] ${t.color}`} />
                            </div>
                            <span className="text-sm font-semibold whitespace-nowrap text-[var(--c-heading)]">
                              {d.name}
                            </span>
                          </div>
                        </td>
                        <td className="p-4">
                          <span
                            className={`inline-flex rounded-[20px] px-2.5 py-1 text-xs font-semibold shadow-[0px_2px_4px_rgba(0,0,0,0.07)] ${categoryStyles[d.category]}`}
                          >
                            {d.category}
                          </span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2.5">
                            <img src={d.ownerAvatar} alt={d.owner} className="size-7 shrink-0 rounded-full object-cover" />
                            <span className="text-sm whitespace-nowrap text-[var(--c-text2)]">{d.owner}</span>
                          </div>
                        </td>
                        <td className="p-4 text-sm text-[var(--c-text2)]">{d.size}</td>
                        <td className="p-4 text-sm whitespace-nowrap text-[var(--c-text2)]">{d.modified}</td>
                        <td className="p-4">
                          <div className="flex justify-end gap-1">
                            <button
                              type="button"
                              className="rounded-md p-1 text-[var(--c-muted)] transition-colors hover:bg-[var(--c-hover)] hover:text-[var(--c-text)]"
                            >
                              <Download className="size-[18px]" />
                            </button>
                            <button
                              type="button"
                              className="rounded-md p-1 text-[var(--c-muted)] transition-colors hover:bg-[var(--c-hover)] hover:text-[var(--c-text)]"
                            >
                              <MoreHorizontal className="size-[18px]" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[13px] text-[var(--c-text)]">Showing 8 of 313 documents</p>
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
