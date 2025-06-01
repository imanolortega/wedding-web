'use client'

import React, { useState, useEffect, forwardRef } from 'react'
import classNames from 'classnames'
import { Flex, Icon, InteractiveDetails, InteractiveDetailsProps } from '.'
import styles from './SharedInteractiveStyles.module.scss'

interface CheckboxProps
  extends Omit<InteractiveDetailsProps, 'onClick'>,
    React.InputHTMLAttributes<HTMLInputElement> {
  isChecked?: boolean
  isIndeterminate?: boolean
}

const generateId = () => `checkbox-${Math.random().toString(36).substring(2, 9)}`

const Checkbox: React.FC<CheckboxProps> = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      style,
      className,
      isChecked: controlledIsChecked,
      isIndeterminate = false,
      disabled,
      onChange,
      ...props
    },
    ref,
  ) => {
    const [internalChecked, setInternalChecked] = useState(controlledIsChecked ?? false)
    const [id] = useState(generateId())
    const checkboxId = props.id || id

    useEffect(() => {
      if (controlledIsChecked !== undefined) {
        setInternalChecked(controlledIsChecked)
      }
    }, [controlledIsChecked])

    const handleToggle = () => {
      if (disabled) return

      const newChecked = !(controlledIsChecked ?? internalChecked)

      if (controlledIsChecked === undefined) {
        setInternalChecked(newChecked)
      }

      if (onChange) {
        const event = {
          target: { checked: newChecked },
        } as React.ChangeEvent<HTMLInputElement>
        onChange(event)
      }
    }

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (disabled) return
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        handleToggle()
      }
    }

    const isChecked = controlledIsChecked ?? internalChecked

    return (
      <Flex
        vertical="center"
        gap="16"
        className={classNames(styles.container, className, {
          [styles.disabled]: disabled,
        })}
        style={style}
      >
        <input
          id={checkboxId}
          type="checkbox"
          ref={ref}
          checked={isChecked}
          disabled={disabled}
          onChange={handleToggle}
          className={styles.hidden}
          tabIndex={-1}
          aria-labelledby={`${checkboxId}-label`}
        />

        <Flex
          aria-label={checkboxId}
          style={{
            borderRadius: 'min(var(--static-space-4), var(--radius-xs))',
          }}
          role="checkbox"
          position="relative"
          tabIndex={0}
          horizontal="center"
          vertical="center"
          radius="xs"
          aria-checked={isIndeterminate ? 'mixed' : isChecked}
          aria-labelledby={checkboxId}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          className={classNames(styles.element, {
            [styles.checked]: isChecked || isIndeterminate,
            [styles.disabled]: disabled,
          })}
        >
          {isChecked && !isIndeterminate && (
            <Flex className={styles.icon}>
              <Icon onSolid="brand-strong" name="check" size="xs" />
            </Flex>
          )}
          {isIndeterminate && (
            <Flex className={styles.icon}>
              <Icon onSolid="brand-strong" name="minus" size="xs" />
            </Flex>
          )}
        </Flex>
        {props.label && (
          <InteractiveDetails
            id={`${checkboxId}-label`}
            label={props.label}
            description={(props as any).description}
            iconButtonProps={(props as any).iconButtonProps}
            onClick={handleToggle}
          />
        )}
      </Flex>
    )
  },
)

Checkbox.displayName = 'Checkbox'

export { Checkbox }
export type { CheckboxProps }
