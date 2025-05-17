import React, { forwardRef } from 'react';
import { event } from '@/app/resources/config';

import { Background, Card, Column, Heading, Row, Text, TiltFx } from '@/once-ui/components';

import { Map } from '@/sections';

export interface EventInfo {}

const EventInfo = forwardRef<EventInfo>((_, ref) => {
  return (
    <TiltFx fillWidth paddingX="32" paddingTop="64">
      <Column
        border="neutral-alpha-weak"
        paddingX="32"
        radius="xl"
        overflow="hidden"
        paddingY="80"
        fillWidth
        position="relative"
      >
        <Background
          mask={{
            x: 100,
            y: 0,
          }}
          position="absolute"
          grid={{
            display: true,
            color: 'neutral-alpha-medium',
            width: '2rem',
            height: '2rem',
          }}
        />
        <Background
          mask={{
            x: 0,
            y: 100,
            radius: 100,
          }}
          position="absolute"
          grid={{
            display: true,
            color: 'brand-alpha-strong',
            width: '12',
            height: '12',
          }}
          gradient={{
            display: true,
            opacity: 100,
            height: 100,
            width: 100,
            tilt: 0,
            x: 0,
            y: 100,
            colorStart: 'accent-solid-medium',
            colorEnd: 'static-transparent',
          }}
        />
        <Column horizontal="center" gap="48" fillWidth position="relative">
          <Heading align="center" as="h2" variant="display-default-l">
            Evento
          </Heading>
          <Row fillWidth overflow="hidden">
            <Row maxWidth="32" borderTop="neutral-alpha-weak" borderBottom="neutral-medium" />
            <Row fillWidth border="neutral-alpha-weak" mobileDirection="column">
              {event.map((item, index) => (
                <Card
                  key={item.id}
                  fillWidth
                  padding="40"
                  gap="8"
                  background="page"
                  direction="column"
                  borderRight={
                    index < event.length - 1 || index === 2 ? 'neutral-alpha-weak' : undefined
                  }
                >
                  <Row fillWidth center gap="12">
                    <Text variant="body-strong-m" onBackground="neutral-strong">
                      {item.title}
                    </Text>
                  </Row>
                  <Text align="center" variant="body-default-s" onBackground="neutral-weak">
                    {item.description}
                  </Text>
                </Card>
              ))}
            </Row>
            <Row maxWidth="32" borderTop="neutral-alpha-weak" borderBottom="neutral-medium" />
          </Row>
          <Row position="relative" fillWidth paddingX="l" paddingTop="48" paddingBottom="48">
            <Background
              borderTop="brand-alpha-strong"
              mask={{
                x: 50,
                y: 0,
              }}
              position="absolute"
              grid={{
                display: true,
                width: '0.25rem',
                color: 'brand-alpha-strong',
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
              <Map lat={-27.88573263581688} lng={-64.24876587235832} />
            </Column>
          </Row>
        </Column>
      </Column>
    </TiltFx>
  );
});

EventInfo.displayName = 'EventInfo';
export { EventInfo };
