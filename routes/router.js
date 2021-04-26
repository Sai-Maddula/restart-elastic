const express = require('express')
const http = require('http')
const childProcess = require("child_process")
const router = express.Router()

router.get("/",(req,res,next)=>{
    res.send({message:"Working"})
    next()
})

router.get("/start",(req,res,next)=>{
    let options = {
        hostname:"localhost",
        port:9200,
        method:"GET"
    }
    const request = http.get(options,resp=>{
        resp.on('data',(d)=>{
            console.log(d.toString())
            res.send(d.toString())
        })
    })
    request.on("error",(err)=>{
        res.send("Starting the elastic search service")
        const startElastic = childProcess.spawn('cmd.exe',['/c','F:/Software Backup/elasticsearch-7.12.0/bin/elasticsearch.bat'],{detached:true,stdio:"ignore"})
        
    })
    request.end()
})

module.exports = router