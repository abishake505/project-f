const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "foods"]
        },

        quantity:{
            type: Number,
            required: true,
            default: 0
        },

        price:{
             type: Number,
            required: true,
            default: 0
        },

        Image:{
            type: String,
            required: false
        },

        category:{
            type: String,
            required: false,
            default: 0
        },

        description:{
            type: String,
            required: false,
            default: 0
        }
    },
    {
        timestamps: true,
    }


);


const Product = mongoose.model("product", productSchema);

module.exports = Product;