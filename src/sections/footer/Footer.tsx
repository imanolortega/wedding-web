import React, { forwardRef } from 'react';

import { Background, Column, Logo, Row, SmartLink, Text } from '@/once-ui/components';

export interface Footer {}
const Footer = forwardRef<Footer>((_, ref) => {
  return (
    <Row position="relative" as="footer" fillWidth paddingX="l" paddingTop="128" paddingBottom="80">
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
        <Logo wordmark={false} size="s" />
        <Text size="m">
          <Text onBackground="neutral-weak">2025 /</Text> Web por{' '}
          <SmartLink href="https://www.instagram.com/imanol.oc/">IOC</SmartLink>
        </Text>
      </Column>
    </Row>
  );
});

Footer.displayName = 'Footer';
export { Footer };
