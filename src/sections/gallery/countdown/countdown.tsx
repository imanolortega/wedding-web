'use client'

import React, { useEffect, useState } from 'react'
import { Column, Row, Text } from '@/once-ui/components'

interface CountdownTimerProps {
  targetDate: Date
}

interface CountdownData {
  months: number
  days: number
  hours: number
  minutes: number
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<CountdownData>({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
  })

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date()
      const distance = targetDate.getTime() - now.getTime()

      if (distance <= 0) {
        setTimeLeft({ months: 0, days: 0, hours: 0, minutes: 0 })
        return
      }

      const totalDays = Math.floor(distance / (1000 * 60 * 60 * 24))

      if (totalDays > 30) {
        const months = Math.floor(totalDays / 30)
        const days = totalDays % 30
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

        setTimeLeft({ months, days, hours, minutes: 0 })
      } else {
        const days = totalDays
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))

        setTimeLeft({ months: 0, days, hours, minutes })
      }
    }

    const interval = setInterval(updateCountdown, 1000)
    updateCountdown()

    return () => clearInterval(interval)
  }, [targetDate])

  const pad = (num: number) => num.toString().padStart(2, '0')

  return (
    <Column horizontal="center" direction="row" paddingTop="s">
      {timeLeft.months > 0 ? (
        <Row gap="xs">
          <Column align="center">
            <Text variant="display-default-s">{pad(timeLeft.months)}</Text>
            <Text variant="body-default-m">Meses</Text>
          </Column>

          <Column align="center">
            <Text variant="display-default-s" align="center">
              :
            </Text>
          </Column>

          <Column align="center">
            <Text variant="display-default-s">{pad(timeLeft.days)}</Text>
            <Text variant="body-default-m">Días</Text>
          </Column>

          <Column align="center">
            <Text variant="display-default-s">:</Text>
          </Column>

          <Column align="center">
            <Text variant="display-default-s">{pad(timeLeft.hours)}</Text>
            <Text variant="body-default-m">Horas</Text>
          </Column>
        </Row>
      ) : (
        <Row gap="s">
          <Column align="center">
            <Text variant="display-default-s">{pad(timeLeft.days)}</Text>
            <Text variant="body-default-m">Días</Text>
          </Column>

          <Column align="center">
            <Text variant="display-default-s" align="center">
              :
            </Text>
          </Column>

          <Column align="center">
            <Text variant="display-default-s">{pad(timeLeft.hours)}</Text>
            <Text variant="body-default-m">Horas</Text>
          </Column>

          <Column align="center">
            <Text variant="display-default-s" align="center">
              :
            </Text>
          </Column>

          <Column align="center">
            <Text variant="display-default-s">{pad(timeLeft.minutes)}</Text>
            <Text variant="body-default-m">Minutos</Text>
          </Column>
        </Row>
      )}
    </Column>
  )
}
