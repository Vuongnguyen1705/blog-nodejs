import express from 'express';
import {engine} from 'express-handlebars';
import morgan from 'morgan';
const app = express();
const port = 3000;

//template engine
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
  })
);
app.set('view engine', 'hbs');
app.set('views', './src/resources/views');

//http logger
app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.render('home');
});
app.get('/news', (req, res) => {
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
