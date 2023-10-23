import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

const Servicios = () => {
    return (
        <div className='container-fluid background-services'>
            <div className='container-servicios'>
                <div className='row'>
                    <div className='col-lg-5 col-12'>
                        <h3>Nuestros Servicios</h3>
                        <p>Nos preocupamos por brindar proyectos de calidad es por eso que te ofrecemos contar con todos los servicios necesarios para llevar a cabo un proyecto exitoso.</p>
                    </div>
                    <div className='col-lg-7 col-12'>
                        <div className='row'>
                            {renderCard("Diseño y Desarrollo", "Planificación y diseño de fraccionamientos. Ubicaciones estratégicas.", "bi-vector-pen")}
                            {renderCard("Gestión de Proyectos", "Coordinación y gestión integral. Control de costos y plazos.", "bi-calendar-check")}
                        </div>
                        <div className='row'>
                            {renderCard("Infraestructura y Amenidades", "Desarrollo de infraestructura, como calles, redes de servicios públicos, iluminación, áreas verdes, parques, áreas de juegos, etc.", "bi-bricks")}
                            {renderCard("Legalización y Permisos", "Gestión de permisos y licencias para la construcción. Cumplimiento de regulaciones locales y nacionales.", "bi-clipboard-check")}
                        </div>
                        <div className='row'>
                            {renderCard("Control de Calidad", "Inspección y control de calidad durante todo el proceso de construcción. Garantía de que las estructuras sean seguras y duraderas.", "bi-patch-check")}
                            {renderCard("Venta y Marketing", "Estrategias de venta y comercialización de las viviendas. Promoción y venta de propiedades a compradores potenciales.", "bi-graph-up")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

function renderCard(title, content, iconClass) {
    return (
        <div id="servicios" className="col-lg-6 col-md-6 col-sm-6 mb-4">
            <div className="card-responsive">
                <div className="card">
                    <div className="card-body">
                    <div className="card-icon"><i className={`bi ${iconClass}`}></i></div>
                        <h4 className="card-title">{title}</h4>
                        <ul className="card-text">
                            {content.split('. ').map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Servicios;
