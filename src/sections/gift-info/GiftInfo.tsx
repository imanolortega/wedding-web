import React, { forwardRef } from 'react'
import { Row, Background, Column, Text } from '@/once-ui/components'
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
        <Text as="h3" align="center" variant="display-default-m" paddingBottom="l">
          Tu presencia es el mejor regalo
        </Text>
        <Text variant="body-default-l" align="center">
          Pero si nos quieres ayudar con nuestra luna de miel, te dejamos nuestros datos bancarios.
        </Text>
        <BankData />
      </Row>
    </Column>
  )
})

GiftInfo.displayName = 'GiftInfo'
export { GiftInfo }
