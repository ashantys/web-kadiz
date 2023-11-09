'use client'
import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import SuccessAlert from './SuccessAlert';

const Contacto = () => {

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_np0lsuj";
    const templateId = "template_ahpiyko";
    const publicKey = "m9-83wldiyd1Y_SQb";

    const templateParams = {
      from_name: name,
      from_email: email,
      from_subject: subject,
      to_name: 'Kadiz',
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Correo enviado con exito", response);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 4000);
      })
      .catch((error) => {
        console.error("Error mandando el email:", error);
      });
  }
  return (
    <>
    <div id="contacto" className="container-contacto m-5">
    {isSuccess && <SuccessAlert/>}
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
              <label className="form-label">
                Nombre
              </label>
              <input
                required
                type="text"
                className="form-control"
                placeholder="Ingrese su nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="m-4">
              <label className="form-label">
                Correo Electrónico
              </label>
              <input
                required
                type="email"
                className="form-control"
                placeholder="Ingrese su correo electronico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="m-4">
              <label className="form-label">
                Asunto
              </label>
              <input
                required
                type="text"
                className="form-control"
                placeholder="Ingrese un asunto del mensaje"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="m-4">
              <label className="form-label">
                Mensaje
              </label>
              <textarea
                className="form-control"
                rows={8}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
    </>
  );
};

export default Contacto;
