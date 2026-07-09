import {
  LayoutDashboard,
  Users,
  Building2,
  CalendarClock,
  Banknote,
  Settings,
  User,
  FileText,
} from 'lucide-react'

import avatar1 from '../assets/avatar1.png'
import avatar2 from '../assets/avatar2.png'
import avatar3 from '../assets/avatar3.png'

export const ROLES = {
  admin: {
    label: 'Admin',
    basePath: '/admin',
    user: { name: 'Alex Rivera', role: 'Super Admin', avatar: avatar1 },
    nav: [
      { label: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
      { label: 'Users', path: '/admin/users', icon: Users },
      { label: 'Employers', path: '/admin/employers', icon: Building2 },
      { label: 'Leave', path: '/admin/leave', icon: CalendarClock },
      { label: 'Payroll', path: '/admin/payroll', icon: Banknote, redirectOnly: true },
      { label: 'Settings', path: '/admin/settings', icon: Settings },
    ],
  },
  employer: {
    label: 'Employer',
    basePath: '/employer',
    user: { name: 'Sarah Chen', role: 'HR Manager', avatar: avatar2 },
    nav: [
      { label: 'Dashboard', path: '/employer/dashboard', icon: LayoutDashboard },
      { label: 'Employees', path: '/employer/employees', icon: Users },
      { label: 'Leave', path: '/employer/leave', icon: CalendarClock },
      { label: 'Payroll', path: '/employer/payroll', icon: Banknote },
      { label: 'Settings', path: '/employer/settings', icon: Settings },
    ],
  },
  employee: {
    label: 'Employee',
    basePath: '/employee',
    user: { name: 'Sarah Miller', role: 'Product Designer', avatar: avatar3 },
    nav: [
      { label: 'Dashboard', path: '/employee/dashboard', icon: LayoutDashboard },
      { label: 'Profile', path: '/employee/profile', icon: User },
      { label: 'Leave', path: '/employee/leave', icon: CalendarClock },
      { label: 'Payslips', path: '/employee/payslips', icon: FileText },
      { label: 'Settings', path: '/employee/settings', icon: Settings },
    ],
  },
}
