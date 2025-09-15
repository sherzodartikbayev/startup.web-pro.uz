import TopBar from '@/components/shared/top-bar'
import { translation } from '@/i18n/server'
import { LngParams } from '@/types'
import CheckoutElement from './_components/checkout-element'

async function Page({ params: { lng } }: LngParams) {
	const { t } = await translation(lng)

	return (
		<>
			<TopBar label={t('shoppingCart')} extra={t('checkout')} />
			<CheckoutElement />
		</>
	)
}

export default Page
