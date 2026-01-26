export { default as BaseSidebar } from './BaseSidebar';
export { default as SidebarNav } from './SidebarNav';
export { default as SidebarUserProfile } from './SidebarUserProfile';
export { default as SidebarBrand } from './SidebarBrand';
export { default as DashboardSidebar } from './DashboardSidebar';
export { default as CourseSidebar } from './CourseSidebar';

// Re-export types
export type { NavItem } from './SidebarNav';

// Re-export navigation config
export { getDashboardNavItems } from './navConfig';
