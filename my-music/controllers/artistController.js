const Artist = require("../models/artist");
const Album = require("../models/album")
const Genre = require("../models/genre")

const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.index = asyncHandler(async (req, res, next) => {
    const [
        nbArtists,
        nbAlbums,
        nbGenres,
    ] = await Promise.all([
        Artist.countDocuments({}).exec(),
        Album.countDocuments({}).exec(),
        Genre.countDocuments({}).exec(),
    ])

    res.render('index', {
        title: "the music library",
        nb_artists: nbArtists,
        nb_albums: nbAlbums,
        nb_genres : nbGenres,
    })
});

exports.artist_list = asyncHandler(async (req, res, next) => {
    const artists = await Artist.find({}, "professional_name birth_name")
        .sort({ professional_name: 1 })
        .exec();

    res.render('artist_list', {
        title: "Artist list",
        artist_list: artists,
    })
});

exports.artist_detail = asyncHandler(async (req, res, next) => {
    const [artist, artistAlbums] = await Promise.all([
        Artist.findById(req.params.id).populate("genres").exec(),
        Album.find({ artists: { $in: req.params.id } }).sort({ name: 1 }).exec(),
    ])

    if (artist === null) {
        // No results.
        const err = new Error("Artist not found");
        err.status = 404;
        return next(err);
    }

    res.render('artist-detail', {
        title: artist.professional_name,
        artist: artist,
        artist_albums: artistAlbums,
    })
});

exports.artist_create_get = asyncHandler(async (req, res, next) => {
    const allGenres = await Genre.find({}).exec();

    res.render('artist_form', {
        title: "Create artist",
        genres: allGenres,
    })
});

exports.artist_create_post = [
    (req, res, next) => {
        if (!(req.body.genres instanceof Array)) {
            if (typeof req.body.genres === "undefined") req.body.genres = [];
            else req.body.genres = new Array(req.body.genres);
        }
        next();
    },

    (req, rep, next) => {
        if (typeof req.body.occupations === 'string') {
            req.body.occupations = req.body.occupations.split('\n').map((occupation) => occupation.trim());
        } else if (!(req.body.occupations instanceof Array)) {
            req.body.occupations = [];
        }
        next();
    },

    body("birth_name")
        .trim()
        .isLength({ min: 1 })
        .escape()
        .withMessage("Birth name must not be empty"),
    body("professional_name", "Professional name must not be empty")
        .trim()
        .isLength({ min: 1 })
        .escape(),
    body("date_of_birth", "Invalid date of birth")
        .optional({ checkFalsy: true })
        .isISO8601()
        .toDate(),
    body("date_of_death", "Invalid date of death")
        .optional({ checkFalsy: true })
        .isISO8601()
        .toDate(),
    body("place_of_birth")
        .trim()
        .escape(),
    body("genres.*").escape(),
    body("occupations.*").escape(),

    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);

        const artist = new Artist({
            birth_name: req.body.birth_name,
            professional_name: req.body.professional_name,
            date_of_birth: req.body.date_of_birth,
            date_of_death: req.body.date_of_death,
            place_of_birth: req.body.place_of_birth,
            occupations: req.body.occupations,
            genres: req.body.genres,
        });

        if (!errors.isEmpty()) {
            const allGenres = await Genre.find({}).exec();

            for (const genre of allGenres) {
                if (artist.genres.indexOf(genre._id) > -1) {
                    genre.checked = "true";
                }
            }

            res.render('artist_form', {
                title: "Create artist",
                genres: allGenres,
                artist: artist,
                errors: errors.array(),
            })
        }
        else {
            await artist.save();
            res.redirect(artist.url);
        }
    })
]

exports.artist_delete_get = asyncHandler(async (req, res, next) => {
    const artists = await Artist.find({}, "professional_name birth_name")
        .sort({ professional_name: 1 })
        .exec();

    res.render('artist_list', {
        title: "Artist list",
        artist_list: artists,
    })
});
exports.artist_delete_post = asyncHandler(async (req, res, next) => {
    const artists = await Artist.find({}, "professional_name birth_name")
        .sort({ professional_name: 1 })
        .exec();

    res.render('artist_list', {
        title: "Artist list",
        artist_list: artists,
    })
});
exports.artist_update_get = asyncHandler(async (req, res, next) => {
    const artists = await Artist.find({}, "professional_name birth_name")
        .sort({ professional_name: 1 })
        .exec();

    res.render('artist_list', {
        title: "Artist list",
        artist_list: artists,
    })
});
exports.artist_update_post = asyncHandler(async (req, res, next) => {
    const artists = await Artist.find({}, "professional_name birth_name")
        .sort({ professional_name: 1 })
        .exec();

    res.render('artist_list', {
        title: "Artist list",
        artist_list: artists,
    })
});