import React, { Component } from 'react'

class Formulario extends Component {

    keyRef = React.createRef();

    buscarImagen = (e) => {
        e.preventDefault();

        //leer los datos 
        
        const keyword = this.keyRef.current.value

        //enviar por props al app.js
        this.props.busquedaImagen(keyword);
    }

    render() {
        return (
            <form onSubmit={this.buscarImagen}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input type="text" className="form-control" placeholder="Busca tu Imagen, Ejemplo: Futbol" ref={this.keyRef}/>
                    </div>

                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-danger btn-block" value="Buscar..."></input>
                    </div>
                </div>
            </form>
        )
    }
}

export default Formulario;