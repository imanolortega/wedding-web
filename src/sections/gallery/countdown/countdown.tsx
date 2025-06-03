'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Column, Row, Text } from '@/once-ui/components'
import { LetterFx } from '@/once-ui/components/LetterFx'
import { useInView } from 'react-intersection-observer'

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

  const triggerFnsRef = useRef<(() => void)[]>([])
  const { ref, inView } = useInView({ triggerOnce: true })

  const collectTriggerFn = (fn: () => void) => {
    triggerFnsRef.current.push(fn)
  }

  useEffect(() => {
    if (inView && triggerFnsRef.current.length > 0) {
      triggerFnsRef.current.forEach((fn) => fn())
      triggerFnsRef.current = []
    }
  }, [inView])

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
    <Column ref={ref} horizontal="center" direction="row" paddingTop="s">
      {timeLeft.months > 0 ? (
        <Row gap="xs">
          <Column align="center">
            <Text variant="display-default-s">
              <LetterFx trigger="custom" speed="medium" type="numbers" onTrigger={collectTriggerFn}>
                {pad(timeLeft.months)}
              </LetterFx>
            </Text>
            <Text variant="body-default-m">Meses</Text>
          </Column>
          <Column align="center">
            <Text variant="display-default-s">:</Text>
            <Text variant="body-default-m" style={{ visibility: 'hidden' }}>
              :
            </Text>
          </Column>
          <Column align="center">
            <Text variant="display-default-s">
              <LetterFx trigger="custom" speed="medium" type="numbers" onTrigger={collectTriggerFn}>
                {pad(timeLeft.days)}
              </LetterFx>
            </Text>
            <Text variant="body-default-m">Días</Text>
          </Column>
          <Column align="center">
            <Text variant="display-default-s">:</Text>
            <Text variant="body-default-m" style={{ visibility: 'hidden' }}>
              :
            </Text>
          </Column>
          <Column align="center">
            <Text variant="display-default-s">
              <LetterFx trigger="custom" speed="medium" type="numbers" onTrigger={collectTriggerFn}>
                {pad(timeLeft.hours)}
              </LetterFx>
            </Text>
            <Text variant="body-default-m">Horas</Text>
          </Column>
        </Row>
      ) : (
        <Row gap="xs">
          <Column align="center">
            <Text variant="display-default-s">
              <LetterFx trigger="custom" speed="medium" type="numbers" onTrigger={collectTriggerFn}>
                {pad(timeLeft.days)}
              </LetterFx>
            </Text>
            <Text variant="body-default-m">Días</Text>
          </Column>
          <Column align="center">
            <Text variant="display-default-s">:</Text>
            <Text variant="body-default-m" style={{ visibility: 'hidden' }}>
              :
            </Text>
          </Column>
          <Column align="center">
            <Text variant="display-default-s">
              <LetterFx trigger="custom" speed="medium" type="numbers" onTrigger={collectTriggerFn}>
                {pad(timeLeft.hours)}
              </LetterFx>
            </Text>
            <Text variant="body-default-m">Horas</Text>
          </Column>
          <Column align="center">
            <Text variant="display-default-s">:</Text>
            <Text variant="body-default-m" style={{ visibility: 'hidden' }}>
              :
            </Text>
          </Column>
          <Column align="center">
            <Text variant="display-default-s">
              <LetterFx trigger="custom" speed="medium" type="numbers" onTrigger={collectTriggerFn}>
                {pad(timeLeft.minutes)}
              </LetterFx>
            </Text>
            <Text variant="body-default-m">Minutos</Text>
          </Column>
        </Row>
      )}
    </Column>
  )
}
