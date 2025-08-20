import { Client, Storage, ID } from 'appwrite'

const client = new Client()

client
	.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string)
	.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string)

export const storage = new Storage(client)

export const bucketId = process.env.NEXT_PUBLIC_APPWRITE_BUCKET as string

export { ID }
