const Product3 = require('../models/products3')

exports.index = async (req, res, next) =>{
    const product3 = await Product3.find().sort({_id:-1})

    res.status(200).json({
        data: product3
    })
}

exports.insert = async (req, res, next) =>{

    const { value } = req.body

    let product3 = new Product3({
        value: value
    });
    
    await product3.save();

    res.status(200).json({
        message: 'the data has be save!'   
    })
}


exports.delete = async(req,res, next) =>{
    const product3 = await Product3.findOneAndDelete().sort({_id:1})

    if(product3.deleteCount === 0){
        throw new Error('no one delete')
    }else{
        res.status(200).json({
            message: "delete sussced"
        })
    }
}
