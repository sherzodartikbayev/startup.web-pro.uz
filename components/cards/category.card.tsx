import { ICategory } from '@/types'
import CustomImage from '../shared/custom-image'

function CategoryCard(category: ICategory) {
	return (
		<div>
			<div className='flex h-44 w-full items-center justify-center rounded-md bg-secondary'>
				<div className='relative size-[100px]'>
					<CustomImage src={category.icon} alt={category.label} />
				</div>
			</div>
			<h2 className='mt-2 line-clamp-1 font-space-grotesk text-lg'>
				{category.label}
			</h2>
		</div>
	)
}

export default CategoryCard
