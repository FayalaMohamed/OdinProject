const mongoose = require("mongoose");

const { DateTime } = require("luxon");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
    name: { type: String, required: true, maxLength: 100 },
    origin: { type: String },
    description: { type: String },
    sub_genres: [{ type: Schema.Types.ObjectId, ref: "Genre" }],

});

GenreSchema.virtual("url").get(function () {
    // We don't use an arrow function as we'll need the this object
    return `/catalog/genre/${this._id}`;
});

module.exports = mongoose.model("Genre", GenreSchema);