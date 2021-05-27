import { Link } from 'react-router-dom'

function Info() {
    return (
        <section className='info'>
            <div className='info-header'>
                Bulbasaur
            </div>
            <div className='info-body'>
                <div className='info-block'>
                <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png' alt='Bulbasaur'/>
                </div>
                <div className='info-block'>
                    <p><strong>Height:</strong>0.7m</p>
                    <p><strong>Weight:</strong>6.9kg</p>
                    <p><strong>Abilities:</strong>Overgrow</p>
                    <strong>Types:</strong>
                    <div className='info-category'>
                        <span className='type'>Grass</span>
                        <span className='type'>Poison</span>
                    </div>
                </div>
            </div>
            <div className='info-footer'>
                <Link to='/'>Voltar</Link>
            </div>
        </section>
    );
}

export default Info;