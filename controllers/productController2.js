const Product2 = require('../models/products2')

exports.index = async (req, res, next) =>{
    const product2 = await Product2.find().sort({_id:-1})

    res.status(200).json({
        data: product2
    })
}

exports.insert = async (req, res, next) =>{

    const { value } = req.body

    let product = new Product2({
        value: value
    });
    
    await product.save();

    res.status(200).json({
        message: 'the data has be save!'   
    })
}
