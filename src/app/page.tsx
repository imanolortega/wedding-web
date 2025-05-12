"use client";

import type React from "react";
import { useState } from "react";

import {
  Background,
  Button,
  Card,
  Column,
  Fade,
  Heading,
  IconButton,
  InlineCode,
  Input,
  Line,
  Logo,
  Row,
  Select,
  SmartImage,
  Text,
  ThemeSwitcher,
  TiltFx,
  useToast,
} from "@/once-ui/components";
import { ScrollToTop } from "@/once-ui/components/ScrollToTop";

export default function Home() {
  const { addToast } = useToast();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [asistQuantity, setAsistQuantity] = useState(0);

  const onSelect = (value: string) => {
    setAsistQuantity(parseInt(value));
  };

  const links = [
    {
      href: "https://once-ui.com/docs/theming",
      title: "Themes",
      description: "Style your app in minutes",
    },
    {
      href: "https://once-ui.com/docs/flexComponent",
      title: "Layout",
      description: "Build responsive layouts",
    },
    {
      href: "https://once-ui.com/docs/typography",
      title: "Typography",
      description: "Scale text automatically",
    },
  ];

  const event = [
    {
      id: 1,
      title: "Salón",
      description: "Abba Huasi",
    },
    {
      id: 2,
      title: "Fecha",
      description: "6/9/2025",
    },
    {
      id: 3,
      title: "Ubicación",
      description: "Dirección",
    },
  ];

  const wedding = [
    {
      id: "1",
      title: "Salón",
      description: "Abba Huasi",
    },
    {
      id: "2",
      title: "Fecha",
      description: "6/9/2025",
    },
    {
      id: "3",
      title: "Ubicación",
      description: "Dirección",
    },
  ];

  return (
    <Column fillWidth paddingY="80" paddingX="s" horizontal="center" flex={1}>
      <ScrollToTop>
        <IconButton variant="secondary" icon="chevronUp" />
      </ScrollToTop>
      <Fade
        zIndex={3}
        pattern={{
          display: true,
          size: "2",
        }}
        position="fixed"
        top="0"
        left="0"
        to="bottom"
        height={5}
        fillWidth
        blur={0.25}
      />
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
            href="https://once-ui.com"
            size="m"
            wordmarkSrc={'/images/ml-logo.png'}
          />
          <Row gap="12" hide="s">
            <Button
              href="https://wa.me/5493853122118"
              suffixIcon="HiOutlineEnvelope"
              size="s"
              label="Martín"
              weight="default"
              variant="tertiary"
            />
            <Button
              href="https://wa.me/5493853122118"
              prefixIcon="HiOutlineEnvelope"
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
      <Column
        overflow="hidden"
        as="main"
        maxWidth="l"
        position="relative"
        radius="xl"
        horizontal="center"
        border="neutral-alpha-weak"
        fillWidth
      >
        <Column
          fillWidth
          horizontal="center"
          gap="48"
          radius="xl"
          paddingTop="80"
          position="relative"
        >
          <Background
            mask={{
              x: 0,
              y: 48,
            }}
            position="absolute"
            grid={{
              display: true,
              width: "0.25rem",
              color: "neutral-alpha-medium",
              height: "0.25rem",
            }}
          />
          <Background
            mask={{
              x: 80,
              y: 0,
              radius: 100,
            }}
            position="absolute"
            gradient={{
              display: true,
              tilt: -35,
              height: 50,
              width: 75,
              x: 100,
              y: 40,
              colorStart: "accent-solid-medium",
              colorEnd: "static-transparent",
            }}
          />
          <Background
            mask={{
              x: 100,
              y: 0,
              radius: 100,
            }}
            position="absolute"
          />
          <Column
            fillWidth
            horizontal="center"
            gap="32"
            padding="32"
            position="relative"
          >
            <InlineCode radius="xl" shadow="m" fit paddingX="16" paddingY="8">
              <Text onSolid="brand-medium">
                Somos Martín y Luján, acompañanos en este proceso
              </Text>
            </InlineCode>

            <Column maxWidth={32}>
              <SmartImage
                alt="ML The Boda"
                aspectRatio="16/9"
                isLoading={false}
                objectFit="cover"
                radius="l"
                src="/images/ml-the-boda.png"
                maxWidth={300}
              />
            </Column>
          </Column>
          <Column
            fillWidth
            paddingX="12"
            gap="12"
            horizontal="center"
            position="relative"
          >
            <Row
              marginY="32"
              background="overlay"
              fillWidth
              radius="xl"
              border="neutral-alpha-weak"
              overflow="hidden"
            >
              <Row fill hide="m">
                <SmartImage
                  src="/images/martin-lujan-theboda.jpg"
                  alt="Preview image"
                  sizes="560px"
                />
              </Row>
              <Column
                fillWidth
                horizontal="center"
                gap="20"
                padding="32"
                position="relative"
              >
                <Background
                  mask={{
                    x: 100,
                    y: 0,
                    radius: 75,
                  }}
                  position="absolute"
                  grid={{
                    display: true,
                    opacity: 50,
                    width: "0.5rem",
                    color: "neutral-alpha-medium",
                    height: "1rem",
                  }}
                />
                <Heading as="h3" variant="display-default-s" align="center">
                  Confirmá tu presencia
                </Heading>
                <Text onBackground="neutral-medium" marginBottom="24">
                  Agregá tus datos para confirmar tu asistencia.
                </Text>
                <Row fillWidth paddingY="24">
                  <Row
                    onBackground="neutral-weak"
                    fillWidth
                    gap="24"
                    vertical="center"
                  >
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
                    options={[
                      {
                        description: "Asisto solo",
                        label: "Solo",
                        value: "0",
                      },
                      {
                        description: "Asisto con una persona",
                        label: "Una persona",
                        value: "1",
                      },
                      {
                        description: "Asisto con dos personas",
                        label: "Dos personas",
                        value: "2",
                      },
                    ]}
                    value={asistQuantity.toString()}
                    onSelect={onSelect}
                  />
                </Column>
                <Button
                  id="send"
                  label="Enviar"
                  arrowIcon
                  fillWidth
                  onClick={async () => {
                    try {
                      const res = await fetch("/api/submit", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          name,
                          lastName,
                          asistentQuantity: asistQuantity,
                        }),
                      });

                      const result = await res.json();

                      if (result.success) {
                        addToast({
                          variant: "success",
                          message:
                            "¡Gracias por confirmar tu asistencia! Próximamente te vamos a enviar tu invitación.",
                        });
                        setName("");
                        setLastName("");
                        setAsistQuantity(0);
                      } else {
                        throw new Error("No se pudo enviar");
                      }
                    } catch (err) {
                      addToast({
                        variant: "danger",
                        message:
                          "Error al enviar la confirmación. Intentá nuevamente.",
                      });
                    }
                  }}
                />
              </Column>
            </Row>
          </Column>
        </Column>

        {/* CODE PREVIEW */}
        <TiltFx fillWidth paddingX="32" paddingTop="64">
          <Column
            border="neutral-alpha-weak"
            paddingX="32"
            radius="xl"
            overflow="hidden"
            paddingY="160"
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
                color: "neutral-alpha-medium",
                width: "2rem",
                height: "2rem",
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
                color: "brand-alpha-strong",
                width: "12",
                height: "12",
              }}
              gradient={{
                display: true,
                opacity: 100,
                height: 100,
                width: 100,
                tilt: 0,
                x: 0,
                y: 100,
                colorStart: "accent-solid-medium",
                colorEnd: "static-transparent",
              }}
            />
            <Column horizontal="center" gap="48" fillWidth position="relative">
              <Heading align="center" as="h2" variant="display-default-l">
                Evento
              </Heading>
              <Row fillWidth overflow="hidden">
                <Row
                  maxWidth="32"
                  borderTop="neutral-alpha-weak"
                  borderBottom="neutral-medium"
                />
                <Row
                  fillWidth
                  border="neutral-alpha-weak"
                  mobileDirection="column"
                >
                  {event.map((event, index) => (
                    <Card
                      key={event.id}
                      fillWidth
                      padding="40"
                      gap="8"
                      background="page"
                      direction="column"
                      borderRight={
                        index < links.length - 1
                          ? "neutral-alpha-weak"
                          : undefined
                      }
                      border={undefined}
                    >
                      <Row fillWidth center gap="12">
                        <Text
                          variant="body-strong-m"
                          onBackground="neutral-strong"
                        >
                          {event.title}
                        </Text>
                      </Row>
                      <Text
                        align="center"
                        variant="body-default-s"
                        onBackground="neutral-weak"
                      >
                        {event.description}
                      </Text>
                    </Card>
                  ))}
                </Row>
                <Row
                  maxWidth="32"
                  borderTop="neutral-alpha-weak"
                  borderBottom="neutral-medium"
                />
              </Row>
            </Column>
          </Column>
        </TiltFx>

        <Row
          position="relative"
          fillWidth
          paddingX="32"
          paddingTop="160"
          paddingBottom="80"
          horizontal="center"
          vertical="end"
        >
          <Background
            mask={{
              x: 50,
              y: 100,
            }}
            position="absolute"
            grid={{
              display: true,
              width: "0.25rem",
              color: "brand-alpha-strong",
              height: "0.25rem",
            }}
          />
          <Row
            position="relative"
            textVariant="display-default-m"
            align="center"
          >
            Misa
          </Row>
        </Row>
        <Row fillWidth overflow="hidden">
          <Row
            maxWidth="32"
            borderTop="neutral-alpha-weak"
            borderBottom="neutral-medium"
          />
          <Row fillWidth border="neutral-alpha-weak" mobileDirection="column">
            {wedding.map((link, index) => (
              <Card
                key={link.id}
                fillWidth
                padding="40"
                gap="8"
                background="page"
                direction="column"
                borderRight={
                  index < links.length - 1 ? "neutral-alpha-weak" : undefined
                }
                border={undefined}
              >
                <Row fillWidth center gap="12">
                  <Text variant="body-strong-m" onBackground="neutral-strong">
                    {link.title}
                  </Text>
                </Row>
                <Text
                  align="center"
                  variant="body-default-s"
                  onBackground="neutral-weak"
                >
                  {link.description}
                </Text>
              </Card>
            ))}
          </Row>
          <Row
            maxWidth="32"
            borderTop="neutral-alpha-weak"
            borderBottom="neutral-medium"
          />
        </Row>
        <Row
          position="relative"
          as="footer"
          fillWidth
          paddingX="l"
          paddingTop="128"
          paddingBottom="80"
        >
          <Background
            borderTop="brand-alpha-strong"
            mask={{
              x: 50,
              y: 0,
            }}
            position="absolute"
            grid={{
              display: true,
              width: "0.25rem",
              color: "brand-alpha-strong",
              height: "0.25rem",
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
            <ThemeSwitcher marginTop="24" />
          </Column>
        </Row>
      </Column>
    </Column>
  );
}
