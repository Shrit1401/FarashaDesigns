import { useState } from 'react'
import { ChevronRight, Lock } from 'lucide-react'
import avatar3 from '../../assets/avatar3.png'

const TABS = ['Personal Info', 'Contact', 'Documents', 'Security']

function Field({ label, value, locked = false, onChange }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-1.5">
      <label className="text-[13px] font-semibold leading-tight text-[var(--c-heading)]">{label}</label>
      <div
        className={`flex h-10 items-center rounded-md border border-[var(--c-border)] px-3 shadow-[0px_1px_2px_rgba(0,0,0,0.04)] ${
          locked ? 'bg-[var(--c-hover)]' : 'bg-[var(--c-card)]'
        }`}
      >
        <input
          type="text"
          value={value}
          readOnly={locked}
          onChange={onChange}
          className={`w-full min-w-0 bg-transparent text-sm outline-none ${
            locked ? 'cursor-not-allowed text-[var(--c-text2)]' : 'text-[var(--c-heading)]'
          }`}
        />
        {locked && <Lock className="size-3.5 shrink-0 text-[var(--c-text2)]" />}
      </div>
    </div>
  )
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('Personal Info')
  const [form, setForm] = useState({
    firstName: 'Sarah',
    lastName: 'Miller',
    dob: '14 / 05 / 1994',
    gender: 'Female',
  })

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm">
          <span className="text-[var(--c-text2)]">Home</span>
          <ChevronRight className="size-3.5 text-[var(--c-text2)]" />
          <span className="font-medium text-[var(--c-heading)]">Profile</span>
        </div>

        <div className="flex flex-col items-start gap-6 lg:flex-row">
          {/* Profile card */}
          <div className="w-full shrink-0 lg:w-[280px]">
            <div className="overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-card)]">
              <div className="flex flex-col gap-5 p-6">
                <div className="flex flex-col items-center gap-4">
                  <img
                    src={avatar3}
                    alt="Sarah Miller"
                    className="size-[120px] rounded-full object-cover"
                  />
                  <div className="flex flex-col items-center gap-1">
                    <p className="text-2xl font-bold leading-snug text-[var(--c-heading)]">Sarah Miller</p>
                    <p className="text-base font-medium text-[var(--c-text)]">Product Designer</p>
                  </div>
                  <span className="rounded bg-[var(--c-green-soft)] px-2 py-0.5 text-xs font-semibold text-[var(--c-green)]">
                    Active Employee
                  </span>
                </div>
                <div className="h-px w-full bg-[var(--c-border)]" />
                <div className="flex flex-col gap-3 text-[13px]">
                  <div className="flex items-start justify-between">
                    <p className="text-[var(--c-text)]">Employee ID</p>
                    <p className="font-mono font-semibold text-[var(--c-heading)]">#FW-0982</p>
                  </div>
                  <div className="flex items-start justify-between">
                    <p className="text-[var(--c-text)]">Joined Date</p>
                    <p className="font-semibold text-[var(--c-heading)]">Jan 12, 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs + form */}
          <div className="flex min-w-0 flex-1 flex-col gap-6">
            <div className="overflow-x-auto">
              <div className="flex min-w-max gap-8 border-b border-[var(--c-border)]">
                {TABS.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`flex flex-col gap-3 pb-0 text-[15px] whitespace-nowrap transition-colors ${
                      activeTab === tab
                        ? 'font-semibold text-[var(--c-primary-light)]'
                        : 'font-medium text-[var(--c-text2)] hover:text-[var(--c-heading)]'
                    }`}
                  >
                    {tab}
                    <span
                      className={`h-0.5 w-full ${activeTab === tab ? 'bg-[var(--c-primary-light)]' : 'bg-transparent'}`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {activeTab === 'Personal Info' ? (
              <div className="overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)]">
                <div className="border-b border-[var(--c-border)] px-6 py-4">
                  <h2 className="text-lg font-bold text-[var(--c-heading)]">Personal Information</h2>
                </div>
                <div className="flex flex-col gap-6 p-6">
                  <div className="flex flex-col gap-6 sm:flex-row sm:gap-5">
                    <Field label="First Name" value={form.firstName} onChange={set('firstName')} />
                    <Field label="Last Name" value={form.lastName} onChange={set('lastName')} />
                  </div>
                  <div className="flex flex-col gap-6 sm:flex-row sm:gap-5">
                    <Field label="Date of Birth" value={form.dob} onChange={set('dob')} />
                    <Field label="Gender" value={form.gender} onChange={set('gender')} />
                  </div>
                  <div className="flex flex-col gap-6 sm:flex-row sm:gap-5">
                    <Field label="National ID" value="982-1234-5678" locked />
                    <Field label="Join Date" value="12 Jan 2021" locked />
                  </div>
                  <div className="flex flex-wrap justify-end gap-3">
                    <button
                      type="button"
                      className="rounded-lg border border-[var(--c-green)] bg-[var(--c-card)] px-4 py-2.5 text-sm font-semibold text-[var(--c-green)] transition-colors hover:bg-[var(--c-green-soft)]"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="rounded-lg bg-[var(--c-green)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0px_8px_9px_rgba(16,185,129,0.2)] transition-colors hover:bg-[var(--c-green)]"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)]">
                <div className="border-b border-[var(--c-border)] px-6 py-4">
                  <h2 className="text-lg font-bold text-[var(--c-heading)]">{activeTab}</h2>
                </div>
                <div className="p-6">
                  <p className="text-sm text-[var(--c-text2)]">
                    {activeTab} details will appear here.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
