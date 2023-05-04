const mongoose=require("mongoose")

const MovieDetailsSchema = new mongoose.Schema({

    Movie_name:{
        type : String,
      required: true
    },
    Movie_Dir:{
        type : String ,
      required: true
    },
    Movie_year:{
        type : Number ,
      required: true
    },
    Movie_rating:{
        type : Number ,
      required: true
    },
    Movie_watch:{
        type:Boolean,
      required: true
    }
    
})

module.exports=mongoose.model('db',MovieDetailsSchema)