import { collection, getDocs, limit, orderBy, query } from "@firebase/firestore";

export const useGetAllDocuments = () => {

  const getAllDocuments = async (dbQuery: any) => {

    const querySnapshot = await getDocs(dbQuery)
    const data = querySnapshot.docs.map((doc: any) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return data;
  }

  return { getAllDocuments }
}