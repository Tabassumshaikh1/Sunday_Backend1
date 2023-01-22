const {ACTIVE,INACTIVE,BLOCK}= require("../constants")
const mangoose = require("mongoose");
const { array } = require("joi");
const Module= new mangoose.Schema({
     name:{
                type:String,
                required:true,
    },
    role: {
        type: Array,
        
    },
            submodule:{
                type:Object
            },
            status:{
                type: String,
                enum:[ACTIVE, INACTIVE],
                default:ACTIVE
            },
            CreatedAt:{
                type:Date,
                default:Date.now
            }

});
module.exports = mangoose.model("module",Module );