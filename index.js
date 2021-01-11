const  express = require('express')
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/database")

// view engine
app.set('view engine', 'ejs')

//statics
app.use(express.static('public'))

//body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Database
connection
    .authenticate()
    .then(() => {
        console.log("Ok!! Conexão feita com sucesso!")
    }).catch((error) => {
        console.log(error)
    })


app.get("/", (req, res) => {
    res.render("index")
})

app.listen(8080, () => {
    console.log("O servidor ta rodando ein!!! e roda normal!")
})