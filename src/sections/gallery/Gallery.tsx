import React, { forwardRef } from 'react'
import { Row, Carousel, Background, Column, Text } from '@/once-ui/components'
export interface GalleryHandle {}

const Gallery = forwardRef<GalleryHandle>((_, ref) => {
  return (
    <Column
      position="relative"
      textVariant="body-default-xs"
      onBackground="neutral-medium"
      horizontal="center"
      align="center"
      fillWidth
      gap="-1"
    >
      <Row
        position="relative"
        fillWidth
        paddingX="32"
        paddingTop="160"
        paddingBottom="80"
        horizontal="center"
        vertical="end"
      >
        <Background
          mask={{
            x: 50,
            y: 100,
          }}
          position="absolute"
          grid={{
            display: true,
            width: '0.25rem',
            color: 'neutral-alpha-medium',
            height: '0.25rem',
          }}
        />
        <Row position="relative" align="center" onBackground="neutral-strong">
          <Text as="h3" align="center" variant="display-default-l" paddingBottom="l">
            It's wedding time!
          </Text>
        </Row>
      </Row>
      <Row position="relative" fillWidth paddingX="xl">
        <Carousel
          aspectRatio="16 / 9"
          indicator="thumbnail"
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
            {
              alt: 'Martín y Luján imagen 4',
              src: '/images/martin-lujan-slider-five.jpg',
            },
            {
              alt: 'Martín y Luján imagen 5',
              src: '/images/martin-lujan-slider-six.jpg',
            },
          ]}
        />
      </Row>
    </Column>
  )
})

Gallery.displayName = 'Gallery'
export { Gallery }
