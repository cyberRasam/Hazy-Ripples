const mongoose = require('mongoose');

/**
 * @swagger
 * components:
 *   schemas:
 *     Event:
 *       type: object
 *       required:
 *         - title
 *         - organizer
 *         - description
 *         - start_date
 *         - end_date
 *       properties:
 *         title:
 *           type: string
 *         organizer:
 *           type: string
 *           description: ID of the organization organizing the event.
 *         description:
 *           type: string
 *         location:
 *           type: string
 *         start_date:
 *           type: string
 *           format: date-time
 *         end_date:
 *           type: string
 *           format: date-time
 *         created_at:
 *           type: string
 *           format: date-time
 *         image:
 *           type: string
 *         is_published:
 *           type: boolean
 *         attendees:
 *           type: array
 *           items:
 *             type: string
 *           description: Array of user IDs who are attending the event.
 *         donations:
 *           type: array
 *           items:
 *             type: string
 *           description: Array of donation IDs associated with the event.
 *       example:
 *         title: Sample Event
 *         organizer: 611f4e51d9877f001e90d5a1
 *         description: This is a sample event.
 *         location: Sample Location
 *         start_date: "2023-07-24T12:00:00Z"
 *         end_date: "2023-07-25T18:00:00Z"
 *         created_at: "2023-07-24T10:00:00Z"
 *         image: https://example.com/event.jpg
 *         is_published: true
 *         attendees: []
 *         donations: []
 */

const eventSchema = mongoose.Schema({
    title : {
        type: String,
        required: true,
    },
    organizer: {
        type: String,
        required:true,
        ref: 'Organization',
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
    },
    start_date: {
        type: Date,
        required: true,
    },
    end_date: {
        type: Date,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    image: {
        type: String,
    },
    is_published: {
        type: Boolean,
        default: false,
    },
    attendees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    donations: [{type: mongoose.Schema.Types.ObjectId, ref: 'Donation'}]
})


module.exports = mongoose.model('Event', eventSchema);