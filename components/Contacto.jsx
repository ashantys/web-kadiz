import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

const Contacto = () => {
    return (
        <div id="contacto" className="container-contacto m-5">
            <div className="row">
                <div className="col-lg-6">
                    <h3 className="ms-2 mt-5">Hablemos de negocios</h3>
                    <p className="ms-2 mt-4 text-custom">¡Estamos aquí para ayudarte! Si tienes preguntas, comentarios o deseas obtener más información sobre 
                        nuestros servicios de construcción de fraccionamientos, no dudes en ponerte en contacto con nosotros. 
                        Estamos comprometidos en brindarte una atención personalizada y responderemos a tus consultas de manera oportuna.
                    </p>
                </div>
                <div className="col-lg-5 ms-lg-5 mt-sm-5 background-form">
                    <form>
                        <div className="m-4 mt-5">
                            <label for="inputNombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="inputNombre" placeholder="Juan Peréz"/>
                        </div>
                        <div className="m-4">
                            <label for="inputEmail" className="form-label">Correo Electrónico</label>
                            <input type="email" className="form-control" id="inputEmail" placeholder="ejemplo@correo.com"/>
                        </div>
                        <div className="m-4">
                            <label for="inputAsunto" className="form-label">Asunto</label>
                            <input type="text" className="form-control" id="inputAsunto" placeholder="Cotización"/>
                        </div>
                        <div className="m-4">
                        <label for="inputMensaje" class="form-label">Mensaje</label>
                        <textarea class="form-control" id="inputMensaje" rows="10"></textarea>
                        </div>
                        <div className="d-grid gap-2">
                        <button type="submit" className="mb-5 m-4 btn btn-primary">Enviar Mensaje</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default Contacto;
