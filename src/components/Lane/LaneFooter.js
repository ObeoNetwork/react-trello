import React from 'react'

import {LaneFooter} from 'rt/styles/Base'

import {CollapseBtn, ExpandBtn} from 'rt/styles/Elements'

export default ({onClick, collapsed}) => (
  <LaneFooter onClick={onClick}>
    {collapsed ? <ExpandBtn data-testid="lane-expand-btn" /> : <CollapseBtn data-testid="lane-collapse-btn" />}
  </LaneFooter>
)
