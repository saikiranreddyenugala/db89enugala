var express = require('express');
const university_controlers= require('../controllers/University');
// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}
var router = express.Router();
/* GET universitys */
router.get('/', university_controlers.university_view_all_Page );

/* GET detail university page */
router.get('/detail', university_controlers.university_view_one_Page);

/* GET create university page */
router.get('/create', university_controlers.university_create_Page);

/* GET create update page */
router.get('/update',secured, university_controlers.university_update_Page);

/* GET create costume page */
router.get('/delete', university_controlers.university_delete_Page);

module.exports = router;