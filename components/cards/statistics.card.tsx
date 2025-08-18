import { IStatisticsCard } from '@/types'

function StatisticsCard({ label, value, Icon }: IStatisticsCard) {
	return (
		<div className='flex items-center justify-between rounded-md bg-background p-4'>
			<div className='flex flex-col space-y-2'>
				<p className='text-muted-foreground'>{label}</p>
				<p className='text-2xl font-bold'>{value}</p>
			</div>
			<Icon className='size-12 text-primary' />
		</div>
	)
}

export default StatisticsCard
