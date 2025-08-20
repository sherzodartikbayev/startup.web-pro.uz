import { storage, bucketId, ID } from './appwrite'

export const uploadImage = async (file: File) => {
	try {
		const response = await storage.createFile(bucketId, ID.unique(), file)
		const fileUrl = `https://fra.cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${response.$id}/view?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}`
		return fileUrl
	} catch (error) {
		console.error('Upload error:', error)
		throw error
	}
}
