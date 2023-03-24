const express = require("express");
const router = express.Router();
const eventController = require('../controllers/events-controllers');

router.get("/events", eventController.getAllEvents);
router.get("/events/:id", eventController.getEventById);
router.post("/events", eventController.addEvents);
router.delete("/events/:id", eventController.deleteEvent);
router.put("/events/:id", eventController.updateEvent);

module.exports = router;