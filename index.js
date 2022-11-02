const express = require('express');
const hbs = require('express-handlebars');

const user = require('./controllers/user.controller');
const app = express();


app.use( express.static('public'));


app.engine('hbs', hbs.engine({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs')

app.get('/', function(req, res){
    res.render('home', {
        title: 'Tytuł z Express',
        content: 'Cześć programisto'
    });
});



app.get('/mongo', function(req, res){
    
    user.list(function (err, users) {
        if (err) res.send(err);
        res.render('users', { users });
    });
});

app.listen(8080, function(){
    console.log('Serwer Node.js działa');
});