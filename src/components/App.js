import { Provider } from 'react-redux'

import store from '../store/store'
import '../styles/Styles.scss'

import Jugadores from './Jugadores'
import TeamSelected from './TeamSelected'

function App (props) {
  return (
    <Provider store={store}>
      <div>
        <h1>App Manager</h1>
        <Jugadores />
        <TeamSelected />
      </div>
    </Provider>
  )
}

export default App
