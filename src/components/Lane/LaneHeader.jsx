import PropTypes from 'prop-types'
import React from 'react'
import {LaneHeader, RightContent, Title} from 'rt/styles/Base'
import InlineInput from 'rt/widgets/InlineInput'
import LaneMenu from './LaneHeader/LaneMenu'

const LaneHeaderComponent = ({
  updateTitle = () => {},
  canAddLanes = false,
  onDelete,
  onDoubleClick,
  editLaneTitle = false,
  label,
  title,
  titleStyle,
  labelStyle,
  t,
  laneDraggable
}) => {
  return (
    <LaneHeader onDoubleClick={onDoubleClick} $editLaneTitle={editLaneTitle}>
      <Title draggable={laneDraggable} style={titleStyle}>
        {editLaneTitle ? (
          <InlineInput
            value={title}
            border
            placeholder={t('placeholder.title')}
            resize="vertical"
            onSave={updateTitle}
          />
        ) : (
          title
        )}
      </Title>
      {label && (
        <RightContent>
          <span style={labelStyle}>{label}</span>
        </RightContent>
      )}
      {canAddLanes && <LaneMenu t={t} onDelete={onDelete} />}
    </LaneHeader>
  )
}

LaneHeaderComponent.propTypes = {
  updateTitle: PropTypes.func,
  editLaneTitle: PropTypes.bool,
  canAddLanes: PropTypes.bool,
  laneDraggable: PropTypes.bool,
  label: PropTypes.string,
  title: PropTypes.string,
  onDelete: PropTypes.func,
  onDoubleClick: PropTypes.func,
  t: PropTypes.func.isRequired
}

export default LaneHeaderComponent
