    const NoonTeerResult = require('../../Model/PreviousResult/NoonTeerResult')
    const getNoonTeerResult =  (req, res) => {
        NoonTeerResult.find({}).sort([['date', -1]]).exec(function(err, noonteerresult){ 
            if(err){
                req.flash(
                            'error_msg',
                            err.message
                        );
                        res.redirect("/")
            }
               res.render("PreviewsResult/NoonTeerResult/ShowTeerResult", {
                noonteerresult
            })
        });
    
    }

    const addNoonTeerResult = async (req, res) => {

        try {
            res.render("PreviewsResult/NoonTeerResult/AddTeerResult")
        } catch (error) {
           req.flash(
               'error_msg',
               error.message
           );
           res.redirect("/")
        }
    }


    
    const createNoonTeerResult = async (req, res) => {

        try {
            await NoonTeerResult.create(req.body.noonteerresult)
             req.flash(
                 'success_msg',
                 'created successfully'
             );
            res.redirect("/previousnoonteerresult")
           
        } catch (error) {
           req.flash(
               'error_msg',
               error.message
           );
           res.redirect("/")
        }
    }

    const deleteNoonTeerResult = async (req, res) => {

        try {
            const foundnoonteerresult = await NoonTeerResult.findById(req.params.noonteerresult_id)
            if (!foundnoonteerresult) {
                 req.flash(
                     'success_msg',
                     '  Not Found'
                 );
                 res.redirect("/")
            }
            req.flash(
                'success_msg',
                ' delete successfully'
            );
            foundnoonteerresult.deleteOne()
            res.redirect("back")
        } catch (error) {
            req.flash(
                'error_msg',
                error.message
            );
            res.redirect("/")

        }
    }

    // //exporting
    module.exports = {
        getNoonTeerResult,
        addNoonTeerResult,
        createNoonTeerResult,
        deleteNoonTeerResult
    }