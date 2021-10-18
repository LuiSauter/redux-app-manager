import { createStore } from 'redux'

const initialState = {
  jugadores: [{
    id: 7,
    email: 'michael.lawson@reqres.in',
    name: 'Michael',
    last_name: 'Lawson',
    avatar: 'https://reqres.in/img/faces/7-image.jpg'
  },
  {
    id: 8,
    email: 'lindsay.ferguson@reqres.in',
    name: 'Lindsay',
    last_name: 'Ferguson',
    avatar: 'https://reqres.in/img/faces/8-image.jpg'
  },
  {
    id: 9,
    email: 'tobias.funke@reqres.in',
    name: 'Tobias',
    last_name: 'Funke',
    avatar: 'https://reqres.in/img/faces/9-image.jpg'
  },
  {
    id: 10,
    email: 'byron.fields@reqres.in',
    name: 'Byron',
    last_name: 'Fields',
    avatar: 'https://reqres.in/img/faces/10-image.jpg'
  },
  {
    id: 11,
    email: 'george.edwards@reqres.in',
    name: 'George',
    last_name: 'Edwards',
    avatar: 'https://reqres.in/img/faces/11-image.jpg'
  },
  {
    id: 12,
    email: 'rachel.howell@reqres.in',
    name: 'Rachel',
    last_name: 'Howell',
    avatar: 'https://reqres.in/img/faces/12-image.jpg'
  }, {
    id: 72,
    email: 'michael.lawson@reqres.in',
    name: 'Michael',
    last_name: 'Lawson',
    avatar: 'https://reqres.in/img/faces/7-image.jpg'
  },
  {
    id: 82,
    email: 'lindsay.ferguson@reqres.in',
    name: 'Lindsay',
    last_name: 'Ferguson',
    avatar: 'https://reqres.in/img/faces/8-image.jpg'
  },
  {
    id: 92,
    email: 'tobias.funke@reqres.in',
    name: 'Tobias',
    last_name: 'Funke',
    avatar: 'https://reqres.in/img/faces/9-image.jpg'
  },
  {
    id: 102,
    email: 'byron.fields@reqres.in',
    name: 'Byron',
    last_name: 'Fields',
    avatar: 'https://reqres.in/img/faces/10-image.jpg'
  },
  {
    id: 112,
    email: 'george.edwards@reqres.in',
    name: 'George',
    last_name: 'Edwards',
    avatar: 'https://reqres.in/img/faces/11-image.jpg'
  },
  {
    id: 122,
    email: 'rachel.howell@reqres.in',
    name: 'Rachel',
    last_name: 'Howell',
    avatar: 'https://reqres.in/img/faces/12-image.jpg'
  }],
  titulares: [],
  suplentes: []
}

const reducerEntrenador = (state = initialState, action) => {
  switch (action.type) {
    case 'AGREGAR_TITULAR':
      return {
        ...state,
        titulares: state.titulares.concat(action.jugador),
        jugadores: state.jugadores.filter(jugador => jugador.id !== action.jugador.id)
      }
    case 'AGREGAR_SUPLENTE':
      return {
        ...state,
        suplentes: state.suplentes.concat(action.jugador),
        jugadores: state.jugadores.filter(jugador => jugador.id !== action.jugador.id)
      }
    case 'REMOVE_TITULAR':
      return {
        ...state,
        titulares: state.titulares.filter(jugador => jugador.id !== action.jugador.id),
        jugadores: state.jugadores.concat(action.jugador)
      }
    case 'REMOVE_SUPLENTE':
      return {
        ...state,
        suplentes: state.suplentes.filter(jugador => jugador.id !== action.jugador.id),
        jugadores: state.jugadores.concat(action.jugador)
      }
    default:
      break
  }
  return state
}

export default createStore(reducerEntrenador)
