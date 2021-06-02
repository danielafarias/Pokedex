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
                <div className={`card-category ${typeName}`} key={pokemon.id + '-' + typeName}>
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
                <div className='card'>
                    <img src={imageSrc} alt={pokemon.name}/>
                    <div className='card-info'>
                        <p className='card-id'>No {pokemon.id}</p>
                    </div>
                    <h5>{pokemon.name}</h5>
                    <div className='card-categories'>
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