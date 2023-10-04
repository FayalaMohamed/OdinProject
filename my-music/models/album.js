const mongoose = require("mongoose");

const { DateTime } = require("luxon");

const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
    name: {type: String, required: true},
    type: { type: String, required: true, maxLength: 100 },
    sales: { type: Number, min: 0, default: 0},
    release_day: { type: Date, default: Date.now() },
    artists: [{type: Schema.Types.ObjectId, ref: "Artist"}],
});

AlbumSchema.virtual("url").get(function () {
    // We don't use an arrow function as we'll need the this object
    return `/catalog/album/${this._id}`;
});

AlbumSchema.virtual("release_day_formatted").get(function () {
    return this.release_day ?
        DateTime.fromJSDate(this.release_day).toLocaleString(DateTime.DATE_MED) : '';
});

module.exports = mongoose.model("Album", AlbumSchema);