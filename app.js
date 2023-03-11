const express = require('express');

const app = express();

const router =  require('./src/routes/index.routes');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.json());
app.use(router);
app.set('port', 3000);
app.set('appName', 'Tienda online backend');




app.listen(app.get('port'), () => { console.log(`Servidor corriendo en el puerto ${app.get('port')}`);});
