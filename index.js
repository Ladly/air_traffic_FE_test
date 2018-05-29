import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import $ from 'jquery'
window.jQuery = $
window.$ = $

import { App } from './app/src/components/App'

import './style.scss'

render(
	<HashRouter>
		<App />
	</HashRouter>,
	document.getElementById('root')
)
