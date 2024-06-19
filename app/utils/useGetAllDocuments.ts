import { collection, getDocs, limit, orderBy, query } from "@firebase/firestore";
import db from "./firestore";

export const useGetAllDocuments = () => {

  const getAllDocuments = async (path: string, order?: string, direction?: string, limitData?: number) => {

    const collectionRef = collection(db, path)
    let q
    if (order) {
      if (direction === "desc" && limitData) {
        q = query(collectionRef, orderBy(order, "desc"), limit(limitData))
      } else if (direction === "desc") {
        q = query(collectionRef, orderBy(order, "desc"))
      } else if (direction === "asc" && limitData) {
        q = query(collectionRef, orderBy(order, "asc"), limit(limitData))
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

  return { getAllDocuments }
}