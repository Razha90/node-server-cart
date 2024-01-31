require('dotenv').config();
const express = require('express');
const app = express()
const PORT = process.env.PORT || 8000;
const path = require('path')
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/img', express.static(path.join(__dirname, './public/img')))

const db = require('./app/models/index')
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user: process.env.MONGODB_ADDON_USER,
    pass: process.env.MONGODB_ADDON_PASSWORD,
    dbName: process.env.MONGODB_ADDON_DB,
  })
    .then(() => {
        console.log("Connected to the database");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome To Server Cart'
    })
})

require('./app/routes/product.route')(app);
require('./app/routes/order.route')(app);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})