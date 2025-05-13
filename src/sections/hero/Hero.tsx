'use client'

import React, { forwardRef } from 'react'
import { Column, InlineCode, Text, SmartImage } from '@/once-ui/components'

export interface HeroHandle {}

const Hero = forwardRef<HeroHandle>((_, ref) => {
  return (
    <Column
      fillWidth
      horizontal="center"
      gap="32"
      padding="32"
      position="relative"
    >
      <InlineCode radius="xl" shadow="m" fit paddingX="16" paddingY="8">
        <Text onSolid="brand-medium">
          Somos Martín y Luján, acompañanos en este proceso
        </Text>
      </InlineCode>

      <Column maxWidth={32}>
        <SmartImage
          alt="ML The Boda"
          aspectRatio="16/9"
          isLoading={false}
          objectFit="cover"
          radius="l"
          src="/images/ml-the-boda.png"
          maxWidth={300}
        />
      </Column>
    </Column>
  )
})

Hero.displayName = 'Hero'
export { Hero }
