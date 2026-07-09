import { ChevronRight, Search, ListFilter, Plus, MoreHorizontal } from 'lucide-react'
import avatar1 from '../../assets/avatar1.png'
import avatar2 from '../../assets/avatar2.png'
import avatar3 from '../../assets/avatar3.png'
import avatar4 from '../../assets/avatar4.png'
import avatar5 from '../../assets/avatar5.png'
import avatar6 from '../../assets/avatar6.png'

const statusStyles = {
  Active: 'bg-[var(--c-green-soft)] text-[var(--c-green)]',
  Pending: 'bg-[var(--c-amber-soft)] text-[var(--c-amber)]',
  Inactive: 'bg-[var(--c-red-soft)] text-[var(--c-red)]',
}

const users = [
  { avatar: avatar1, name: 'Sarah Jenkins', email: 's.jenkins@techflow.io', role: 'Manager', status: 'Active', joined: 'Jan 12, 2024' },
  { avatar: avatar2, name: 'Michael Chen', email: 'm.chen@vertex.com', role: 'Employee', status: 'Pending', joined: 'Jan 15, 2024' },
  { avatar: avatar3, name: 'Emma Watson', email: 'e.watson@gmail.com', role: 'Admin', status: 'Active', joined: 'Dec 20, 2023' },
  { avatar: avatar4, name: 'David Miller', email: 'd.miller@buildright.com', role: 'Employee', status: 'Inactive', joined: 'Nov 05, 2023' },
  { avatar: avatar5, name: 'Sofia Garcia', email: 's.garcia@outlook.com', role: 'Manager', status: 'Active', joined: 'Jan 02, 2024' },
  { avatar: avatar6, name: 'James Bond', email: 'j.bond@mi6.gov', role: 'Admin', status: 'Active', joined: 'Jan 20, 2024' },
  { avatar: avatar2, name: 'Lucas Scott', email: 'l.scott@tech.io', role: 'Employee', status: 'Active', joined: 'Dec 12, 2023' },
  { avatar: avatar5, name: 'Olivia Brown', email: 'o.brown@corp.com', role: 'Manager', status: 'Active', joined: 'Jan 08, 2024' },
]

const pages = ['1', '2', '3', '...', '12']

export default function UsersPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-8">
        {/* Page header */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-[13px] font-medium">
            <span className="text-[var(--c-text)]">Admin</span>
            <ChevronRight className="size-3.5 text-[var(--c-muted)]" />
            <span className="text-[var(--c-heading)]">Users</span>
          </div>
          <h1 className="text-[28px] font-bold leading-tight text-[var(--c-heading)]">Users</h1>
        </div>

        <div className="flex flex-col gap-6">
          {/* Toolbar */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex w-full flex-col gap-3 sm:max-w-[400px] sm:flex-row sm:items-start">
              <label className="flex min-h-9 w-full min-w-0 flex-1 items-center gap-2 rounded-lg border border-[var(--c-border)] bg-[var(--c-card)] px-3 py-2.5 shadow-[0px_2px_4px_rgba(0,0,0,0.04)] focus-within:border-[var(--c-primary)]">
                <Search className="size-[18px] shrink-0 text-[var(--c-muted)]" />
                <input
                  type="text"
                  placeholder="Search by name or email..."
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
                  <Plus className="size-4" />
                  Add User
                </button>
              </div>
            </div>
            <button
              type="button"
              className="hidden items-center gap-2 rounded-lg bg-[var(--c-primary)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0px_8px_9px_rgba(37,99,235,0.2)] transition-colors hover:bg-[var(--c-primary-hover)] sm:flex"
            >
              <Plus className="size-4" />
              Add User
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)]">
            <table className="w-full min-w-[860px] border-collapse text-left">
              <thead>
                <tr className="bg-[var(--c-primary-soft)] text-[13px] font-semibold text-[var(--c-primary)]">
                  <th className="p-4 font-semibold">Name</th>
                  <th className="w-[240px] p-4 font-semibold">Email</th>
                  <th className="w-[120px] p-4 font-semibold">Role</th>
                  <th className="w-[120px] p-4 font-semibold">Status</th>
                  <th className="w-[140px] p-4 font-semibold">Joined Date</th>
                  <th className="w-[80px] p-4 text-right font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr
                    key={u.email}
                    className="border-t border-[var(--c-border)] transition-colors hover:bg-[var(--c-bg)]"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={u.avatar}
                          alt={u.name}
                          className="size-8 shrink-0 rounded-full object-cover"
                        />
                        <span className="text-sm font-semibold whitespace-nowrap text-[var(--c-heading)]">
                          {u.name}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-[var(--c-text2)]">{u.email}</td>
                    <td className="p-4 text-sm text-[var(--c-heading)]">{u.role}</td>
                    <td className="p-4">
                      <span
                        className={`inline-flex rounded-[20px] px-2.5 py-1 text-xs font-semibold shadow-[0px_2px_4px_rgba(0,0,0,0.07)] ${statusStyles[u.status]}`}
                      >
                        {u.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm whitespace-nowrap text-[var(--c-text2)]">{u.joined}</td>
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
            <p className="text-[13px] text-[var(--c-text)]">Showing 8 of 1,240 users</p>
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
