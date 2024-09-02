var express = require('express');
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://thebotcmd:Sachin123@100xdevs.ms0ex.mongodb.net/codekaro")

const userSchema = mongoose.Schema({
  email: String,
  password: String
})

module.exports = mongoose.model("users", userSchema )
