let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



let cowinSessions= async function(req,res){

   try{
     let id = req.query.district_id
    let date= req.query.date
    const options= {
        method:"get",
        url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`
    }
    let result = await axios(options)
    res.status(200).send({msg:result.data})

}
catch(error){
    res.status(500).send({msg:error.message})

}
}



let temp= [
    {city:"London",temp:284},
    {city:"Bengaluru",temp:293},
    {city:"Mumbai",temp:294},
    {city:"delhi",temp:294},
    {city:"Kolkata",temp:297},
    {city:"Chennai",temp:299},
    {city:"Moscow",temp:278}
]

let ascended= temp.sort((a,b)=>Number(a.temp) - Number(b.temp))


let weatherDetails = async function(req,res){

    
   try{ let country= req.query.q
    let appId= req.query.appid
    console.log(temp)
    

    const options= {
        method:"get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${appId}`
    }

    let result= await axios(options)
    let temperature= result.data.main.temp



    res.status(200).send({msg:ascended})
}
catch(error){
    res.status(500).send({msg:error.message})
}
}

let createMemes= async function(req,res){

    try{
      let template_id= req.query.template_id
     let text0= req.query.text0
     let text1= req.query.text1
     let username= req.query.username
     let password= req.query.password
     const options= {
         method:"post",
         url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
     }
     let result = await axios(options)
     res.status(200).send({msg:result.data})
 
 }
 catch(error){
     res.status(500).send({msg:error.message})
 
 }
 }



module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.cowinSessions= cowinSessions
module.exports.weatherDetails=weatherDetails
module.exports.createMemes=createMemes