const Product2 = require('../models/products2')

exports.index = async (req, res, next) =>{
    const product2 = await Product2.find().sort({_id:-1})

    res.status(200).json({
        data: product2
    })
}

exports.insert = async (req, res, next) =>{

    const { value } = req.body

    let product2 = new Product2({
        value: value
    });
    
    await product2.save();

    res.status(200).json({
        message: 'the data has be save!'   
    })
}


exports.delete = async(req,res, next) =>{
    const product2 = await Product2.findOneAndDelete().sort({_id:1})

    if(product2.deleteCount === 0){
        throw new Error('no one delete')
    }else{
        res.status(200).json({
            message: "delete sussced"
        })
    }
}
