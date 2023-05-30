import { initFirebase } from "./firebaseApp";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const app = initFirebase();
const db = getFirestore();

export default async function getOrdersByEmail(email) {
  const ordersRef = collection(db, "orders");
  const q = query(ordersRef, where("userEmail", "==", email));
  const querySnapshot = await getDocs(q);

  const orders = [];
  querySnapshot.forEach((doc) => {
    orders.push(doc.data());
  });

  return orders;
}
