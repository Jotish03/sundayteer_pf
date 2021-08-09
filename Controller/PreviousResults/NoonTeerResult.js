    const NoonTeerResult = require('../../Model/PreviousResult/NoonTeerResult')
    const getNoonTeerResult = async (req, res) => {

        try {

            const noonteerresult = await NoonTeerResult.find()
            res.render("PreviewsResult/NoonTeerResult/ShowTeerResult", {
                noonteerresult
            })
        } catch (error) {
           req.flash(
               'error_msg',
               error.message
           );
           res.redirect("/")
            
        }
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