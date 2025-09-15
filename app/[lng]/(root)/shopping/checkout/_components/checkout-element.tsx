'use client'

import { Card, CardContent } from '@/components/ui/card'
import { useCart } from '@/hooks/use-cart'
import useTranslate from '@/hooks/use-translate'
import CartItem from './cart-item'
import { Separator } from '@/components/ui/separator'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Checkout from './checkout'

const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
)

function CheckoutElement() {
	const t = useTranslate()
	const { totalPrice, taxes, carts } = useCart()

	return (
		<div className='container mx-auto mt-12 max-w-6xl'>
			<div className='grid grid-cols-3 gap-2 max-md:grid-cols-1'>
				<Card className='relative col-span-2 bg-gradient-to-t from-secondary to-background'>
					<CardContent className='py-4'>
						<h1 className='font-space-grotesk text-2xl font-bold'>
							{t('checkout')}
						</h1>
						<p className='text-sm text-muted-foreground'>{t('fillDetails')}</p>

						<Elements stripe={stripePromise}>
							<Checkout />
						</Elements>
					</CardContent>
				</Card>

				<div className='flex flex-col space-y-3'>
					<Card className='bg-gradient-to-b from-secondary to-background'>
						<CardContent className='py-4'>
							<h1 className='font-space-grotesk text-2xl font-bold'>
								{t('orders')}
							</h1>
							<p className='text-sm text-muted-foreground'>
								{t('reviewItems')}
							</p>

							<div className='mt-4 flex flex-col space-y-3'>
								{carts.map(item => (
									<CartItem key={item._id} {...item} />
								))}
							</div>
						</CardContent>
					</Card>

					<Card className='bg-gradient-to-t from-secondary to-background'>
						<CardContent className='py-4'>
							<h1 className='font-space-grotesk text-2xl font-bold'>
								{t('results')}
							</h1>
							<p className='text-sm text-muted-foreground'>
								{t('controlsResult')}
							</p>

							<Separator className='my-3' />

							<div className='flex items-center justify-between text-sm'>
								<div className='font-space-grotesk font-bold'>
									{t('subtotal')}
								</div>
								<div className='font-medium'>
									{totalPrice().toLocaleString('en-US', {
										style: 'currency',
										currency: 'USD',
									})}
								</div>
							</div>

							<div className='flex items-center justify-between text-sm'>
								<div className='font-space-grotesk font-bold'>{t('taxes')}</div>
								<div className='font-medium'>
									{taxes().toLocaleString('en-US', {
										style: 'currency',
										currency: 'USD',
									})}
								</div>
							</div>

							<div className='flex items-center justify-between text-sm'>
								<div className='font-space-grotesk font-bold'>{t('total')}</div>
								<div className='font-medium'>
									{(taxes() + totalPrice()).toLocaleString('en-US', {
										style: 'currency',
										currency: 'USD',
									})}
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}

export default CheckoutElement
