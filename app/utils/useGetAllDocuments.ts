import { collection, getDocs } from "@firebase/firestore";
import db from "./firestore";

export const useGetAllDocuments = () => {

  const getDoc = async (path: string) => {

    const collectionRef = collection(db, path)
    const querySnapshot = await getDocs(collectionRef)
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return data;
  }

  return { getDoc }
}