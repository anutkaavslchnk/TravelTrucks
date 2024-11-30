import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/App.jsx'
import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'
import store from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <StrictMode>
      <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>
  </Provider>

)
