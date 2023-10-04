const express = require('express');
const router = express.Router();

const artist_controller = require("../controllers/artistController");
const album_controller = require("../controllers/albumController");
const genre_controller = require("../controllers/genreController");

router.get('/', artist_controller.index);
router.get('/artists', artist_controller.artist_list);
router.get('/artist/create', artist_controller.artist_create_get);
router.post('/artist/create', artist_controller.artist_create_post);
router.get('/artist/:id', artist_controller.artist_detail);
router.get('/artist/:id/delete', artist_controller.artist_delete_get);
router.post('/artist/:id/delete', artist_controller.artist_delete_post);
router.get('/artist/:id/update', artist_controller.artist_update_get);
router.post('/artist/:id/update', artist_controller.artist_update_post);



module.exports = router;
