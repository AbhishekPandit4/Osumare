const mongoose=require("mongoose");

const taskSchema=new mongoose.Schema({
    task:{
        type:String,
        require:true
    },
    disruption:{
        type:String,
        require:true
    }
})

const taskModel=mongoose.model("Osumare_Data",taskSchema)

module.exports=taskModel