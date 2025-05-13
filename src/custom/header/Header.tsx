'use client'

import { Row, Logo, Button, IconButton } from '@/once-ui/components'

export default function Header() {
  return (
    <Row position="fixed" top="0" fillWidth horizontal="center" zIndex={3}>
      <Row
        data-border="rounded"
        horizontal="space-between"
        maxWidth="l"
        paddingRight="64"
        paddingLeft="32"
        paddingY="20"
      >
        <Logo
          icon={false}
          href="/"
          size="m"
          wordmarkSrc={'/images/ml-logo.png'}
        />
        <Row gap="12" hide="s">
          <Button
            href="https://wa.me/5493853122118"
            prefixIcon="email"
            size="s"
            label="Martín"
            weight="default"
            variant="tertiary"
          />
          <Button
            href="https://wa.me/5493853122118"
            prefixIcon="email"
            size="s"
            label="Luján"
            weight="default"
            variant="tertiary"
          />
        </Row>
        <Row gap="16" show="s" horizontal="center" paddingRight="24">
          <IconButton
            href="https://discord.com/invite/5EyAQ4eNdS"
            icon="email"
            variant="tertiary"
          />
          <IconButton
            href="https://github.com/once-ui-system/nextjs-starter"
            icon="email"
            variant="tertiary"
          />
        </Row>
      </Row>
    </Row>
  )
}
