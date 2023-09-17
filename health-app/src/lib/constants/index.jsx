import {
	HiOutlineViewGrid,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/dashboard',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'Leaderboard',
		label: 'Leaderboard',
		path: '/leaderboard',
		icon: <HiOutlineUsers />
	},
	{
		key: 'Events',
		label: 'Events',
		path: '/events',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'DoctorPortal',
		label: 'Doctor Portal',
		path: '/doctorportal',
		icon: <HiOutlineAnnotation />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/dashboard',
		icon: <HiOutlineCog />
	}
]
