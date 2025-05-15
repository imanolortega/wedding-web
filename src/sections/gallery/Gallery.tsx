'use client'

import React, { forwardRef } from 'react'
import { Row, Carousel } from '@/once-ui/components'

export interface GalleryHandle {}

const Gallery = forwardRef<GalleryHandle>((_, ref) => {
  return (
    <Row position="relative" fillWidth paddingX="xl">
      <Carousel
        aspectRatio="16 / 9"
        indicator="line"
        images={[
          {
            alt: 'Martín y Luján imagen 1',
            src: '/images/martin-lujan-slider-one.jpeg',
          },
          {
            alt: 'Martín y Luján imagen 2',
            src: '/images/martin-lujan-slider-two.jpg',
          },
          {
            alt: 'Martín y Luján imagen 3',
            src: '/images/martin-lujan-slider-three.jpg',
          },
        ]}
      />
    </Row>
  )
})

Gallery.displayName = 'Gallery'
export { Gallery }
