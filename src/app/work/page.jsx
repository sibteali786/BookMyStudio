'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { formatDate } from '@/lib/formatDate'
import useBookings from '@/hooks/useBookings'
import SearchBookings from '@/components/SearchBookings'
import { useEffect, useState } from 'react'

function BookingsList({ bookings }) {
  const [filteredBookings, setFilteredBookings] = useState(bookings)
  const handleSearchResults = (searchResults) => {
    setFilteredBookings(searchResults)
  }
  useEffect(() => {
    setFilteredBookings(bookings); // Initialize filteredBookings when bookings change
  }, [bookings]);
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          List of all the Upcoming Bookings
        </h2>
      </FadeIn>
      <SearchBookings bookings={bookings} setSearchResults={handleSearchResults} />
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {filteredBookings.map((booking) => (
          <FadeIn key={booking.id}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                      {booking.name}
                    </h3>
                  </div>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      {booking.department}
                    </p>
                    <p className="text-sm text-neutral-950 lg:mt-2">
                      <time dateTime={booking.date}>
                        {formatDate(booking.dateOfRequirement)}
                      </time>
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  {/*
					<p className="font-display text-4xl font-medium text-neutral-950">
					  <Link href={booking.href}>{booking.title}</Link>
					</p>
					
					*/}
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    <p key={booking.id}>{booking.natureOfUsage}</p>
                  </div>
                  <div className="mt-8 flex">
                    <Button aria-label={`booking for: ${booking.name}`}>
                      Booking Details
                    </Button>
                  </div>
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

export default function Work() {
  let bookings = useBookings()
  if (!bookings) {
    console.log('Null')
    return null
  }
  return (
    <>
      <PageIntro
        eyebrow="Upcoming Bookings"
        title="One place for all the bookings."
      >
        <p>
          Explore the scheduled bookings ahead. Discover upcoming events,
          recordings, and sessions. Stay organized and informed about the latest
          studio reservations. Find your next appointment or manage your studio
          bookings conveniently in one place.
        </p>
      </PageIntro>
      <BookingsList bookings={bookings} />
      {
        //   <Testimonial
        //     className="mt-24 sm:mt-32 lg:mt-40"
        //     client={{ name: 'Mail Smirk', logo: logoMailSmirk }}
        //   >
        //     We approached <em>Studio</em> because we loved their past work. They
        //     delivered something remarkably similar in record time.
        //   </Testimonial>
      }
      {
        //   <Clients />
      }

      <ContactSection />
    </>
  )
}
