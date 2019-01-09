const express = require('express');
const router = express.Router();

//item models
const Item = require('../../models/item');
//@route GET api/items
//@desc Get all items
//@access Public

router.get('/', (req, res) =>{
    Item.find()
    .sort({date: -1})
    .then(items => res.json(items))
});

router.post('/', (req, res) =>{
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});

router
    .delete('/:id', (req, res) => {
        item.findById(req.params.id).then(item =>
           item.remove().then(() => res.json({success: "deleted"})) 
            ).catch(err => res.status(404).json({ success: "didn't delete"}));
    })
    
module.exports = router;