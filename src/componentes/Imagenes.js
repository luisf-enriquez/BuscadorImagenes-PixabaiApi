import React, { Component } from 'react'
import Imagen from './Imagen'
import Navegacion from './Navegacion'

class Imagenes extends Component {

    mostrarResultado = () => {

        const imagenes = this.props.imagenes;

        if (imagenes.length === 0) {
            return null;
        }

        return(
            <React.Fragment>

                <div id="resultado" className="col-12 p-5 row">
                    {Object.keys(this.props.imagenes).map(key => (
                        <Imagen key={key}  info={this.props.imagenes[key]}/>
                    ))}
                </div>
                <Navegacion paginaAnterior={this.props.paginaAnterior} 
                            paginaSiguiente={this.props.paginaSiguiente}
                            totalPaginas={this.props.totalPaginas}
                            pagina={this.props.pagina}
                            />
            </React.Fragment>
            
        )
    }

    render() {
        return (
            <React.Fragment>
                {this.mostrarResultado()}
            </React.Fragment>
        )
    }
}

export default Imagenes;