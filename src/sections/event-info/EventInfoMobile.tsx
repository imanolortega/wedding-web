'use client'

import { event } from '@/app/resources/config'
import { Background, Card, Column, Row, Text } from '@/once-ui/components'
import React, { forwardRef } from 'react'

import { Map } from '@/sections'

export interface EventInfoMobile {}

const EventInfoMobile = forwardRef<EventInfoMobile>((_, ref) => {
  return (
    <>
      <Row
        id="eventInfo"
        hide="l"
        show="s"
        position="relative"
        fillWidth
        paddingX="32"
        paddingTop="160"
        paddingBottom="80"
        horizontal="center"
        vertical="end"
      >
        <Background
          mask={{ x: 50, y: 100 }}
          position="absolute"
          grid={{
            display: true,
            width: '0.25rem',
            color: 'brand-alpha-strong',
            height: '0.25rem',
          }}
        />
        <Row position="relative" textVariant="display-default-m" align="center">
          Evento
        </Row>
      </Row>

      <Row hide="l" show="s" fillWidth overflow="hidden">
        <Row maxWidth="32" borderTop="neutral-alpha-weak" borderBottom="neutral-medium" />
        <Row fillWidth border="neutral-alpha-weak" mobileDirection="column">
          {event.map((item, index) => (
            <Card
              key={item.id}
              fillWidth
              padding="40"
              gap="8"
              background="page"
              direction="column"
              borderRight={index < event.length - 1 ? 'neutral-alpha-weak' : undefined}
            >
              <Row fillWidth center gap="12">
                <Text variant="body-strong-m" onBackground="neutral-strong">
                  {item.title}
                </Text>
              </Row>
              <Text align="center" variant="body-default-s" onBackground="neutral-weak">
                {item.description}
              </Text>
            </Card>
          ))}
        </Row>
        <Row maxWidth="32" borderTop="neutral-alpha-weak" borderBottom="neutral-medium" />
      </Row>

      <Row hide="l" show="s" position="relative" fillWidth paddingX="l" paddingTop="48">
        <Background
          borderTop="brand-alpha-strong"
          mask={{ x: 50, y: 0 }}
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
    </>
  )
})

EventInfoMobile.displayName = 'EventInfoMobile'
export { EventInfoMobile }
