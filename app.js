require('marko/node-require').install();
require('marko/express');

//using sendgrid to send emails
var sgMail = require('@sendgrid/mail');   

//using auth0 for the log in
var { auth , requiresAuth } = require('express-openid-connect');  

var express = require('express');
var app = express();
require('dotenv').config();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/static',express.static('./views'));

app.use(
  auth({
    authRequired:false,
    auth0Logout:true,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
  })
);

var address = '';
var time = '';
var commentAddress = '';
var nameRecipe = '';
var ingredients = '';
var prep = '';

app.get('/',requiresAuth(),(req,res)=>{
    address = '';
    time = '';
    commentAddress = '';
    nameRecipe = '';
    ingredients = '';
    prep = '';
    res.marko(require('./views/index.marko'));
});

app.get('/home',requiresAuth(),(req,res)=>{
    res.marko(require('./views/home.marko'));
})

// set the meet details
app.post('/meetingDetails',requiresAuth(),(req,res)=>{
    address = req.body.address;
    time = req.body.time;
    commentAddress = req.body.comment;
    console.log(req.oidc.user.email)
    res.marko(require('./views/home.marko'));
});

//set the recipe details
app.post('/recipe',requiresAuth(),(req,res)=>{
    nameRecipe = req.body.name;
    ingredients = req.body.ingredients;
    prep = req.body.preparation;
    res.marko(require('./views/home.marko'));
});

// sedn an emails for both guest and host confirming the invitation
app.post('/guest',requiresAuth(),(req,res)=>{
    const message = { // email for the host 
        to: req.oidc.user.email,
        from:{
            name: 'Pizza Cook Party',
            email: 'pizzacookparty@gmail.com',
        },
        subject: `${req.body.name} was invited to the party!`,
        text:'Pizza Cook Party',
        html:`<br>
        <div style="box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.226); width: 70%;margin: auto;">
            <div style="overflow: hidden;height: 150px;">
                <img style="width: 100%;" src="https://img.itdg.com.br/tdg/images/blog/uploads/2019/05/pizza.jpg"
                    alt="">
            </div>
            <h2>  ${req.body.name} was invited!  </h2>
            <b>Email: </b>${req.body.email} <br>
            <b>Contribution: </b>${req.body.contribution} <br>
            <hr>
            <h3>Your Pizza Cook Party:</h3>
            <b>Local: </b>${address} <br>
            <b>Time: </b>${time} <br>
            <b>Comment: </b>${commentAddress} <br><br>
    
            <b>Pizza's name: </b> ${nameRecipe} <br>
            <b>Ingredients: </b> ${ingredients} <br>
            <b>Prepare mode: </b> ${prep} <br>
            <hr><br>
        </div>`
    };
    sgMail.send(message)
    .then(response => console.log('email sent...'))
    .catch(error => console.log(error.message))

    const message2 = { // email for the guest
        to: req.body.email,
        from:{
            name: 'Pizza Cook Party',
            email: 'pizzacookparty@gmail.com',
        },
        subject: `${req.oidc.user.name} invited you to a Pizza Cook Party!!🍕`,
        text:'Pizza Cook Party',
        html:`<br>
        <div style="text-align: center;box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.226); width: 70%;margin: auto;">
            <div style="overflow: hidden;height: 150px;">
                <img style="width: 100%;" src="https://media.gazetadopovo.com.br/2021/07/09163516/receita-massa-pizza-bigstock-960x540.jpg"
                    alt="">
            </div>
            <h3>🍕  ${req.oidc.user.name} invited you to a Pizza Cook Party!  🍕</h3><hr>
            <b>Local: </b>${address} <br>
            <b>Time: </b>${time} <br>
            <b>Pizza's name: </b> ${nameRecipe} <br>
            <b>Your contributin: </b> ${req.body.contribution} <br>
            <br>
            ${req.body.comment}
            <br><hr><br>
            <i>What is a Pizza Cook Party?</i><br>
            <p>A pizza cooking Party is simply a meeting of friends or family to make a pizza <br> and eat it together,
            every guest also have to bring a contributin to the pizza recipe, it can be <br> a ingredient or a tool wich is decided by the host of the party.</p>
            <br>
            <a href="${req.oidc.user.email}">Email Contact</a>
            <br><br>
        </div>`
    };
    sgMail.send(message2)
    .then(response => console.log('email sent...'))
    .catch(error => console.log(error.message))
    res.marko(require('./views/home.marko'));
});

const API_KEY = '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';

sgMail.setApiKey(API_KEY)

const port = process.env.PORT || 3000;
app.listen(port,() => {
    console.log(`listening on port ${port}`);
});
