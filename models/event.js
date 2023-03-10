const mongoose=require('mongoose');
const validator=require('validator');

const eventSchema=mongoose.Schema({
    eventName:{
        type:String,
        required:[true,"Please enter the Event name"],
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        // required: true
    },
    eventDescription:{
        type:String,  
    },
    eventCategory:{
        type: String,
        required:[true,"Please select the Event Category"],
    },
    eventType:{
        type:String,  
    },
    eventLocation:{
        type:String,  
        required:[true,"Please enter the Event location"],
    },
    startDateTime:{
        type: Date,
        required:[true,"Please specify the date and time where the event will start"],
    },
    endDateTime:{
        type: Date,
        required:[true,"Please specify the date and time where the event will end"],
    },
    imageUrl:{
        type: String
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
    })
 
    module.exports=mongoose.model('Event',eventSchema);