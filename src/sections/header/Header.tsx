import React, { forwardRef } from 'react'
import { Row, Logo, Button } from '@/once-ui/components'
import { desktopLinks, mobileLinks } from '@/app/resources/config'

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
          {desktopLinks.map(({ href, label }) => (
            <Button
              key={href}
              href={href}
              size="s"
              label={label}
              weight="default"
              variant="tertiary"
            />
          ))}
        </Row>

        <Row gap="12" show="s" horizontal="end">
          {mobileLinks.map(({ href, label }) => (
            <Button
              key={href}
              href={href}
              size="m"
              label={label}
              weight="default"
              variant="tertiary"
            />
          ))}
        </Row>
      </Row>
    </Row>
  )
})

Header.displayName = 'Header'
export { Header }
