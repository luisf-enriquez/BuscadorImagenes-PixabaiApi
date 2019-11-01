import React, { Component } from 'react'
import Formulario from './componentes/Formulario'
import Imagenes from './componentes/Imagenes'

import './css/App.css'
import { returnStatement } from '@babel/types';

class App extends Component {

    state = {
        termino: '',
        imagenes: [],
        pagina: '',
        cargando: false,
        totalPaginas: ''
    }

    busquedaImagen = (keyword) => {

        //Una vez se haya actualziado el state se llama a la función consultar Api
        this.setState({
            termino: keyword,
            pagina: 1
        }, () => {
            this.consultarApi();
        })
    }

    consultarApi = async () => {
        const key ='14136366-b765d0e9f4e0942f198b97a51'
        const url = `https://pixabay.com/api/?key=${key}&q=${this.state.termino}&image_type=photo&per_page=30&page=${this.state.pagina}`;

        await fetch(url,{
            method: 'GET'
        })
            .then(res => {
                this.setState({
                    cargando: true
                })
                return res.json()
            })
            .then(resultado => {

                const totalPag = Math.ceil(resultado.totalHits/30);

                setTimeout(() => {
                    this.setState({
                        totalPaginas: totalPag,
                        imagenes: resultado.hits,
                        cargando: false
                    })
                }, 500);
            })
    }

    paginaAnterior = () => {        
        let actual = this.state.pagina

        if (actual > 1) {
            actual -= 1
        }else{
            actual = 1
            return null;
        }

        this.setState({
            pagina: actual
        }, () => {
            this.consultarApi();
            this.scroll();
        })

    }

    paginaSiguiente = () => {
        let actual = this.state.pagina
        
        if (actual < this.state.totalPaginas) {
            actual += 1;
        }else{
            return null;
        }

        this.setState({
            pagina: actual
        }, () => {
            this.consultarApi();
            this.scroll();
        })
    }

    scroll = () => {
        const elemento = document.querySelector('.jumbotron');
        elemento.scrollIntoView('smooth', 'start');
    }

    render() {

        const cargando = this.state.cargando;
        let resultado; 

        if (cargando) {
            resultado = <div className="spinner">
                            <div className="double-bounce1"></div>
                            <div className="double-bounce2"></div>
                        </div>
        } else {
            resultado = <Imagenes imagenes={this.state.imagenes} 
                            paginaAnterior={this.paginaAnterior} 
                            paginaSiguiente={this.paginaSiguiente}
                            totalPaginas={this.state.totalPaginas}
                            pagina={this.state.pagina}
                            />
        }

        return (
            <div className="app container">
                <div className="jumbotron">
                    <p className="lead text-center">Buscador de Imágenes</p>
                    <Formulario busquedaImagen={this.busquedaImagen}/>
                </div>

                <div className="row justify-content-center">
                    {resultado}
                </div>

            </div>
        )
    }
}

export default App;