const Product = require('../models/product')

exports.index = async (req, res, next) =>{
    const product = await Product.find().sort({_id:-1})

    res.status(200).json({
        data: product
    })
}

exports.insert = async (req, res, next) =>{

    const { factory,value } = req.body

    let product = new Product({
        factory: factory,
        value: value
    });
    
    await product.save();

    res.status(200).json({
        message: 'the data has be save!'   
    })
}
