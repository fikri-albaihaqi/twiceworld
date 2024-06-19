import { collection, getDocs, orderBy, query } from "@firebase/firestore";
import db from "./firestore";

export const useGetAllDocuments = () => {

  const getDoc = async (path: string, order?: string, direction?: string) => {

    const collectionRef = collection(db, path)
    let q
    if (order) {
      if (direction === "desc") {
        q = query(collectionRef, orderBy(order, "desc"))
      } else {
        q = query(collectionRef, orderBy(order, "asc"))
      }
    } else {
      q = query(collectionRef)
    }
    const querySnapshot = await getDocs(q)
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return data;
  }

  return { getDoc }
}