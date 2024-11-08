import { createRoot } from 'react-dom/client'
import "./main.css"
import { Provider } from 'react-redux'
import App from './Pages/App/App'
import { store } from './Redux/Store'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <App/>

    </Provider>
    
)
