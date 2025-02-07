import mongoose, { Schema, model } from "mongoose";

const produtSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
   
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'category',
        required: true
    },
    buyDate: {
        type: Date,
        required: true
    },
    ram:{
        type: String,
        
    },
    rom:{
        type: String,
     
    },
    gen:{
        type: String,
       
    },
    serialNo:{
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isDelete: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const productModel = mongoose.model("products", produtSchema)

export default productModel