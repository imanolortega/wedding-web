import '@/once-ui/styles/index.scss'
import '@/once-ui/tokens/index.scss'

import classNames from 'classnames'

import { baseURL, style, meta, font, effects } from '@/app/resources/config'
import { Background, Column, Flex, ToastProvider, ThemeProvider } from '@/once-ui/components'

import { opacity, SpacingToken } from '@/once-ui/types'
import { Meta, Schema } from '@/once-ui/modules'

export async function generateMetadata() {
  return Meta.generate({
    title: meta.home.title,
    description: meta.home.description,
    baseURL: baseURL,
    path: meta.home.path,
    canonical: meta.home.canonical,
    image: meta.home.image,
    robots: meta.home.robots,
    alternates: meta.home.alternates,
  })
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Flex
      suppressHydrationWarning
      as="html"
      lang="en"
      fillHeight
      background="page"
      data-neutral={style.neutral}
      data-brand={style.brand}
      data-accent={style.accent}
      data-border={style.border}
      data-solid={style.solid}
      data-solid-style={style.solidStyle}
      data-surface={style.surface}
      data-transition={style.transition}
      data-scaling={style.scaling}
      className={classNames(
        font.primary.variable,
        font.secondary.variable,
        font.tertiary.variable,
        font.code.variable,
      )}
    >
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={meta.home.title}
        description={meta.home.description}
        path={meta.home.path}
      />
      <head>
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <Uso controlado, sin contenido dinámico.>
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.setAttribute('data-theme', 'light');`,
          }}
        />
        {/* Meta tags fix to LinkedIn Preview */}
        <title>{meta.home.title}</title>
        <meta name="description" content={meta.home.description} />
        <meta name="canonical" content={`${baseURL}${meta.home.path}`} />
        <meta name="image" property="og:image" content={`${baseURL}${meta.home.image}`} />
        <meta name="og:title" content={meta.home.title} />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content={meta.home.title} />
        <meta name="og:description" content={meta.home.description} />
        <meta name="og:image" content={`${baseURL}${meta.home.image}`} />
        <meta name="og:url" content={`${baseURL}${meta.home.path}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.home.description} />
        <meta name="twitter:description" content={meta.home.description} />
        <meta name="twitter:image" content={`${baseURL}${meta.home.image}`} />
        {/*  */}
      </head>
      <ThemeProvider>
        <ToastProvider>
          <Column as="body" fillWidth margin="0" padding="0">
            <Background
              position="absolute"
              mask={{
                x: effects.mask.x,
                y: effects.mask.y,
                radius: effects.mask.radius,
                cursor: effects.mask.cursor,
              }}
              gradient={{
                display: effects.gradient.display,
                opacity: effects.gradient.opacity as opacity,
                x: effects.gradient.x,
                y: effects.gradient.y,
                width: effects.gradient.width,
                height: effects.gradient.height,
                tilt: effects.gradient.tilt,
                colorStart: effects.gradient.colorStart,
                colorEnd: effects.gradient.colorEnd,
              }}
              dots={{
                display: effects.dots.display,
                opacity: effects.dots.opacity as opacity,
                size: effects.dots.size as SpacingToken,
                color: effects.dots.color,
              }}
              grid={{
                display: effects.grid.display,
                opacity: effects.grid.opacity as opacity,
                color: effects.grid.color,
                width: effects.grid.width,
                height: effects.grid.height,
              }}
              lines={{
                display: effects.lines.display,
                opacity: effects.lines.opacity as opacity,
                size: effects.lines.size as SpacingToken,
                thickness: effects.lines.thickness,
                angle: effects.lines.angle,
                color: effects.lines.color,
              }}
            />
            {children}
          </Column>
        </ToastProvider>
      </ThemeProvider>
    </Flex>
  )
}
