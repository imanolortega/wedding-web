import React, { forwardRef } from 'react'
import { Row, Logo, Button, IconButton } from '@/once-ui/components'

export interface HeaderHandle {}

const Header = forwardRef<HeaderHandle>((_, ref) => {
  return (
    <Row position="fixed" top="0" fillWidth horizontal="center" zIndex={3}>
      <Row
        data-border="rounded"
        horizontal="space-between"
        maxWidth="l"
        paddingRight="24"
        paddingLeft="24"
        paddingY="20"
      >
        <Logo icon={false} href="/" size="m" wordmarkSrc={'/images/ml-logo.png'} />
        <Row gap="12" hide="s">
          <Button href="#form" size="s" label="Invitación" weight="default" variant="tertiary" />
          <Button href="#wedding" size="s" label="Misa" weight="default" variant="tertiary" />
          <Button href="#event" size="s" label="Evento" weight="default" variant="tertiary" />
          <Button href="#data" size="s" label="Datos" weight="default" variant="tertiary" />
        </Row>
        <Row gap="12" show="s" horizontal="end">
          <Button href="#wedding" size="m" label="Misa" weight="default" variant="tertiary" />
          <Button href="#event" size="m" label="Evento" weight="default" variant="tertiary" />
        </Row>
      </Row>
    </Row>
  )
})

Header.displayName = 'Header'
export { Header }
