#! /usr/bin/env node

console.log(
    'This script populates some test genres, artists and albums to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Album = require("./models/album");
const Artist = require("./models/artist");
const Genre = require("./models/genre");

const genres = [];
const artists = [];
const albums = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false); // Prepare for Mongoose 7

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect(mongoDB);
    console.log("Debug: Should be connected?");
    await createGenres();
    await createArtists();
    await createAlbums();
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
}

// We pass the index to the ...Create functions so that, for example,
// genre[0] will always be the Fantasy genre, regardless of the order
// in which the elements of promise.all's argument complete.
async function genreCreate(index, name, origin, description, sub_genres) {
    const genredetail = { name: name, origin: origin, description: description };
    if (sub_genres != false) genredetail.sub_genres = sub_genres;
    const genre = new Genre(genredetail);
    await genre.save();
    genres[index] = genre;
    console.log(`Added genre: ${name}`);
}

async function artistCreate(index, birth_name, professional_name, d_birth, d_death, p_birth, occupations, genres) {
    const artistdetail = {
        birth_name: birth_name,
        professional_name: professional_name,
        date_of_birth: d_birth,
    };
    if (d_death != false) artistdetail.date_of_death = d_death;
    if (p_birth != false) artistdetail.place_of_birth = p_birth;
    if (occupations != false) artistdetail.occupations = occupations;

    if (genres != false) artistdetail.genres = genres;

    const artist = new Artist(artistdetail);

    await artist.save();
    artists[index] = artist;
    console.log(`Added artist: ${professional_name}`);
}

async function albumCreate(index,name, type, sales, release_day, artists) {
    const albumdetail = {
        name: name,
        type: type,
        artists: artists,
        release_day: release_day,
    };

    if (sales != false) albumdetail.sales = sales;

    const album = new Album(albumdetail);
    await album.save();
    albums[index] = album;
    console.log(`Added album: ${name}`);
}

async function createGenres() {
    console.log("Adding genres");
    await Promise.all([
        genreCreate(0, "Blues", "1860s, Deep South, U.S", "lues incorporated spirituals, work songs, field hollers, shouts, chants, and rhymed simple narrative ballads from the African-American culture. The blues form is ubiquitous in jazz, rhythm and blues, and rock and roll, and is characterized by the call-and-response pattern, the blues scale, and specific chord progressions, of which the twelve-bar blues is the most common."),
        genreCreate(1, "Hip hop", "Early 1970s, the Bronx, New York City, U.S.","It was developed as part of hip hop culture, a subculture defined by four key stylistic elements: MCing/rapping, DJing/scratching with turntables, break dancing, and graffiti art."),
        genreCreate(2, "Contemporary R&B", "Late 1970s and early 1980s North America", "The genre features a distinctive record production style and a smooth, lush style of vocal arrangement. Electronic influences are becoming an increasing trend and the use of hip hop or dance-inspired beats are typical, although the roughness and grit inherent in hip hop may be reduced and smoothed out."),
    ]);
}

async function createArtists() {
    console.log("Adding artists");
    await Promise.all([
        artistCreate(0,
            "Abel Makkonen Tesfaye",
            "The Weeknd",
            "1990-02-16",
            false,
            "Toronto, Ontario (Canada)",
            ["Singer", "songwriter", "record producer", "actor", "businessman"],
            [genres[2]]
        ),
        artistCreate(1,
            "Shawn Corey Carter",
            "Jay-Z",
            "1969-12-04",
            false,
            "Brooklyn, New York City, U.S.",
            ["Rapper", "songwriter", "record producer", "entrepreneur", "record executive", "media proprietor"],
            [genres[1]]
        ),
        artistCreate(2,
            "Kanye Omari West",
            "Ye",
            "1977-06-08",
            false,
            "Atlanta, Georgia, U.S.",
            ["Singer", "songwriter", "record producer", "rapper", "fashion designer"],
            [genres[1]]
        ),
        artistCreate(3,
            "Riley B. King",
            "B.B. King",
            "1925-09-16",
            "2015-05-14",
            "Itta Bena (Mississippi, États-Unis)",
            ["Singer", "songwriter", "record producer", "Musician"],
            [genres[0]]
        ),
    ]);
}

async function createAlbums() {
    console.log("Adding albums");
    await Promise.all([
        albumCreate(0,
            "Completely Well",
            "Studio album",
            false,
            "1969-12-05",
            [artists[3]],
        ),
        albumCreate(1,
            "The College Dropout",
            "Studio album",
            4000000,
            "2004-02-10",
            [artists[2]],
        ),
        albumCreate(2,
            "Graduation",
            "Studio album",
            13000000,
            "2007-09-11",
            [artists[2]],
        ),
        albumCreate(3,
            "4:44",
            "Studio album",
            262000,
            "2017-06-30",
            [artists[1]],
        ),
        albumCreate(4,
            "After Hours",
            "Studio album",
            4958942,
            "2020-03-20",
            [artists[0]],
        ),
    ]);
}