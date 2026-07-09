import { ChevronRight, Search, Plus, ExternalLink, MoreHorizontal } from 'lucide-react'
import company1 from '../../assets/admin-company1.png'
import company2 from '../../assets/admin-company2.png'
import company3 from '../../assets/admin-company3.png'
import company4 from '../../assets/admin-company4.png'
import company5 from '../../assets/admin-company5.png'
import company6 from '../../assets/admin-company6.png'
import company7 from '../../assets/admin-company7.png'
import company8 from '../../assets/admin-company8.png'

const statusStyles = {
  Active: 'bg-[var(--c-green-soft)] text-[var(--c-green)]',
  Inactive: 'bg-[var(--c-red-soft)] text-[var(--c-red)]',
}

const employers = [
  { logo: company1, name: 'TechFlow Inc', contact: 'Alex Rivera', plan: 'Enterprise', employees: '245 Employees', status: 'Active' },
  { logo: company2, name: 'Vertex Solutions', contact: 'Michael Chen', plan: 'Standard', employees: '42 Employees', status: 'Active' },
  { logo: company3, name: 'BuildRight Ltd', contact: 'John Doe', plan: 'Basic', employees: '18 Employees', status: 'Inactive' },
  { logo: company4, name: 'Design Studio', contact: 'Emma Watson', plan: 'Standard', employees: '12 Employees', status: 'Active' },
  { logo: company5, name: 'Global Logistics', contact: 'Sofia Garcia', plan: 'Enterprise', employees: '512 Employees', status: 'Active' },
  { logo: company6, name: 'HealthPlus', contact: 'David Miller', plan: 'Standard', employees: '86 Employees', status: 'Active' },
  { logo: company7, name: 'QuickDeliver', contact: 'Lucas Scott', plan: 'Basic', employees: '9 Employees', status: 'Inactive' },
  { logo: company8, name: 'Marketing Pro', contact: 'Olivia Brown', plan: 'Standard', employees: '24 Employees', status: 'Active' },
]

export default function EmployersPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-8">
        {/* Page header */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-[13px] font-medium">
            <span className="text-[var(--c-text)]">Admin</span>
            <ChevronRight className="size-3.5 text-[var(--c-muted)]" />
            <span className="text-[var(--c-heading)]">Employers</span>
          </div>
          <h1 className="text-[28px] font-bold leading-tight text-[var(--c-heading)]">Employers</h1>
        </div>

        <div className="flex flex-col gap-6">
          {/* Toolbar */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <label className="flex w-full max-w-[320px] items-center gap-2 rounded-lg border border-[var(--c-border)] bg-[var(--c-card)] px-3 py-2.5 shadow-[0px_2px_4px_rgba(0,0,0,0.04)] focus-within:border-[var(--c-primary)]">
              <Search className="size-[18px] shrink-0 text-[var(--c-muted)]" />
              <input
                type="text"
                placeholder="Search companies..."
                className="w-full min-w-0 bg-transparent text-sm text-[var(--c-heading)] placeholder-[var(--c-text)] outline-none"
              />
            </label>
            <button
              type="button"
              className="flex items-center gap-2 self-start rounded-lg bg-[var(--c-primary)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0px_8px_9px_rgba(37,99,235,0.2)] transition-colors hover:bg-[var(--c-primary-hover)] sm:self-auto"
            >
              <Plus className="size-4" />
              Add Employer
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)]">
            <table className="w-full min-w-[920px] border-collapse text-left">
              <thead>
                <tr className="bg-[var(--c-primary-soft)] text-[13px] font-semibold text-[var(--c-primary)]">
                  <th className="p-4 font-semibold">Company Name</th>
                  <th className="w-[200px] p-4 font-semibold">Contact Person</th>
                  <th className="w-[140px] p-4 font-semibold">Plan</th>
                  <th className="w-[140px] p-4 font-semibold">Employees</th>
                  <th className="w-[120px] p-4 font-semibold">Status</th>
                  <th className="w-[100px] p-4 text-right font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {employers.map((e) => (
                  <tr
                    key={e.name}
                    className="border-t border-[var(--c-border)] transition-colors hover:bg-[var(--c-bg)]"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[var(--c-bg)]">
                          <img
                            src={e.logo}
                            alt={e.name}
                            className="size-7 rounded-lg object-cover"
                          />
                        </div>
                        <span className="text-sm font-semibold whitespace-nowrap text-[var(--c-heading)]">
                          {e.name}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-sm whitespace-nowrap text-[var(--c-heading)]">{e.contact}</td>
                    <td className="p-4 text-sm text-[var(--c-text2)]">{e.plan}</td>
                    <td className="p-4 text-sm whitespace-nowrap text-[var(--c-heading)]">{e.employees}</td>
                    <td className="p-4">
                      <span
                        className={`inline-flex rounded-[20px] px-2.5 py-1 text-xs font-semibold shadow-[0px_2px_4px_rgba(0,0,0,0.07)] ${statusStyles[e.status]}`}
                      >
                        {e.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-3">
                        <button
                          type="button"
                          className="rounded-md p-1 text-[var(--c-muted)] transition-colors hover:bg-[var(--c-hover)] hover:text-[var(--c-primary)]"
                        >
                          <ExternalLink className="size-[18px]" />
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
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
