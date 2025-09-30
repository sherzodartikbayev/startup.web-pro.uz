import TopBar from '@/components/shared/top-bar'
import { translation } from '@/i18n/server'
import { LngParams } from '@/types'
import CheckoutElement from './_components/checkout-element'
import { getCustomerCards } from '@/actions/customer.action'
import { auth } from '@clerk/nextjs'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Praktikum | Checkout',
	description: 'Kurslarni sotib olish sahifasi',
}

async function Page({ params }: LngParams) {
	const { userId } = auth()
	const { t } = await translation(params.lng)

	const cards = await getCustomerCards(userId!)

	return (
		<>
			<TopBar label={'shoppingCart'} extra={t('checkout')} />
			<CheckoutElement cards={JSON.parse(JSON.stringify(cards))} />
		</>
	)
}

export default Page
