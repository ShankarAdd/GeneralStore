const General = require('../model/general');

exports.getGeneral =(req,res,next) =>{
    General.findAll()
    .then(result =>{
        res.json(result);
    })
    .catch(err =>{
        console.log(err);
    })
}
exports.postGen = (req,res,next) =>{
    const {itemName , description, price, quantity} = req.body;
    General.create({
        itemName:itemName,
        description:description,
        price:price,
        quantity:quantity
    })
    .then(result =>{
        res.json(result);
    })
    .catch(err => console.log(err));
}
exports.deleteGen = (req,res,next) =>{
    const id = req.params.id;
    General.destroy({where: {id:id}})
    .then(deleteresult =>{
        res.json(deleteresult);
    })
    .catch(err => console.log(err));
}