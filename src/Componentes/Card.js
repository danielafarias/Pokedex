import React from 'react';
import { Link } from 'react-router-dom'

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            pokemon: {}
        }
    }

    criarCategoriasPokemon() {
        const pokemon = this.state.pokemon;
        return pokemon.types.map(tipo => {
            const typeName = tipo.type.name;
            return (
                <div className={`card-list__card__category card-list__card__category--${typeName}`} key={pokemon.id + '-' + typeName}>
                    <span>{typeName}</span>
                </div>
            );
        })
    }

    render() {
    const { isLoaded, pokemon } = this.state;

        if (!isLoaded) {
            return (
                <div className='card'>
                    Carregando...
                </div>
            )
        } else {
            const imageId = `000${pokemon.id}`.slice(-3);
            const imageSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imageId}.png`;
            return (
                <Link to={`/sobre/${pokemon.id}`}>
                <div className='card-list__card'>
                    <img className='card-list__card__img' src={imageSrc} alt={pokemon.name}/>
                    <div className='card-list__card__info'>
                        <p className='card-list__card__id'>No {pokemon.id}</p>
                    </div>
                    <h5 className='card-list__card__name'>{pokemon.name}</h5>
                    <div className='card-list__card__categories'>
                    {this.criarCategoriasPokemon()}
                    </div>
                </div>
                </Link>
            );}
        }

    

    componentDidMount() {
        fetch(this.props.pokemon.url)
        .then(resultado => resultado.json())
        .then(resultadoJson => {
            this.setState({
                isLoaded: true,
                pokemon: resultadoJson
            })
        })
        
    }
}

export default Card;