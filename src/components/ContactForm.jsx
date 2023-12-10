'use client'

import { DateInput, TextArea, TextInput } from '@/app/contact/page'
import { FadeIn } from '@/components/FadeIn'
import { Button } from '@/components/Button'
import { addDoc, collection, db } from '@/lib/firebase'

export function ContactForm() {
  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const docRef = await addDoc(collection(db, 'bookings'), {
        name: e.target.name.value,
        email: e.target.email.value,
        department: e.target.department.value,
        school: e.target.school.value,
        dateOfRequirement: e.target['date-of-requirement'].value,
        natureOfUsage: e.target['usage-nature'].value,
      })

      console.log('Document written with ID: ', docRef.id)
      e.target.reset()
    } catch (error) {
      console.error('Error adding document: ', error)
    }
  }

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={(e) => submitHandler(e)}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Department"
            name="department"
            autoComplete="organization"
          />
          <TextInput label="School" name="school" autoComplete="organization" />
          <DateInput label="Date of Requirement" name="date-of-requirement" />
          <TextArea label="Nature of Usage" name="usage-nature" />
        </div>
        <Button type="submit" className="mt-10">
          Book It
        </Button>
      </form>
    </FadeIn>
  )
}
