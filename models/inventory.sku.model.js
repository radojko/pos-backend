"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let InventorySKUSchema = new Schema({
	uid: {
		type: Schema.Types.ObjectId, 
		ref: "ssouser",
		index: true,
		required: "User ID is required",
	},
	skuCode: {
		type: String,
		trim: true,
		unique : true,
		index: true,
		required: "SKU Code is required"
	},
	name: {
		type: String,
		index: true
	},
}, {
	timestamps: true
});



module.exports = mongoose.model("InventorySKU", InventorySKUSchema);