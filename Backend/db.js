const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODBURI)
.then(()=>{
 console.log('database is now connected successfully');
}).catch(()=>{
console.log('error while connecting database ');
})

module.exports = mongoose