'use client'

import type React from 'react'
import { useState } from 'react'

import {
  Background,
  Card,
  Carousel,
  Column,
  Fade,
  Heading,
  IconButton,
  Logo,
  Row,
  SmartLink,
  Text,
  TiltFx,
  useToast,
} from '@/once-ui/components'
import { ScrollToTop } from '@/once-ui/components/ScrollToTop'

import { AttendanceForm, Gallery, Header, Hero, Map } from '@/sections'

export default function Home() {
  const { addToast } = useToast()
  const [asistQuantity, setAsistQuantity] = useState(0)
  const [lastName, setLastName] = useState('')
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onSelect = (value: string) => {
    setAsistQuantity(parseInt(value))
  }

  const event = [
    {
      id: 1,
      title: 'Salón',
      description: 'Abba Huasi',
    },
    {
      id: 2,
      title: 'Fecha',
      description: '6/9/2025',
    },
    {
      id: 3,
      title: 'Ubicación',
      description: 'Yanda, Santiago del Estero',
    },
  ]

  const wedding = [
    {
      id: '1',
      title: 'Lugar',
      description: 'Parroquia San Juan Diego',
    },
    {
      id: '2',
      title: 'Hora',
      description: '18:30',
    },
    {
      id: '3',
      title: 'Fecha',
      description: '6/9/2025',
    },
    {
      id: '4',
      title: 'Ubicación',
      description:
        'Av. San Patricio, entre Guevara y Yunes. Barrio San Germés.',
    },
  ]

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
                <Row
                  position="relative"
                  textVariant="display-default-m"
                  align="center"
                >
                  It's wedding time!
                </Row>
              </Row>

              <Gallery />
            </Column>
          </Column>
        </Column>

        {/* CODE PREVIEW */}
        <TiltFx fillWidth paddingX="32" paddingTop="64">
          <Column
            border="neutral-alpha-weak"
            paddingX="32"
            radius="xl"
            overflow="hidden"
            paddingY="80"
            fillWidth
            position="relative"
          >
            <Background
              mask={{
                x: 100,
                y: 0,
              }}
              position="absolute"
              grid={{
                display: true,
                color: 'neutral-alpha-medium',
                width: '2rem',
                height: '2rem',
              }}
            />
            <Background
              mask={{
                x: 0,
                y: 100,
                radius: 100,
              }}
              position="absolute"
              grid={{
                display: true,
                color: 'brand-alpha-strong',
                width: '12',
                height: '12',
              }}
              gradient={{
                display: true,
                opacity: 100,
                height: 100,
                width: 100,
                tilt: 0,
                x: 0,
                y: 100,
                colorStart: 'accent-solid-medium',
                colorEnd: 'static-transparent',
              }}
            />
            <Column horizontal="center" gap="48" fillWidth position="relative">
              <Heading align="center" as="h2" variant="display-default-l">
                Evento
              </Heading>
              <Row fillWidth overflow="hidden">
                <Row
                  maxWidth="32"
                  borderTop="neutral-alpha-weak"
                  borderBottom="neutral-medium"
                />
                <Row
                  fillWidth
                  border="neutral-alpha-weak"
                  mobileDirection="column"
                >
                  {event.map((item, index) => (
                    <Card
                      key={item.id}
                      fillWidth
                      padding="40"
                      gap="8"
                      background="page"
                      direction="column"
                      borderRight={
                        index < event.length - 1 || index === 2
                          ? 'neutral-alpha-weak'
                          : undefined
                      }
                    >
                      <Row fillWidth center gap="12">
                        <Text
                          variant="body-strong-m"
                          onBackground="neutral-strong"
                        >
                          {item.title}
                        </Text>
                      </Row>
                      <Text
                        align="center"
                        variant="body-default-s"
                        onBackground="neutral-weak"
                      >
                        {item.description}
                      </Text>
                    </Card>
                  ))}
                </Row>
                <Row
                  maxWidth="32"
                  borderTop="neutral-alpha-weak"
                  borderBottom="neutral-medium"
                />
              </Row>
              <Row
                position="relative"
                fillWidth
                paddingX="l"
                paddingTop="48"
                paddingBottom="48"
              >
                <Background
                  borderTop="brand-alpha-strong"
                  mask={{
                    x: 50,
                    y: 0,
                  }}
                  position="absolute"
                  grid={{
                    display: true,
                    width: '0.25rem',
                    color: 'brand-alpha-strong',
                    height: '0.25rem',
                  }}
                />
                <Column
                  position="relative"
                  textVariant="body-default-xs"
                  onBackground="neutral-medium"
                  horizontal="center"
                  align="center"
                  fillWidth
                  gap="16"
                >
                  <Map lat={-27.88573263581688} lng={-64.24876587235832} />
                </Column>
              </Row>
            </Column>
          </Column>
        </TiltFx>

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
              color: 'brand-alpha-strong',
              height: '0.25rem',
            }}
          />
          <Row
            position="relative"
            textVariant="display-default-m"
            align="center"
          >
            Misa
          </Row>
        </Row>
        <Row fillWidth overflow="hidden">
          <Row
            maxWidth="32"
            borderTop="neutral-alpha-weak"
            borderBottom="neutral-medium"
          />
          <Row fillWidth border="neutral-alpha-weak" mobileDirection="column">
            {wedding.map((item, index) => (
              <Card
                key={item.id}
                fillWidth
                padding="40"
                gap="8"
                background="page"
                direction="column"
                borderRight={
                  index < wedding.length - 1 ? 'neutral-alpha-weak' : undefined
                }
                border={undefined}
              >
                <Row fillWidth center gap="12">
                  <Text variant="body-strong-m" onBackground="neutral-strong">
                    {item.title}
                  </Text>
                </Row>
                <Text
                  align="center"
                  variant="body-default-s"
                  onBackground="neutral-weak"
                >
                  {item.description}
                </Text>
              </Card>
            ))}
          </Row>
          <Row
            maxWidth="32"
            borderTop="neutral-alpha-weak"
            borderBottom="neutral-medium"
          />
        </Row>

        <Row position="relative" fillWidth paddingX="l" paddingTop="48">
          <Background
            borderTop="brand-alpha-strong"
            mask={{
              x: 50,
              y: 0,
            }}
            position="absolute"
            grid={{
              display: true,
              width: '0.25rem',
              color: 'brand-alpha-strong',
              height: '0.25rem',
            }}
          />
          <Column
            position="relative"
            textVariant="body-default-xs"
            onBackground="neutral-medium"
            horizontal="center"
            align="center"
            fillWidth
            gap="16"
          >
            <Map lat={-27.845984302516865} lng={-64.25517892752266} />
          </Column>
        </Row>
        <Row
          position="relative"
          as="footer"
          fillWidth
          paddingX="l"
          paddingTop="128"
          paddingBottom="80"
        >
          <Background
            borderTop="brand-alpha-strong"
            mask={{
              x: 50,
              y: 0,
            }}
            position="absolute"
            grid={{
              display: true,
              width: '0.25rem',
              color: 'brand-alpha-strong',
              height: '0.25rem',
            }}
          />
          <Column
            position="relative"
            textVariant="body-default-xs"
            onBackground="neutral-medium"
            horizontal="center"
            align="center"
            fillWidth
            gap="16"
          >
            <Logo wordmark={false} size="s" />
            <Text size="m">
              <Text onBackground="neutral-weak">2025 /</Text> Web por{' '}
              <SmartLink href="https://www.instagram.com/imanol.oc/">
                IOC
              </SmartLink>
            </Text>
          </Column>
        </Row>
      </Column>
    </Column>
  )
}
