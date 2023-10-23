import React from 'react';
import Image from 'next/image';
import workingImage from 'public/images/working.png';

const Nosotros = () =>{
    return(
<div id="nosotros">
<Image className="img-fluid float-start hidden-on-mobile" src={workingImage} alt="img-nosotros" />
        <div className="container-nosotros">
            <div className="row">
                <div className="col-sm-12 col-lg-6 col-md-10 custom-mt">
                    <div className="d-flex flex-column ms-5">
                        <div className="mb-5">
                            <h3>Quiénes Somos</h3>
                            <p>Somos una empresa mexicana con más de 5 años de experiencia apasionada y dedicada a la construcción de fraccionamientos de alta calidad. Aunque somos una empresa pequeña, nuestros logros son grandes y nuestros proyectos hablan por sí mismos.</p>
                        </div>
                        <div className="mb-5">
                            <h3>Nuestra Misión</h3>
                            <p>Construir comunidades de calidad que enriquezcan la vida de las personas. Estamos comprometidos en superar las expectativas de nuestros clientes y en contribuir positivamente a las comunidades en las que operamos.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-6 col-md-10">
                    {/* Right column with centered text */}
                        <div className="ms-5 d-flex flex-column justify-content-center align-items-center h-100">
                            <div className="mb-5">
                                <h3>Nuestra Visión</h3>
                                <p>Brindar un servicios personalizados y de calidad que impulsen el crecimiento tecnológico de nuestros clientes, contribuyendo así al desarrollo de nuestra comunidad.</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
</div>
    );
};

export default Nosotros;