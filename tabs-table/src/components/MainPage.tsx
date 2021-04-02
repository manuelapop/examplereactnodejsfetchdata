import React from 'react';
import BaseballTab from './Baseball';
import BasketballTab from './Basketball'
import Football from './Football'

import { Tab } from 'semantic-ui-react'

const panes = [
  {
    menuItem: 'Baseball',
    render: () => <Tab.Pane attached={false}><BaseballTab/></Tab.Pane>,
  },
  {
    menuItem: 'Basketball',
    render: () => <Tab.Pane attached={false}><BasketballTab/></Tab.Pane>,
  },
  {
    menuItem: 'Football',
    render: () => <Tab.Pane attached={false}><Football/></Tab.Pane>,
  },
]

const MainPage = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
)

export default MainPage