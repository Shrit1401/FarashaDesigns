import { useState } from 'react'
import { ChevronRight, ChevronUp, ChevronDown } from 'lucide-react'
import iconGeneral from '../../assets/admin-set-general.png'
import iconSecurity from '../../assets/admin-set-security.png'
import iconNotifications from '../../assets/admin-set-notifications.png'
import iconBilling from '../../assets/admin-set-billing.png'
import iconIntegrations from '../../assets/admin-set-integrations.png'
import iconCompany from '../../assets/admin-set-company.png'
import iconLocalization from '../../assets/admin-set-localization.png'
import iconAppearance from '../../assets/admin-set-appearance.png'

const navItems = [
  { key: 'general', label: 'General', icon: iconGeneral },
  { key: 'security', label: 'Security', icon: iconSecurity },
  { key: 'notifications', label: 'Notifications', icon: iconNotifications },
  { key: 'billing', label: 'Billing', icon: iconBilling },
  { key: 'integrations', label: 'Integrations', icon: iconIntegrations },
]

const sections = [
  { key: 'company', label: 'Company Profile', icon: iconCompany },
  { key: 'localization', label: 'Localization Settings', icon: iconLocalization },
  { key: 'appearance', label: 'Appearance & Themes', icon: iconAppearance },
]

export default function SettingsPage() {
  const [activeNav, setActiveNav] = useState('general')
  const [openSection, setOpenSection] = useState('company')
  const [platformName, setPlatformName] = useState('Farasha Workforce Portal')
  const [supportEmail, setSupportEmail] = useState('admin@farasha.com')
  const [description, setDescription] = useState(
    'The central administration hub for all Farasha workforce operations...'
  )

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-8">
        {/* Page header */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-[13px] font-medium">
            <span className="text-[var(--c-text)]">Admin</span>
            <ChevronRight className="size-3.5 text-[var(--c-muted)]" />
            <span className="text-[var(--c-heading)]">Settings</span>
          </div>
          <h1 className="text-[28px] font-bold leading-tight text-[var(--c-heading)]">Settings</h1>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          {/* Settings nav */}
          <div className="flex flex-row gap-1 overflow-x-auto lg:w-[240px] lg:shrink-0 lg:flex-col">
            {navItems.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setActiveNav(item.key)}
                className={`flex shrink-0 items-center gap-3 rounded-lg px-4 py-3 text-sm whitespace-nowrap transition-colors lg:w-full ${
                  activeNav === item.key
                    ? 'bg-[var(--c-primary)] font-semibold text-white'
                    : 'font-medium text-[var(--c-text2)] hover:bg-[var(--c-hover)] hover:text-[var(--c-heading)]'
                }`}
              >
                <img src={item.icon} alt="" className="size-7 rounded-lg object-cover" />
                {item.label}
              </button>
            ))}
          </div>

          {/* Sections */}
          <div className="flex min-w-0 flex-1 flex-col gap-6">
            {sections.map((section) => {
              const open = openSection === section.key
              return (
                <div
                  key={section.key}
                  className="overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-card)] shadow-[0px_6px_18px_-6px_rgba(0,0,0,0.07)]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenSection(open ? null : section.key)}
                    className="flex w-full items-center justify-between bg-[var(--c-primary-soft)] p-5 text-left transition-colors hover:bg-[var(--c-primary-soft2)]"
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <img
                        src={section.icon}
                        alt=""
                        className="size-7 shrink-0 rounded-lg object-cover"
                      />
                      <span className="truncate text-base font-semibold text-[var(--c-heading)]">
                        {section.label}
                      </span>
                    </span>
                    {open ? (
                      <ChevronUp className="size-5 shrink-0 text-[var(--c-text)]" />
                    ) : (
                      <ChevronDown className="size-5 shrink-0 text-[var(--c-text)]" />
                    )}
                  </button>

                  {open && section.key === 'company' && (
                    <div className="flex flex-col gap-6 p-6">
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="flex flex-col gap-2">
                          <label className="text-[13px] font-semibold text-[var(--c-heading)]">
                            Platform Name
                          </label>
                          <input
                            type="text"
                            value={platformName}
                            onChange={(e) => setPlatformName(e.target.value)}
                            className="w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-card)] px-3 py-2.5 text-sm text-[var(--c-heading)] outline-none focus:border-[var(--c-primary)]"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[13px] font-semibold text-[var(--c-heading)]">
                            Support Email
                          </label>
                          <input
                            type="email"
                            value={supportEmail}
                            onChange={(e) => setSupportEmail(e.target.value)}
                            className="w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-card)] px-3 py-2.5 text-sm text-[var(--c-heading)] outline-none focus:border-[var(--c-primary)]"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-semibold text-[var(--c-heading)]">
                          Description
                        </label>
                        <textarea
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          className="h-[100px] w-full resize-none rounded-lg border border-[var(--c-border)] bg-[var(--c-card)] p-3 text-sm text-[var(--c-heading)] outline-none focus:border-[var(--c-primary)]"
                        />
                      </div>
                    </div>
                  )}

                  {open && section.key === 'localization' && (
                    <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-semibold text-[var(--c-heading)]">
                          Default Language
                        </label>
                        <input
                          type="text"
                          defaultValue="English (US)"
                          className="w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-card)] px-3 py-2.5 text-sm text-[var(--c-heading)] outline-none focus:border-[var(--c-primary)]"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-semibold text-[var(--c-heading)]">
                          Timezone
                        </label>
                        <input
                          type="text"
                          defaultValue="(GMT+03:00) Riyadh"
                          className="w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-card)] px-3 py-2.5 text-sm text-[var(--c-heading)] outline-none focus:border-[var(--c-primary)]"
                        />
                      </div>
                    </div>
                  )}

                  {open && section.key === 'appearance' && (
                    <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-semibold text-[var(--c-heading)]">Theme</label>
                        <input
                          type="text"
                          defaultValue="Light"
                          className="w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-card)] px-3 py-2.5 text-sm text-[var(--c-heading)] outline-none focus:border-[var(--c-primary)]"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-semibold text-[var(--c-heading)]">
                          Accent Color
                        </label>
                        <input
                          type="text"
                          defaultValue="Blue (#2563eb)"
                          className="w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-card)] px-3 py-2.5 text-sm text-[var(--c-heading)] outline-none focus:border-[var(--c-primary)]"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )
            })}

            <div className="flex justify-end pt-3">
              <button
                type="button"
                className="rounded-lg bg-[var(--c-primary)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0px_8px_9px_rgba(37,99,235,0.2)] transition-colors hover:bg-[var(--c-primary-hover)]"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
