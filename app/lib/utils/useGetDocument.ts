import { doc, getDoc } from "@firebase/firestore"
import db from "./firestore"

export const useGetDocument = () => {
  const getDocument = async (path: string, id: string) => {
    const docRef = doc(db, path, id)
    const querySnapshot = await getDoc(docRef)
    return querySnapshot.data()
  }

  return { getDocument }
}