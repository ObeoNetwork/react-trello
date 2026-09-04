import {
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole
} from '@floating-ui/react'
import React, {useState} from 'react'

import {CustomPopoverContent, CustomPopoverContainer} from 'rt/styles/Base'

import {
  LaneMenuTitle,
  LaneMenuHeader,
  LaneMenuContent,
  DeleteWrapper,
  LaneMenuItem,
  GenDelButton,
  MenuButton,
} from 'rt/styles/Elements'

const LaneMenu = ({t, onDelete}) => {
  const [isOpen, setIsOpen] = useState(false)
  const {context, floatingStyles, refs} = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'bottom-end',
    middleware: [offset(5), flip(), shift({padding: 5})],
    whileElementsMounted: autoUpdate
  })
  const click = useClick(context, {event: 'mousedown'})
  const dismiss = useDismiss(context)
  const role = useRole(context, {role: 'menu'})
  const {getFloatingProps, getReferenceProps} = useInteractions([click, dismiss, role])

  return (
    <>
      <MenuButton ref={refs.setReference} aria-label={t('Lane actions')} {...getReferenceProps()}>
        ⋮
      </MenuButton>
      {isOpen && (
        <CustomPopoverContainer ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
          <CustomPopoverContent>
            <LaneMenuHeader>
              <LaneMenuTitle>{t('Lane actions')}</LaneMenuTitle>
              <DeleteWrapper>
                <GenDelButton aria-label="Close" onClick={() => setIsOpen(false)}>
                  &#10006;
                </GenDelButton>
              </DeleteWrapper>
            </LaneMenuHeader>
            <LaneMenuContent>
              <LaneMenuItem role="menuitem" tabIndex={0} onClick={onDelete}>
                {t('Delete lane')}
              </LaneMenuItem>
            </LaneMenuContent>
          </CustomPopoverContent>
        </CustomPopoverContainer>
      )}
    </>
  )
}

export default LaneMenu
