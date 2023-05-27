import { initFirebase } from "./firebaseApp";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const app = initFirebase();
const db = getFirestore();
export default async function addData(colllection, id, data) {
  let result = null;
  let error = null;

  try {
    result = await setDoc(doc(db, colllection, id), data, {
      merge: true,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}
