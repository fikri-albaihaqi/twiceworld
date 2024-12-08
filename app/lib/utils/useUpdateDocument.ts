import { doc, updateDoc } from "@firebase/firestore";
import db from "./firestore";

export const useUpdateDocument = () => {
  const updateDocument = async (path: string, id: string, document: any) => {
    const docRef = doc(db, path, id)
    const update = await updateDoc(docRef, document) 
    console.log("document id: ", document.id)
  }

  return updateDocument
}