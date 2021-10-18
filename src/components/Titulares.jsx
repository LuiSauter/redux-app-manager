import { connect } from 'react-redux'
import cancha from '../cancha.svg'
function Titulares ({ titulares, removeTitular }) {
  return (
    <section>
      <h2>Titulares</h2>
      <div className='cancha'>
        {
          titulares.map(jugador => (
            <article className='titular' key={jugador.id}>
              <div>
                <img src={jugador.avatar} alt={jugador.name} />
                <button onClick={() => removeTitular(jugador)}>X</button>
              </div>
              <p>{jugador.name}</p>
            </article>
          ))
        }
        <img src={cancha} alt='Cancha de futbol' />
      </div>
    </section>
  )
}
const mapStateToProps = state => ({
  titulares: state.titulares
})

const mapDispatchToProps = dispatch => ({
  removeTitular (jugador) {
    dispatch({
      type: 'REMOVE_TITULAR',
      jugador
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Titulares)
