const mongoose = require('mongoose');
mongoose.Promise = global.Promise; 

mongoose.connect('mongodb://localhost/validation', {useMongoClient: true});

mongoose.connection.on('error', err => console.error('connection error:', err));
mongoose.connection.once('open', () => console.log('mongodb connected'));

module.exports = mongoose;