const mongoose =  require('mongoose');

process.env.MONGODB_URI

console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));