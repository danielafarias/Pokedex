import React from 'react';
import Card from './Card'

class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            pokemons: []
        };
    }


    criarCardsPokemon() {
        return this.state.pokemons.map((pokemon) => {
            return <Card pokemon={pokemon} key={pokemon.name} />
        });
    }

    render() {
        const isLoaded = this.state.isLoaded;

        if (!isLoaded) {
            return (
                <div className='card-list'>
                    Carregando...
                </div>
            )
        } else {
            return (
                <div className='card-list'>
                    {this.criarCardsPokemon()}
                
                <button onClick={() => this.listarPokemons()}>
                    Listar Pokemons
                </button>
                </div>
            );}
        }

        componentDidMount() {
            fetch('https://pokeapi.co/api/v2/pokemon/')
            .then(resultado => resultado.json())
            .then(resultadoJson => {
                this.setState({
                    isLoaded: true,
                    pokemons: resultadoJson.results
                })
            })
        }
}

export default CardList;