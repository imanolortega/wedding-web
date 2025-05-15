'use client'

import { wedding } from '@/app/resources/config'
import { Background, Card, Row, Text } from '@/once-ui/components'
import React, { forwardRef } from 'react'

export interface WeddingInfo {}

const WeddingInfo = forwardRef<WeddingInfo>((_, ref) => {
  return (
    <>
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
        <Row position="relative" textVariant="display-default-m" align="center">
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
    </>
  )
})
WeddingInfo.displayName = 'WeddingInfo'
export { WeddingInfo }
