import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../settings/firebase";
import { useState, useEffect } from 'react'
import { useFirestore } from "./useFirestore";
import { CollectionReference, collection, onSnapshot, query, addDoc } from "firebase/firestore"

export const useUserNotes = () => {
	const {firestore} = useFirestore()
	const [userNotes, setUserNotes] = useState([])
	useEffect(()=>{
		if(! firestore) return ;
			console.log(firestore)
			// fetch userNotes from firestore
			const q = query(collection(firestore, 'userNotes'))
			const unsubscribe = onSnapshot(q, (querySnapshot)=> {
				const notes = []
				querySnapshot.forEach((doc)=>{
					console.log(doc.data())
					const note = {
						id: doc.id,
						...doc.data()
					}
					notes.push(note)
				})
				setUserNotes(notes)
			})
		return unsubscribe
	}, [firestore])

	const addNote = async (form) => {
		const notes = collection(firestore, 'userNotes')
		addDoc(notes, form)
	}

  return [userNotes, addNote]
}