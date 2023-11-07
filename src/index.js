import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import store from "./redux/store";
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
// dobbiamo mettere App dentro Provider in modo tale che react capisca la logica di redux e ci portiamo store
<Provider  store={store}>
<App />
</Provider>
)
