
export const getStatus = (status: string) => {
    switch (status) {
        case 'Open':
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-sky-600 bg-sky-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
            )
        default:
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-gray-600 bg-gray-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
            )
    }
}