import { collection } from 'firebase/firestore'
import data from './data';

const collectionName = 'products'

const colRef = collection(db, collectionName)

const addMultipleDocuments = async () => {}

const queryDocuments = async () => {}

export { addMultipleDocuments, queryDocuments }