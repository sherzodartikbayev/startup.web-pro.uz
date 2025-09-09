import { getLessson } from '@/actions/lesson.action'
import { translation } from '@/i18n/server'
import parse from 'html-react-parser'
import VideoLesson from './_components/video-lesson'

interface Props {
	params: { lessonId: string; courseId: string; lng: string }
}

async function Page({ params: { lessonId, courseId, lng } }: Props) {
	const { t } = await translation(lng)
	const lesson = await getLessson(lessonId)

	return (
		<>
			<VideoLesson lesson={JSON.parse(JSON.stringify(lesson))} />

			{lesson.content && (
				<div className='rounded-md bg-gradient-to-b from-background to-secondary px-4 pb-4 pt-1 md:px-8'>
					<h1 className='mb-2 font-space-grotesk text-xl font-medium text-primary'>
						{t('usefullInformation')}
					</h1>

					<div className='prose max-w-none flex-1 dark:prose-invert'>
						{parse(lesson.content)}
					</div>
				</div>
			)}
		</>
	)
}

export default Page
