import React from 'react';
import Card from './Card'
import SearchBox from './SearchBox';

class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            loadedPokemons: [],
            pokemons: []
        };
    }


    criarCardsPokemon() {
        return this.state.pokemons.map((pokemon) => {
            return <Card pokemon={pokemon} key={pokemon.name} />
        });
    }

    buscarPokemons(evento) {
        const busca = evento.target.value.toLowerCase();
        const pokemons = this.state.loadedPokemons;
        const pokemonsFiltrados = pokemons.filter((pokemon) => pokemon.name.includes(busca));
        this.setState({
            pokemons: pokemonsFiltrados
        })

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
                <div>
                    <SearchBox placeholder='Buscar Pokemon...' onChange={(evento) => this.buscarPokemons(evento)}/>
                    <div className='card-list'>
                        {this.criarCardsPokemon()}
                    
                        {/* <button onClick={() => this.listarPokemons()}>
                            Listar Pokemons
                        </button> */}
                    </div>
                </div>
            );}
        }

        componentDidMount() {
            fetch('https://pokeapi.co/api/v2/pokemon/')
            .then(resultado => resultado.json())
            .then(resultadoJson => {
                this.setState({
                    isLoaded: true,
                    loadedPokemons: resultadoJson.results,
                    pokemons: resultadoJson.results
                })
            })
        }
}

export default CardList;