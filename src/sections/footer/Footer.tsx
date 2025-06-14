import React, { forwardRef } from 'react'

import { Background, Column, Logo, Row, SmartLink, Text } from '@/once-ui/components'

export interface Footer {}
const Footer = forwardRef<Footer>((_, ref) => {
  return (
    <Row position="relative" as="footer" fillWidth paddingX="l" paddingTop="40" paddingBottom="80">
      <Background
        //borderTop="brand-alpha-strong"
        mask={{
          x: 50,
          y: 0,
        }}
        position="absolute"
        grid={{
          display: true,
          width: '0.25rem',
          color: 'accent-alpha-strong',
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
        <Text size="m">
          <Text onBackground="neutral-weak">2025 /</Text> Web por{' '}
          <SmartLink href="https://imanolortega.dev/">IOC</SmartLink>
        </Text>
      </Column>
    </Row>
  )
})

Footer.displayName = 'Footer'
export { Footer }
