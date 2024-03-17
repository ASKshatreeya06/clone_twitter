const express = require('express')
const dotenv = require('dotenv');
const userModel = require('./api/models/user_schema')
const postModel = require('./api/models/post_schema')
const protectRoute = require('./api/middleware/protect')
const userapi = require('./api/routes/user_route')
const bodyParser = require('body-parser');
const app = express();
dotenv.config()
app.use(express.json())
// app.use(userModel)
require('./api/db/db')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/userapi',userapi)





app.listen(process.env.PORT,()=>{
    console.log(`server started on http://localhost:${process.env.PORT}`);
})
