const express = require('express');
const router = express.Router();
const queries = require('../db/queries')

router.get('/',(req,res)=>{
    const {title} = req.query;
    queries.getAll({title})
    .then((products)=>{ 
        res.json(products)
    }).catch((err)=>{
        res.json({error: err})
    })
})
router.get('/:id',(req,res)=>{
    queries.getOne(req.params.id)
    .then((data)=>{
        res.json({data})
    }).catch((err)=>{
        res.json({error:err})
    })
})

router.post('/',(req,res)=>{
    // authentication logic
    queries.create(req.body)
    .then((data)=>{
        res.json([data[0]])
    }).catch((err)=>{
        res.json({error: err})
    })
})
router.put('/:id',(req,res)=>{
    queries.update(req.params.id, req.body)
    .then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.json({error:err})
    })
})
router.delete('/:id',(req,res)=>{
    queries.delete(req.params.id)
    .then(()=>{
        res.json({
            deleted:true
        })
    }).catch((err)=>{
        res.json({
            error:err
        })
    })
})

module.exports = router;