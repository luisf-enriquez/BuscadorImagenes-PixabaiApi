import React, { Component } from 'react';

class Navegacion extends Component {

    mostrarAnterior = () => {

        const {pagina} = this.props

        if (pagina > 1) {
            return(
                <button onClick={this.props.paginaAnterior} type="btn" className="btn btn-info mr-1">Anterior &larr;</button>
            )
        } else {
            return null;
        }
    }

    mostrarSiguiente = () => {

        const {pagina, totalPaginas} = this.props

        if (pagina < totalPaginas) {
            return(
                <button onClick={this.props.paginaSiguiente} type="btn" className="btn btn-info ">Siguiente &rarr;</button>
            )
        }else{
            return null;
        }
    }

    render () {
        return (
            <div className="py-5">
                {this.mostrarAnterior()}
                {this.mostrarSiguiente()}
            </div>
        );
    }
};

export default Navegacion;