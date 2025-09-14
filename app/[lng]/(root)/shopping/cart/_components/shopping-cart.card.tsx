import { ICourse } from '@/app.types'
import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks/use-cart'
import { Trash2 } from 'lucide-react'
import Image from 'next/image'

interface Props extends ICourse {
	quantity: number
}

function ShoppingCartCard(item: Props) {
	const { removeFromCart, totalPrice } = useCart()

	return (
		<div className='grid w-full grid-cols-3 gap-4 rounded-md p-4 shadow-md dark:shadow-sm dark:shadow-white max-md:grid-cols-1'>
			<div className='col-span-2 flex items-center gap-2'>
				<Image
					src={item.previewImage}
					alt={item.title}
					width={150}
					height={100}
					className='rounded-sm object-cover'
				/>
				<div className='flex flex-col'>
					<h1 className='font-space-grotesk text-lg font-bold'>{item.title}</h1>
					<p className='line-clamp-2 text-sm text-muted-foreground'>
						{item.description}
					</p>
					<h1 className='font-space-grotesk font-bold md:hidden'>
						{(item.currentPrice * item.quantity).toLocaleString('en-US', {
							style: 'currency',
							currency: 'USD',
						})}
					</h1>
				</div>
			</div>

			<div className='flex items-center justify-end gap-2'>
				<h1 className='font-space-grotesk text-xl font-bold max-md:hidden'>
					{totalPrice().toLocaleString('en-US', {
						style: 'currency',
						currency: 'USD',
					})}
				</h1>
				<Button
					variant='destructive'
					size='icon'
					className='max-md:w-full'
					onClick={() => removeFromCart(item._id)}
				>
					<Trash2 className='size-5' />
				</Button>
			</div>
		</div>
	)
}

export default ShoppingCartCard
