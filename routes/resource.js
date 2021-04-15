var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var university_controller = require('../controllers/University');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// university ROUTES ///
// POST request for creating a university.
router.post('/resource/universitys', university_controller.university_create_post);
// DELETE request to delete university.
router.delete('/resource/universitys/:id', university_controller.university_delete);
// PUT request to update university.
router.put('/resource/universitys/:id', university_controller.university_update_put);
// GET request for one university.
router.get('/resource/universitys/:id', university_controller.university_detail);
// GET request for list of all university items.
router.get('/resource/universitys', university_controller.university_list);
module.exports = router;