import React from 'react'
import { render } from 'react-dom'
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css'
import '../css/app.css'

import App from './components/App'

render(<App/>, document.getElementById('root'))