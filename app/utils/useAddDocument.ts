import { addDoc, collection } from "@firebase/firestore";
import db from "./firestore";

export const useAddDocument = () => {
  const addDocument = async (path: string, doc: any) => {
    const collectionRef = collection(db, path)
    const add = await addDoc(collectionRef, doc) 
    console.log("document id: ", add.id)
  }

  return addDocument
}