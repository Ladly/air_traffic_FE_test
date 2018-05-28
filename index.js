import React from 'react'
import { render } from 'react-dom'
import $ from 'jquery'
window.jQuery = $
window.$ = $

import { App } from './app/src/containers/App'

import './style.scss'

render(
	<App />,
	document.getElementById('root')
)
