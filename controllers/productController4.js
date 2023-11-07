const Product4 = require('../models/products4')

exports.index = async (req, res, next) =>{
    const product4 = await Product4.find().sort({_id:-1})

    res.status(200).json({
        data: product4
    })
}

exports.insert = async (req, res, next) =>{

    const { value } = req.body

    let product4 = new Product4({
        value: value
    });
    
    await product4.save();

    res.status(200).json({
        message: 'the data has be save!'   
    })
}
