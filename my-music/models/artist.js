const mongoose = require("mongoose");

const { DateTime } = require("luxon");

const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
    birth_name: { type: String, required: true },
    professional_name: { type: String, required: true },
    
    date_of_birth: { type: Date, required: true },
    date_of_death: { type: Date },
    place_of_birth: { type: String },
    
    occupations: [{ type: String }],
    genres: [{ type: Schema.Types.ObjectId, ref: "Genre" }],

});

ArtistSchema.virtual("url").get(function () {
    // We don't use an arrow function as we'll need the this object
    return `/catalog/artist/${this._id}`;
});

ArtistSchema.virtual("date_of_birth_formatted").get(function () {
    return this.date_of_birth ?
        DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED) : '';
});

ArtistSchema.virtual("date_of_death_formatted").get(function () {
    return this.date_of_death ?
        DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATE_MED) : '';
});

module.exports = mongoose.model("Artist", ArtistSchema);