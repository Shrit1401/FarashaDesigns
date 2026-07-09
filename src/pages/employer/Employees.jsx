import { ChevronRight, ChevronDown, Plus, Search, SlidersHorizontal, SquarePen, Trash2 } from 'lucide-react'
import avatar1 from '../../assets/avatar1.png'
import avatar2 from '../../assets/avatar2.png'
import avatar3 from '../../assets/avatar3.png'
import avatar4 from '../../assets/avatar4.png'
import avatar5 from '../../assets/avatar5.png'
import avatar6 from '../../assets/avatar6.png'

const badgeStyles = {
  Active: 'bg-[var(--c-green-soft)] text-[var(--c-green)]',
  'On Leave': 'bg-[var(--c-amber-soft)] text-[var(--c-amber)]',
  Terminated: 'bg-[var(--c-red-soft)] text-[var(--c-red)]',
}

const employees = [
  { avatar: avatar1, name: 'Alice Cooper', department: 'Engineering', position: 'Lead Frontend', email: 'alice.c@farasha.com', status: 'Active' },
  { avatar: avatar2, name: 'Bob Martin', department: 'Marketing', position: 'Content Strategist', email: 'bob.m@farasha.com', status: 'Active' },
  { avatar: avatar3, name: 'Charlie Day', department: 'Sales', position: 'Account Manager', email: 'charlie.d@farasha.com', status: 'On Leave' },
  { avatar: avatar4, name: 'Diana Prince', department: 'Engineering', position: 'Backend Engineer', email: 'diana.p@farasha.com', status: 'Active' },
  { avatar: avatar5, name: 'Ethan Hunt', department: 'Security', position: 'Analyst', email: 'ethan.h@farasha.com', status: 'Active' },
  { avatar: avatar6, name: 'Fiona Apple', department: 'Marketing', position: 'UI Designer', email: 'fiona.a@farasha.com', status: 'Terminated' },
  { avatar: avatar1, name: 'George Costanza', department: 'Sales', position: 'Jr. Sales Rep', email: 'george.c@farasha.com', status: 'Active' },
  { avatar: avatar2, name: 'Helen Mirren', department: 'HR', position: 'HR Specialist', email: 'helen.m@farasha.com', status: 'Active' },
]

export default function EmployeesPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm">
          <span className="text-[var(--c-muted)]">Home</span>
          <ChevronRight className="size-3.5 text-[var(--c-muted)]" />
          <span className="font-semibold text-[var(--c-heading)]">Employees</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-bold leading-[1.2] text-[var(--c-heading)]">Manage Employees</h1>
          <button
            type="button"
            className="inline-flex items-center gap-2 self-start rounded-lg bg-[var(--c-primary)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0px_8px_10px_rgba(37,99,235,0.2)] transition-colors hover:bg-[var(--c-primary-hover)] sm:self-auto"
          >
            <Plus className="size-[18px]" />
            Add Employee
          </button>
        </div>

        {/* Search / filter bar */}
        <div className="flex flex-col gap-4 rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] p-5 shadow-[0px_6px_9px_rgba(0,0,0,0.07)] lg:flex-row lg:items-center">
          <div className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] px-3 py-2">
            <Search className="size-4 shrink-0 text-[var(--c-muted)]" />
            <input
              type="text"
              placeholder="Search by name or email..."
              className="w-full bg-transparent text-sm text-[var(--c-heading)] outline-none placeholder:text-[var(--c-muted)]"
            />
          </div>
          <button
            type="button"
            className="flex items-center justify-between gap-2 rounded-lg border border-[var(--c-border)] bg-[var(--c-card)] px-3 py-2 text-sm text-[var(--c-heading)] transition-colors hover:bg-[var(--c-bg)] lg:w-[220px]"
          >
            All Departments
            <ChevronDown className="size-4 text-[var(--c-text2)]" />
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--c-primary)] bg-[var(--c-card)] px-4 py-2.5 text-sm font-semibold text-[var(--c-primary)] shadow-[0px_6px_8px_rgba(37,99,235,0.1)] transition-colors hover:bg-[var(--c-primary-soft)]"
          >
            <SlidersHorizontal className="size-[18px]" />
            Filter
          </button>
        </div>

        {/* Employees table */}
        <div className="overflow-x-auto rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)]">
          <table className="w-full min-w-[960px] text-left">
            <thead>
              <tr className="border-b border-[var(--c-border)] bg-[var(--c-primary-soft)] text-xs font-semibold uppercase text-[var(--c-primary)]">
                <th className="px-6 py-3 font-semibold">Employee Name</th>
                <th className="w-[180px] px-2 py-3 font-semibold">Department</th>
                <th className="w-[180px] px-2 py-3 font-semibold">Position</th>
                <th className="w-[220px] px-2 py-3 font-semibold">Email</th>
                <th className="w-[120px] px-2 py-3 font-semibold">Status</th>
                <th className="w-[80px] px-2 py-3 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((e) => (
                <tr key={e.name} className="border-b border-[var(--c-border)] last:border-b-0 hover:bg-[var(--c-bg)]">
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-3">
                      <img src={e.avatar} alt={e.name} className="size-9 rounded-full object-cover" />
                      <span className="text-sm text-[var(--c-heading)]">{e.name}</span>
                    </div>
                  </td>
                  <td className="px-2 py-3 text-sm text-[var(--c-heading)]">{e.department}</td>
                  <td className="px-2 py-3 text-sm text-[var(--c-heading)]">{e.position}</td>
                  <td className="px-2 py-3 text-sm text-[var(--c-heading)]">{e.email}</td>
                  <td className="px-2 py-3">
                    <span className={`inline-flex rounded-md px-2 py-1 text-[11px] font-bold uppercase ${badgeStyles[e.status]}`}>
                      {e.status}
                    </span>
                  </td>
                  <td className="px-2 py-3">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        aria-label={`Edit ${e.name}`}
                        className="rounded p-0.5 text-[var(--c-primary)] transition-colors hover:bg-[var(--c-primary-soft)]"
                      >
                        <SquarePen className="size-[18px]" />
                      </button>
                      <button
                        type="button"
                        aria-label={`Delete ${e.name}`}
                        className="rounded p-0.5 text-[var(--c-red)] transition-colors hover:bg-[var(--c-red-soft)]"
                      >
                        <Trash2 className="size-[18px]" />
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
  )
}
