const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://vinekmaurya2329:vinek7068594746@cluster0.5iwx2uw.mongodb.net/quantum')
.then(()=>{
 console.log('database is now connected successfully');
}).catch(()=>{
console.log('error while connecting database ');
})

module.exports = mongoose