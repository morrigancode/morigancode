import  express  from "express";
import clear from 'console-clear';
const app = express()
const port = 3000
clear(true);

//invocando modulos
import  indexRouter from './routes/index';
import dinosaurioRuter from './routes/dinosaurio'

//motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//rutas
app.use('/', indexRouter);
app.use('/', dinosaurioRuter);

//midleware
app.use(express.static (__dirname + "/public"));

app.use((_req: any, res: any, _next: any) => {
    res.status(404).render("404", {title: "404"})
})

app.listen(port, () => {
    console.log(`server listening on port: http://localhost:${port}`)
})