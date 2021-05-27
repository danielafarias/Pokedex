import { Link } from 'react-router-dom'

function Card() {
    return (
        <Link to='/sobre/001'>
        <div className='card'>
            <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png' alt='Bulbasaur'/>
            <div className='card-info'>
                <p className='card-id'>No 001</p>
            </div>
            <h5>Bulbasaur</h5>
            <div className='card-categories'>
            <div className='card-category'>
                <span>Grass</span>
            </div>
            <div className='card-category'>
                <span>Poison</span>
            </div>
            </div>
        </div>
        </Link>
    );
}

export default Card;