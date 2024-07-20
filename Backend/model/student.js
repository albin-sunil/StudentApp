var mongoose = require('mongoose');

var stuschema = mongoose.Schema({
    s_name:"string",
    s_age:"number",
    s_rollno:"number",
    s_place:"string",
    s_dept:'string',
})
//model creation
var stuModel =mongoose.model("student",stuschema);
module.exports =stuModel;
