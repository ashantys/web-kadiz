'use client'
import React, { useState } from 'react';
import axios from 'axios';

const Contacto = () => {
  const [formData, setFormData] = useState({
    inputNombre: '',
    inputEmail: '',
    inputAsunto: '',
    inputMensaje: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const correo = {
      from: formData.inputEmail,
      to: 'kadiz.contacta@gmail.com',
      subject: formData.inputAsunto,
      text: formData.inputMensaje,
    };

    try {
      const response = await axios.post('/api/send-email/route', correo);
      console.log('Correo enviado con éxito', response.data);
    } catch (error) {
      console.error('Error al enviar el correo', error);
    }
  };

  return (
    <div id="contacto" className="container-contacto m-5">
      <div className="row">
        <div className="col-lg-6">
          <h3 className="ms-2 mt-5">Hablemos de negocios</h3>
          <p className="ms-2 mt-4 text-custom">
            ¡Estamos aquí para ayudarte! Si tienes preguntas, comentarios o deseas obtener más información sobre nuestros servicios de construcción de fraccionamientos, no dudes en ponerte en contacto con nosotros. Estamos comprometidos en brindarte una atención personalizada y responderemos a tus consultas de manera oportuna.
          </p>
        </div>
        <div className="col-lg-5 ms-lg-5 mt-sm-5 background-form">
          <form onSubmit={handleSubmit}>
            <div className="m-4 mt-5">
              <label htmlFor="inputNombre" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="inputNombre"
                placeholder="Juan Pérez"
                name="inputNombre"
                value={formData.inputNombre}
                onChange={handleInputChange}
              />
            </div>
            <div className="m-4">
              <label htmlFor="inputEmail" className="form-label">
                Correo Electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="ejemplo@correo.com"
                name="inputEmail"
                value={formData.inputEmail}
                onChange={handleInputChange}
              />
            </div>
            <div className="m-4">
              <label htmlFor="inputAsunto" className="form-label">
                Asunto
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAsunto"
                placeholder="Cotización"
                name="inputAsunto"
                value={formData.inputAsunto}
                onChange={handleInputChange}
              />
            </div>
            <div className="m-4">
              <label htmlFor="inputMensaje" className="form-label">
                Mensaje
              </label>
              <textarea
                className="form-control"
                id="inputMensaje"
                name="inputMensaje"
                value={formData.inputMensaje}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="mb-5 m-4 btn btn-primary">
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
