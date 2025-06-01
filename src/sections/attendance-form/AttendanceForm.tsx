'use client'

import React, { forwardRef, useEffect, useImperativeHandle } from 'react'
import {
  Row,
  Column,
  SmartImage,
  Background,
  Heading,
  Text,
  Line,
  Input,
  Select,
  Button,
  Checkbox,
} from '@/once-ui/components'

export interface AttendanceFormHandle {
  reset: () => void
}

interface AttendanceFormProps {
  name: string
  setName: (value: string) => void
  lastName: string
  setLastName: (value: string) => void
  asistQuantity: number
  setAsistQuantity: (value: number) => void
  onSelect: (value: string) => void
  isLoading: boolean
  setIsLoading: (value: boolean) => void
  addToast: (args: { variant: 'success' | 'danger'; message: string }) => void
  companionOne: string
  setCompanionOne: (value: string) => void
  companionTwo: string
  setCompanionTwo: (value: string) => void
  specialFood: string[]
  setSpecialFood: React.Dispatch<React.SetStateAction<string[]>>
}

const selectOptions = [
  { label: 'Voy Solo', value: '0', description: 'Asisto solo' },
  { label: 'Una persona', value: '1', description: 'Asisto con una persona' },
  { label: 'Dos personas', value: '2', description: 'Asisto con dos personas' },
]

