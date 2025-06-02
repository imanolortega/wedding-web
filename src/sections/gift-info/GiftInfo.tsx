import React, { forwardRef } from 'react'
import { Row, Background, Column,Heading, Text } from '@/once-ui/components'
import { BankData } from '../bank-data/BankData'

export interface GiftInfo {}

const GiftInfo = forwardRef<GiftInfo>((_, ref) => {
  return (
    <Column
      position="relative"
      textVariant="body-default-xs"
      onBackground="neutral-strong"
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
        direction="column"
        align="center"
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
            color: 'accent-alpha-strong',
            height: '0.25rem',
          }}
        />

        <Heading align="center" as="h2" variant="display-default-m" marginBottom='m'>
                   Tu presencia es el mejor regalo
                  </Heading>
        <Text variant="body-default-l" align="center" marginBottom='l'>
          Pero si nos quieres ayudar con nuestra luna de miel, te dejamos nuestros datos bancarios.
        </Text>
        <BankData />
      </Row>
    </Column>
  )
})

GiftInfo.displayName = 'GiftInfo'
export { GiftInfo }
