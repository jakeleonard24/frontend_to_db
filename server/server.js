require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
, cors = require('cors')

const app = express();
app.use(cors())

massive(process.env.CONNECTION_STRING)
.then( db => {
    app.set('db', db)
})

const db = app.get('db');


app.get('/api/add', (req, res) => {
    req.app.get('db').get_names().then((names) => {
       res.send(names)
       console.log(names)
        
    }).catch(err => console.log(err))
})

const port = 3336;

app.listen(port, () => console.log(`port port port port port ${port}`));