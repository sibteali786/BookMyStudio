import { collection, db, getDocs } from '@/lib/firebase'
import { useEffect, useMemo, useState } from 'react'

export default function useBookings() {
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    let res = true
    const fetchBookings = async () => {
      let arrBookings = []
      const querySnapshot = await getDocs(collection(db, 'bookings'))
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        arrBookings.push({ ...doc.data(), id: doc.id })
      })
      if (res) {
        setBookings(arrBookings)
      }
    }

    fetchBookings()
    return () => {
      res = false
    }
  }, [])
  const memoizedBookings = useMemo(() => bookings, [bookings])

  return memoizedBookings
}
