'use client'

import type React from 'react'
import { useState } from 'react'

import {
  Background,
  Column,
  Fade,
  IconButton,
  useToast,
} from '@/once-ui/components'
import { ScrollToTop } from '@/once-ui/components/ScrollToTop'

import { AttendanceForm, Footer, Gallery, Header, Hero } from '@/sections'
import { EventInfo } from '@/sections/event-info/EventInfo'
import { WeddingInfo } from '@/sections/wedding-info/WeddingInfo'

export default function Home() {
  const { addToast } = useToast()
  const [asistQuantity, setAsistQuantity] = useState(0)
  const [lastName, setLastName] = useState('')
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onSelect = (value: string) => {
    setAsistQuantity(parseInt(value))
  }

  return (
    <Column fillWidth paddingY="80" paddingX="s" horizontal="center" flex={1}>
      <ScrollToTop>
        <IconButton variant="secondary" icon="chevronUp" />
      </ScrollToTop>
      <Fade
        zIndex={3}
        pattern={{
          display: true,
          size: '2',
        }}
        position="fixed"
        top="0"
        left="0"
        to="bottom"
        height={5}
        fillWidth
        blur={0.25}
      />
      <Header />
      <Column
        overflow="hidden"
        as="main"
        maxWidth="l"
        position="relative"
        radius="xl"
        horizontal="center"
        border="neutral-alpha-weak"
        fillWidth
      >
        <Column
          fillWidth
          horizontal="center"
          gap="48"
          radius="xl"
          paddingTop="80"
          position="relative"
        >
          <Background
            mask={{
              x: 0,
              y: 48,
            }}
            position="absolute"
            grid={{
              display: true,
              width: '0.25rem',
              color: 'neutral-alpha-medium',
              height: '0.25rem',
            }}
          />
          <Background
            mask={{
              x: 80,
              y: 0,
              radius: 100,
            }}
            position="absolute"
            gradient={{
              display: true,
              tilt: -35,
              height: 50,
              width: 75,
              x: 100,
              y: 40,
              colorStart: 'accent-solid-medium',
              colorEnd: 'static-transparent',
            }}
          />
          <Background
            mask={{
              x: 100,
              y: 0,
              radius: 100,
            }}
            position="absolute"
          />
          <Hero />
          <Column
            fillWidth
            paddingX="12"
            gap="12"
            horizontal="center"
            position="relative"
          >
            <AttendanceForm
              name={name}
              setName={setName}
              lastName={lastName}
              setLastName={setLastName}
              asistQuantity={asistQuantity}
              setAsistQuantity={setAsistQuantity}
              onSelect={onSelect}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              addToast={addToast}
            />
            <Gallery />
          </Column>
        </Column>

        <EventInfo />
        <WeddingInfo />

        <Footer />
      </Column>
    </Column>
  )
}
