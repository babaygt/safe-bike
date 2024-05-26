import tw from "tailwind-styled-components"
import {
  Card as uiCard,
  CardContent as uiCardContent,
  CardTitle as uiCardTitle } from '@/components/ui/card'
import { Reenie_Beanie, Patrick_Hand } from 'next/font/google'
import { Input } from '@/components/ui/input'
import { Button } from "@/components/ui/button"

// Google-font settings
const patrick = Patrick_Hand({
  weight: ['400'],
  subsets: ['latin']
})
const reninie = Reenie_Beanie({
	weight: ['400'],
	subsets: ['latin'],
})

export const PrimaryHeader = tw.h1`
  text-center
  mb-8
  tracking-wider
  text-4xl
  ${() => patrick.className}
`
export const NotesContainer = tw.ul`
  flex
  flex-wrap
  justify-center
`

export const NotesChild = tw.li`
  m-4
`

export const Card = tw(uiCard)`
  w-64
  h-[23rem]
  transform
  rotate-2
  shadow-lg
  hover:scale-105
  transition-transform
  duration-200
  ${(p)=>p.color}
`

export const CardTitle = tw(uiCardTitle)`
  text-base
  tracking-wider
  ${() => patrick.className}
`

export const CardForm = tw(uiCardContent)`
  flex
  flex-col
  items-center
  text-white
`
export const InputTitle = tw(Input)`
  mb-4
  tracking-wider
  ${() => patrick.className}
`
export const InputOpinion = tw(Input)`
  h-14
  mb-4
  text-2xl
  ${() => reninie.className}
`
export const ColorPicker = tw.div`
  flex
  space-x-2
  mb-4
  bg-black
  p-3
  rounded-md
`
export const Color = tw.div`
  w-6
  h-6
  rounded-full
  cursor-pointer
  ${(p) => p.color}
`
export const Submit = tw(Button)`
  bg-green-500
  text-white
  mt-2
  hover:bg-green-600
  focus:outline-none
  focus:ring-2
  focus:ring-green-400
  focus:ring-opacity-75
`
export const CardContent = tw(uiCardContent)`
  text-2xl
  ${() => patrick.className}
`
