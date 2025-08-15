import { ReactNode } from 'react'

export interface ChildProps {
	children: ReactNode
}

export interface LngParams {
	params: { lng: string }
}

export interface LanguageDropdownProps {
	isMobbile?: boolean
}
