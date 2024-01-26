import { useId } from 'react'
import clsx from 'clsx'
import LogoBrand from '@/images/logo.svg'
import Image from 'next/image'
export function Logomark({ invert = false, filled = false, ...props }) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <rect
        clipPath={`url(#${id}-clip)`}
        className={clsx(
          'h-8 transition-all duration-300',

          invert ? 'fill-white' : 'fill-[#004878]',
          filled ? 'w-8' : 'w-0 group-hover/logo:w-8',
        )}
      />
      <use
        href={`#${id}-path`}
        className={invert ? 'stroke-white' : 'stroke-[#004878]'}
        fill="none"
        strokeWidth="1.5"
      />
      <defs>
        <path
          id={`${id}-path`}
          d="M3.25 26v.75H7c1.305 0 2.384-.21 3.346-.627.96-.415 1.763-1.02 2.536-1.752.695-.657 1.39-1.443 2.152-2.306l.233-.263c.864-.975 1.843-2.068 3.071-3.266 1.209-1.18 2.881-1.786 4.621-1.786h5.791V5.25H25c-1.305 0-2.384.21-3.346.627-.96.415-1.763 1.02-2.536 1.751-.695.658-1.39 1.444-2.152 2.307l-.233.263c-.864.975-1.843 2.068-3.071 3.266-1.209 1.18-2.881 1.786-4.621 1.786H3.25V26Z"
        />
        <clipPath id={`${id}-clip`}>
          <use href={`#${id}-path`} />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    <div className="flex flex-row items-center " style={{ gap: '6px' }}>
      <svg
        viewBox="0 0 35 32"
        aria-hidden="true"
        className={clsx(fillOnHover && 'group/logo', className)}
        {...props}
      >
        {/* Represent the line with the logo*/}
        <Logomark
          preserveAspectRatio="xMinYMid meet"
          invert={invert}
          filled={filled}
        />
        {/*Represents the Text*/}
      </svg>
      <Image src={LogoBrand} alt={'logo'} width={160} height={50} unoptimized />
    </div>
  )
}
