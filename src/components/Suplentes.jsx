import { connect } from 'react-redux'

function Suplentes ({ suplentes, removeSuplente }) {
  return (
    <section>
      <h2>Suplentes</h2>
      <div className='suplentes'>
        {
          suplentes.map(jugador => (
            <article className='suplente' key={jugador.id}>
              <div>
                <img src={jugador.avatar} alt={jugador.name} />
                <button onClick={() => removeSuplente(jugador)}>X</button>
              </div>
              <p>{jugador.name}</p>
            </article>
          ))
            }
      </div>
    </section>
  )
}
const mapStateToProps = state => ({
  suplentes: state.suplentes
})

const mapDispatchToProps = dispatch => ({
  removeSuplente (jugador) {
    dispatch({
      type: 'REMOVE_SUPLENTE',
      jugador
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes)
