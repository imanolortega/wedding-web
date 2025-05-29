'use client';

import React, { forwardRef, useImperativeHandle } from 'react';
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
} from '@/once-ui/components';

export interface AttendanceFormHandle {
  reset: () => void;
}

interface AttendanceFormProps {
  name: string;
  setName: (value: string) => void;
  lastName: string;
  setLastName: (value: string) => void;
  asistQuantity: number;
  setAsistQuantity: (value: number) => void;
  onSelect: (value: string) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  addToast: (args: { variant: 'success' | 'danger'; message: string }) => void;
}

const selectOptions = [
  { label: 'Voy Solo', value: '0', description: 'Asisto solo' },
  {
    label: 'Una persona',
    value: '1',
    description: 'Asisto con una persona',
  },
  {
    label: 'Dos personas',
    value: '2',
    description: 'Asisto con dos personas',
  },
];

const AttendanceForm = forwardRef<AttendanceFormHandle, AttendanceFormProps>(
  (
    {
      name,
      setName,
      lastName,
      setLastName,
      asistQuantity,
      setAsistQuantity,
      onSelect,
      isLoading,
      setIsLoading,
      addToast,
    },
    ref,
  ) => {
    useImperativeHandle(ref, () => ({
      reset: () => {
        setName('');
        setLastName('');
        setAsistQuantity(0);
      },
    }));

    const handleOnClick = async ({
      name,
      lastName,
      asistQuantity,
      setIsLoading,
      addToast,
      setName,
      setLastName,
      setAsistQuantity,
    }: {
      name: string;
      lastName: string;
      asistQuantity: number;
      setIsLoading: (value: boolean) => void;
      addToast: (args: {
        variant: 'success' | 'danger';
        message: string;
      }) => void;
      setName: (value: string) => void;
      setLastName: (value: string) => void;
      setAsistQuantity: (value: number) => void;
    }) => {
      if (!name.trim() || !lastName.trim()) {
        addToast({
          variant: 'danger',
          message: 'Por favor completá tu nombre y apellido antes de enviar.',
        });
        return;
      }

      setIsLoading(true);
      try {
        const res = await fetch('/api/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            lastName,
            asistentQuantity: asistQuantity,
          }),
        });

        const result = await res.json();

        if (result.success) {
          addToast({
            variant: 'success',
            message:
              '¡Gracias por confirmar tu asistencia! Próximamente te vamos a enviar tu invitación.',
          });
          setName('');
          setLastName('');
          setAsistQuantity(0);
        } else {
          throw new Error('No se pudo enviar');
        }
      } catch (err) {
        addToast({
          variant: 'danger',
          message: 'Error al enviar la confirmación. Intentá nuevamente.',
        });
      }
      setIsLoading(false);
    };

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
              radius="bottom"
              id="select"
              label="Asistes con alguien?"
              options={selectOptions}
              value={asistQuantity.toString()}
              onSelect={onSelect}
            />
          </Column>
          <Button
            id="send"
            label="Enviar"
            arrowIcon
            fillWidth
            loading={isLoading}
            onClick={() =>
              handleOnClick({
                name,
                lastName,
                asistQuantity,
                setIsLoading,
                addToast,
                setName,
                setLastName,
                setAsistQuantity,
              })
            }
          />
        </Column>
      </Row>
    );
  },
);

AttendanceForm.displayName = 'AttendanceForm';
export { AttendanceForm };
