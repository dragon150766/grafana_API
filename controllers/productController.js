const Product = require('../models/product')

exports.index = async (req, res, next) =>{
    const product = await Product.find().sort({_id:-1})

    res.status(200).json({
        data: product
    })
}

exports.insert = async (req, res, next) =>{

    const { value } = req.body

    let product = new Product({
        value: value
    });
    
    await product.save();

    res.status(200).json({
        message: 'the data has be save!'   
    })
}

exports.delete = async(req,res, next) =>{
    const product = await Product.findOneAndDelete().sort({_id:1})

    if(product.deleteCount === 0){
        throw new Error('no one delete')
    }else{
        res.status(200).json({
            message: "delete sussced"
        })
    }
}

