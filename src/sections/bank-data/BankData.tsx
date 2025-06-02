'use client'

import React from 'react'
import { useCallback } from 'react'
import { Column, Row, Text, useToast, Card, Background } from '@/once-ui/components'

interface BankFieldProps {
  label: string
  value: string
}

const BankField: React.FC<BankFieldProps> = ({ label, value }) => {
  const { addToast } = useToast()

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value)
      addToast({ variant: 'success', message: `${label} copiado` })
    } catch {
      addToast({ variant: 'danger', message: 'No se pudo copiar' })
    }
  }, [value, label, addToast])

  return (
    <Card
      id="data"
      as="div"
      paddingY="24"
      paddingX="56"
      fillWidth
      gap="s"
      background="overlay"
      radius="l"
      onClick={handleCopy}
      role="button"
      tabIndex={0}
      aria-label={`Copiar ${label}`}
    >
      <Row vertical="center">
        <Column gap="2">
          <Text variant="label-default-m" onBackground="neutral-medium">
            {label}
          </Text>
          <Text variant="body-strong-m" onBackground="neutral-strong">
            {value}
          </Text>
        </Column>
      </Row>
    </Card>
  )
}

const BankData: React.FC = () => {
  return (
    <Column
      as="section"
      gap="24"
      paddingX="32"
      paddingY="64"
      position="relative"
      horizontal="center"
    >
      <Background
        mask={{ x: 0, y: 100, radius: 100 }}
        position="absolute"
        grid={{ display: true, width: '1rem', height: '1rem', color: 'brand-alpha-weak' }}
      />

      <Column gap="s">
        <BankField label="Alias" value="BodaM-L" />
        <BankField label="CBU" value="4530000800012954523948" />
        <BankField label="Titular" value="Martín Alejandro Sequeira" />
      </Column>
    </Column>
  )
}

BankData.displayName = 'BankData'
export { BankData }
