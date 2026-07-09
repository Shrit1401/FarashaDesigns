import { useState } from 'react'
import { ChevronRight, Lock, CheckCircle2, Check, X } from 'lucide-react'

function Toggle({ on, onToggle }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={onToggle}
      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
        on ? 'bg-[var(--c-green)]' : 'bg-[var(--c-border-strong)]'
      }`}
    >
      <span
        className={`absolute top-0.5 size-5 rounded-full bg-[var(--c-card)] shadow transition-all ${
          on ? 'left-[22px]' : 'left-0.5'
        }`}
      />
    </button>
  )
}

function ConfirmModal({ email, phone, onCancel, onConfirm }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(15,23,42,0.4)] p-4"
      onClick={onCancel}
    >
      <div
        className="flex max-h-[90vh] w-full max-w-[560px] flex-col overflow-y-auto rounded-2xl border border-[var(--c-border)] bg-[var(--c-card)] shadow-[0px_18px_40px_-10px_rgba(0,0,0,0.1)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[var(--c-border)] p-6">
          <div className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-[10px] border border-[rgba(37,99,235,0.2)] bg-[var(--c-primary-soft)]">
              <CheckCircle2 className="size-[18px] text-[var(--c-primary)]" />
            </div>
            <h2 className="text-lg font-bold text-[var(--c-heading)]">Confirm Changes</h2>
          </div>
          <button
            type="button"
            onClick={onCancel}
            className="rounded-md p-0.5 text-[var(--c-text2)] transition-colors hover:bg-[var(--c-hover)] hover:text-[var(--c-heading)]"
            aria-label="Close"
          >
            <X className="size-6" />
          </button>
        </div>

        <div className="flex flex-col gap-5 p-6">
          <p className="text-[15px] leading-relaxed text-[var(--c-text)]">
            Are you sure you want to save the changes to your account settings? This will update
            your contact information immediately.
          </p>
          <div className="flex flex-col gap-2.5 rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] p-4">
            <div className="flex flex-wrap items-center justify-between gap-1 text-[13px]">
              <p className="font-semibold text-[var(--c-heading)]">Email</p>
              <p className="break-all text-[var(--c-text)]">{email}</p>
            </div>
            <div className="h-px w-full bg-[var(--c-border)]" />
            <div className="flex flex-wrap items-center justify-between gap-1 text-[13px]">
              <p className="font-semibold text-[var(--c-heading)]">Phone</p>
              <p className="text-[var(--c-text)]">{phone}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end border-t border-[var(--c-border)] bg-[var(--c-bg)] p-6">
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onCancel}
              className="flex items-center gap-2 rounded-lg border border-[var(--c-primary)] bg-[var(--c-card)] px-4 py-2.5 text-sm font-semibold text-[var(--c-primary)] transition-colors hover:bg-[var(--c-primary-soft)]"
            >
              <X className="size-4" />
              Cancel
            </button>
            <button
              type="button"
              onClick={onConfirm}
              className="flex items-center gap-2 rounded-lg bg-[var(--c-primary)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0px_8px_9px_rgba(37,99,235,0.2)] transition-colors hover:bg-[var(--c-primary-hover)]"
            >
              <Check className="size-4" />
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SettingsPage() {
  const [phone, setPhone] = useState('+1 (555) 098-1234')
  const [language, setLanguage] = useState('English (US)')
  const [timezone, setTimezone] = useState('(GMT-08:00) Pacific Time')
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [desktopAlerts, setDesktopAlerts] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const email = 'sarah.miller@farasha.io'

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mx-auto flex max-w-[820px] flex-col gap-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm">
          <span className="text-[var(--c-text2)]">Home</span>
          <ChevronRight className="size-3.5 text-[var(--c-text2)]" />
          <span className="font-medium text-[var(--c-heading)]">Settings</span>
        </div>

        {/* Account Settings */}
        <div className="overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)]">
          <div className="border-b border-[var(--c-border)] px-6 py-4">
            <h2 className="text-lg font-bold text-[var(--c-heading)]">Account Settings</h2>
          </div>
          <div className="flex flex-col gap-5 p-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold leading-tight text-[var(--c-heading)]">
                Email Address
              </label>
              <div className="flex h-10 items-center gap-2.5 rounded-md border border-[var(--c-border-strong)] bg-[var(--c-hover)] px-3 shadow-[0px_1px_2px_rgba(0,0,0,0.04)]">
                <input
                  type="email"
                  value={email}
                  readOnly
                  className="w-full min-w-0 cursor-not-allowed bg-transparent text-sm text-[var(--c-text)] outline-none"
                />
                <Lock className="size-3.5 shrink-0 text-[var(--c-text2)]" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold leading-tight text-[var(--c-heading)]">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-10 w-full rounded-md border border-[var(--c-border-strong)] bg-[var(--c-card)] px-3 text-sm text-[var(--c-heading)] shadow-[0px_1px_2px_rgba(0,0,0,0.04)] outline-none focus:border-[var(--c-primary)]"
              />
            </div>
            <div className="flex flex-col gap-5 sm:flex-row">
              <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                <label className="text-[13px] font-semibold leading-tight text-[var(--c-heading)]">
                  Preferred Language
                </label>
                <input
                  type="text"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="h-10 w-full rounded-md border border-[var(--c-border-strong)] bg-[var(--c-card)] px-3 text-sm text-[var(--c-heading)] shadow-[0px_1px_2px_rgba(0,0,0,0.04)] outline-none focus:border-[var(--c-primary)]"
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                <label className="text-[13px] font-semibold leading-tight text-[var(--c-heading)]">
                  Timezone
                </label>
                <input
                  type="text"
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="h-10 w-full rounded-md border border-[var(--c-border-strong)] bg-[var(--c-card)] px-3 text-sm text-[var(--c-heading)] shadow-[0px_1px_2px_rgba(0,0,0,0.04)] outline-none focus:border-[var(--c-primary)]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)]">
          <div className="border-b border-[var(--c-border)] px-6 py-4">
            <h2 className="text-lg font-bold text-[var(--c-heading)]">Notifications</h2>
          </div>
          <div className="flex flex-col gap-4 p-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex min-w-0 flex-col gap-1">
                <p className="text-sm font-semibold text-[var(--c-heading)]">Email Notifications</p>
                <p className="text-xs text-[var(--c-text)]">
                  Receive payroll and leave updates via email.
                </p>
              </div>
              <Toggle on={emailNotifications} onToggle={() => setEmailNotifications((v) => !v)} />
            </div>
            <div className="h-px w-full bg-[var(--c-border)]" />
            <div className="flex items-center justify-between gap-4">
              <div className="flex min-w-0 flex-col gap-1">
                <p className="text-sm font-semibold text-[var(--c-heading)]">Desktop Alerts</p>
                <p className="text-xs text-[var(--c-text)]">
                  Show browser notifications for urgent tasks.
                </p>
              </div>
              <Toggle on={desktopAlerts} onToggle={() => setDesktopAlerts((v) => !v)} />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="rounded-lg bg-[var(--c-primary)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0px_8px_9px_rgba(37,99,235,0.2)] transition-colors hover:bg-[var(--c-primary-hover)]"
          >
            Save Changes
          </button>
        </div>
      </div>

      {modalOpen && (
        <ConfirmModal
          email={email}
          phone={phone}
          onCancel={() => setModalOpen(false)}
          onConfirm={() => setModalOpen(false)}
        />
      )}
    </div>
  )
}
