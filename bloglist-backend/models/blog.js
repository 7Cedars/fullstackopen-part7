const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true},
    author: {
      type: String,
      required: true},
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'},
    url: {
      type: String, // (was string) should be URL - but have to clean database before I can do this.. 
    },
    likes: Number
  })

blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Blog', blogSchema)