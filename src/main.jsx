import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './index.css'

import AppLayout from './layout/AppLayout'
import Landing from './pages/Landing'
import { ThemeProvider } from './theme/ThemeContext'

// Apply the persisted theme before first paint to avoid a light-mode flash.
try {
  const saved = JSON.parse(localStorage.getItem('farasha-theme'))
  if (saved?.theme) document.documentElement.setAttribute('data-theme', saved.theme)
} catch {
  /* no saved theme */
}

import AdminDashboard from './pages/admin/Dashboard'
import AdminUsers from './pages/admin/Users'
import AdminEmployers from './pages/admin/Employers'
import AdminLeave from './pages/admin/Leave'
import AdminSettings from './pages/admin/Settings'

import EmployerDashboard from './pages/employer/Dashboard'
import EmployerEmployees from './pages/employer/Employees'
import EmployerLeave from './pages/employer/Leave'
import EmployerPayroll from './pages/employer/Payroll'
import EmployerSettings from './pages/employer/Settings'

import EmployeeDashboard from './pages/employee/Dashboard'
import EmployeeProfile from './pages/employee/Profile'
import EmployeeLeave from './pages/employee/Leave'
import EmployeePayslips from './pages/employee/Payslips'
import EmployeeSettings from './pages/employee/Settings'

const router = createBrowserRouter([
  { path: '/', element: <Landing /> },
  {
    path: '/admin',
    element: <AppLayout roleKey="admin" />,
    children: [
      { index: true, element: <Navigate to="/admin/dashboard" replace /> },
      { path: 'dashboard', element: <AdminDashboard /> },
      { path: 'users', element: <AdminUsers /> },
      { path: 'employers', element: <AdminEmployers /> },
      { path: 'leave', element: <AdminLeave /> },
      { path: 'payroll', element: <Navigate to="/admin/dashboard" replace /> },
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
      { path: 'leave', element: <EmployerLeave /> },
      { path: 'payroll', element: <EmployerPayroll /> },
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
      { path: 'leave', element: <EmployeeLeave /> },
      { path: 'payslips', element: <EmployeePayslips /> },
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