const AttendanceForm = forwardRef<AttendanceFormHandle, AttendanceFormProps>(
  (
    {
      name,
      setName,
      lastName,
      setLastName,
      asistQuantity,
      setAsistQuantity,
      isLoading,
      setIsLoading,
      addToast,
      companionOne,
      setCompanionOne,
      companionTwo,
      setCompanionTwo,
      specialFood,
      setSpecialFood,
    },
    ref,
  ) => {
    useImperativeHandle(ref, () => ({
      reset: () => {
        setName('')
        setLastName('')
        setAsistQuantity(0)
        setCompanionOne('')
        setCompanionTwo('')
        setSpecialFood(['No'])
      },
    }))

    const handleOnClick = async () => {
      if (!name.trim() || !lastName.trim()) {
        addToast({
          variant: 'danger',
          message: 'Por favor completá tu nombre y apellido antes de enviar.',
        })
        return
      }

      if (asistQuantity > 1 && !companionOne.trim()) {
        addToast({
          variant: 'danger',
          message: 'Por favor, escribí el nombre del primer acompañante.',
        })
        return
      }

      if (asistQuantity > 2 && !companionTwo.trim()) {
        addToast({
          variant: 'danger',
          message: 'Por favor, escribí el nombre del segundo acompañante.',
        })
        return
      }

      const payload = {
        name,
        lastName,
        asistentQuantity: asistQuantity,
        companionOne: asistQuantity >= 1 ? companionOne : '',
        companionTwo: asistQuantity === 2 ? companionTwo : '',
        specialFood: specialFood.length > 0 ? specialFood : ['No'],
      }

      setIsLoading(true)
      try {
        const res = await fetch('/api/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })

        const result = await res.json()

        if (result.success) {
          addToast({
            variant: 'success',
            message:
              '¡Gracias por confirmar tu asistencia! Próximamente te vamos a enviar tu invitación.',
          })
          setName('')
          setLastName('')
          setAsistQuantity(0)
          setCompanionOne('')
          setCompanionTwo('')
          setSpecialFood(['No'])
        } else {
          throw new Error('No se pudo enviar')
        }
      } catch (err) {
        addToast({
          variant: 'danger',
          message: 'Error al enviar la confirmación. Intentá nuevamente.',
        })
      }
      setIsLoading(false)
    }

    const isChecked = (option: string) =>
      specialFood.length === 1 && specialFood[0] === 'No'
        ? option === 'No'
        : specialFood.includes(option)

    const toggleOption = (option: string, checked: boolean) => {
      setSpecialFood((prev) => {
        if (option === 'No') {
          return checked ? ['No'] : []
        }

        const withoutNo = prev.filter((v) => v !== 'No')
        let next = checked ? [...withoutNo, option] : withoutNo.filter((v) => v !== option)

        return next.length === 0 ? ['No'] : next
      })
    }

    useEffect(() => {
      console.log('👀 specialFood actualizado:', specialFood)
    }, [specialFood])

    return (
      <Row
        marginY="32"
        background="overlay"
        fillWidth
        radius="xl"
        border="neutral-alpha-weak"
        overflow="hidden"
      >
        <Row fill hide="m">
          <SmartImage src="/images/martin-lujan-theboda.jpg" alt="Preview image" sizes="560px" />
        </Row>
        <Column fillWidth horizontal="center" gap="20" padding="32" position="relative">
          <Background
            mask={{ x: 100, y: 0, radius: 75 }}
            position="absolute"
            grid={{
              display: true,
              opacity: 50,
              width: '0.5rem',
              color: 'neutral-alpha-medium',
              height: '1rem',
            }}
          />
          <Heading as="h3" variant="display-default-s" align="center">
            Confirmá tu presencia
          </Heading>
          <Text onBackground="neutral-medium" marginBottom="24">
            Agregá tus datos para confirmar tu asistencia.
          </Text>
          <Row fillWidth paddingY="24">
            <Row onBackground="neutral-weak" fillWidth gap="24" vertical="center">
              <Line />/<Line />
            </Row>
          </Row>
          <Column gap="-1" fillWidth>
            <Row fillWidth gap="-1">
              <Input
                id="nombre"
                label="Nombre"
                labelAsPlaceholder
                radius="top-left"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                id="apellido"
                label="Apellido"
                labelAsPlaceholder
                radius="top-right"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Row>

            <Select
              radius={asistQuantity === 0 ? 'bottom' : 'none'}
              id="select"
              label="¿Asistís con alguien?"
              options={selectOptions}
              value={asistQuantity.toString()}
              onSelect={(value) => {
                setAsistQuantity(Number(value))
                setCompanionOne('')
                setCompanionTwo('')
              }}
            />

            {asistQuantity >= 1 && (
              <Input
                id="companion-one"
                label="Nombre y apellido del acompañante"
                labelAsPlaceholder
                radius={asistQuantity === 1 ? 'bottom' : 'none'}
                value={companionOne}
                onChange={(e) => setCompanionOne(e.target.value)}
              />
            )}

            {asistQuantity === 2 && (
              <Input
                id="companion-two"
                label="Nombre y apellido del segundo acompañante"
                labelAsPlaceholder
                radius="bottom"
                value={companionTwo}
                onChange={(e) => setCompanionTwo(e.target.value)}
              />
            )}

            <Column align="center" fillWidth gap="1" paddingTop="m" paddingBottom="s">
              <Text variant="label-default-m">¿Tenés alguna necesidad alimentaria?</Text>
              <Row gap="s" paddingTop="m">
                <Checkbox
                  id="no"
                  label="No"
                  checked={isChecked('No')}
                  onChange={(e) => toggleOption('No', e.target.checked)}
                />
                <Checkbox
                  id="sin-tacc"
                  label="Sin TACC"
                  checked={isChecked('Sin TACC')}
                  onChange={(e) => toggleOption('Sin TACC', e.target.checked)}
                />
                <Checkbox
                  id="vegetariano"
                  label="Vegetariano"
                  checked={isChecked('Vegetariano')}
                  onChange={(e) => toggleOption('Vegetariano', e.target.checked)}
                />
                <Checkbox
                  id="vegano"
                  label="Vegano"
                  checked={isChecked('Vegano')}
                  onChange={(e) => toggleOption('Vegano', e.target.checked)}
                />
              </Row>
            </Column>
          </Column>

          <Button
            id="send"
            label="Enviar"
            arrowIcon
            fillWidth
            loading={isLoading}
            onClick={handleOnClick}
          />
        </Column>
      </Row>
    )
  },
)

AttendanceForm.displayName = 'AttendanceForm'
export { AttendanceForm }
