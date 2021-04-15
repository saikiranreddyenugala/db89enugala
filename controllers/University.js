var University = require('../models/University');
// List of all universitys
// List of all universitys
exports.university_list = async function (req, res) {
    try {
        theuniversitys = await University.find();
        res.send(theuniversitys);
    }
    catch (err) {
        res.send(`{"error": ${err}}`);
        res.status(500);
    }
}
    //for a specific Costume.
        exports.university_detail = async function (req, res) {
            console.log("detail" + req.params.id)
            try {
                result = await University.findById(req.params.id)
                res.send(result)
            }
            catch (error) {
                res.status(500)
                res.send(`{"error": document for id ${req.params.id} not found`);
            }
        };
// Handle university create on POST.
exports.university_create_post = async function (req, res) {
    console.log(req.body)
    let document = new University();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"universitytype":"goat", "cost":12, "size":"large"}
    document.universityname = req.body.universityname;
    document.degree = req.body.degree;
    document.fee = req.body.fee;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.error(500, `{"error": ${err}}`);
    }
};
// Handle university delete form on DELETE.
exports.university_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: university delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.university_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await University.findById( req.params.id)
        // Do updates of properties
        if(req.body.universityname) toUpdate.universityname = req.body.universityname;
        if(req.body.degree) toUpdate.degree = req.body.degree;
        if(req.body.fee) toUpdate.fee = req.body.fee;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};

// VIEWS
// Handle a show all view
exports.university_view_all_Page = async function (req, res) {
    try {
        theuniversitys = await University.find();
        res.render('University', { title: 'university Search Results', results: theuniversitys });
    }
    catch (err) {
        res.send(`{"error": ${err}}`);
        res.status(500);
    }
};

// Handle Costume delete on DELETE.
exports.university_delete = async function(req, res) {
    console.log("delete "  + req.params.id)
    try {
        result = await University.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};



// Handle a show one view with id specified by query
exports.university_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await University.findById( req.query.id)
        res.render('universitydetail', 
{ title: 'university Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.university_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('universitycreate', { title: 'university Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a costume.
// query provides the id
exports.university_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await University.findById(req.query.id)
        res.render('universityupdate', { title: 'university Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.university_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await University.findById(req.query.id)
        res.render('universitydelete', { title: 'University Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};




