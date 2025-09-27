import { getNotifications } from '@/actions/notification.action'
import NotificationCard from '@/components/cards/notification.card'
import Header from '@/components/shared/header'
import NoResult from '@/components/shared/no-result'
import { translation } from '@/i18n/server'
import { LngParams } from '@/types'
import { auth } from '@clerk/nextjs'
import ClearButton from './_components/clear-button'

async function Page({ params: { lng } }: LngParams) {
	const { t } = await translation(lng)
	const { userId } = auth()
	const notifications = await getNotifications(userId!)
	console.log(notifications)

	return (
		<>
			<Header
				title={t('notifications')}
				description={t('notificationDescription')}
			/>

			<div className='mt-4 flex flex-col space-y-2'>
				{notifications.length === 0 && (
					<NoResult
						title={t('noNotifications')}
						description={t('noNotificationsDescription')}
					/>
				)}

				{notifications.map(n => (
					<NotificationCard key={n._id} item={JSON.parse(JSON.stringify(n))} />
				))}

				{notifications.length > 0 && <ClearButton />}
			</div>
		</>
	)
}

export default Page
