import React from 'react';
import { Link } from 'react-router-dom'

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.id = parseInt(props.match.params.id);

        this.state = {
            // Dicionario vazio para casos de ids não encontrados
            isLoaded: false,
            pokemon: {}
        }}

    criarListaTipos() {
        const pokemon = this.state.pokemon;
        return pokemon.types.map((tipo => {
            const typeName = tipo.type.name;
            return (
                <div className={`info__body__category__type info__body__category__type--${typeName}`} key={pokemon.id + '-' + typeName}>
                    <span>{typeName}</span>
                </div>
            )
        }));
    }

    criarListaHabilidades() {
        const pokemon = this.state.pokemon;
        return pokemon.abilities.map(habilidade => {
            const nomeHabilidade = habilidade.ability.name;
            return (
                <span key={pokemon.id + '-' + nomeHabilidade} className='info__body__ability'>{nomeHabilidade}</span>
            )
        });
    }
    

    render() {
    const { isLoaded, pokemon} = this.state;
    // Informações renderizadas conforme o estado alterado
    if (!isLoaded) {
        return (
            <section className='info'>
                Carregando...
            </section>
        )
    } else {
        const imageId = `000${pokemon.id}`.slice(-3);
        const imageSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imageId}.png`;

        return (
            <section className='info'>
                <div className='info__header'>
                    {pokemon.name}
                </div>
                <div className='info__body'>
                    <div className='info-block'>
                    <img src={imageSrc} alt={pokemon.name}/>
                    </div>
                    <div className='info__body__block'>
                        <p><strong>Height:</strong> {`${pokemon.height}m`}</p>
                        <p><strong>Weight:</strong> {`${pokemon.weight}kg`}</p>
                        <p><strong>Abilities:</strong> 
                        {this.criarListaHabilidades()}</p>
                        <strong>Types:</strong>
                        <div className='info__body__category'>
                            {this.criarListaTipos()}
                        </div>
                    </div>
                </div>
                <div className='info_footer'>
                    <Link className='info_footer_link' to='/'>Voltar</Link>
                </div>
            </section>
        );}
    }
    
    

    componentDidMount() {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
        .then(resultado => resultado.json())
        .then(resultadoJson => {
            this.setState({
                isLoaded: true,
                pokemon: resultadoJson
            })
        })
    }
}

export default Info;