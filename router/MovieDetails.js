const express = require('express')
const router=express.Router();
const db=require('../models/MovieDetails')


router.get('/',async(req,res)=>{
    try{
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const count = await db.countDocuments();
        const skip = (page - 1) * limit;
        const data = await db.find().skip(skip).limit(limit);
          //const data=await db.find()
          res.json({
            data,
            totalMovies: count,
            currentPage: page,
            totalPages: Math.ceil(count / limit)
          })
    }
    catch(err){
        res.send('err '+err)
    }
   
});


router.get('/:id',async(req,res)=>{
    try{
          const data=await db.findById(req.params.id)
          res.json(data)
    }
    catch(err){
        res.send('err '+err)
    }
   
});


router.post('/',async(req,res)=>{
    const sendL=new db({
        Movie_name:req.body.Movie_name,
        Movie_Dir: req.body.Movie_Dir,
        Movie_year:req.body.Movie_year,
        Movie_rating:req.body.Movie_rating,
        Movie_watch:req.body.Movie_watch
        
    });
    try{
        const save=await sendL.save()
        res.json(save)
        
    }
    catch(err){
        res.send("Error happened & Database yet to get Update "+err)
    }
  
});


router.put('/:id',async(req,res)=>{
    try{
          
        const { id } = req.params;
    const { fieldToUpdate, value } = req.body;

    const updatedData = await db.findOneAndUpdate(
      { _id: id },
      { $set: { [fieldToUpdate]: value } },
      { new: true }
    );

    res.json(updatedData);
    }
    catch(err){
        res.send('err '+err)
    }
   
});


router.delete('/:id', async (req, res) => 
{
        try 
        {
          const data = await db.findByIdAndRemove(req.params.id);
          res.json(data);
        } 
        catch (err) 
        {
          res.send('err ' + err);
        }
      }
      );
   




module.exports = router


