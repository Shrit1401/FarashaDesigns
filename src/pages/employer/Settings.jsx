import { useState } from 'react'
import { ChevronRight, ChevronDown, Building2, Users, Calendar, Bell, Upload } from 'lucide-react'

const tabs = [
  { label: 'Company Profile', icon: Building2 },
  { label: 'Departments', icon: Users },
  { label: 'Leave Policy', icon: Calendar },
  { label: 'Notifications', icon: Bell },
]

function Field({ label, children }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-2">
      <label className="text-sm font-semibold text-[var(--c-heading)]">{label}</label>
      {children}
    </div>
  )
}

const inputClass =
  'w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] px-4 py-3 text-sm text-[var(--c-heading)] outline-none transition-colors focus:border-[var(--c-primary)]'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('Company Profile')

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm">
          <span className="text-[var(--c-muted)]">Home</span>
          <ChevronRight className="size-3.5 text-[var(--c-muted)]" />
          <span className="font-semibold text-[var(--c-heading)]">Settings</span>
        </nav>

        <h1 className="text-2xl font-bold leading-[1.2] text-[var(--c-heading)]">Company Settings</h1>

        {/* Tabs */}
        <div className="overflow-x-auto">
          <div className="flex min-w-max gap-8 border-b border-[var(--c-border)] pb-3">
            {tabs.map((tab) => {
              const active = activeTab === tab.label
              return (
                <button
                  key={tab.label}
                  type="button"
                  onClick={() => setActiveTab(tab.label)}
                  className="flex items-center gap-2.5 whitespace-nowrap"
                >
                  <span
                    className={`flex size-7 items-center justify-center rounded-lg ${
                      active ? 'bg-[var(--c-teal-soft)]' : 'border border-[var(--c-border)] bg-[var(--c-bg)]'
                    }`}
                  >
                    <tab.icon className={`size-4 ${active ? 'text-[var(--c-teal)]' : 'text-[var(--c-muted)]'}`} />
                  </span>
                  <span
                    className={`text-[15px] transition-colors ${
                      active ? 'font-bold text-[var(--c-teal)]' : 'font-medium text-[var(--c-muted)] hover:text-[var(--c-text)]'
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {activeTab === 'Company Profile' ? (
          <div className="flex w-full max-w-[800px] flex-col gap-8 rounded-2xl border border-[var(--c-border)] bg-[var(--c-card)] p-6 shadow-[0px_6px_9px_rgba(0,0,0,0.07)] sm:p-10">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
                <Field label="Company Name">
                  <input type="text" defaultValue="Farasha Tech Solutions Ltd." className={inputClass} />
                </Field>
                <Field label="Industry">
                  <button
                    type="button"
                    className={`${inputClass} flex items-center justify-between text-left hover:bg-[var(--c-card)]`}
                  >
                    Technology / Software
                    <ChevronDown className="size-4 text-[var(--c-text2)]" />
                  </button>
                </Field>
              </div>
              <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
                <Field label="Company Size">
                  <button
                    type="button"
                    className={`${inputClass} flex items-center justify-between text-left hover:bg-[var(--c-card)]`}
                  >
                    1,000 - 5,000 Employees
                    <ChevronDown className="size-4 text-[var(--c-text2)]" />
                  </button>
                </Field>
                <Field label="Contact Email">
                  <input type="email" defaultValue="hr@farasha.com" className={inputClass} />
                </Field>
              </div>
              <Field label="Office Address">
                <input
                  type="text"
                  defaultValue="123 Business Way, Innovation District, SF, CA 94103"
                  className={inputClass}
                />
              </Field>
              <Field label="Company Logo">
                <button
                  type="button"
                  className="flex w-full flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-[var(--c-border)] bg-[var(--c-bg)] p-6 transition-colors hover:border-[var(--c-teal)] sm:flex-row"
                >
                  <span className="flex size-12 items-center justify-center rounded-lg bg-[var(--c-teal-soft)] shadow-[var(--c-shadow)]">
                    <Upload className="size-5 text-[var(--c-teal)]" />
                  </span>
                  <span className="flex flex-col items-center sm:items-start">
                    <span className="text-sm font-semibold text-[var(--c-heading)]">Click to upload or drag and drop</span>
                    <span className="text-xs text-[var(--c-muted)]">PNG, JPG up to 10MB (Recommended 512x512)</span>
                  </span>
                </button>
              </Field>
            </div>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                className="rounded-lg border border-[var(--c-border)] bg-[var(--c-card)] px-4 py-2.5 text-sm font-semibold text-[var(--c-heading)] shadow-[var(--c-shadow)] transition-colors hover:bg-[var(--c-bg)]"
              >
                Discard
              </button>
              <button
                type="button"
                className="rounded-lg bg-[var(--c-primary)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0px_8px_10px_rgba(37,99,235,0.2)] transition-colors hover:bg-[var(--c-primary-hover)]"
              >
                Save Changes
              </button>
            </div>
          </div>
        ) : (
          <div className="flex w-full max-w-[800px] flex-col items-center justify-center gap-2 rounded-2xl border border-[var(--c-border)] bg-[var(--c-card)] px-6 py-16 text-center shadow-[0px_6px_9px_rgba(0,0,0,0.07)]">
            <p className="text-base font-semibold text-[var(--c-heading)]">{activeTab}</p>
            <p className="text-sm text-[var(--c-text2)]">{activeTab} settings will appear here.</p>
          </div>
        )}
      </div>
    </div>
  )
}
