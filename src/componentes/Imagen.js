import React, { Component } from 'react'

class Imagen extends Component {
    render() {

        const {views, likes, largeImageURL, tags, previewURL} = this.props.info
         return (

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                <div className="card">
                    <img src={previewURL} className="card-img-top" alt={tags}/>
                    <div className="card-body">
                        <p className="card-text">{likes} Me gusta</p>
                        <p className="card-text">{views} Vistas</p>
                        <a href={largeImageURL} target="_blank" className="btn btn-primary btn-block">Ver Imagen</a>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Imagen;