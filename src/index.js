// index.js
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Configuración de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rutas de la API
app.use('/auth', authRoutes);
app.use('/api', userRoutes);
app.use('/api', postRoutes);

// Sincronizar con la base de datos y iniciar el servidor
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Swagger docs available on http://localhost:${PORT}/api-docs`);
  });
}).catch(error => {
  console.error('Unable to connect to the database:', error);
});
