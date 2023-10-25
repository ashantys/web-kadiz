import nodemailer from 'nodemailer';
import express from 'express';

const app = express();
app.use(express.json());

app.post('/send-email', async (req, res) => {
  try {
    const { from, to, subject, text } = req.body;

    // Configura el transporte de correo (en este caso, utilizando Gmail)
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'kadiz.contacta@gmail.com', // Reemplaza con tu dirección de correo electrónico de Gmail
        pass: 'kadiz9080100', // Reemplaza con tu contraseña de Gmail
      },
    });

    // Configura el correo electrónico
    const mailOptions = {
      from,
      to,
      subject,
      text,
    };

    // Envía el correo electrónico
    const info = await transporter.sendMail(mailOptions);

    console.log('Correo enviado:', info.response);
    res.status(200).json({ message: 'Correo enviado con éxito' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ error: 'Error al enviar el correo' });
  }
});

app.listen(3001, () => {
  console.log('Servidor en ejecución en el puerto 3001');
});
