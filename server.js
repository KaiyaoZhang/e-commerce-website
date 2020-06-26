const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: './config.env'});
const app = require('./app');
const DB = process.env.DATABASE.replace(
    '<PASSWORD>', 
    process.env.DATABASE_PASSWORD
);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(con => {
    console.log('DB connection successful!');
});

const port = process.env.PORT = 8001 || 3001;

const server = app.listen(port, '127.0.0.1', () => {
    console.log(`App is running on port ${port}`);
});