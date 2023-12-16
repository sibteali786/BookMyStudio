import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import services from '@/images/services.jpg'
import { Button } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Seamless Studio Solutions, Unmatched Convenience"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          From scheduling to recordings, we excel in simplifying studio
          operations. When it comes to streamlining bookings and maximizing
          efficiency, trust us to deliver unparalleled convenience for your
          studio needs.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={services}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Recording Podcasts">
              Tailored podcast recording services ensuring high-quality
              production and engaging content creation for your brand or
              project.
            </ListItem>
            <ListItem title="Seminar Coverage">
              Comprehensive visual coverage capturing and presenting key
              moments, speakers, and insights from seminars and conferences.
            </ListItem>
            <ListItem title="Workshop Coverage">
              Immersive coverage highlighting valuable insights and engaging
              storytelling from various workshops and training sessions.
            </ListItem>
            <ListItem title="Interviews">
              Professional filming and conducting of interviews, delivering
              polished and captivating representations for your content needs.
            </ListItem>
            <ListItem title="Schools Video Packages">
              Customized video packages designed to inform and captivate
              educational audiences, tailored specifically for schools and
              institutions.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-4xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Your Studio Booking Companion
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            BOOKMYSTUDIO simplifies studio bookings. Manage TV operations,
            student recordings, and campus coverages hassle-free. No more
            conflicts or rushes. Our calendar brings clarity, empowering you to
            control schedules effortlessly. Join us for a revolutionary studio
            booking experience.
          </p>
          <a
            href="/contact"
            className="mt-10 flex w-40 cursor-pointer flex-row justify-evenly items-center rounded-md bg-neutral-950 py-2 text-white hover:bg-neutral-800"
          >
            Book Now
            <ArrowForwardIosIcon fontSize="small"/>
          </a>
        </FadeIn>
      </Container>

      <Services />

      <ContactSection />
    </>
  )
}
