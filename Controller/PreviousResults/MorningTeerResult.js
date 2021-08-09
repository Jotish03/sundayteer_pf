    const MorningTeerResult = require('../../Model/PreviousResult/MorningTeerResult')
    const getMorningTeerResult =(req, res) => {
        MorningTeerResult.find({}).sort([['date', -1]]).exec(function(err, morningteerresult){ 
            if(err){
                req.flash(
                    'error_msg',
                    error.message
                );
                res.redirect("/")
            }
               res.render("PreviewsResult/MorningTeerResult/ShowTeerResult", {
                morningteerresult
            })
        });
    }

    const addMorningTeerResult = async (req, res) => {

        try {
            res.render("PreviewsResult/MorningTeerResult/AddTeerResult")
        } catch (error) {
            req.flash(
                'error_msg',
                error.message
            );
            res.redirect("/")
        }
    }


    
    const createMorningTeerResult = async (req, res) => {

        try {
          
            await MorningTeerResult.create(req.body.morningteerresult)
             req.flash(
                 'success_msg',
                 'Add successfully'
             );
            res.redirect("/previousmorningteerresult")
           
        } catch (error) {
           req.flash(
               'error_msg',
               error.message
           );
           res.redirect("/")
        }
    }

    const deleteMorningTeerResult = async (req, res) => {

        try {
            const foundmorningteerresult = await MorningTeerResult.findById(req.params.morningteerresult_id)
            if (!foundmorningteerresult) {
               req.flash(
                   'success_msg',
                   'Day Result  Not Found'
               );
               res.redirect("/")
            }
            foundmorningteerresult.deleteOne()
             req.flash(
                 'success_msg',
                 'delete successfully'
             );
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
        getMorningTeerResult,
         addMorningTeerResult,
         createMorningTeerResult,
         deleteMorningTeerResult
    }