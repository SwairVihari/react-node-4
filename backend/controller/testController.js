const axios = require("axios")
exports.getAllProducts = (req,res)=>{
    res.status(200).json({
        message:"Route is Working fine"
    })
}

exports.printData = async(req,res)=>{

    try{
    console.log(req.body)
    const data = req.body

    const resData = await axios.post("https://www.crmgoaway.online/api/send/lead", data)
    console.log(resData.data)
    res.status(200).json({
        message:resData.data.status
    })
    }
    catch(err){
        res.status(400).json({
            message:false
        })
    }
}