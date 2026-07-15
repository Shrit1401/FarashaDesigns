import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './index.css'

import AppLayout from './layout/AppLayout'
import Landing from './pages/Landing'
import { ThemeProvider } from './theme/ThemeContext'

// Apply the persisted theme before first paint to avoid a light-mode flash.
// A ?theme= query param overrides it (used for automated captures).
try {
  const urlTheme = new URLSearchParams(window.location.search).get('theme')
  const saved = JSON.parse(localStorage.getItem('farasha-theme'))
  const theme = urlTheme || saved?.theme
  if (theme) document.documentElement.setAttribute('data-theme', theme)
  if (urlTheme) localStorage.setItem('farasha-theme', JSON.stringify({ ...(saved || {}), theme: urlTheme }))
} catch {
  /* no saved theme */
}

import AdminDashboard from './pages/admin/Dashboard'
import AdminTenants from './pages/admin/Tenants'
import AdminPartners from './pages/admin/Partners'
import AdminSubscriptions from './pages/admin/Subscriptions'
import AdminBilling from './pages/admin/Billing'
import AdminMarketplace from './pages/admin/Marketplace'
import AdminUsers from './pages/admin/Users'
import AdminEmployers from './pages/admin/Employers'
import AdminLeave from './pages/admin/Leave'
import AdminAuditLogs from './pages/admin/AuditLogs'
import AdminMonitoring from './pages/admin/Monitoring'
import AdminSecurity from './pages/admin/Security'
import AdminSettings from './pages/admin/Settings'

import EmployerDashboard from './pages/employer/Dashboard'
import EmployerEmployees from './pages/employer/Employees'
import EmployerTimeTracking from './pages/employer/TimeTracking'
import EmployerLeave from './pages/employer/Leave'
import EmployerPayroll from './pages/employer/Payroll'
import EmployerDocuments from './pages/employer/Documents'
import EmployerReports from './pages/employer/Reports'
import EmployerSettings from './pages/employer/Settings'

import EmployeeDashboard from './pages/employee/Dashboard'
import EmployeeProfile from './pages/employee/Profile'
import EmployeeTimeTracking from './pages/employee/TimeTracking'
import EmployeeLeave from './pages/employee/Leave'
import EmployeePayslips from './pages/employee/Payslips'
import EmployeeTaxForms from './pages/employee/TaxForms'
import EmployeeDocuments from './pages/employee/Documents'
import EmployeeNotifications from './pages/employee/Notifications'
import EmployeeSettings from './pages/employee/Settings'

const router = createBrowserRouter([
  { path: '/', element: <Landing /> },
  {
    path: '/admin',
    element: <AppLayout roleKey="admin" />,
    children: [
      { index: true, element: <Navigate to="/admin/dashboard" replace /> },
      { path: 'dashboard', element: <AdminDashboard /> },
      { path: 'tenants', element: <AdminTenants /> },
      { path: 'partners', element: <AdminPartners /> },
      { path: 'subscriptions', element: <AdminSubscriptions /> },
      { path: 'billing', element: <AdminBilling /> },
      { path: 'marketplace', element: <AdminMarketplace /> },
      { path: 'users', element: <AdminUsers /> },
      { path: 'employers', element: <AdminEmployers /> },
      { path: 'leave', element: <AdminLeave /> },
      { path: 'audit-logs', element: <AdminAuditLogs /> },
      { path: 'monitoring', element: <AdminMonitoring /> },
      { path: 'security', element: <AdminSecurity /> },
      { path: 'payroll', element: <Navigate to="/admin/billing" replace /> },
      { path: 'settings', element: <AdminSettings /> },
    ],
  },
  {
    path: '/employer',
    element: <AppLayout roleKey="employer" />,
    children: [
      { index: true, element: <Navigate to="/employer/dashboard" replace /> },
      { path: 'dashboard', element: <EmployerDashboard /> },
      { path: 'employees', element: <EmployerEmployees /> },
      { path: 'time-tracking', element: <EmployerTimeTracking /> },
      { path: 'leave', element: <EmployerLeave /> },
      { path: 'payroll', element: <EmployerPayroll /> },
      { path: 'documents', element: <EmployerDocuments /> },
      { path: 'reports', element: <EmployerReports /> },
      { path: 'settings', element: <EmployerSettings /> },
    ],
  },
  {
    path: '/employee',
    element: <AppLayout roleKey="employee" />,
    children: [
      { index: true, element: <Navigate to="/employee/dashboard" replace /> },
      { path: 'dashboard', element: <EmployeeDashboard /> },
      { path: 'profile', element: <EmployeeProfile /> },
      { path: 'time-tracking', element: <EmployeeTimeTracking /> },
      { path: 'leave', element: <EmployeeLeave /> },
      { path: 'payslips', element: <EmployeePayslips /> },
      { path: 'tax-forms', element: <EmployeeTaxForms /> },
      { path: 'documents', element: <EmployeeDocuments /> },
      { path: 'notifications', element: <EmployeeNotifications /> },
      { path: 'settings', element: <EmployeeSettings /> },
    ],
  },
  { path: '*', element: <Navigate to="/" replace /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
