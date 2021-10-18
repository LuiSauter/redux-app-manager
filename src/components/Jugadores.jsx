import { useEffect, createRef } from 'react'
import { connect } from 'react-redux'

function Jugadores ({ jugadores, addTitular, addSuplente, titulares }) {
  const gridJugadores = createRef()

  useEffect(() => {
    setScrollContainer()
    document.addEventListener('click', setScrollContainer)
  }, [])

  // Función que fija el tamaño del grid de los jugadores
  const setScrollContainer = (desktop = true) => {
    console.log('has clickeado')
    const container = gridJugadores.current
    if (container) {
      const generatedGrid = () => {
        const items = container.getElementsByClassName('jugador')
        const itemsLength = items.length
        const bp = window.matchMedia('(min-width: 640px)').matches ? window.matchMedia('(min-width: 1024px)').matches ? 4 : 2 : 1

        const getWidth = () => {
          const n = bp + (itemsLength > bp ? 0.3 : 0)
          return (itemsLength / n) * 10
        }
        return `
                display: grid;
                grid-template-columns: repeat(${itemsLength}, 225px);
                grid-gap: 1rem;
                width : ${getWidth()}%;
              `
      }
      const styles = !desktop && window.matchMedia('(min-width: 1024px)').matches ? 'display: grid; grid-row-gap: 1rem;' : generatedGrid()
      container.setAttribute('style', styles)
    }
  }

  return (
    <section>
      <h2>Jugadores</h2>
      <div className='contenedor-jugadores'>
        <div ref={gridJugadores} onClick={() => setScrollContainer.bind(this)}>
          {
            jugadores.map(jugador => (
              <article className='jugador' key={jugador.id}>
                <img src={jugador.avatar} alt={jugador.name} />
                <h3>{jugador.name}</h3>
                <div>
                  <button onClick={() => titulares.length === 11 ? '' : addTitular(jugador)}>Titular</button>
                  <button onClick={() => addSuplente(jugador)}>Suplente</button>
                </div>
              </article>
            ))
          }
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = state => ({
  jugadores: state.jugadores,
  titulares: state.titulares
})

const mapDispatchToProps = dispatch => ({
  addTitular (jugador) {
    dispatch({
      type: 'AGREGAR_TITULAR',
      jugador
    })
  },
  addSuplente (jugador) {
    dispatch({
      type: 'AGREGAR_SUPLENTE',
      jugador
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Jugadores)
