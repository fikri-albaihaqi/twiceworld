import { collection, getDocs } from "@firebase/firestore"
import db from "./firestore"

export const useGetSubcollection = () => {
  const getSubcollection = async (path: string, id: string, subcollection: string) => {
    const collectionRef = collection(db, path, id, subcollection)
    const querySnapshot = await getDocs(collectionRef)
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return data;
  }

  return { getSubcollection }
}