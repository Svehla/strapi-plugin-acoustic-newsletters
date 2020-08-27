/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { NotFound } from 'strapi-helper-plugin'
// Utils
import pluginId from '../../pluginId'
// Containers
import HomePage from '../HomePage'
import { ConfirmModalProvider } from '../ConfirmModal'

const App = () => {
  return (
    <div>
      <ConfirmModalProvider>
        <Switch>
          <Route path={`/plugins/${pluginId}`} component={HomePage} exact />
          <Route component={NotFound} />
        </Switch>
      </ConfirmModalProvider>
    </div>
  )
}

export default App
