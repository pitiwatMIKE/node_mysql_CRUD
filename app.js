const bodyparser = require('body-parser');
const express = require('express');
const app = express();
const router = require('./router/router');
const homecontroller = require('./controller/home');
const notFoundController = require('./controller/notfound');


app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json());
app.set('view engine','ejs');
app.set('views','views');

//Path
app.use(router);
app.get('/',homecontroller.home);
app.get('*',notFoundController.notFound);

const port = process.env.PORT || 3000;
app.listen(port,()=>console.log('listening on port ',port));

