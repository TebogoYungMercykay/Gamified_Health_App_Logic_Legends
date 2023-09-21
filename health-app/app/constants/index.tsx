import {
    HiOutlineViewGrid,
    HiOutlineUsers,
    HiOutlineDocumentText,
    HiOutlineAnnotation,
    HiOutlineCog,
} from 'react-icons/hi';

export interface SidebarLinkInterface {
    key: string;
    label: string;
    path: string;
    // create warning
    icon: JSX.Element;
}

export const DASHBOARD_SIDEBAR_LINKS: SidebarLinkInterface[] = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/dashboard',
        icon: <HiOutlineViewGrid />,
    },
    {
        key: 'Leaderboard',
        label: 'Leaderboard',
        path: '/leaderboard',
        icon: <HiOutlineUsers />,
    },
    {
        key: 'Events',
        label: 'Events',
        path: '/events',
        icon: <HiOutlineDocumentText />,
    },
    {
        key: 'DoctorPortal',
        label: 'Doctor Portal',
        path: '/doctorportal',
        icon: <HiOutlineAnnotation />,
    },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS: SidebarLinkInterface[] = [
    {
        key: 'settings',
        label: 'Settings',
        path: '/setting',
        icon: <HiOutlineCog />,
    },
];
