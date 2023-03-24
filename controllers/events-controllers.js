const Events = require('../models/schema');

const getAllEvents = async (req, res, next) => {
    let events;
    try{
        events = await Events.find();
        return res.status(200).json({
            status: "All Events are here",
            events
        })
    }catch(err) {
        return res.status(500).json({
            status: "Event not found!",
            message: err.message
        })
    }
}

const getEventById = async (req, res, next) => {
    let events;
    try{
        events = await Events.findOne({_id: req.params.id});
        return res.status(200).json({
            status: "successfully get a specific event",
            events
        })
    }catch(err) {
        return res.status(500).json({
            status: "There is not event with this id",
            message: err.message
        })
    }
}

const addEvents = async (req, res, next) => {
    let events;
    console.log(req.body);
    try{
        events = await Events.create({
            title: req.body.title,
            description: req.body.description,
            location: req.body.location,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
        })
        return res.status(200).json({
            status: "successfully create Events",
            events
        })
    }catch(err) {
        return res.status(500).json({
            status: "Not able to create Event",
            message: err.message
        })
    }
}

const deleteEvent = async (req, res, next) => {
    let events ;
    try{
        events = await Events.deleteOne({_id: req.params.id});
        return res.status(200).json({
            status:"successfully deleted",
            events
        })
    }catch(err) {
        return res.status(500).json({
            status: "id dont exist",
            message: err.message
        })
    }
}

const updateEvent = async (req, res, next) => {
    let events;
    try{
        events = await Events.updateOne({_id: req.params.id},req.body);
        return res.status(200).json({
            status: "successfully update events",
            events
        })
    }catch(err) {
        return res.status(500).json({
            error: "there is no event speicific id"
        })
    }
}

exports.getAllEvents = getAllEvents;
exports.addEvents = addEvents;
exports.getEventById = getEventById;
exports.deleteEvent = deleteEvent;
exports.updateEvent = updateEvent;