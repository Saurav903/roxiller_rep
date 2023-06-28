const express = require("express");
const { InitializeModel } = require("../models/initialize.model");
const { default: axios } = require("axios");

const initializeRouter = express.Router();

initializeRouter.get("/seed",async(req,res)=>{
    try {
        const response = await axios.get("https://s3.amazonaws.com/roxiler.com/product_transaction.json");

        const data = await response.data;
        await InitializeModel.insertMany(data);
        res.send("Data has been initialized");
    } catch (error) {
        console.log("Failed to seed to database",error);
        res.status(500).send(error)
    }
})

initializeRouter.get("/product",async(req,res)=>{
    try {
        const search = req.query.search || "";
        const price = req.query.price || "";
        let query = {};

        if (search) {
        const regex = new RegExp(search, 'i');
        query = {
            $or: [
            { title: { $regex: regex } },
            { description: { $regex: regex } },
            ],
        };
        }
        if(price){
            query.price = {$gte:price};
        }

        const page = parseInt(req.query.page) || 1;
        const per = parseInt(req.query.per) || 10;

        const datas = await InitializeModel.find(query).skip((page-1)*per).limit(per);
        const datas2 = await InitializeModel.find(query);
        res.status(200).json({initialData:datas,totallength:datas2.length});
        
    } catch (error) {
        res.send("Data is not fetched");
    }
})

// get statistics

initializeRouter.get("/statistics",async(req,res)=>{
    try {
        const months = parseInt(req.query.months);

        const stat = await InitializeModel.find({
            $expr:{
                $eq:[{$month:{$toDate:'$dateOfSale'}},months],
            },
            sold:true
        });
        const stats = await InitializeModel.find({
            $expr:{
                $eq:[{$month:{$toDate:'$dateOfSale'}},months],
            },
            sold:false
        });

        let obj={};
        const barchart = await InitializeModel.find({
            $expr:{
                $eq:[{$month:{$toDate:'$dateOfSale'}},months],
            }
        })

        let mapbar = barchart.map((el)=>{
            if(el.price <=100){
                obj["0-100"] = (obj["0-100"] || 0)+1;
            }
            if(el.price>=101 && el.price<=200){
                obj["101-200"] = (obj["101-200"] || 0)+1;
            }
            if(el.price>=201 && el.price<=300){
                obj["201-300"] = (obj["201-300"] || 0)+1;
            }
            if(el.price>=301 && el.price<=400){
                obj["301-400"] = (obj["301-400"] || 0)+1;
            }
            if(el.price>=401 && el.price<=500){
                obj["401-500"] = (obj["401-500"] || 0)+1;
            }
            if(el.price>=501 && el.price<=600){
                obj["501-600"] = (obj["501-600"] || 0)+1;
            }
            if(el.price>=601 && el.price<=700){
                obj["601-700"] = (obj["601-700"] || 0)+1;
            }
            if(el.price>=701 && el.price<=800){
                obj["701-800"] = (obj["701-800"] || 0)+1;
            }
            if(el.price>=801 && el.price<=900){
                obj["801-900"] = (obj["801-900"] || 0)+1;
            }
            if(el.price>=901){
                obj["901-above"] = (obj["901-above"] || 0)+1;
            }
        })

        let soldReducerTotal = stat.reduce((acc,curr)=>acc + curr.price,0);

        res.status(200).json({total:soldReducerTotal,data1:stat,data2:stats,barchart:obj});
    } catch (error) {
        res.send("statistics not found");
    }
})


module.exports={
    initializeRouter
}