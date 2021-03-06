const mongoose = require("mongoose");


const Place = mongoose.model("Place", new mongoose.Schema({
    
    title: {type: String, required: true},
    description: {type: String, required: true},
    address: {type: String, required: true},
    image: {type: String, required: true},
    location: {
        lat: {type: Number, required: true},
        lng: {type: Number, required: true}
    },
    creator_id: {type: mongoose.Types.ObjectId, required: true, ref: 'User'}

}));


exports.Place = Place;