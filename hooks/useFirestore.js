import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../settings/firebase";
import { useState, useEffect } from 'react'

export const useFirestore = () => {
  const [firestore, setFirestore] = useState(null)
  useEffect(() => {
    setFirestore(getFirestore(initializeApp(firebaseConfig)))
  }, [])
  return {firestore}
}